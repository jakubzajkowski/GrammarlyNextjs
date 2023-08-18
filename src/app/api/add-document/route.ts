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
            language: 'American English'
            }
        } 
    } 
    )
    const document = await User.find({ '_id': _id}).select('documents')
    const documentId = document[0].documents[document[0].documents.length-1]._id
    return NextResponse.json({status: 'added',documentId:documentId,_id:_id})
  }