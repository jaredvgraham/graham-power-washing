import { createLead, getLeads } from "@/services/leadService";
import { requireApiAuth } from "@/lib/api-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      town,
      phone,
      email,
      howYouFoundUs,
      services,
      options,
      message,
      photoUrls,
      imageUrls,
      squareFootage,
    } = body;

    if (!name?.trim() || !town?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: "Name, town, and phone are required" },
        { status: 400 },
      );
    }

    const lead = await createLead({
      name,
      town,
      phone,
      email,
      howYouFoundUs,
      services: Array.isArray(services)
        ? services
        : Array.isArray(options)
          ? options
          : [],
      message,
      photoUrls: Array.isArray(photoUrls)
        ? photoUrls
        : Array.isArray(imageUrls)
          ? imageUrls
          : [],
      squareFootage:
        squareFootage != null ? String(squareFootage) : undefined,
    });

    return NextResponse.json(
      { message: "Lead created successfully!", id: String(lead._id) },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json(
      { error: "Failed to create lead", details: String(error) },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  const authError = await requireApiAuth(req);
  if (authError) return authError;

  try {
    const leads = await getLeads();
    return NextResponse.json(leads);
  } catch (error) {
    console.log("Error getting leads:", error);
    return NextResponse.json(
      { error: "Failed to get leads", details: String(error) },
      { status: 500 },
    );
  }
}
