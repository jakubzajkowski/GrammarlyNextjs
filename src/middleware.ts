import * as jose from 'jose';
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
export interface UserRequest extends NextRequest {
    token: any
}

export async function middleware(req: UserRequest) {
    const token = req.cookies.get('token');
    try {
    if (!token) {
        return NextResponse.json({ error: 'Unauthorized' });
    }
    else{
        const decode = await jose.jwtVerify(token.value, new TextEncoder().encode(process.env.JWT_SECRET_TOKEN as string));
        if (decode){
            const { _id } : string | any = decode.payload.user
            return NextResponse.next({headers: { 'Set-Cookie': `session=${_id}; HttpOnly; Max-Age=${60 * 60}; Path=/; SameSite=None; Secure`}});
        }
        else{
            return NextResponse.json({ error: 'Unauthorized' });
        }
    }
    } catch (error) {
      return NextResponse.json({ error: 'Unauthorized' });
    } 
}
export const config = {
    matcher: ['/api/user']
};
 
