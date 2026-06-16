import { NextRequest, NextResponse } from "next/server";

import nodemailer from "nodemailer";

console.log("process.env.EMAIL", process.env.EMAIL);
console.log("process.env.EMAIL_PASS", process.env.EMAIL_PASS);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL, // your Gmail address
    pass: process.env.EMAIL_PASS, // your Gmail app password
  },
});

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const {
      name,
      email,
      phone,
      town,
      howYouFoundUs,
      message,
      imageUrls,
      options,
      squareFootage,
    } = await req.json();
    console.log("Received data:", {
      name,
      email,
      phone,
      town,
      howYouFoundUs,
      message,
      imageUrls,
      options,
    });
    const optionsList = Array.isArray(options)
      ? options.map((o: string) => String(o).trim()).filter(Boolean)
      : [];

    if (
      !name?.trim() ||
      !phone?.trim() ||
      !town?.trim() ||
      !howYouFoundUs?.trim()
    ) {
      return NextResponse.json(
        {
          error: "Name, phone, town, and how you found us are required",
          details: "Missing required fields",
        },
        { status: 400 },
      );
    }

    if (optionsList.length === 0) {
      return NextResponse.json(
        {
          error: "Please select what you need cleaned",
          details: "Service is required",
        },
        { status: 400 },
      );
    }

    // const quote = await getGptQuote(imageUrls, options, squareFootage, town);
    // console.log("Quote from GPT:", quote);

    const urls = Array.isArray(imageUrls)
      ? imageUrls.filter((u: unknown) => typeof u === "string" && u.length > 0)
      : [];

    const imagesBlock =
      urls.length > 0
        ? urls
            .map((url: string, index: number) => `Image ${index + 1}: ${url}`)
            .join("\n")
        : "No photos uploaded";

    const textMessage = `New Quote Request
    Name: ${name.trim()}
    Email: ${email?.trim() || "Not provided"}
    Town: ${town.trim()}
    Phone: ${phone.trim()}
    How they found us: ${howYouFoundUs.trim()}
    Options: ${optionsList.join(", ")}
    Message: ${message?.trim() || "—"}
    Images:
    ${imagesBlock}
    Square Footage: ${squareFootage ?? "—"}`;

    const mailOptions = {
      from: process.env.EMAIL, // sender address
      to: process.env.EMAIL, // list of receivers (sending to yourself)
      subject: "New Quote Request", // Subject line
      text: textMessage, // plain text body
      html: `<p>${textMessage.replace(/\n/g, "<br>")}</p>`, // html body
    };
    const mailOptionsTwo = {
      from: process.env.EMAIL, // sender address
      to: "grahampaintinc@gmail.com", // list of receivers (sending to yourself)
      subject: "New Quote Request", // Subject line
      text: textMessage, // plain text body
      html: `<p>${textMessage.replace(/\n/g, "<br>")}</p>`, // html body
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOptionsTwo);

    return NextResponse.json({ message: "SMS sent successfully!" });
  } catch (error) {
    console.log("Error sending SMS:", error);
    return NextResponse.json(
      { error: "Failed to send SMS", details: error },
      { status: 500 },
    );
  }
}
