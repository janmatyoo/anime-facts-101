import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('admin-auth')?.value
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin/dashboard')

  if (isAdminRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL('/admin', request.url)) // redirect to login
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/dashboard/:path*'],
}
