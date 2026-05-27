import { NextResponse } from "next/server";

interface QuoteRequest {
  name: string;
  phone: string;
  service: string;
  area: string;
  details: string;
}

export async function POST(request: Request) {
  try {
    const body: QuoteRequest = await request.json();

    if (!body.name || !body.phone || !body.service) {
      return NextResponse.json(
        { error: "Name, phone, and service are required." },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service (e.g. SendGrid, Resend) or CRM
    // For now, log the quote request server-side
    console.log("New quote request:", {
      name: body.name,
      phone: body.phone,
      service: body.service,
      area: body.area || "Not specified",
      details: body.details || "None",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process request. Please try again." },
      { status: 500 }
    );
  }
}
