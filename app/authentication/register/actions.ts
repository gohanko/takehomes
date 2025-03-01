"use server"
import { formatDateToISO } from '@/app/_utility/date'
import { RegisterFormSchema, FormState } from '@/app/_lib/definitions'
import { prisma } from '@/app/_lib/prisma'
import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation'

const validateFormData = (formData: FormData) => {
    const validatedFields = RegisterFormSchema.safeParse({
        first_name: formData.get('first_name'),
        last_name: formData.get('last_name'),
        date_of_birth: formData.get('date_of_birth'),
        email: formData.get('email'),
        confirmation_email: formData.get('confirmation_email'),
        password: formData.get('password'),
    })

    return validatedFields
}

const createUser = async (email: string, password: string) => {
    const hashed_password = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: {
            email: email,
            hashed_password: hashed_password
        }
    })

    return user
}

const createProfile = async (userId: number, first_name: string, last_name: string, date_of_birth: string) => {
    const formattedDateOfBirth = formatDateToISO(date_of_birth)
    const profile = await prisma.profile.create({
        data: {
            userId: userId,
            first_name: first_name,
            last_name: last_name,
            date_of_birth: formattedDateOfBirth,
            spouse_first_name: '',
            spouse_last_name: '',
        }
    })

    return profile
}

export const register = async (state: FormState, formData: FormData) => {
    const validatedFields = validateFormData(formData)
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

    const profile = await createProfile(user.id, first_name, last_name, date_of_birth)
    redirect('/authentication/login')
}
