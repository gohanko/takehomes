"use server"

import { FormState } from "@/app/_lib/definitions"
import { redirect } from "next/navigation"
import { prisma } from '@/app/_lib/prisma'
import { LoginFormSchema } from '@/app/_lib/definitions'
import bcrypt from 'bcrypt'
import { createSession } from "@/app/_lib/session"

const validateFormData = (formData: FormData) => {
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password")
    })

    return validatedFields
}

const verifyPassword = async (password: string, stored_hashed_password: string) => {
    const isVerified = await bcrypt.compare(password, stored_hashed_password)
    return isVerified
}

const getUser = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    return user
}

export const login = async (state: FormState, formData: FormData) => {
    const validatedFields = validateFormData(formData)
    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors }
    }

    const {
        email,
        password
    } = validatedFields.data;

    const user = await getUser(email)
    if (!user) {
        return { message: "Email or password must be correct. !" }
    }

    const isPasswordVerified = await verifyPassword(password, user.hashed_password)
    if (!isPasswordVerified) {
        return { message: "Email or password must be correct."}
    }

    await createSession(user.id)

    redirect('/profile/')
}
