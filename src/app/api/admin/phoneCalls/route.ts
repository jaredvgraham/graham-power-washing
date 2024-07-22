import { getPhoneCallCount } from "@/services/firebasePhoneCalls";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const phoneCalls = await getPhoneCallCount();
    return NextResponse.json(phoneCalls);
  } catch (error) {
    console.log("Error getting phone calls:", error);
    return NextResponse.json(
      { error: "Failed to get phone calls", details: error },
      { status: 500 }
    );
  }
}
