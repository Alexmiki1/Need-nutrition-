import { NextRequest, NextResponse } from "next/server";
import { mediaFormSchema } from "@/lib/forms/media";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = mediaFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.issues },
        { status: 400 },
      );
    }

    // TODO: Phase 11 - Implement email sending logic
    // Send media inquiry to media inbox
    // Include: name, mediaOrganization, email, phone, mediaType, inquiryType, deadline, message
    // Use nodemailer or similar email service
    console.log("Media form submission:", parsed.data);

    return NextResponse.json(
      { success: true, message: "Media inquiry received" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Media form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
