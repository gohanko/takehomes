"use client"

import { useActionState } from 'react'
import { register } from "../actions";
import Form from "../../../_components/Form";
import Alert from '@/app/_components/alert';


const RegisterForm = () => {    
    const [state, action, pending] = useActionState(register, undefined)

    return (
        <>
            { state?.message && (
                <Alert>{ state.message }</Alert>
            )}
            <Form action={action}>
                <Form.Horizontal>
                    <Form.Input
                        name="first_name"
                        label='First Name'
                        placeholder='First Name'
                        type="text"
                        required={true}
                        className='flex-1'
                        validationHint={state?.errors?.first_name}
                    />

                    <Form.Input
                        name="last_name"
                        label='Last Name'
                        placeholder='Last Name'
                        type="text"
                        required={true}
                        className='flex-1'
                        validationHint={state?.errors?.last_name}
                    />
                </Form.Horizontal>

                <Form.Input
                    name="date_of_birth"
                    label={"Date of Birth"}
                    type={"date"}
                    required={true}
                    validationHint={state?.errors?.date_of_birth}
                />
                
                <Form.Horizontal>
                    <Form.Input
                        name="email"
                        label={"Email"}
                        placeholder={"Email"}
                        type={"email"}
                        required={true}
                        className='flex-1'
                        validationHint={state?.errors?.email}
                    />

                    <Form.Input
                        name="confirmation_email"
                        label={"Confirmation Email"}
                        placeholder={"Confirm your email"}
                        type={"email"}
                        required={true}
                        className='flex-1'
                        validationHint={state?.errors?.confirmation_email}
                    />
                </Form.Horizontal>

                <Form.Input
                    name="password"
                    label={"Password"}
                    placeholder={"Password"}
                    type={"password"}
                    required={true}
                    validationHint={state?.errors?.password}
                />
                <Form.Button label="Create account" />
            </Form>
        </>
    )
}

export default RegisterForm