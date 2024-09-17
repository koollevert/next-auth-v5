"use server";

import { registerSchema } from "@/schemas";
import { z } from "zod";

export async function register(values: z.infer<typeof registerSchema>){
    const validateFields = registerSchema.safeParse(values);
    if(!validateFields){
        return{error: "Invalid fields"};
    }

    return{success: "Email sent!"};
}

