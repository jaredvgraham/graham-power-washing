import { createQuote, getQuotes } from "@/services/firebaseQuoteService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, town, phone } = await req.json();

    console.log("msg", name, town, phone);
    

    await createQuote({ name, town, phone });

    return NextResponse.json(
      { message: "Quote created successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating quote:", error);
    return NextResponse.json(
      { error: "Failed to create quote", details: error },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const quotes = await getQuotes();
    return NextResponse.json(quotes);
  } catch (error) {
    console.log("Error getting quotes:", error);
    return NextResponse.json(
      { error: "Failed to get quotes", details: error },
      { status: 500 }
    );
  }
}
