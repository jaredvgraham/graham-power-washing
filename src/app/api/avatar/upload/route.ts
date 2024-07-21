// import { put } from "@vercel/blob";
// import { NextResponse } from "next/server";
// import { customAlphabet } from "nanoid";

// export const runtime = "edge";

// const nanoid = customAlphabet("1234567890abcdef", 10);

// export async function POST(req: Request) {
//   const file = req.body || "";
//   const contentType = req.headers.get("content-type") || "text/plain";
//   const fileName = `${nanoid()}.${contentType.split("/")[1]}`;
//   const blob = await put(fileName, file, {
//     access: "public",
//     multipart: true,
//   });
//   return NextResponse.json(blob);
// }

import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { customAlphabet } from "nanoid";

export const runtime = "edge";

const nanoid = customAlphabet("1234567890abcdef", 10);

export async function POST(req: Request) {
  const form = await req.formData();
  const file = form.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const contentType = file.type || "application/octet-stream";
  const fileName = `${nanoid()}.${contentType.split("/")[1]}`;

  try {
    const blob = await put(fileName, file, {
      access: "public",
      multipart: true,
    });

    return NextResponse.json(blob);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}
