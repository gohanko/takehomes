"use client"

import { Form } from "@/components/ui/Form"
import { TUserAndProfile } from "@/app/user/profile/actions"
import { useActionState, useState } from "react"
import { editPersonalPreferences } from "@/app/user/profile/personal_preferences/actions"
import { Alert } from "@/components/ui/alert"

export const PersonalPreferencesForm = ({
    profile
}: TUserAndProfile) => {
    const [isDisabled, setIsDisabled] = useState(true)
    const [state, action] = useActionState(editPersonalPreferences, undefined)

    return (
        <>
            { state?.message && (
                <Alert>{ state.message }</Alert>
            )}

            <Form action={action}>
                <Form.Horizontal>
                    <Form.TextField
                        name="interests"
                        label="Interests"
                        placeholder="Interests"
                        className="flex-1"
                        defaultValue={profile.interests || undefined}
                        disabled={isDisabled}
                        validationHint={state?.errors?.interests}
                    />
                    <Form.TextField 
                        name="sports" 
                        label="Sports" 
                        placeholder="Sports" 
                        className="flex-1"
                        defaultValue={profile.sports || undefined}
                        disabled={isDisabled}
                        validationHint={state?.errors?.sports}
                    />
                </Form.Horizontal>

                <Form.Horizontal>
                    <Form.TextField
                        name="music"
                        label="Music"
                        placeholder="Music"
                        className="flex-1"
                        defaultValue={profile.music || undefined}
                        disabled={isDisabled}
                        validationHint={state?.errors?.music}
                    />
                    <Form.TextField 
                        name="movie_tv" 
                        label="TV Series / Movies" 
                        placeholder="TV Series / Movies" 
                        className="flex-1"
                        defaultValue={profile.movie_tv || undefined}
                        disabled={isDisabled}
                        validationHint={state?.errors?.movie_tv}
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
