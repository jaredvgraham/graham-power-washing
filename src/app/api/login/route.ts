import { NextRequest, NextResponse } from "next/server";
import {
  AUTH_COOKIE_MAX_AGE,
  AUTH_COOKIE_NAME,
  createAuthToken,
  getAuthSecret,
  isAuthEnabled,
} from "@/lib/auth";

export async function POST(request: NextRequest) {
  if (!isAuthEnabled()) {
    return NextResponse.json({ ok: true });
  }

  const secret = getAuthSecret();
  const appPassword = process.env.APP_PASSWORD?.trim();

  if (!secret || !appPassword) {
    return NextResponse.json(
      { error: "App auth is not configured" },
      { status: 500 },
    );
  }

  let password = "";
  try {
    const body = await request.json();
    password = typeof body.password === "string" ? body.password.trim() : "";
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (password !== appPassword) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const token = await createAuthToken(secret);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: AUTH_COOKIE_MAX_AGE,
    path: "/",
  });

  return response;
}
