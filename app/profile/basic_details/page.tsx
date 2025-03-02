import Form from "@/components/Form";
import { editBasicDetails } from "./actions";
import { SALUTATIONS } from "@/constants/salutations";
import { getUserAndProfileData } from "../actions";
import BasicDetailsForm from "./_components/BasicDetailsForm";

const handler = async () =>  {
    const { user, profile } = await getUserAndProfileData()

    return (
        <>
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-2xl font-bold">Basic Details</h1>
            </div>
            <BasicDetailsForm user={user} profile={profile} />
        </>
    )
}

export default handler;