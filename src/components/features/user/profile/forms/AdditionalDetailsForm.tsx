"use client"

import { Form } from "@/components/ui/Form"
import { editAdditionalDetails } from "@/app/user/profile/additional_details/actions"
import { GENDER, MARITAL_STATUS } from "@/constants/forms"
import { TUserAndProfile } from "@/app/user/profile/actions"
import { useActionState, useState } from "react"
import { Alert } from "@/components/ui/alert"
import { deductYearsFromDate } from "@/utility/date"

export const AdditionalDetailsForm = ({
    profile
}: TUserAndProfile) => {
    const [isDisabled, setIsDisabled] = useState(true)
    const [state, action] = useActionState(editAdditionalDetails, undefined)

    return (
        <>
            { state?.message && (
                <Alert>{ state.message }</Alert>
            )}
            <Form action={action}>
                <Form.Horizontal>
                    <Form.Input 
                        name="date_of_birth"
                        label="Date of Birth"
                        type="date"
                        className="flex-1"
                        defaultValue={profile.date_of_birth ? profile.date_of_birth.toISOString().split('T')[0] : ''}
                        disabled={isDisabled}
                        validationHint={state?.errors?.date_of_birth}
                        max={deductYearsFromDate(new Date().toLocaleDateString(), 17)}
                    />
                    <Form.Select
                        name="gender"
                        label="Gender"
                        placeholder="Please choose a gender"
                        options={GENDER}
                        className="flex-1"
                        defaultValue={profile.gender || ''}
                        disabled={isDisabled}
                        validationHint={state?.errors?.gender}
                    />
                    <Form.Select
                        name="marital_status"
                        label="Marital Status"
                        placeholder="Please a marital status"
                        options={MARITAL_STATUS}
                        className="flex-1"
                        defaultValue={profile.marital_status || ''}
                        disabled={isDisabled}
                        validationHint={state?.errors?.marital_status}
                    />
                </Form.Horizontal>

                <Form.Divider>Address</Form.Divider>

                <Form.Horizontal>
                    <Form.Input
                        name="street_number"
                        label="Street Number"
                        placeholder="Street Number"
                        type="text"
                        className="flex-1"
                        defaultValue={profile.street_number || undefined}
                        disabled={isDisabled}
                        validationHint={state?.errors?.street_number}
                    />
                    <Form.Input
                        name="street_name"
                        label="Street Name"
                        placeholder="Street Name"
                        type="text"
                        className="flex-1"
                        defaultValue={profile.street_name || undefined}
                        disabled={isDisabled}
                        validationHint={state?.errors?.street_name}
                    />
                </Form.Horizontal>
                <Form.Horizontal>
                    <Form.Input
                        name="postcode"
                        label="Postcode"
                        placeholder="Postcode"
                        type="text"
                        className="flex-1"
                        defaultValue={profile.postcode || undefined}
                        disabled={isDisabled}
                        validationHint={state?.errors?.postcode}
                    />
                    <Form.Input
                        name="city_town"
                        label="City/Town"
                        placeholder="City/Town"
                        type="text"
                        className="flex-1"
                        defaultValue={profile.city_town || undefined}
                        disabled={isDisabled}
                        validationHint={state?.errors?.city_town}
                    />
                </Form.Horizontal>

                <Form.Horizontal>
                    <Form.Select
                        name="state"
                        label="State/Region"
                        placeholder="Please choose a state"
                        options={["Sarawak"]}
                        className="flex-1"
                        defaultValue={profile.state || undefined}
                        disabled={isDisabled}
                        validationHint={state?.errors?.state}
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
