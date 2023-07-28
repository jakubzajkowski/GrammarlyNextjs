import { NextResponse } from "next/server";

export async function Post(req : Request) {
    return NextResponse.json({ text: 'Hello' });
  }