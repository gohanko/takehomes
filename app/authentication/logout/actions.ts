"use server"

import { deleteSession } from "@/services/session/session"
import { redirect } from "next/navigation"

export const logout = async () => {
    await deleteSession()
    redirect('/authentication/login/')
}
