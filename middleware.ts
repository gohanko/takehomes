"use server"

import { NextRequest, NextResponse } from 'next/server'
import { getSession } from './services/session/session'
 
const authorizedOnlyRoutes = [
    '/profile/basic_details',
    '/profile/additional_details',
    '/profile/spouse_details',
    '/profile/personal_preferences',
]

const unauthorizedOnlyRoutes = [
    '/authentication/login',
    '/authentication/register',
]
 
export default async function middleware(req: NextRequest) {
    const session = await getSession()
    const isUserAuthorized = Boolean(session?.userId)
    
    const path = req.nextUrl.pathname
    const isAuthorizedOnlyRoutes = authorizedOnlyRoutes.includes(path)
    if (isAuthorizedOnlyRoutes && !isUserAuthorized) {
        return NextResponse.redirect(new URL('/authentication/login', req.nextUrl))
    }

    const isUnauthorizedOnlyRoutes = unauthorizedOnlyRoutes.includes(path)
    if (isUnauthorizedOnlyRoutes && isUserAuthorized) {
        return NextResponse.redirect(new URL('/profile/basic_details', req.nextUrl))
    }

    return NextResponse.next()
}
 
// Routes that the middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}