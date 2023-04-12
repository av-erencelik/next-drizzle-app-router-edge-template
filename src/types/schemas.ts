import { z } from "zod";

export const signUpSchema = z
  .object({
    username: z
      .string()
      .min(4, "Username must be at least 4 characters")
      .max(20, "Username must be at most 20 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  })
  .required();
export const signInSchema = z
  .object({
    identifier: z
      .string()
      .min(4, "Username must be at least 4 characters")
      .max(20, "Username must be at most 20 characters")
      .regex(/^[a-zA-Z0-9_]+$/, "Enter a valid username or email address")
      .or(z.string().email("Invalid email address")),
    password: z.string().min(6, "Password must be at least 6 characters"),
  })
  .required();
export const postSchema = z
  .object({
    text: z.string().min(1, "Text is required"),
  })
  .required();
