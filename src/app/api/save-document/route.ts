import { NextResponse } from "next/server";
import User from "@/app/db/schema";
import connectMongo from "@/app/db/database";

interface RequestBodyType {
    _id:string,
    documentId:string,
    title:string,
    text:string
}

export async function POST(req : Request) {
    const {_id,documentId,title,text}:RequestBodyType = await req.json()
    await connectMongo();
    await User.updateOne(
        { _id: _id, "documents._id": documentId },
        {
            $set: {
                "documents.$.text": text,
                "documents.$.title": title,
                "documents.$.status": 'Work',
             }
        }
    )
    return NextResponse.json({status: 'saved'})
  }