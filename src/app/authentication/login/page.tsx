import Link from 'next/link'
import { FormCard } from "@/components/ui/FormCard";
import { LoginForm } from "@/components/features/authentication/login-form";

const handler = () => (
    <FormCard>
        <FormCard.Header>
            <FormCard.Header.Title>Log in to your account</FormCard.Header.Title>

            <FormCard.Header.Subtitle>
                Not yet a member? <Link className="link-primary" href="/authentication/register">Register</Link>
            </FormCard.Header.Subtitle>               
        </FormCard.Header>
        <FormCard.Body>
            <LoginForm />
        </FormCard.Body>
    </FormCard>
)

export default handler;