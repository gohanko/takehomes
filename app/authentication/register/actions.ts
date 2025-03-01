"use server"

import { redirect } from 'next/navigation'
import { createUser } from '@/app/_lib/_database/user'
import { createProfile } from '@/app/_lib/_database/profile'
import { z } from 'zod'
 
const RegisterFormSchema = z.object({
    first_name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long.' })
        .trim(),
    last_name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long.' })
        .trim(),
    date_of_birth: z
        .string()
        .date()
        .trim(),
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    confirmation_email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
        .string()
        .min(8, { message: 'Be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .trim(),
})

export const register = async (
    state: LoginFormState,
    formData: FormData
) => {
    const validatedFields = RegisterFormSchema.safeParse({
        first_name: formData.get('first_name'),
        last_name: formData.get('last_name'),
        date_of_birth: formData.get('date_of_birth'),
        email: formData.get('email'),
        confirmation_email: formData.get('confirmation_email'),
        password: formData.get('password'),
    })
    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors }
    }

    const {
        first_name,
        last_name,
        date_of_birth,
        email,
        confirmation_email,
        password,
    } = validatedFields.data;

    if (email != confirmation_email) {
        return { 
            errors: { 
                email: ["Email and confirmation email do not match."],
                confirmation_email: ["Email and confirmation email do not match."]
            }
        }
    }

    const user = await createUser(email, password)
    if (!user) {
        return {
            message: "An error occured while creating your account."
        }
    }

    await createProfile(user.id, first_name, last_name, date_of_birth)
    redirect('/authentication/login')
}
