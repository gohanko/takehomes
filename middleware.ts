"use server"

import { NextRequest, NextResponse } from 'next/server'
import { deleteSession, getSession } from './services/session/session'
 
const authorizedOnlyRoutes = [
    '/profile/basic_details',
    '/profile/additional_details',
    '/profile/spouse_details',
    '/profile/personal_preferences',
    '/authentication/logout'
]

const anonymousOnlyRoutes = [
    '/authentication/login',
    '/authentication/register',
]

const publicRoutes = anonymousOnlyRoutes
 
export default async function middleware(req: NextRequest) {
    // Check if the current route is protected or public
    const path = req.nextUrl.pathname
    const isPublicRoute = publicRoutes.includes(path)
    
    // Decrypt the session from the cookie
    const session = await getSession()    

    // Redirect to /login if the user is not authenticated
    const isProtectedRoute = authorizedOnlyRoutes.includes(path)
    if (isProtectedRoute && !session?.userId) {
        return NextResponse.redirect(new URL('/authentication/login', req.nextUrl))
    }
    
    // If on anonymous only routes but is authenticated redirect to basic details page.
    const isAnonymousOnlyRoute = anonymousOnlyRoutes.includes(path)
    if (isAnonymousOnlyRoute && session?.userId) {
        return NextResponse.redirect(new URL('/profile/basic_details', req.nextUrl))
    }

    // If user is authenticated, redirect to basic details route
    if (isPublicRoute && session?.userId && !req.nextUrl.pathname.startsWith('/profile/basic_details')) {
        return NextResponse.redirect(new URL('/profile/basic_details', req.nextUrl))
    }

    // If logout then clear cookies, and redirect.
    if (path.includes('/authentication/logout') && session?.userId) {
        await deleteSession()
        return NextResponse.redirect(new URL('/authentication/login', req.nextUrl))
    }
    
    return NextResponse.next()
}
 
// Routes that the middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}