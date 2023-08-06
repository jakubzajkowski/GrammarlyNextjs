import { NextRequest } from "next/server"


export async function POST(req : NextRequest) {
    return new Response('Logged Out Success', {
      status: 200,
      headers: { 'Set-Cookie': `token=xd; HttpOnly; Max-Age=0; Path=/; SameSite=None; Secure`},
    })
  }