import { NextResponse } from "next/server";
import User from "@/app/db/schema";
import bcrypt from 'bcrypt';
import connectMongo from "@/app/db/database";

interface RequestBodyType {
  password:string 
  name:string 
  email:string
}

export async function POST(req : Request) {
  const {password,name,email}:RequestBodyType = await req.json()
    await connectMongo();
    const checkEmailDb = await User.findOne({email: email})
    if (checkEmailDb){
      return NextResponse.json({ error: 'Your Email is used' });
    }
    else{
      const hash = bcrypt.hashSync(password, 10);
      const user = new User({ password:hash, name:name, email:email,plan:'free',prompts:0});
      user.save()
      return NextResponse.json({ status: 'success' });
    }
  }