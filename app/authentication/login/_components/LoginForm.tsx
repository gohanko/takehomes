"use client"

import { login } from "../actions";
import Form from "../../../_components/Form";
import { useActionState } from "react";

const LoginForm = () => {
    const [state, action, pending] = useActionState(login, undefined)
    
    return (
        <Form action={action}>   
            <Form.Input
                label={"Email"}
                name={"email"}
                placeholder={"Email"}
                type={"email"}
                required={true}
            />

            <Form.Input
                label={"Password"}
                name="password"
                placeholder={"Password"}
                type={"password"}
                required={true}
            />
            <Form.Checkbox
                label='Remember me'
                defaultChecked={true}
            />

            <Form.Button label="Log In" />
        </Form>
    )
}

export default LoginForm