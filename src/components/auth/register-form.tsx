"use client";
import { useForm } from "react-hook-form";
import { CardWrapper } from "./card-wrapper";
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { useState, useTransition } from "react";
import { registerSchema } from "../../../schemas";
import { register } from "../../../actions/register";

export default function RegisterForm(){
    const [error, setError]=useState<string | undefined>("");
    const [success, setSuccess]= useState<string | undefined>("")
    const [isPending, startTransition]=useTransition();
    const form= useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
        }
    })

    const onSubmit=(values: z.infer<typeof registerSchema>)=>{
        setError("");
        setSuccess("");
        startTransition(()=>{
            register(values).then((data)=>{
                setError(data.error);
                setSuccess(data.success)
            })
        })
    }
    return(
        <div>
            <CardWrapper
                headerLabel="Create an account"
                backButtonLabel="Already have an account"
                backButtonHref="/auth/login"
                showSocial
            >
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                >
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({field})=>(
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input disabled={isPending} {...field} placeholder="John Doe"/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field})=>(
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input  disabled={isPending} {...field} placeholder="john.doe@example.com" type="email"/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({field})=>(
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input disabled={isPending} {...field} placeholder="******" type="password"/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                        </div>
                        <FormError message={error}/>
                        <FormSuccess message={success}/>
                        <Button type="submit" disabled={isPending} className="w-full">Sign Up</Button>
                    </form>
                </Form>
            </CardWrapper>
        </div>
    )
}