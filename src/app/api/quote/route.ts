import { NextRequest, NextResponse } from "next/server";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { uploadImageToFirebase } from "@/lib/uploadImage";
import twilio from "twilio";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  console.log("endpoint hit");

  try {
    const data = await req.formData();
    const name = data.get("name")?.toString() || "";
    const email = data.get("email")?.toString() || "";
    const message = data.get("message")?.toString() || "";
    const phone = data.get("phone")?.toString() || "";
    const files = data.getAll("images") as File[];

    if (!process.env.MY_PHONE_NUMBER) {
      throw new Error("MY_PHONE_NUMBER environment variable is not set.");
    }

    if (!files || files.length === 0) {
      throw new Error("No files were uploaded");
    }

    console.log("Files:", files);

    const imageUrls = await Promise.all(
      files.map(async (file) => {
        try {
          const bytes = await file.arrayBuffer();
          const buffer = Buffer.from(bytes);

          const uploadDir = join(process.cwd(), "uploads");
          if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
          }
          const filePath = join(uploadDir, file.name);

          await writeFile(filePath, buffer);
          console.log("File written to:", filePath);
          console.log(
            "Uploading to Firebase...",
            "buffer:",
            buffer,
            "file.name:",
            file.name
          );

          const imageUrl = await uploadImageToFirebase(buffer, file.name);
          console.log("Image URL:", imageUrl);

          await unlink(filePath);

          return imageUrl;
        } catch (error) {
          console.error("Error processing file:", file.name, error);
          throw error;
        }
      })
    );

    const textMessage = `New Quote Request\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\nImages: ${imageUrls.join(
      ", "
    )}`;

    await client.messages.create({
      body: textMessage,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.MY_PHONE_NUMBER,
    });

    return NextResponse.json(
      { message: "SMS sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending SMS:", error);
    return NextResponse.json(
      { error: "Failed to send SMS", details: error },
      { status: 500 }
    );
  }
}
