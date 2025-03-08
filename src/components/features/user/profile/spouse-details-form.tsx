"use client"

import { Form } from "@/components/ui/form"
import { editSpouseDetails } from "@/app/user/profile/spouse_details/actions"
import { SALUTATIONS } from "@/constants/forms"
import { useActionState, useState } from "react"
import { TUserAndProfile } from "@/app/user/profile/actions"
import { Alert } from "@/components/ui/alert"

export const SpouseDetailsForm = ({
    profile
}: TUserAndProfile) => {
    const [isDisabled, setIsDisabled] = useState(true)
    const [state, action] = useActionState(editSpouseDetails, undefined)

    return (
        <>
            { state?.message && (
                <Alert>{ state.message }</Alert>
            )}
            <Form action={action}>
                <Form.Horizontal>
                    <Form.Select
                        name="spouse_salutation"
                        label="Salutations"
                        placeholder="Please select a salutations"
                        options={SALUTATIONS}
                        defaultValue={profile.spouse_salutation || ''}
                        validationHint={state?.errors?.spouse_salutation}
                        disabled={isDisabled}
                        className="flex-1"
                    />
                    <Form.Input
                        name="spouse_first_name"
                        label="First Name"
                        placeholder="First Name"
                        type="text"
                        className="flex-3"
                        defaultValue={profile.spouse_first_name || ''}
                        disabled={isDisabled}
                        validationHint={state?.errors?.spouse_first_name}
                    />
                    <Form.Input
                        name="spouse_last_name"
                        label="Last Name"
                        placeholder="Last Name"
                        type="text"
                        className="flex-3"
                        defaultValue={profile.spouse_last_name || ''}
                        validationHint={state?.errors?.spouse_last_name}
                        disabled={isDisabled}
                    />
                </Form.Horizontal>

                { !isDisabled && (
                    <Form.Horizontal className="flex grow items-end">
                        <Form.Button 
                            label="Cancel" 
                            type="reset" 
                            color="error" 
                            onClick={() => window.location.reload()}
                        />
                        <Form.Button label="Save" type="submit" color="success" />
                    </Form.Horizontal>
                )}

                { isDisabled && (
                    <Form.Horizontal className="flex grow items-end">
                        <Form.Button
                            label="Edit"
                            type="reset"
                            color="primary"
                            onClick={() => setIsDisabled(false)}
                        />
                    </Form.Horizontal>
                )}
            </Form>
        </>
    )
}
