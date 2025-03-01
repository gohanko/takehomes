"use server"

import { deleteSession } from "@/app/_utility/session"
import { redirect } from "next/navigation"

export const logout = async () => {
    deleteSession()
    redirect('/authentication/login')
}