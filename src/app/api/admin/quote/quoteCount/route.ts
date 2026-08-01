import { NextRequest, NextResponse } from "next/server";
import { getLeadCount } from "@/services/leadService";
import { requireApiAuth } from "@/lib/api-auth";

export async function GET(req: NextRequest) {
  const authError = await requireApiAuth(req);
  if (authError) return authError;

  try {
    const count = await getLeadCount();
    return NextResponse.json(count);
  } catch (error) {
    console.log("Error getting lead count:", error);
    return NextResponse.json(
      { error: "Failed to get lead count", details: String(error) },
      { status: 500 },
    );
  }
}
