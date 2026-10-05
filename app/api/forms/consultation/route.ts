import { NextRequest, NextResponse } from "next/server";
import { consultationFormSchema } from "@/lib/forms/consultation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = consultationFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.issues },
        { status: 400 },
      );
    }

    // TODO: Phase 11 - Implement email sending logic
    // Send consultation inquiry to neednutritional@gmail.com
    // Include: name, email, phone, consultationType, age, preferredDate, preferredTime, message
    // Use nodemailer or similar email service
    console.log("Consultation form submission:", parsed.data);

    return NextResponse.json(
      { success: true, message: "Consultation inquiry received" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Consultation form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
