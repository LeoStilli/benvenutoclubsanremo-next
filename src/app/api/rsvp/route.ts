import { NextRequest, NextResponse } from "next/server";
import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";

export async function POST(req: NextRequest) {
  console.log("🚀 RSVP API called!");

  try {
    const { eventTitle, eventDate, name, phone, message } = await req.json();

    console.log("📝 Received data:", { eventTitle, eventDate, name, phone, message });

    if (!eventTitle || !eventDate || !name || !phone) {
      console.log("❌ Missing required fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("✅ Validation passed, temporarily bypassing Google Sheets");
    console.log("🔧 Environment variables present:", {
      hasServiceEmail: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
      hasSheetId: !!process.env.GOOGLE_SHEET_ID
    });

    // TEMPORARY: Just return success without calling Google Sheets
    return NextResponse.json({ message: "RSVP submitted successfully (DEBUG MODE)!" });

  } catch (error: any) {
    console.error("❌ API Error:", error);
    return NextResponse.json(
      { error: "Failed to submit RSVP" },
      { status: 500 }
    );
  }
}