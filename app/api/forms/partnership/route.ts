import { NextRequest, NextResponse } from "next/server";
import { partnershipFormSchema } from "@/lib/forms/partnership";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = partnershipFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.issues },
        { status: 400 },
      );
    }

    // TODO: Phase 11 - Implement email sending logic
    // Send partnership inquiry to partnerships inbox
    // Include: organization, contactPerson, email, phone, organizationType, location, serviceRequired, projectDescription, timeline, budget, message
    // Use nodemailer or similar email service
    console.log("Partnership form submission:", parsed.data);

    return NextResponse.json(
      { success: true, message: "Partnership inquiry received" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Partnership form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
