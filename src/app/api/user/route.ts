import { NextResponse } from "next/server";
import * as jose from 'jose';
import type { NextRequest } from 'next/server'
import connectMongo from "@/app/db/database";
import User from "@/app/db/schema";

export interface UserRequest extends NextRequest {
    token: any
}

export async function GET(req : UserRequest) {
    const token = req.cookies.get('token');
    if (token){
        await connectMongo();
        const decode = await jose.jwtVerify(token.value, new TextEncoder().encode(process.env.JWT_SECRET_TOKEN as string));
        const { _id } : string | any = decode.payload.user
        const user = await User.findOne({ _id: _id});
        return NextResponse.json(user)
    }
    else{
        return NextResponse.json({error: 'Unauthorized'})
    }
  }