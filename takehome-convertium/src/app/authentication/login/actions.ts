"use server"

import { redirect } from "next/navigation"
import { createSession } from "../../../services/session/session"
import { getUserByEmail } from "../../../services/database/user"
import { verifyPassword } from "../../../utility/password"
import { LoginFormSchema } from "./schema"
import { routesConfig } from "../../../configs/routes-config"

export const login = async (
    state: FormState,
    formData: FormData
) => {
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
        remember_me: formData.get('remember_me') == "on"
    })
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

    redirect(routesConfig.user_profile_basic_details.route)
}
