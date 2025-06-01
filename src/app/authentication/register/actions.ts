"use server"

import { redirect } from 'next/navigation'
import { createUser, getUserByEmail } from '@/services/database/user'
import { createProfile } from '@/services/database/profile'
import { calculateAge } from '@/utility/date-manipulation'
import { RegisterFormSchema } from './schema'
import { routesConfig } from '@/configs/routes-config'

export const register = async (
    state: FormState,
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

    const age = calculateAge(date_of_birth)
    if (age < 17) {
        return {
            errors: {
                date_of_birth: ["Must be at least 17 during registration!"]
            }
        }
    }

    const user = await getUserByEmail(email)
    if (user) {
        return {
            message: "An error occured while creating your account."
        }
    }

    const newUser = await createUser(email, password)
    await createProfile(newUser.id, first_name, last_name, date_of_birth)
    return redirect(routesConfig.authentication_login.route)
}
