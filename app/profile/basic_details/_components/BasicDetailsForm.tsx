"use client"

import Form from "@/components/Form"
import { editBasicDetails } from "../actions"
import { SALUTATIONS } from "@/constants/salutations"
import { useState } from "react"
import { TUserAndProfile } from "../../actions"

const BasicDetailsForm = ({
    user,
    profile
}: TUserAndProfile) => {
    const [isDisabled, setIsDisabled] = useState(true)

    return (
        <Form action={editBasicDetails}>
            <Form.Horizontal>
                <Form.Select
                    name="salutations"
                    label="Salutations"
                    placeholder="Salutations"
                    options={SALUTATIONS}
                    defaultValue={profile.salutations}
                    disabled={isDisabled}
                />
                <Form.Input
                    name="first_name"
                    label="First Name"
                    placeholder="First Name"
                    required
                    type="text"
                    className="flex-1"
                    defaultValue={profile.first_name}
                    disabled={isDisabled}
                />
                <Form.Input 
                    name="last_name" 
                    label="Last Name" 
                    placeholder="Last Name" 
                    required type="text"
                    className="flex-1"
                    defaultValue={profile.last_name}
                    disabled={isDisabled}
                />
            </Form.Horizontal>
            <Form.Input
                name="email"
                label="Email"
                placeholder="Email"
                required
                type="email"
                defaultValue={user.email}
                disabled={isDisabled}
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
    )
}

export default BasicDetailsForm