import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/forms/contact";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.issues },
        { status: 400 },
      );
    }

    // TODO: Phase 11 - Implement email sending logic
    // Send contact message to neednutritional@gmail.com
    // Include: name, email, phone, subject, message
    // Use nodemailer or similar email service
    console.log("Contact form submission:", parsed.data);

    return NextResponse.json(
      { success: true, message: "Contact message received" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
