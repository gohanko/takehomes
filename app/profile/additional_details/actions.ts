"use server"

import { updateProfileByUserId } from "@/database/profile"
import { updateUserByUserId } from "@/database/user"
import { formatDateToISO } from "@/utility/date"
import { decrypt } from "@/utility/session"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { date, z } from "zod"


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

export const editAdditionalDetails = async (formData: FormData) => {
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

    const cookie = (await cookies()).get('session')?.value
    const session = await decrypt(cookie)
    
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
