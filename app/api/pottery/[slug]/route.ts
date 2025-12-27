import { NextResponse } from "next/server";
import { getPotteryBySlug } from "@/lib/pottery";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const piece = getPotteryBySlug(slug);

  if (!piece) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(piece);
}



