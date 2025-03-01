import { formatDateToISO } from "@/app/_utility/date"
import { prisma } from "./prisma"

export const createProfile = async (userId: number, first_name: string, last_name: string, date_of_birth: string) => {
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