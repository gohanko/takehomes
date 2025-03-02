"use client"

import Form from "@/components/Form"
import { editAdditionalDetails } from "../actions"
import { GENDER } from "@/constants/gender"
import { MARITAL_STATUS } from "@/constants/marital_status"
import { TUserAndProfile } from "../../actions"
import { useState } from "react"

const AdditionalDetailsForm = ({
    user,
    profile
}: TUserAndProfile) => {
    const [isDisabled, setIsDisabled] = useState(true)

    return (
        <Form action={editAdditionalDetails}>
            <Form.Horizontal>
                <Form.Input 
                    name="date_of_birth"
                    label="Date of Birth"
                    required type="date"
                    className="flex-1"
                    defaultValue={profile.date_of_birth ? profile.date_of_birth.toISOString().split('T')[0] : ''}
                    disabled={isDisabled}
                />
                <Form.Select
                    name="gender"
                    label="Gender"
                    placeholder="Please choose a gender"
                    options={GENDER}
                    className="flex-1"
                    defaultValue={profile.gender}
                    disabled={isDisabled}
                />
                <Form.Select
                    name="marital_status"
                    label="Marital Status"
                    placeholder="Please a marital status"
                    options={MARITAL_STATUS}
                    className="flex-1"
                    defaultValue={profile.marital_status}
                    disabled={isDisabled}
                />
            </Form.Horizontal>

            <Form.Divider>Address</Form.Divider>

            <Form.Horizontal>
                <Form.Input
                    name="street_number"
                    label="Street Number"
                    placeholder="Street Number"
                    required type="text"
                    className="flex-1"
                    defaultValue={profile.street_number || undefined}
                    disabled={isDisabled}
                />
                <Form.Input
                    name="street_name"
                    label="Street Name"
                    placeholder="Street Name"
                    required type="text"
                    className="flex-1"
                    defaultValue={profile.street_name || undefined}
                    disabled={isDisabled}
                />
            </Form.Horizontal>
            <Form.Horizontal>
                <Form.Input
                    name="postcode"
                    label="Postcode"
                    placeholder="Postcode"
                    required type="text"
                    className="flex-1"
                    defaultValue={profile.postcode || undefined}
                    disabled={isDisabled}
                />
                <Form.Input
                    name="city_town"
                    label="City/Town"
                    placeholder="City/Town"
                    required
                    type="text"
                    className="flex-1"
                    defaultValue={profile.city_town || undefined}
                    disabled={isDisabled}
                />
            </Form.Horizontal>

            <Form.Horizontal>
                <Form.Select
                    name="state"
                    label="State"
                    placeholder="State"
                    options={["Sarawak"]}
                    className="flex-1"
                    defaultValue={profile.state || undefined}
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

export default AdditionalDetailsForm;