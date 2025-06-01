"use server"

import { routesConfig } from "../../../../configs/routes-config"
import { updateProfileByUserId } from "../../../../services/database/profile"
import { updateUserByUserId } from "../../../../services/database/user"
import { getSession } from "../../../../services/session/session"
import { redirect } from "next/navigation"
import { z } from "zod"

const BasicDetailFormSchema = z.object({
    salutations: z.string().nullable(),
    first_name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long.' })
        .trim(),
    last_name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long.' })
        .trim(),
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
})

export const editBasicDetails = async (
    form_state: FormState,
    formData: FormData
) => {
    const validatedFields = BasicDetailFormSchema.safeParse({
        salutations: formData.get("salutations"),
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        email: formData.get("email")
    })

    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors }
    }

    const {
        salutations,
        first_name,
        last_name,
        email,
    } = validatedFields.data;

const session = await getSession()
    const user = await updateUserByUserId(Number(session?.userId), { email: email })
    if (!user) {
        return { message: "User Update went wrong!"}
    }

    const profile = await updateProfileByUserId(user.id, { salutations, first_name: first_name, last_name: last_name })
    if (!profile) {
        return { message: "Profile Update went wrong!"}
    }

    redirect(routesConfig.user_profile_basic_details.route)
}