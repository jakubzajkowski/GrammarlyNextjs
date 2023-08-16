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
    const user = await User.findOne({ '_id': _id, 'trashs._id': documentId},{ 'trashs.$': 1 })
    await User.findOneAndUpdate(
        { _id: _id },
        { $pull: { trashs: {_id: documentId} } } 
    )
    await User.findOneAndUpdate(
      { _id: _id },
      { $push: { documents: {
          _id : user.trashs[0]._id,
          title : user.trashs[0].title,
          text : user.trashs[0].text,
          status: user.trashs[0].status,
          language: user.trashs[0].language,
          }
      } })
    return NextResponse.json({status: 'restored'})
  }