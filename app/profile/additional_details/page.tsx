import Form from "@/components/Form";
import { editAdditionalDetails } from "./actions";
import { GENDER } from "@/constants/gender";
import { MARITAL_STATUS } from "@/constants/marital_status";
import { getUserAndProfileData } from "../actions";
import AdditionalDetailsForm from "./_components/AdditionalDetailsForm";

const handler = async () =>  {
    const { user, profile } = await getUserAndProfileData()
    
    return <AdditionalDetailsForm user={user} profile={profile} />
}

export default handler;