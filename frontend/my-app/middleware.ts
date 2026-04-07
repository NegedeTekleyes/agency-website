import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"


export default function middleware(request: NextRequest) {
const token = request.cookies.get("token")?.value
const isAdminRoute = request.nextUrl.pathname.startsWith("/admin")
const isLoginPage = request.nextUrl.pathname === "/"

// if trying to access admin route without token, redirect to login
if (isAdminRoute && !token) {
    return NextResponse.redirect(new URL("/login",request.url))
}
// if already logged in and trying to access login page, redirect to admin
if(isLoginPage && token) {
    return NextResponse.redirect(new URL("/admin", request.url))
}

return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*", "/login"],
}