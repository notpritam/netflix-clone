import bcrypt from "bcrypt"

import {NextApiRequest, NextApiResponse} from 'next'

import  prismadb  from "@/lib/prismadb";




export const POST = async(req:NextApiRequest, res: NextApiResponse)=>{
    
    try{

        const {email, username, password} = req.body;
        console.log(email, username, password, "this is what we got");

        const existingUser = await prismadb.user.findUnique({
            where:{
                email,
            }
        });

        if(existingUser){
            return res.status(422).json({error: "Email Taken"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prismadb.user.create({
            data:{
                email,
                username,
                hashedPassword,
                image:'',
                emailVerified : new Date()
            }
        });

        return res.status(200).json(user);
        
    }catch(error){
        console.log(error);
        
        
    }
   
}