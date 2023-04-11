import { signUpSchema } from "./schemas";

export type FormData = z.infer<typeof signUpSchema>;
