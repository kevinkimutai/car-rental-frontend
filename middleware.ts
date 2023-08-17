import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt_decode from "jwt-decode";

type Decoded = { id: string; iat: number; exp: number };

export async function middleware(request: NextRequest) {
  const userToken = request.cookies.get("jwt")?.value;
  const currentUrl = new URL(request.url);
  const redirectUrl = new URL("/auth/login", request.url);
  redirectUrl.searchParams.set("redirect", currentUrl.pathname);

  if (!userToken) {
    return NextResponse.redirect(redirectUrl);
  }

  const decoded: Decoded = jwt_decode(userToken);

  if (decoded.exp * 1000 < Date.now()) {
    // Multiply by 1000 to convert seconds to milliseconds
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout", "/admin"],
};
