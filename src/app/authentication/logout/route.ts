import { deleteSession } from "@/services/session/session"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    await deleteSession()
    return NextResponse.redirect(new URL('/authentication/login/', request.nextUrl))
}