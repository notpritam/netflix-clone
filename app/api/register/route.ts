import bcrypt from "bcrypt"

import {NextApiRequest, NextApiResponse} from 'next'

import  prismadb  from "@/lib/prismadb";




export const GET = async(req:NextApiRequest, res: NextApiResponse)=>{
    
    try{

        const {email, username, password} = req.body;
        
    }catch(error){
        console.log(error);
        
        
    }
   
}