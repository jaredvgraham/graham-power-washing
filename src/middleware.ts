import { NextRequest, NextResponse } from "next/server";
import {
  AUTH_COOKIE_NAME,
  getAuthSecret,
  isAuthEnabled,
  verifyAuthToken,
} from "@/lib/auth";

function isAdminProtectedPath(pathname: string, method: string): boolean {
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    return true;
  }

  // Public quote form still POSTs leads here
  if (pathname === "/api/admin/quote" && method === "POST") {
    return false;
  }

  if (pathname.startsWith("/api/admin/")) {
    return true;
  }

  return false;
}

export async function middleware(request: NextRequest) {
  if (!isAuthEnabled()) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  const method = request.method.toUpperCase();

  if (pathname === "/signin") {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/login";
    return NextResponse.redirect(loginUrl);
  }

  if (!isAdminProtectedPath(pathname, method)) {
    return NextResponse.next();
  }

  const secret = getAuthSecret();
  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  const authenticated =
    secret && token ? await verifyAuthToken(token, secret) : false;

  if (authenticated) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const loginUrl = request.nextUrl.clone();
  loginUrl.pathname = "/login";
  loginUrl.searchParams.set("from", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/admin/:path*", "/signin", "/api/admin/:path*"],
};
