import { NextResponse } from "next/server";
import {Configuration, OpenAIApi} from "openai"
import User from "@/app/db/schema";

interface TextCheckRequests {
    text: string
    language: string
    _id: string
}

export async function POST(req : Request) {
    const {text,language,_id}:TextCheckRequests = await req.json()
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_SECRET_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const promptGrammar:string = `You will be provided with statements in ${language}, and your task to check grammar of words do not change html brackets, if grammar is right write the same provided text`
    
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
      else{
        return NextResponse.json({error: 'You used your premium plan ai prompts'})
      }
    }
    if (user.plan=='business'){
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
      else{
        return NextResponse.json({error: 'You used your business plan ai prompts'})
      }
    }
}