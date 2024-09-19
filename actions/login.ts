"use server";

import * as z from "zod";
import { redirect } from "next/navigation";
import { LoginSchema } from "../schemas";
import { DEFAULT_LOGIN_REDIRECT } from "../routes";
import { signIn } from "../auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // Ensure it doesn't automatically redirect
    });

    // Check if there was an error in the result
    if (result?.error) {
      return { error: "Invalid credentials!" };
    }
    // Return success if the login is successful
    return { success: "Login successful!", redirectTo: DEFAULT_LOGIN_REDIRECT };

  } catch (error) {
    return { error: "Something went wrong!" };
  }
};



