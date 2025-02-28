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
                        Already have an account? <Link className="link-primary" href="/authentication/login">Log in</Link>
                    </span>
                </AuthCard.Body.Header>
                <AuthForm action={handleRegistration}>
                    <div className='flex flex-row gap-5'>
                        <AuthForm.Input
                            label='First Name'
                            placeholder='First Name'
                            type="text"
                            required={true}
                        />

                        <AuthForm.Input
                            label='Last Name'
                            placeholder='Last Name'
                            type="text"
                            required={true}
                        />
                    </div>
                    <AuthForm.Input
                        label={"Email"}
                        placeholder={"Email"}
                        type={"email"}
                        required={true}
                    />

                    <AuthForm.Input
                        label={"Password"}
                        placeholder={"Password"}
                        type={"password"}
                        required={true}
                    />
                    <AuthForm.Button label="Create account" />
                </AuthForm>
            </AuthCard.Body>
        </AuthCard>
    )
}
export default handler;