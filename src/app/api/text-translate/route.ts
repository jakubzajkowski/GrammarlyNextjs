import { NextResponse } from "next/server";
import {Configuration, OpenAIApi} from "openai"
import User from "@/app/db/schema";

interface TextCheckRequests {
    text: string
    language: string
    _id : string
}

export async function POST(req : Request) {
    const {text,language,_id}:TextCheckRequests = await req.json()
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_SECRET_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const promptGrammar:string = `You will be provided with statements, Your task is to translate this sentence in html brackets to ${language} do not change html brackets`
    const user = await User.findOne({_id:_id})

    if (user.plan=='free'){
      if (user.prompts<=1000){
        if (text){
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
      else{
        return NextResponse.json({error: 'You used your free plan ai prompts'})
      }
    }
    if (user.plan=='premium'){
      if (user.prompts<=10000){
        if (text){
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
      else{
        return NextResponse.json({error: 'You used your premium plan ai prompts'})
      }
    }
    if (user.plan=='buisness'){
      if (user.prompts<=20000){
        if (text){
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
      else{
        return NextResponse.json({error: 'You used your buisness plan ai prompts'})
      }
    }
}