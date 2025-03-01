import Link from 'next/link'

import AuthCard from "../_components/AuthCard";
import RegisterForm from './_components/RegisterForm';

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
            
            <RegisterForm />
        </AuthCard.Body>
    </AuthCard>
)

export default handler;