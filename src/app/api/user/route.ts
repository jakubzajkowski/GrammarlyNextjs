import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'
import connectMongo from "@/app/db/database";
import User from "@/app/db/schema";

export interface UserRequest extends NextRequest {
    token: any
}

export async function GET(req : UserRequest) {
    const token = req.cookies.get('session');
    if (token){
        await connectMongo();
        const user = await User.findOne({ _id: token?.value});
        return NextResponse.json({error: user})
    }
    else{
        return NextResponse.json({error: 'Unauthorized'})
    }
  }