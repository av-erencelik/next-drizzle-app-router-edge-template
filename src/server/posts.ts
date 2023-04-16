import db from "@/db/db";
import { NewPost } from "@/db/dbtypes";
import { posts } from "@/db/schema";
import { eq, and } from "drizzle-orm/expressions";
export const checkPostSlug = async (slug: string, userId: string) => {
  const post = await db
    .select({ slug: posts.slug })
    .from(posts)
    .where(and(eq(posts.userId, userId), eq(posts.slug, slug)));
  return post.length > 0;
};
export const sharePost = async (post: NewPost) => {
  try {
    const response = await db.insert(posts).values(post);
    return { err: null, response };
  } catch (err) {
    return { err, response: null };
  }
};
