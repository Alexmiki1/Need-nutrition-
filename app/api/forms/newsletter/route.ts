import { NextRequest, NextResponse } from "next/server";
import { newsletterFormSchema } from "@/lib/forms/newsletter";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = newsletterFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.issues },
        { status: 400 },
      );
    }

    // TODO: Phase 11 - Implement newsletter subscription logic
    // Add email to newsletter list (e.g., Mailchimp, SendGrid, or database)
    // Send confirmation email to subscriber
    console.log("Newsletter subscription:", parsed.data);

    return NextResponse.json(
      { success: true, message: "Newsletter subscription successful" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Newsletter form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
