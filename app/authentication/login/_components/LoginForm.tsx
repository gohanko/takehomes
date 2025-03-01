"use client"

import { login } from "../actions";
import Form from "../../../_components/Form";
import { useActionState } from "react";
import Alert from "@/app/_components/alert";

const LoginForm = () => {
    const [state, action, pending] = useActionState(login, undefined)
    
    return (
        <>
            { state?.message && (
                <Alert>{ state.message }</Alert>
            )}

            <Form action={action}>   
                <Form.Input
                    label={"Email"}
                    name={"email"}
                    placeholder={"Email"}
                    type={"email"}
                    required={true}
                    validationHint={state?.errors?.email}
                />

                <Form.Input
                    label={"Password"}
                    name="password"
                    placeholder={"Password"}
                    type={"password"}
                    required={true}
                    validationHint={state?.errors?.password}
                />
                <Form.Checkbox
                    label='Remember me'
                    defaultChecked={true}
                />

                <Form.Button label="Log In" />
            </Form>
        </>
    )
}

export default LoginForm