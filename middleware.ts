import { NextResponse } from "next/server"
import { NextRequest } from "next/server"


export default function middlware(request: NextRequest, response: NextResponse) {
const isAdmin = request.cookies.get("isAdmin")

// protect admin routes
if (!isAdmin && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", request.url))
}
return NextResponse.next();
}