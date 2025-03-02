
import { deleteSession } from "@/utility/session"
import { redirect } from "next/navigation"

const handler = async () =>  {
    const logout = async () => {
        await deleteSession()
        redirect('/authentication/login')
    }

    return <></>
}

export default handler;