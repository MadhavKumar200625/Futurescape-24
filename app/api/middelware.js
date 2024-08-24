import { NextResponse } from "next/server";
import { auth } from '../../middelwares/auth.js';
import { connectDB } from '../../middelwares/connectDB.js';

export default async function middleware(req) {

    if(auth(req.headers.get('authorization'))){
        if (await connectDB()){
            return {status: true}
        }
        else{
            return {status:false ,message:"DB Not Connected"}
        }
    }
    else{
        return {status:false ,message:"Not Authorized"}
    }
  
  }