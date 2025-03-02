"use server"

import { updateProfileByUserId } from "@/lib/database/profile"
import { decrypt } from "@/lib/session/token"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { z } from "zod"

const SpouseDetailsFormSchema = z.object({
    spouse_salutation: z.string().trim(),
    spouse_first_name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long.' })
        .trim(),
    spouse_last_name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long.' })
        .trim(),
})

export const editSpouseDetails = async (formData: FormData) => {
    const validatedFields = SpouseDetailsFormSchema.safeParse({
        spouse_salutation: formData.get("spouse_salutation"),
        spouse_first_name: formData.get("spouse_first_name"),
        spouse_last_name: formData.get("spouse_last_name"),
    })

    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors }
    }

    const {
        spouse_salutation,
        spouse_first_name,
        spouse_last_name,
    } = validatedFields.data;

    const cookie = (await cookies()).get('session')?.value
    const session = await decrypt(cookie)

    const profile = await updateProfileByUserId(
        Number(session?.userId),
        {
            spouse_salutation,
            spouse_first_name,
            spouse_last_name,
        })
    if (!profile) {
        return { message: "Profile Update went wrong!"}
    }

    redirect("/profile/spouse_details")
}