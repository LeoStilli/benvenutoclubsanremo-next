import { NextRequest, NextResponse } from "next/server";
import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";

export async function POST(req: NextRequest) {
  const { eventTitle, eventDate, name, phone, message } = await req.json();

  if (!eventTitle || !eventDate || !name || !phone) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!serviceAccountEmail || !privateKey || !spreadsheetId) {
    return NextResponse.json(
      { error: "Missing Google Sheets configuration" },
      { status: 500 }
    );
  }

  try {
    // Decode the private key (it may be base64 encoded)
    const decodedPrivateKey = privateKey.replace(/\\n/g, "\n");

    // Create Google Auth instance
    const auth = new GoogleAuth({
      credentials: {
        client_email: serviceAccountEmail,
        private_key: decodedPrivateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Create sheets API client
    const sheets = google.sheets({ version: "v4", auth });

    // Prepare the row data
    const timestamp = new Date().toISOString();
    const rowData = [
      timestamp,
      eventTitle,
      eventDate,
      name,
      phone,
      message || "",
    ];

    // Append the data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:F", // Assuming headers are in row 1
      valueInputOption: "RAW",
      requestBody: {
        values: [rowData],
      },
    });

    return NextResponse.json({ message: "RSVP submitted successfully!" });
  } catch (error: any) {
    console.error("Error writing to Google Sheets:", error);
    return NextResponse.json(
      { error: "Failed to submit RSVP" },
      { status: 500 }
    );
  }
}