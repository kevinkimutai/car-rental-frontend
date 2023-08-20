import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt_decode from "jwt-decode";

type Decoded = { id: string; iat: number; exp: number };

export async function middleware(request: NextRequest) {
  const userToken = JSON.parse(request.cookies.get("jwt")!.value);
  const currentUrl = new URL(request.url);
  const redirectUrl = new URL("/auth/login", request.url);
  redirectUrl.searchParams.set("redirect", currentUrl.pathname);

  console.log("COOKIE", userToken);
  console.log("REQUEST", request);

  if (!userToken) {
    console.log("I AM THE ONE WHO REDIRECTED 1");

    return NextResponse.redirect(redirectUrl);
  }

  const decoded: Decoded = jwt_decode(userToken);

  if (decoded.exp * 1000 < Date.now()) {
    console.log("I AM THE ONE WHO REDIRECTED 2");

    // Multiply by 1000 to convert seconds to milliseconds
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }

  console.log("I AM THE ONE WHO REDIRECTED 3");
  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout", "/admin"],
};
