import { z } from "zod";

export const signUpSchema = z
  .object({
    username: z
      .string()
      .min(2, "Username must be at least 2 characters")
      .max(20, "Username must be at most 20 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  })
  .required();
export const signInSchema = z
  .object({
    identifier: z
      .string()
      .email("Invalid email address")
      .or(
        z.string().min(2, "Username must be at least 2 characters").max(20, "Username must be at most 20 characters")
      ),
    password: z.string().min(6, "Password must be at least 6 characters"),
  })
  .required();
