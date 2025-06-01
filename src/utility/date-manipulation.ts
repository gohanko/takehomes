export const formatDateToISO = (to_format: string) => {
    const date = new Date(to_format)
    return date.toISOString()
}

export const calculateAge = (date_of_birth: string) => {
    const date = new Date(date_of_birth)
    const now = new Date()

    const age = now.getFullYear() - date.getFullYear()
    return age
}

export const deductYearsFromDate = (to_deduct: string, by_years: number) => {
    const date = new Date(to_deduct)
    date.setFullYear(date.getFullYear() - by_years)
    return date.toISOString().substring(0, 10);
}