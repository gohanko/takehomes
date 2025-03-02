"use server"

import { z } from 'zod'
import { redirect } from "next/navigation"
import { createSession } from "@/services/session/session"
import { getUserByEmail } from "@/services/database/user"
import { verifyPassword } from "@/utility/password"

const LoginFormSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
        .string()
        .min(8, { message: 'Be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .trim(),
    remember_me: z.boolean()
})

export const login = async (
    state: FormState,
    formData: FormData
) => {
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
        remember_me: formData.get('remember_me') == "on"
    })
    console.log(validatedFields.error?.flatten().fieldErrors)
    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors }
    }
    
    const {
        email,
        password,
        remember_me
    } = validatedFields.data;
    const user = await getUserByEmail(email)
    if (!user) {
        return { message: "Your passwords do not match." }
    }

    const isPasswordVerified = await verifyPassword(password, user.hashed_password)
    if (!isPasswordVerified) {
        return { message: "Your passwords do not match."}
    }

    await createSession(user.id, remember_me)

    redirect('/profile/basic_details')
}
