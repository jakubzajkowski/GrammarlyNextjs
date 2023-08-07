import { NextResponse } from "next/server";
import User from "@/app/db/schema";
import connectMongo from "@/app/db/database";

interface documentParamsType {
  params: { 
    _id: string, 
    document_id: string
  } 
}

export async function GET(req : Request,{ params } : documentParamsType) {
    await connectMongo();
    const user = await User.find({ '_id': params._id, 'documents._id': params.document_id},{ 'documents.$': 1 })
    return NextResponse.json({user})
  }