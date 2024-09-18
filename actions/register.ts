"use server";
import bcrypt from "bcryptjs";

import { registerSchema } from "@/schemas";
import { z } from "zod";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export async function register(values: z.infer<typeof registerSchema>){
    const validateFields = registerSchema.safeParse(values);
    if(!validateFields){
        return{error: "Invalid fields"};
    }

    const {email, password, name}: any=validateFields.data;

    const hashedPassword= await bcrypt.hash(password, 10);

    const existingUser=await getUserByEmail(email)

    if(existingUser){
        return {error: "Email already in use!"}
    }

    await db.user.create({
        data:{
            name,
            email,
            password: hashedPassword, 
        }
    })

    //send verification token email

    return{success: "user created!"}


    return{success: "Email sent!"};
}

