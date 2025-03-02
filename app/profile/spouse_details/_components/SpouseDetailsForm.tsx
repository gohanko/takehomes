"use client"

import Form from "@/components/Form"
import { editSpouseDetails } from "../actions"
import { SALUTATIONS } from "@/constants/salutations"
import { useState } from "react"
import { getUserAndProfileData, TUserAndProfile } from "../../actions"

const SpouseDetailsForm = ({
    user,
    profile
}: TUserAndProfile) => {
    const [isDisabled, setIsDisabled] = useState(true)

    return (
        <Form action={editSpouseDetails}>
            <Form.Select
                name="spouse_salutation"
                label="Salutations"
                placeholder="Salutations"
                options={SALUTATIONS}
                defaultValue={profile.spouse_salutation}
                disabled={isDisabled}
            />
            <Form.Horizontal>
                <Form.Input
                    name="spouse_first_name"
                    label="First Name"
                    placeholder="First Name"
                    required
                    type="text"
                    className="flex-1"
                    defaultValue={profile.spouse_first_name || ''}
                    disabled={isDisabled}
                />
                <Form.Input
                    name="spouse_last_name"
                    label="Last Name"
                    placeholder="Last Name"
                    required
                    type="text"
                    className="flex-1"
                    defaultValue={profile.spouse_last_name || ''}
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
    )
}

export default SpouseDetailsForm