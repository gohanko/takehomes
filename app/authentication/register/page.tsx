import Link from 'next/link'
import { handleRegistration } from "./actions";
import AuthCard from "../_components/AuthCard";
import AuthForm from "../_components/AuthForm";

const handler = () => {
    
    
    return (
        <AuthCard>
            <AuthCard.Body>
                <AuthCard.Body.Header 
                    title={"Create an account"}
                >
                    <span className="text-base-content">
                        Have an account? <Link className="link-primary" href="/authentication/login">Login here</Link>
                    </span>
                </AuthCard.Body.Header>
                <AuthForm action={handleRegistration}>   
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
                    <AuthForm.Button label="Register" />
                </AuthForm>
            </AuthCard.Body>
        </AuthCard>
    )
}
export default handler;