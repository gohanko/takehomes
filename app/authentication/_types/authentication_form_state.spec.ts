 
type AuthenticationFormState = {
    errors?: {
        first_name?: string[]
        last_name?: string[]
        date_of_birth?: string[]
        email?: string[]
        confirmation_email?: string[]
        password?: string[]
    }
    message?: string
} | undefined
