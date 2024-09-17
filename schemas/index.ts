import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({message: "Email is reqiured"}),
    password: z.string().min(1,{message: "Password is required"})
});