import { posts, users } from "./schema";
import { InferModel } from "drizzle-orm";

export type User = InferModel<typeof users>; // return type when queried
export type NewUser = InferModel<typeof users, "insert">; // insert type
export type Post = InferModel<typeof posts>; // return type when queried
export type NewPost = InferModel<typeof posts, "insert">; // insert type
