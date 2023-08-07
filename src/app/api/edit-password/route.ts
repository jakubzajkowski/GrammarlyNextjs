import { NextResponse } from "next/server";
import User from "@/app/db/schema";
import connectMongo from "@/app/db/database";
import bcrypt from 'bcrypt'

interface RequestBodyType {
  password:string 
  email:string
  newPassword:string
}

export async function POST(req : Request) {
    const {password,email,newPassword}:RequestBodyType = await req.json()
    await connectMongo();
    const user = await User.findOne({ email });
    if (!user) {
        return NextResponse.json({ error: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return NextResponse.json({ error: 'Invalid password' });
    }
    const hash = bcrypt.hashSync(newPassword, 10);
    await User.findOneAndUpdate({email: email},{password: hash})
    return NextResponse.json({ status: 'Password changed' });
  }