import { z } from "zod";
import { postSchema, signInSchema, signUpSchema } from "./schemas";

export type SignUpFormData = z.infer<typeof signUpSchema>;
export type SignInFormData = z.infer<typeof signInSchema>;
export type PostData = z.infer<typeof postSchema>;
