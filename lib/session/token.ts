import 'server-only'

import { JWTPayload, jwtVerify, SignJWT } from "jose"

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export const encrypt = async (payload: SessionPayload) => {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(encodedKey)
}

export const decrypt = async (session: string | undefined = ''): Promise<JWTPayload | undefined> => {
    try {
        const { payload } = await jwtVerify(
            session,
            encodedKey, 
            {
                algorithms: ['HS256'],
            }
        )
        
        return payload
    } catch {
        
    }
}