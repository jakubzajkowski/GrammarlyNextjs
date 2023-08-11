import { NextRequest, NextResponse} from "next/server"
import  fs  from 'fs'
import path  from 'path'

export async function POST(req : NextRequest) {
    const data = await req.formData()
    const file: File | null = data.get('file') as unknown as File
  
    if (!file) {
      return NextResponse.json({ error: 'No such a file' })
    }
  
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const filePath = path.join(process.cwd(), '/public', file.name);

    fs.writeFileSync(filePath,buffer)
  
  
    return NextResponse.json({ success: true })
}