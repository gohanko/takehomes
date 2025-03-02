import Form from "@/components/Form";
import { editBasicDetails } from "./actions";
import { SALUTATIONS } from "@/constants/salutations";
import { getUserAndProfileData } from "../actions";
import BasicDetailsForm from "./_components/BasicDetailsForm";

const handler = async () =>  {
    const { user, profile } = await getUserAndProfileData()

    return <BasicDetailsForm user={user} profile={profile} />
}

export default handler;