import { routesConfig } from "../../../../configs/routes-config"
import { deleteSession } from "../../../../services/session/session"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: NextRequest) => {
    await deleteSession()
    return NextResponse.redirect(new URL(routesConfig.authentication_login.route, request.nextUrl))
}