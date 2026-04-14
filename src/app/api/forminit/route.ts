import { createForminitProxy } from "forminit/next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const apiKey = process.env.FORMINIT_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Server configuration missing: FORMINIT_API_KEY" },
      { status: 500 }
    );
  }

  const forminit = createForminitProxy({ apiKey });
  return forminit.POST(request);
}
