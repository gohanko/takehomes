import { formatDateToISO } from "@/utility/date"
import { prisma } from "./prisma"

export const createProfile = async (userId: number, first_name: string, last_name: string, date_of_birth: string) => {
    const formattedDateOfBirth = formatDateToISO(date_of_birth)
    const profile = await prisma.profile.create({
        data: {
            user_id: userId,
            first_name: first_name,
            last_name: last_name,
            date_of_birth: formattedDateOfBirth,
            spouse_first_name: '',
            spouse_last_name: '',
        }
    })

    return profile
}

export const getProfileByUserId = async (userId: number) => {
    const profile = await prisma.profile.findUnique({
        where: {
            user_id: userId
        }
    })

    return profile
}

export const updateProfileByUserId = async (userId: number, args: any) => {
    const profile = await prisma.profile.update({
        where: {
            user_id: userId
        },
        data: {
            ...args
        },
    })

    return profile
}