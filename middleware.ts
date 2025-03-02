
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { decrypt, deleteSession } from './utility/session'
 
// Specify protected and public routes
const protectedRoutes = [
    '/profile/basic_details',
    '/profile/additional_details',
    '/profile/spouse_details',
    '/profile/personal_preferences',
    '/authentication/logout'
]

const publicAuthRoutes = [
    '/authentication/login',
    '/authentication/register',
]

const publicRoutes = publicAuthRoutes
 
export default async function middleware(req: NextRequest) {
    // Check if the current route is protected or public
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)
    
    // Decrypt the session from the cookie
    const cookie = (await cookies()).get('session')?.value
    const session = await decrypt(cookie)

    // Redirect to /login if the user is not authenticated
    if (isProtectedRoute && !session?.userId) {
        return NextResponse.redirect(new URL('/authentication/login', req.nextUrl))
    }

    // If Logout then clear cookies, and redirect.
    if (path.includes('/authentication/logout') && session?.userId) {
        await deleteSession()
        return NextResponse.redirect(new URL('/authentication/login', req.nextUrl))
    }

    // If on public auth routes but is authenticated redirect to basic details page.
    if (publicAuthRoutes.includes(path) && session?.userId) {
        return NextResponse.redirect(new URL('/profile/basic_details', req.nextUrl))
    }

    // Redirect to /dashboard if the user is authenticated
    if (
        isPublicRoute &&
        session?.userId &&
        !req.nextUrl.pathname.startsWith('/profile/basic_details')
    ) {
        return NextResponse.redirect(new URL('/profile/basic_details', req.nextUrl))
    }
    
    return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}