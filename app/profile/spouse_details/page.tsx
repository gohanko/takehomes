import Form from "@/components/Form";
import { editSpouseDetails } from "./actions";


const handler = () =>  (
    <Form action={editSpouseDetails}>
        <Form.Select name="salutations" label="Salutations" placeholder="Salutations" options={["Mr", "Mrs", "Miss", "Dr"]}/>
        <Form.Horizontal>
            <Form.Input name="first_name" label="First Name" placeholder="First Name" required type="text" className="flex-1"/>
            <Form.Input name="last_name" label="Last Name" placeholder="Last Name" required type="text" className="flex-1"/>
        </Form.Horizontal>

        <Form.Horizontal>
            <Form.Button label="Cancel"/>
            <Form.Button label="Save" />
        </Form.Horizontal>
    </Form>
)

export default handler;