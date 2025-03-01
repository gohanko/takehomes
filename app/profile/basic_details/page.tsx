import Form from "@/app/_components/Form";
import { editBasicDetails } from "./actions";
import { SALUTATIONS } from "@/app/_constants/salutations";

const handler = () =>  (
    <Form action={editBasicDetails}>
        <Form.Select name="salutations" label="Salutations" placeholder="Salutations" options={SALUTATIONS}/>
        <Form.Horizontal>
            <Form.Input name="first_name" label="First Name" placeholder="First Name" required type="text" className="flex-1"/>
            <Form.Input name="last_name" label="Last Name" placeholder="Last Name" required type="text" className="flex-1"/>
        </Form.Horizontal>
        <Form.Input name="email" label="Email" placeholder="Email" required type="email"/>

        <Form.Horizontal>
            <Form.Button label="Cancel"/>
            <Form.Button label="Save" />
        </Form.Horizontal>
    </Form>
)

export default handler;