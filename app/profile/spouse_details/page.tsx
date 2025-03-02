import { getUserAndProfileData } from "../actions";
import SpouseDetailsForm from "./_components/SpouseDetailsForm";


const handler = async () =>  {
    const { user, profile } = await getUserAndProfileData()

    return (
        <>
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-2xl font-bold">Spouse Details</h1>
            </div>
            <SpouseDetailsForm user={user} profile={profile} />
        </>
    )
}

export default handler;