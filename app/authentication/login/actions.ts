"use server"

import { z } from 'zod'
import { redirect } from "next/navigation"
import { createSession } from "@/utility/session"
import { getUserByEmail } from "@/database/user"
import { verifyPassword } from "@/utility/password"

const LoginFormSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
        .string()
        .min(8, { message: 'Be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .trim(),
})

export const login = async (state: LoginFormState, formData: FormData) => {
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password")
    })
    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors }
    }

    const {
        email,
        password
    } = validatedFields.data;

    const user = await getUserByEmail(email)
    if (!user) {
        return { message: "Email or password must be correct. !" }
    }

    const isPasswordVerified = await verifyPassword(password, user.hashed_password)
    if (!isPasswordVerified) {
        return { message: "Email or password must be correct."}
    }

    await createSession(user.id)

    redirect('/profile/basic_details')
}
