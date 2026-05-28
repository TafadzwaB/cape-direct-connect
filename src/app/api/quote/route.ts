import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface QuoteRequest {
  name: string;
  phone: string;
  service: string;
  area: string;
  details: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  },
});

export async function POST(request: Request) {
  try {
    const body: QuoteRequest = await request.json();

    if (!body.name || !body.phone || !body.service) {
      return NextResponse.json(
        { error: "Name, phone, and service are required." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();

    const emailHtml = `
      <h2>New Quote Request — Cape Direct Connect</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${body.name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${body.phone}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Service</td><td style="padding:8px;border:1px solid #ddd;">${body.service}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Area</td><td style="padding:8px;border:1px solid #ddd;">${body.area || "Not specified"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Details</td><td style="padding:8px;border:1px solid #ddd;">${body.details || "None"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Submitted</td><td style="padding:8px;border:1px solid #ddd;">${timestamp}</td></tr>
      </table>
    `;

    const emailText = `New Quote Request — Cape Direct Connect
Name: ${body.name}
Phone: ${body.phone}
Service: ${body.service}
Area: ${body.area || "Not specified"}
Details: ${body.details || "None"}
Submitted: ${timestamp}`;

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: "info@capetown-dstv.co.za",
        subject: `New Quote Request: ${body.service} — ${body.name}`,
        text: emailText,
        html: emailHtml,
      });
    } else {
      console.log("SMTP not configured — logging quote request:", {
        name: body.name,
        phone: body.phone,
        service: body.service,
        area: body.area || "Not specified",
        details: body.details || "None",
        timestamp,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote submission error:", error);
    return NextResponse.json(
      { error: "Failed to process request. Please try again." },
      { status: 500 }
    );
  }
}
