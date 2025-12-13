import { NextResponse } from "next/server";
import { getAllPottery } from "@/lib/pottery";

export async function GET() {
  const pottery = getAllPottery();
  return NextResponse.json(pottery);
}
