import { NextResponse } from "next/server";
import { licornes } from "@/app/lib/placeholder-data";

export async function GET() {
  return NextResponse.json(licornes);
}
