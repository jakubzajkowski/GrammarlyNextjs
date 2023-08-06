import { NextResponse } from "next/server";
import User from "@/app/db/schema";
import connectMongo from "@/app/db/database";

interface RequestBodyType {
  _id:string 
  documentId: string
}

export async function POST(req : Request) {
    const {_id,documentId}:RequestBodyType = await req.json()
    await connectMongo();
    await User.findOneAndUpdate(
        { _id: _id },
        { $pull: { documents: {_id: documentId} } } 
    )
    return NextResponse.json({status: 'deleted'})
  }