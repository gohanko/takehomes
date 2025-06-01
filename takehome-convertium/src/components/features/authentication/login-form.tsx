"use client"

import { login } from "../../../app/authentication/login/actions";
import { Form } from "../../ui/form";
import { useActionState } from "react";
import { Alert } from "../../ui/alert";

export const LoginForm = () => {
    const [state, action] = useActionState(login, undefined)
    
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
                    name="remember_me"
                    defaultChecked={true}
                />

                <Form.Button label="Log In" type="submit" color="primary" />
            </Form>
        </>
    )
}
