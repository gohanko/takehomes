import Link from 'next/link'
import { FormCard } from "../../../components/ui/form-card";
import { LoginForm } from "../../../components/features/authentication/login-form";
import { routesConfig } from '../../../configs/routes-config';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Log In - React/NextJS Take Home Application",
    description: "Log In to React/NextJS Take Home Application!",
};

const handler = () => (
    <FormCard>
        <FormCard.Header>
            <FormCard.Header.Title>Log in to your account</FormCard.Header.Title>

            <FormCard.Header.Subtitle>
                Not yet a member? <Link className="link-primary" href={routesConfig.authentication_register.route}>Register</Link>
            </FormCard.Header.Subtitle>               
        </FormCard.Header>
        <FormCard.Body>
            <LoginForm />
        </FormCard.Body>
    </FormCard>
)

export default handler;