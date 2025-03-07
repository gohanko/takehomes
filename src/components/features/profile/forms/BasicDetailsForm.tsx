"use client"

import Form from "@/components/ui/Form"
import { editBasicDetails } from "@/app/profile/basic_details/actions"
import { SALUTATIONS } from "@/constants/salutations"
import { useActionState, useState } from "react"
import { TUserAndProfile } from "@/app/profile/actions"
import Alert from "@/components/ui/alert"
import { ImageUploader } from "@/components/features/profile/image-uploader"

const BasicDetailsForm = ({
    user,
    profile
}: TUserAndProfile) => {
    const [isDisabled, setIsDisabled] = useState(true)
    const [state, action] = useActionState(editBasicDetails, undefined)

    return (
        <div className="flex flex-row gap-5">
            <Form action={action} className="flex-1">
                { state?.message && (
                    <Alert>{ state.message }</Alert>
                )}
                <Form.Horizontal>
                    <div className="flex flex-col flex-3">
                        <Form.Select
                            name="salutations"
                            label="Salutations"
                            placeholder="Select Salutations"
                            className="flex-1"
                            options={SALUTATIONS}
                            required={true}
                            defaultValue={profile.salutations || ''}
                            validationHint={state?.errors?.salutations}
                            disabled={isDisabled}
                        />
                        <Form.Input
                            name="first_name"
                            label="First Name"
                            placeholder="First Name"
                            type="text"
                            className="flex-3"
                            defaultValue={profile.first_name}
                            disabled={isDisabled}
                            validationHint={state?.errors?.first_name}
                        />
                        <Form.Input 
                            name="last_name" 
                            label="Last Name" 
                            placeholder="Last Name" 
                            type="text"
                            className="flex-3"
                            defaultValue={profile.last_name}
                            disabled={isDisabled}
                            validationHint={state?.errors?.last_name}
                        />
                    </div>
                </Form.Horizontal>

                <Form.Input
                    name="email"
                    label="Email"
                    placeholder="Email"
                    type="email"
                    defaultValue={user.email}
                    disabled={isDisabled}
                    validationHint={state?.errors?.email}
                />

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

            <div className="flex flex-col">
                <ImageUploader imageUrl={profile.profile_picture_url} />
            </div>
        </div>
    )
}

export default BasicDetailsForm