import Form from "@/app/_components/Form";
import { editBasicDetails } from "./actions";
import { SALUTATIONS } from "@/app/_constants/salutations";

const handler = () =>  (
    <>
        <Form action={editBasicDetails}>
            <Form.Select label="Salutations" placeholder="Salutations" options={SALUTATIONS}/>
            <div className="flex flex-row gap-5">
                <Form.Input label="First Name" placeholder="First Name" required type="text" className="flex-1"/>
                <Form.Input label="Last Name" placeholder="Last Name" required type="text" className="flex-1"/>
            </div>
            <Form.Input label="Email" placeholder="Email" required type="email"/>

            <div className="flex flex-row gap-5 ">
                <Form.Button label="Cancel"/>
                <Form.Button label="Save" />
            </div>
        </Form>
    </>
)

export default handler;