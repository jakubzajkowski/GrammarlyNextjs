import { NextResponse } from "next/server";
import User from "@/app/db/schema";
import connectMongo from "@/app/db/database";
import bcrypt from 'bcrypt'

interface RequestBodyType {
  password:string 
  email:string
  newEmail:string
}

export async function POST(req : Request) {
    const {password,email,newEmail}:RequestBodyType = await req.json()
    await connectMongo();
    const user = await User.findOne({ email });
    if (!user) {
        return NextResponse.json({ error: 'User not found' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return NextResponse.json({ error: 'Invalid password' });
    }
    const emailCheck = await User.findOne({ email: newEmail });
    if (emailCheck){
        return NextResponse.json({ error: 'This email is used' });
    }
    await User.findOneAndUpdate({email: email},{email: newEmail})
    return NextResponse.json({ status: 'Email changed' });
  }