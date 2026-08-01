import { getPhoneCallCount } from "@/services/firebasePhoneCalls";
import { requireApiAuth } from "@/lib/api-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const authError = await requireApiAuth(req);
  if (authError) return authError;

  try {
    const phoneCalls = await getPhoneCallCount();
    return NextResponse.json(phoneCalls);
  } catch (error) {
    console.log("Error getting phone calls:", error);
    return NextResponse.json(
      { error: "Failed to get phone calls", details: String(error) },
      { status: 500 },
    );
  }
}
