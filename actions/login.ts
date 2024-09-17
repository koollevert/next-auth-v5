"use server";

import { LoginSchema } from "@/schemas";
import { z } from "zod";

export async function login(values: z.infer<typeof LoginSchema>){
    const validateFields = LoginSchema.safeParse(values);
    if(!validateFields){
        return{error: "Invalid fields"};
    }

    return{success: "Email sent!"};
}

