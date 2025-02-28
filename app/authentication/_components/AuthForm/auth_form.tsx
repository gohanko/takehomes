import AuthFormButton from "./auth_form_button";
import AuthFormInput from "./auth_form_input";
import AuthFormRememberMe from "./auth_form_remember_me";

interface TAuthFormProps {
    children: React.ReactNode,
    action: (form: FormData) => void
}

const AuthForm = ({
    children,
    action,
}: TAuthFormProps) => (
    <form action={action}>
        { children }
    </form>
)

AuthForm.Input = AuthFormInput;
AuthForm.RememberMe = AuthFormRememberMe;
AuthForm.Button = AuthFormButton

export default AuthForm