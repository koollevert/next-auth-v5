import * as z from "zod";

export const ResetSchema = z.object({
    email: z.string().email({message: "Email is reqiured"}),
});

export const LoginSchema = z.object({
    email: z.string().email({message: "Email is reqiured"}),
    password: z.string().min(1,{message: "Password is required"})
});
export const registerSchema = z.object({
    email: z.string().email({message: "Email is reqiured"}),
    password: z.string().min(6,{message: "Minimun of 6 characters required"}),
    name: z.string().min(1,{message: "Name is required"}),
});