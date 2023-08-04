import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
//@ts-ignore
import jwt from "jsonwebtoken";

export const config = {
  matcher: ["/api/admin/:path*", "/api/user/:path*"],
};

export function middleware(request: NextRequest) {
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("Authorization", "Bearer token");
  console.log(requestHeaders);

  // You can also set request headers in NextResponse.rewrite
  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    (err: any, decoded: any) => {
      if (err) {
        return new NextResponse(
          JSON.stringify({ success: false, message: "authentication failed" }),
          { status: 401, headers: { "content-type": "application/json" } }
        );
      }
      // request. = decoded;
      NextResponse.next();
    }
  );
}
