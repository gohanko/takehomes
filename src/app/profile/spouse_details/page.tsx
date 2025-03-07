import { getUserAndProfileData } from "../actions";
import SpouseDetailsForm from "@/components/features/profile/forms/SpouseDetailsForm";
import { redirect } from "next/navigation";

const handler = async () =>  {
    const { user, profile } = await getUserAndProfileData()

    if (profile.marital_status != "Married") {
        redirect("/profile/basic_details/")
    }

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