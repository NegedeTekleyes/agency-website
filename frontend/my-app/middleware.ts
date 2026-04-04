import { NextResponse } from "next/server"
import { NextRequest } from "next/server"


export default function middlware(request: NextRequest) {
const isAdmin = request.cookies.get("isAdmin")?.value
console.log("cOOKIE:", isAdmin)

// protect admin routes
if (!isAdmin && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/login", request.url))
}
return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"]
}