import { getUserAndProfileData } from "../actions";
import SpouseDetailsForm from "./_components/SpouseDetailsForm";


const handler = async () =>  {
    const { user, profile } = await getUserAndProfileData()

    return (
        <SpouseDetailsForm user={user} profile={profile} />
    )
}

export default handler;