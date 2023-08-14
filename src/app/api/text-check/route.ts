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

    const promptGrammar:string = "You will be provided with statements, and your task to check grammar of words"
    
    if (text){
      const responseGrammar = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "system",
            "content": promptGrammar
          },
          {
            "role": "user",
            "content": `${text}`
          },
        ],
        temperature: 0,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      if (responseGrammar.data.choices[0].message?.content==text){
        return NextResponse.json({success: {correct: true, text: responseGrammar.data.choices[0].message?.content}})
      }
      else{
        return NextResponse.json({success: {correct: false, text: responseGrammar.data.choices[0].message?.content}})
      }
    }
    else{
      return NextResponse.json({error: 'No content'})
    }
}