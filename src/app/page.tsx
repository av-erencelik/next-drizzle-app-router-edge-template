import PostForm from "@/components/forms/PostForm";
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta";
import Link from "next/link";
export const runtime = "edge";
export const revalidate = 0;
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-cyan-50 p-24">
      <SignedIn>
        <PostForm />
      </SignedIn>
      <SignedOut>
        <div className="flex gap-5">
          <Link
            href="/register"
            className="inline-flex h-10 items-center justify-center rounded-md bg-cyan-800 px-4 py-2 text-sm font-medium text-cyan-50 transition-colors hover:bg-cyan-600 focus:outline-none focus:ring-1 focus:ring-cyan-600 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Register
          </Link>
          <Link
            href="/login"
            className="inline-flex h-10 items-center justify-center rounded-md bg-cyan-800 px-4 py-2 text-sm font-medium text-cyan-50 transition-colors hover:bg-cyan-600 focus:outline-none focus:ring-1 focus:ring-cyan-600 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Login
          </Link>
        </div>
      </SignedOut>
    </main>
  );
}
