import { z } from "zod";
import { signInSchema, signUpSchema } from "./schemas";

export type SignUpFormData = z.infer<typeof signUpSchema>;
export type SignInFormData = z.infer<typeof signInSchema>;
