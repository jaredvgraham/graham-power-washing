import { NextRequest, NextResponse } from "next/server";
import { getQuoteCount } from "@/services/firebaseQuoteService";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const quoteCount = await getQuoteCount();
    return NextResponse.json(quoteCount);
  } catch (error) {
    console.log("Error getting quote count:", error);
    return NextResponse.json(
      { error: "Failed to get quote count", details: error },
      { status: 500 }
    );
  }
}
