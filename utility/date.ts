export const formatDateToISO = (to_format: string) => {
    const date = new Date(to_format)
    return date.toISOString()
}
