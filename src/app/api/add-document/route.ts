import { NextResponse } from "next/server";
import User from "@/app/db/schema";
import connectMongo from "@/app/db/database";

interface RequestBodyType {
  _id:string 
  text:string
}

export async function POST(req : Request) {
    const {_id}:RequestBodyType = await req.json()
    await connectMongo();
    await User.findOneAndUpdate(
        { _id: _id },
        { $push: { documents: {
            title : 'Untitled Document',
            text : '',
            status: 'created',
            }
        } 
    } 
    )
    return NextResponse.json({status: 'added'})
  }