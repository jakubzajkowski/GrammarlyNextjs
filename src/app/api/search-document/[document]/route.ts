import { NextResponse } from "next/server";
import User from "@/app/db/schema";
import connectMongo from "@/app/db/database";

interface RequestBodyType {
  _id:string 
}
interface documentParamsType {
  params: { 
    document: string, 
  } 
}

export async function POST(req : Request,{ params } : documentParamsType) {
    const {_id}:RequestBodyType = await req.json()
    await connectMongo();
    if (params.document){
      const document = await User.findOne({ '_id': _id}).select('documents')
      const filteredDocument=document.documents.filter((doc: any) =>doc.title.toLowerCase().includes(params.document.toLowerCase()))
      return NextResponse.json({status: 'searched',filteredDocument})
    }
  }