"use server"

import { updateProfileByUserId } from "@/services/database/profile"
import { getSession } from "@/services/session/session"
import { redirect } from "next/navigation"
import { z } from "zod"

const SpouseDetailsFormSchema = z.object({
    spouse_salutation: z.string().nullable(),
    spouse_first_name: z
        .string()
        .trim(),
    spouse_last_name: z
        .string()
        .trim(),
})

export const editSpouseDetails = async (
    form_state: FormState,
    formData: FormData
) => {
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

const session = await getSession()
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

    redirect("/user/profile/spouse_details")
}