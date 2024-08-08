import { createPhoneCall } from "@/services/firebasePhoneCalls";
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

export async function POST(req: NextRequest) {
  try {
    const { phone } = await req.json();
    console.log("msg", phone);

    await createPhoneCall({ phone });

    const textMessage = `Phone call from graham powerwashing: ${phone}`;

    const mailOptions = {
      from: process.env.EMAIL, // sender address
      to: process.env.EMAIL, // list of receivers (sending to yourself)
      subject: "New Phone Call", // Subject line
      text: textMessage, // plain text body
      html: `<p>${textMessage.replace(/\n/g, "<br>")}</p>`, // html body
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error },
      { status: 500 }
    );
  }
}
