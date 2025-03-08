"use client"

import { useActionState } from 'react'
import { register } from "@/app/authentication/register/actions";
import { Form } from "@/components/ui/Form";
import { Alert } from '@/components/ui/alert';
import { deductYearsFromDate } from '@/utility/date-manipulation';


export const RegisterForm = () => {    
    const [state, action] = useActionState(register, undefined)

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
                    max={deductYearsFromDate(new Date().toLocaleDateString(), 17)}
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
                <Form.Button label="Create account"  type="submit" color="primary" />
            </Form>
        </>
    )
}