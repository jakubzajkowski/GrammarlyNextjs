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
    const user = await User.findOne({ '_id': _id, 'documents._id': documentId},{ 'documents.$': 1 })
    await User.findOneAndUpdate(
        { _id: _id },
        { $pull: { documents: {_id: documentId} } } 
    )
    await User.findOneAndUpdate(
      { _id: _id },
      { $push: { trashs: {
          _id : user.documents[0]._id,
          title : user.documents[0].title,
          text : user.documents[0].text,
          status: user.documents[0].status,
          language: user.documents[0].language,
          }
      } })
    return NextResponse.json({status: 'deleted'})
  }