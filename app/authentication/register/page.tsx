import Link from 'next/link'
import { handleRegistration } from "./actions";
import AuthCard from "../_components/AuthCard";
import Form from "../../_components/Form";

const handler = () => (
    <AuthCard>
        <AuthCard.Body>
            <AuthCard.Body.Header 
                title={"Create an account"}
            >
                <span className="text-base-content">
                    Already have an account? <Link className="link-primary" href="/authentication/login">Log in</Link>
                </span>
            </AuthCard.Body.Header>
            <Form action={handleRegistration}>
                <div className='flex flex-row gap-5'>
                    <Form.Input
                        label='First Name'
                        placeholder='First Name'
                        type="text"
                        required={true}
                    />

                    <Form.Input
                        label='Last Name'
                        placeholder='Last Name'
                        type="text"
                        required={true}
                    />
                </div>
                <Form.Input
                    label={"Email"}
                    placeholder={"Email"}
                    type={"email"}
                    required={true}
                />

                <Form.Input
                    label={"Password"}
                    placeholder={"Password"}
                    type={"password"}
                    required={true}
                />
                <Form.Button label="Create account" />
            </Form>
        </AuthCard.Body>
    </AuthCard>
)

export default handler;