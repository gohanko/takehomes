import { prisma } from '@/app/_lib/_database/prisma'
import { hashPassword } from '../../_utility/password'

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

    if (!user) {
        return {}
    }

    const profile = prisma.profile.findUnique({
        where: {
            userId: user.id
        }
    })

    if (!profile) {
        return {}
    }

    return {
        user,
        profile
    }
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