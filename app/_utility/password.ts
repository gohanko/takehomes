import bcrypt from 'bcrypt'

export const hashPassword = async (password: string) : Promise<string> => {
    const hashedPassword = bcrypt.hash(password, 10)
    return hashedPassword
}

export const verifyPassword = async (password: string, storedHashedPassword: string) => {
    const isVerified = await bcrypt.compare(password, storedHashedPassword)
    return isVerified
}
