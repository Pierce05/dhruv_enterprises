import { NextResponse } from "next/server";
import { Resend } from "resend";

type EnquiryPayload = {
  name?: string;
  phone?: string;
  email?: string;
  company?: string;
  product?: string;
  message?: string;
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const body = (await request.json()) as EnquiryPayload;
  const { name, phone, email, company, product, message } = body;

  if (!name || !phone || !email) {
    return NextResponse.json(
      { error: "Name, phone, and email are required." },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);

  const emailBody = `
New Website Enquiry

Name: ${name}
Phone: ${phone}
Email: ${email}
Company: ${company || "Not provided"}
Product: ${product || "Not selected"}
Message: ${message || "Not provided"}
`;

  try {
    await resend.emails.send({
      from: "Dhruv Enterprises <onboarding@resend.dev>",
      to: ["sales@dhruventerprises.com"],
      replyTo: email,
      subject: "New Website Enquiry",
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
