import { NextResponse } from "next/server";
import {Configuration, OpenAIApi} from "openai"

interface TextCheckRequests {
    text: string
    language: string
}

export async function POST(req : Request) {
    const {text,language}:TextCheckRequests = await req.json()
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_SECRET_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const promptGrammar:string = `You will be provided with statements, Your task is to translate this sentence in html brackets to ${language} do not change html brackets`
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
        return NextResponse.json({success: {text: responseGrammar.data.choices[0].message?.content}})
    }
    else{
      return NextResponse.json({error: 'No content'})
    }
}