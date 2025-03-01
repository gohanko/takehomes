"use server"
import { RegisterFormSchema, FormState } from '@/lib/definitions'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcrypt'

export const register = async (state: FormState, formData: FormData) => {
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
        return { message: "Email and confirmation email do not match." }
    }

    const hashed_password = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: {
            email: email,
            hashed_password: hashed_password,
        }
    })

    if (!user) {
        return {
            message: "An error occured while creating your account."
        }
    }

    const profile = await prisma.profile.create({
        data: {
            userId: user.id,
            first_name: first_name,
            last_name: last_name,
            date_of_birth: date_of_birth,
            spouse_first_name: '',
            spouse_last_name: '',
            addressId: 0,
        }
    })

}
