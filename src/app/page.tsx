import PostForm from "@/components/forms/PostForm";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs/app-beta";
import Link from "next/link";
export const runtime = "edge";
export const revalidate = 0;
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <SignedIn>
        <PostForm />
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <Link href="/register" className="hover:underline">
          Register
        </Link>
        <Link href="/login" className="hover:underline">
          Login
        </Link>
      </SignedOut>
    </main>
  );
}
