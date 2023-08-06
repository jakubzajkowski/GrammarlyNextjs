import * as jose from 'jose';
import { NextResponse } from "next/server";
import User from "@/app/db/schema";
import bcrypt from 'bcrypt';
import connectMongo from "@/app/db/database";

interface RequestBodyType {
  password:string 
  email:string
}

export async function POST(req : Request) {
    const {password,email}:RequestBodyType = await req.json()
    await connectMongo();
    const user = await User.findOne({ email });
    if (!user) {
        return NextResponse.json({ error: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return NextResponse.json({ error: 'Invalid password' });
    }
    const token = await new jose.SignJWT({ user })
                        .setProtectedHeader({ alg: 'HS256' })
                        .setIssuedAt()
                        .setExpirationTime(process.env.JWT_SECRET_TOKEN_EXPIRES as string)
                        .sign(new TextEncoder().encode(process.env.JWT_SECRET_TOKEN as string));
    return new Response('Logged Successful', {
        status: 200,
        headers: { 'Set-Cookie': `token=${token}; HttpOnly; Max-Age=${process.env.SESSION_EXPIRES}; Path=/; SameSite=None; Secure`},
      })
  }