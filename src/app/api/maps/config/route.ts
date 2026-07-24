import { NextResponse } from "next/server";

/**
 * Returns Google Maps API key from server environment.
 * Key is never embedded in frontend source — loaded at runtime.
 * Restrict this key by HTTP referrer in Google Cloud Console.
 */
export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ configured: false, apiKey: null });
  }

  return NextResponse.json({ configured: true, apiKey });
}
