import { NextResponse } from "next/server";
import { Resend } from "resend";

type EnquiryPayload = {
  name?: string;
  phone?: string;
  email?: string;
  company?: string;
  product?: string;
  intent?: string;
  message?: string;
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const body = (await request.json()) as EnquiryPayload;
  const { name, phone, email, company, product, intent, message } = body;

  if (!name || !phone || !email) {
    return NextResponse.json(
      { error: "Name, phone, and email are required." },
      { status: 400 },
    );
  }

  const emailBody = `
New Website Enquiry

Name: ${name}
Phone: ${phone}
Email: ${email}
Selected Business: ${company || "Not provided"}
Product: ${product || "Not selected"}
Intent: ${intent || "General enquiry"}
Message: ${message || "Not provided"}
`;

  if (!apiKey) {
    return NextResponse.json({
      ok: true,
      mode: "mock",
      preview: emailBody.trim(),
    });
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "Dhruv Enterprises <onboarding@resend.dev>",
      to: ["sales@dhruventerprises.com"],
      replyTo: email,
      subject: `New Website Enquiry - ${intent || "general"}`,
      text: emailBody.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send enquiry email." },
      { status: 500 },
    );
  }
}
