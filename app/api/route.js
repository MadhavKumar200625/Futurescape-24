import { NextResponse } from 'next/server';

import { headers } from 'next/headers.js';
import middleware from './middelware.js';

export async function GET(req){
    const middlewareResponse = await middleware(req)
    if(middlewareResponse.status == true){
        return NextResponse.json("hello World")
    }else{
        return NextResponse.json(middlewareResponse)
    }
    
    
  
  

  

}