import Form from "@/app/_components/Form";
import { editAdditionalDetails } from "./actions";
import { GENDER } from "@/app/_constants/gender";
import { MARITAL_STATUS } from "@/app/_constants/marital_status";

const handler = () =>  (
    <>
        <Form action={editAdditionalDetails}>
            <div className="flex flex-row gap-5">
                <Form.Input label="Date of Birth" required type="date" className="flex-1"/>
                <Form.Select label="Gender" placeholder="Please choose a gender" options={GENDER} className="flex-1" />
                <Form.Select label="Marital Status" placeholder="Please a marital status" options={MARITAL_STATUS} className="flex-1" />
            </div>
            <div className="flex w-full flex-col">
                <div className="divider">Address</div>
            </div>

            <div className="flex flex-row gap-5">
                <Form.Input label="Street Number" placeholder="Street Number" required type="text" className="flex-1"/>
                <Form.Input label="Street Name" placeholder="Street Name" required type="text"  className="flex-1"/>
            </div>
            <div className="flex flex-row gap-5">
                <Form.Input label="Postcode" placeholder="Postcode" required type="text"  className="flex-1"/>
                <Form.Input label="City/Town" placeholder="City/Town" required type="text"  className="flex-1"/>
            </div>

            <div className="flex flex-row gap-5">
                <Form.Select label="Country" placeholder="Country" options={["Country"]} className="flex-1"/>
                <Form.Select label="State" placeholder="State" options={["Sarawak"]} className="flex-1"/>
            </div>

            <div className="flex flex-row gap-5 ">
                <Form.Button label="Cancel"/>
                <Form.Button label="Save" />
            </div>
        </Form>
    </>
)

export default handler;