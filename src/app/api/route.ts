import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse("BenvenutoClubSanremo API", {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}
