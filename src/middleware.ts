import { withClerkMiddleware, getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default withClerkMiddleware((req: NextRequest) => {
  const isAuthPage = req.nextUrl.pathname.startsWith("/login") || req.nextUrl.pathname.startsWith("/register");
  const { userId } = getAuth(req);
  if (isAuthPage) {
    if (userId) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
  return NextResponse.next();
});

// Stop Middleware running on static files
export const config = { matcher: "/((?!_next/image|_next/static|favicon.ico).*)" };
