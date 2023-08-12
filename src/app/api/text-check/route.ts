import { NextResponse } from "next/server";
import {Configuration, OpenAIApi} from "openai"

interface TextCheckRequests {
    text: string
}

export async function POST(req : Request) {
    const {text}:TextCheckRequests = await req.json()
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_SECRET_KEY,
      });
      const openai = new OpenAIApi(configuration);

      const prompt:string = "You will be provided with statements, and your task is to convert them to standard English"
      
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "system",
            "content": prompt
          },
          {
            "role": "user",
            "content": text
          },
        ],
        temperature: 0,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
   return NextResponse.json({success: response.data.choices[0].message?.content})
}