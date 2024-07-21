import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { customAlphabet } from "nanoid";

export const runtime = "edge";

const nanoid = customAlphabet("1234567890abcdef", 10);

export async function POST(req: Request) {
  const file = req.body || "";
  const contentType = req.headers.get("content-type") || "text/plain";
  const fileName = `${nanoid()}.${contentType.split("/")[1]}`;
  const blob = await put(fileName, file, {
    access: "public",
    multipart: true,
  });
  return NextResponse.json(blob);
}
