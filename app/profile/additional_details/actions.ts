"use server"

import { updateProfileByUserId } from "@/services/database/profile"
import { calculateAge, formatDateToISO } from "@/utility/date"
import { redirect } from "next/navigation"
import { z } from "zod"
import { getSession } from "@/services/session/session"

const AdditionalDetailFormSchema = z.object({
    date_of_birth: z
        .string()
        .date()
        .trim(),
    gender: z
        .string()
        .trim(),
    marital_status: z
        .string()
        .trim(),
    street_number: z.string().trim(),
    street_name: z.string().trim(),
    postcode: z.string().trim(),
    city_town: z.string().trim(),
    state: z.string().trim()
})

export const editAdditionalDetails = async (
    form_state: FormState,
    formData: FormData
) => {
    const validatedFields = AdditionalDetailFormSchema.safeParse({
        date_of_birth: formData.get("date_of_birth"),
        gender: formData.get("gender"),
        marital_status: formData.get("marital_status"),
        street_number: formData.get("street_number"),
        street_name: formData.get("street_name"),
        postcode: formData.get("postcode"),
        city_town: formData.get("city_town"),
        state: formData.get("state"),
    })

    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors }
    }

    const {
        date_of_birth,
        gender,
        marital_status,
        street_number,
        street_name,
        postcode,
        city_town,
        state,
    } = validatedFields.data;

const session = await getSession()
    const age = calculateAge(date_of_birth)
    if (age < 17) {
        return {
            errors: {
                date_of_birth: ["Must be at least 17 during registration!"]
            }
        }
    }
    
    const formattedDob = formatDateToISO(date_of_birth)
    const profile = await updateProfileByUserId(
        Number(session?.userId), 
        {
            date_of_birth: formattedDob,
            marital_status,
            gender,
            street_number,
            street_name,
            postcode,
            city_town,
            state,
        }
    )
    if (!profile) {
        return { message: "Profile Update went wrong!"}
    }

    redirect("/profile/additional_details")
}
