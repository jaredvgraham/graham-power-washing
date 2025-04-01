import { getGptQuote } from "@/services/getGptQuote";
import { NextRequest, NextResponse } from "next/server";

import nodemailer from "nodemailer";

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
      message,
      imageUrls,
      options,
    });
    if (!name || !email || !phone || !town || !message || !options) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const quote = await getGptQuote(imageUrls, options, squareFootage, town);
    console.log("Quote from GPT:", quote);

    if (!imageUrls || imageUrls.length === 0) {
      throw new Error("No images were uploaded");
    }

    const textMessage = `New Quote Request\nName: ${name}\nEmail: ${email}\nTown: ${town}\nPhone: ${phone}\nMessage: ${message}\nImages: ${imageUrls.join(
      ", "
    )}`;

    const mailOptions = {
      from: process.env.EMAIL, // sender address
      to: process.env.EMAIL, // list of receivers (sending to yourself)
      subject: "New Quote Request", // Subject line
      text: textMessage, // plain text body
      html: `<p>${textMessage.replace(/\n/g, "<br>")}</p>`, // html body
    };
    // const mailOptionsTwo = {
    //   from: process.env.EMAIL, // sender address
    //   to: "grahampaintinc@gmail.com", // list of receivers (sending to yourself)
    //   subject: "New Quote Request", // Subject line
    //   text: textMessage, // plain text body
    //   html: `<p>${textMessage.replace(/\n/g, "<br>")}</p>`, // html body
    // };

    await transporter.sendMail(mailOptions);
    // await transporter.sendMail(mailOptionsTwo);

    return NextResponse.json({ message: "SMS sent successfully!" });
  } catch (error) {
    console.log("Error sending SMS:", error);
    return NextResponse.json(
      { error: "Failed to send SMS", details: error },
      { status: 500 }
    );
  }
}
