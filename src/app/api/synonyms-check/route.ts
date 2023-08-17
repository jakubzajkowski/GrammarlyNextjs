import { NextResponse } from "next/server";
import {Configuration, OpenAIApi} from "openai"
import User from "@/app/db/schema";

interface TextCheckRequests {
    word: string
    language: string
    _id: string
}

export async function POST(req : Request) {
    const {word,language,_id}:TextCheckRequests = await req.json()
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_SECRET_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const promptGrammar:string = `You will be provided with word in ${language}, and you will write synonyms of this word or words that can replace this word`
    
    const user = await User.findOne({_id:_id})

    if (user.plan=='free'){
      if (user.prompts<=1000){
        if (word){
          await User.findByIdAndUpdate({_id:_id},{prompts: user.prompts+1})
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
      else{
        return NextResponse.json({error: 'You used your free plan ai prompts'})
      }
    }
    if (user.plan=='premiun'){
      if (user.prompts<=10000){
        if (word){
          await User.findByIdAndUpdate({_id:_id},{prompts: user.prompts+1})
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
      else{
        return NextResponse.json({error: 'You used your premium plan ai prompts'})
      }
    }
    if (user.plan=='buisness'){
      if (user.prompts<=20000){
        if (word){
          await User.findByIdAndUpdate({_id:_id},{prompts: user.prompts+1})
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
      else{
        return NextResponse.json({error: 'You used your buisness plan ai prompts'})
      }
    }
}