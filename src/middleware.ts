"use server"

import { NextRequest, NextResponse } from 'next/server'
import { getSession } from './services/session/session'
import { routesConfig } from './configs/routes-config'

export default async function middleware(req: NextRequest) {
    const session = await getSession()
    const isUserAuthorized = Boolean(session?.userId)

    const currentPath = req.nextUrl.pathname
    const routeConfig = Object.values(routesConfig).filter(route => route.route == currentPath)[0]

    const isAuthenticatedOnly = routeConfig.authenticatedOnly
    if (isAuthenticatedOnly && !isUserAuthorized) {
        return NextResponse.redirect(new URL(routesConfig.authentication_login.route, req.nextUrl))
    }
    
    const isPublicOnly = routeConfig.publicOnly
    if (isPublicOnly && isUserAuthorized) {
        return NextResponse.redirect(new URL(routesConfig.user_profile_basic_details.route, req.nextUrl))
    }

    return NextResponse.next()
}
 
// Routes that the middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}