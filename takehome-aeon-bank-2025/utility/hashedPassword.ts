import md5 from 'md5'

const hashedPassword = (password: string, seed: string) => {
    return md5(password)
}

export { hashedPassword }