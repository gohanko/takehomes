import 'server-only'

import { cookies } from 'next/headers'
import { decrypt, encrypt } from './token'

type TCookieOption = {
    httpOnly: boolean,
    secure: boolean,
    expires?: number | Date,
    sameSite: 'lax',
    path: '/'
}
 
export const createSession = async (userId: number, rememberMe: boolean) => {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const session = await encrypt({ userId, expiresAt })    
    
    const cookieOptions: TCookieOption = {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/',
    }

    if (rememberMe) {
        cookieOptions.expires = expiresAt
    }

    const cookieStore = await cookies()
    cookieStore.set('session', session, cookieOptions)
}

export const getSession = async () => {
    const cookie = (await cookies()).get('session')?.value
    const session = await decrypt(cookie)
    return session
}

export const updateSession = async () => {
    const session = (await cookies()).get('session')?.value
    const payload = await decrypt(session)
   
    if (!session || !payload) {
        return null
    }
   
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
   
    const cookieStore = await cookies()
    cookieStore.set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expires,
        sameSite: 'lax',
        path: '/',
    })
}

export const deleteSession = async () => {
    const cookieStore = await cookies()
    cookieStore.delete('session')
}
