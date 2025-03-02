"use server"

import { updateProfileByUserId } from "@/lib/database/profile"
import { updateUserByUserId } from "@/lib/database/user"
import { decrypt } from "@/lib/session/token"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { z } from "zod"

const BasicDetailFormSchema = z.object({
    salutations: z.string().trim(),
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

export const editBasicDetails = async (formData: FormData) => {
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

    const cookie = (await cookies()).get('session')?.value
    const session = await decrypt(cookie)

    const user = await updateUserByUserId(Number(session?.userId), { email: email })
    if (!user) {
        return { message: "User Update went wrong!"}
    }

    const profile = await updateProfileByUserId(user.id, { salutations, first_name: first_name, last_name: last_name })
    if (!profile) {
        return { message: "Profile Update went wrong!"}
    }

    redirect("/profile/basic_details")
}