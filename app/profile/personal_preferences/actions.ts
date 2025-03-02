"use server"

import { updateProfileByUserId } from "@/services/database/profile"
import { getSession } from "@/services/session/session"
import { redirect } from "next/navigation"
import { z } from "zod"


const PersonalPreferencesFormSchema = z.object({
    interests: z.string().trim(),
    sports: z.string().trim(),
    music: z.string().trim(),
    movie_tv: z.string().trim(),
})

export const editPersonalPreferences = async (
    form_state: FormState,
    formData: FormData
) => {
    const validatedFields = PersonalPreferencesFormSchema.safeParse({
        interests: formData.get("interests"),
        sports: formData.get("sports"),
        music: formData.get("music"),
        movie_tv: formData.get("movie_tv")
    })

    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors }
    }

    const {
        interests,
        sports,
        music,
        movie_tv,
    } = validatedFields.data;

    const session = await getSession()

    const profile = await updateProfileByUserId(
        Number(session?.userId),
        {
            interests,
            sports,
            music,
            movie_tv
        }
    )

    if (!profile) {
        return { message: "Something wrong!" }
    }

    redirect('/profile/personal_preferences')
}