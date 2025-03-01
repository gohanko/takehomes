import { z } from 'zod'
 
export const RegisterFormSchema = z.object({
    first_name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long.' })
        .trim(),
    last_name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long.' })
        .trim(),
    date_of_birth: z
        .string()
        .date()
        .trim(),
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    confirmation_email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
        .string()
        .min(8, { message: 'Be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .trim(),
})

export const LoginFormSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
        .string()
        .min(8, { message: 'Be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .trim(),
})
 
export type FormState =
  | {
      errors?: {
        first_name?: string[]
        last_name?: string[]
        date_of_birth?: string[]
        email?: string[]
        confirmation_email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined

export type SessionPayload = {
    userId: number,
    expiresAt: Date
}