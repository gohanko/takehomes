import Form from "@/app/_components/Form";
import { editAdditionalDetails } from "./actions";

const handler = () =>  (
    <>
        <Form action={editAdditionalDetails}>
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

            <div className="flex w-full flex-col">
                <div className="divider divider-neutral">Start</div>
            </div>

            <Form.Select label="Gender" placeholder="Please Choose a Gender" options={["Male", "Female", "Others"]}/>
            <Form.Select label="Marital Status" placeholder="Please a marital status" options={["Single", "Married"]}/>


            <div className="flex flex-row gap-5 ">
                <Form.Button label="Cancel"/>
                <Form.Button label="Save" />
            </div>
        </Form>
    </>
)

export default handler;