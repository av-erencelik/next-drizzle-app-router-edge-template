import { z } from "zod";
import { signUpSchema } from "./schemas";

export type FormData = z.infer<typeof signUpSchema>;
