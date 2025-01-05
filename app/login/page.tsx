'use client'
import { useState } from "react"
import LoginForm from "../../containers/LoginForm/LoginForm"
import { useAuthStore } from "@/stores/useAuthStore"
import { useRouter } from "next/navigation"

const Page = () => {
    const router = useRouter()
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn)

    if (isLoggedIn) {
        router.push('/dashboard/')
    }

    return <LoginForm />
}
export default Page