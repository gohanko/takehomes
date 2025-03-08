import { getUserAndProfileData } from "../actions";
import { AdditionalDetailsForm } from "@/components/features/user/profile/forms/AdditionalDetailsForm";

const handler = async () =>  {
    const { user, profile } = await getUserAndProfileData()
    
    return (
        <>
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-2xl font-bold">Additional Details</h1>
            </div>
            <AdditionalDetailsForm user={user} profile={profile} />
        </>
    )
}

export default handler;