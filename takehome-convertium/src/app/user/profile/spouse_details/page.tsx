import { getUserAndProfileData } from "../actions";
import { SpouseDetailsForm } from "../../../../components/features/user/profile/spouse-details-form";
import { routesConfig } from "../../../../configs/routes-config";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Spouse Details - React/NextJS Take Home Application",
};

const handler = async () =>  {
    const { user, profile } = await getUserAndProfileData()

    if (profile.marital_status != "Married") {
        redirect(routesConfig.user_profile_basic_details.route)
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