"use server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { db } from "@/lib/db";
import { getUserByEmail } from "../data/user";
import { registerSchema } from "../schemas";
import { generateVerificationToken } from "@/lib/token";
import { sendVerificationEmail } from "@/lib/mail";

export async function register(values: z.infer<typeof registerSchema>){
    const validateFields = registerSchema.safeParse(values);
    if(!validateFields.success){
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
    });

    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token,
    );

    return{success: "Confirmation email sent!"};
}

