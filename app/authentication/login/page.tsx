import Link from 'next/link'
import { handleLogin } from "./actions";
import AuthForm from "../_components/AuthForm";
import AuthCard from "../_components/AuthCard";

const handler = () => (
    <AuthCard>
        <AuthCard.Body>
            <AuthCard.Body.Header 
                title={"Sign in into your account"}
            >
                <span className="text-base-content">
                    Not a member? <Link className="link-primary" href="/authentication/register">Register here</Link>
                </span>
            </AuthCard.Body.Header>
            <AuthForm action={handleLogin}>   
                <AuthForm.Input
                    label={"Email"}
                    placeholder={"Email"}
                    type={"email"}
                    required={true}
                />

                <AuthForm.Input
                    label={"Password"}
                    placeholder={"password"}
                    type={"password"}
                    required={true}
                />
                <AuthForm.RememberMe />

                <AuthForm.Button label="Login" />
            </AuthForm>
        </AuthCard.Body>
    </AuthCard>
)

export default handler;