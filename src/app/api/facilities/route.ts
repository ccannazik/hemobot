import { NextRequest, NextResponse } from "next/server";
import { healthcareFacilities } from "@/data/facilities";
import { haversineDistance } from "@/lib/utils";

export async function GET(request: NextRequest) {
  const lat = parseFloat(request.nextUrl.searchParams.get("lat") || "37.4419");
  const lng = parseFloat(request.nextUrl.searchParams.get("lng") || "-122.143");
  const type = request.nextUrl.searchParams.get("type");
  const sort = request.nextUrl.searchParams.get("sort") || "distance";

  let facilities = healthcareFacilities.map((f) => ({
    ...f,
    distance: haversineDistance(lat, lng, f.lat, f.lng),
  }));

  if (type && type !== "all") {
    facilities = facilities.filter((f) => f.type === type);
  }

  if (sort === "distance") {
    facilities.sort((a, b) => a.distance - b.distance);
  }

  return NextResponse.json({ facilities, center: { lat, lng } });
}
