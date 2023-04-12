import { z } from "zod";
import { signUpSchema } from "./schemas";

export type SignUpFormData = z.infer<typeof signUpSchema>;
