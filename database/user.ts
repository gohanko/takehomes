import { prisma } from '@/database/prisma'
import { hashPassword } from '../utility/password'

export const getUserByEmail = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    return user
}

export const getUserById = async (id: number) => {
    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })

    return user
}

export const createUser = async (email: string, password: string) => {
    const hashedPassword = await hashPassword(password)

    const user = await prisma.user.create({
        data: {
            email: email,
            hashed_password: hashedPassword
        }
    })

    return user
}

export const updateUserByUserId = async (userId: number, args: any) => {
    const profile = await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            ...args
        },
    })

    return profile
}