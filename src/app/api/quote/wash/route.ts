import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isMetaAdLead(howYouFoundUs: string): boolean {
  const source = howYouFoundUs.trim().toLowerCase();
  return (
    source === "facebook ad" ||
    source === "meta ad" ||
    source.includes("facebook ad") ||
    source.includes("meta ad") ||
    source === "meta" ||
    source === "facebook ads"
  );
}

function buildQuoteEmailHtml({
  name,
  email,
  phone,
  town,
  howYouFoundUs,
  message,
  optionsList,
  urls,
  squareFootage,
  fromMetaAd,
}: {
  name: string;
  email: string;
  phone: string;
  town: string;
  howYouFoundUs: string;
  message: string;
  optionsList: string[];
  urls: string[];
  squareFootage: unknown;
  fromMetaAd: boolean;
}): string {
  const phoneDigits = phone.replace(/\D/g, "");
  const phoneHref = phoneDigits ? `tel:${phoneDigits}` : "";
  const emailHref = email ? `mailto:${escapeHtml(email)}` : "";
  const sqFt =
    squareFootage != null && String(squareFootage).trim()
      ? escapeHtml(String(squareFootage))
      : "";
  const services = optionsList.map((o) => escapeHtml(o)).join(" · ");

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;width:140px;font-size:13px;color:#64748b;vertical-align:top;">
        ${label}
      </td>
      <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px;color:#0f172a;vertical-align:top;">
        ${value}
      </td>
    </tr>`;

  const imagesHtml =
    urls.length > 0
      ? `
      <div style="margin-top:28px;padding-top:20px;border-top:1px solid #f1f5f9;">
        <p style="margin:0 0 12px;font-size:13px;color:#64748b;">Photos</p>
        ${urls
          .map(
            (url, i) => `
          <div style="margin:0 0 12px;">
            <a href="${escapeHtml(url)}" style="text-decoration:none;">
              <img src="${escapeHtml(url)}" alt="Photo ${i + 1}" width="480" style="display:block;width:100%;max-width:480px;height:auto;border-radius:6px;" />
            </a>
          </div>`,
          )
          .join("")}
      </div>`
      : "";

  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Graham Power Washing Quote</title>
  </head>
  <body style="margin:0;padding:0;background:#f8fafc;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border:1px solid #e2e8f0;border-radius:8px;">
            <tr>
              <td style="padding:28px 28px 8px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
                <p style="margin:0;font-size:13px;font-weight:600;color:#0f172a;">
                  Graham Power Washing
                </p>
                <p style="margin:4px 0 0;font-size:13px;color:#94a3b8;">
                  New quote request${fromMetaAd ? " · Meta ad" : ""}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 28px 28px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
                <h1 style="margin:0 0 20px;font-size:22px;font-weight:600;line-height:1.25;color:#0f172a;">
                  ${escapeHtml(name)}
                </h1>

                ${
                  phoneHref
                    ? `
                <p style="margin:0 0 24px;">
                  <a href="${phoneHref}" style="display:inline-block;padding:10px 16px;background:#0f172a;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:6px;">
                    Call ${escapeHtml(phone)}
                  </a>
                </p>`
                    : ""
                }

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                  ${row(
                    "Phone",
                    phoneHref
                      ? `<a href="${phoneHref}" style="color:#0f172a;text-decoration:underline;">${escapeHtml(phone)}</a>`
                      : escapeHtml(phone),
                  )}
                  ${row("Town", escapeHtml(town))}
                  ${row(
                    "Email",
                    emailHref
                      ? `<a href="${emailHref}" style="color:#0f172a;text-decoration:underline;">${escapeHtml(email)}</a>`
                      : "Not provided",
                  )}
                  ${row(
                    "How they found us",
                    fromMetaAd
                      ? `${escapeHtml(howYouFoundUs)} <span style="color:#64748b;">(Meta ad)</span>`
                      : escapeHtml(howYouFoundUs),
                  )}
                  ${row("Services", services)}
                  ${sqFt ? row("Square footage", sqFt) : ""}
                  ${
                    message
                      ? row(
                          "Message",
                          `<span style="white-space:pre-wrap;">${escapeHtml(message)}</span>`,
                        )
                      : ""
                  }
                </table>

                ${imagesHtml}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(req: NextRequest) {
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

    const urls = Array.isArray(imageUrls)
      ? imageUrls.filter((u: unknown) => typeof u === "string" && u.length > 0)
      : [];

    const source = howYouFoundUs.trim();
    const fromMetaAd = isMetaAdLead(source);
    const safeName = name.trim();
    const safeEmail = email?.trim() || "";
    const safePhone = phone.trim();
    const safeTown = town.trim();
    const safeMessage = message?.trim() || "";

    const imagesBlock =
      urls.length > 0
        ? urls
            .map((url: string, index: number) => `Image ${index + 1}: ${url}`)
            .join("\n")
        : "No photos uploaded";

    const textMessage = `${fromMetaAd ? "[META AD LEAD]\n" : ""}New Quote Request
Name: ${safeName}
Email: ${safeEmail || "Not provided"}
Town: ${safeTown}
Phone: ${safePhone}
How they found us: ${fromMetaAd ? `META / FACEBOOK AD (${source})` : source}
Options: ${optionsList.join(", ")}
Message: ${safeMessage || "—"}
Images:
${imagesBlock}
Square Footage: ${squareFootage ?? "—"}`;

    const htmlMessage = buildQuoteEmailHtml({
      name: safeName,
      email: safeEmail,
      phone: safePhone,
      town: safeTown,
      howYouFoundUs: source,
      message: safeMessage,
      optionsList,
      urls,
      squareFootage,
      fromMetaAd,
    });

    const subject = fromMetaAd
      ? `[META AD] Graham Power Washing Quote`
      : `Graham Power Washing Quote`;

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject,
      text: textMessage,
      html: htmlMessage,
    };
    const mailOptionsTwo = {
      from: process.env.EMAIL,
      to: "grahampaintinc@gmail.com",
      subject,
      text: textMessage,
      html: htmlMessage,
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(mailOptionsTwo);

    return NextResponse.json({ message: "Quote email sent successfully!" });
  } catch (error) {
    console.log("Error sending quote email:", error);
    return NextResponse.json(
      { error: "Failed to send quote email", details: error },
      { status: 500 },
    );
  }
}
