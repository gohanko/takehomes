import { prisma } from '@/app/_lib/prisma'

const getUserById =  async (id: number) => {
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