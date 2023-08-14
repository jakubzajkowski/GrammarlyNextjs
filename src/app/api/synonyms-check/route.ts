import { NextResponse } from "next/server";
import {Configuration, OpenAIApi} from "openai"

interface TextCheckRequests {
    word: string
}

export async function POST(req : Request) {
    const {word}:TextCheckRequests = await req.json()
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_SECRET_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const promptGrammar:string = "You will be provided with word, and you will write synonyms of this word or words that can replace this word"
    
    if (word){
      const responseGrammar = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "system",
            "content": promptGrammar
          },
          {
            "role": "user",
            "content": `${word}`
          },
        ],
        temperature: 0,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
        return NextResponse.json({success:{words: responseGrammar.data.choices[0].message?.content}})
    }
    else{
      return NextResponse.json({error: 'No content'})
    }
}