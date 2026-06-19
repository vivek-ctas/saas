import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    status: "ok",
    service: "saas-website",
    timestamp: new Date().toISOString(),
  });
}
