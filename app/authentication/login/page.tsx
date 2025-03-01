import Link from 'next/link'
import { handleLogin } from "./actions";
import Form from "../../_components/Form";
import AuthCard from "../_components/AuthCard";

const handler = () => (
    <AuthCard>
        <AuthCard.Body>
            <AuthCard.Body.Header 
                title={"Log in to your account"}
            >
                <span className="text-base-content">
                    Not yet a member? <Link className="link-primary" href="/authentication/register">Register</Link>
                </span>
            </AuthCard.Body.Header>
            <Form action={handleLogin}>   
                <Form.Input
                    label={"Email"}
                    placeholder={"Email"}
                    type={"email"}
                    required={true}
                />

                <Form.Input
                    label={"Password"}
                    placeholder={"password"}
                    type={"password"}
                    required={true}
                />
                <Form.Checkbox
                    label='Remember me'
                    defaultChecked={true}
                />

                <Form.Button label="Log In" />
            </Form>
        </AuthCard.Body>
    </AuthCard>
)

export default handler;