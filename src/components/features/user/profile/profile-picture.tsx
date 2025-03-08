"use client"

import Image from "next/image";
import { Form } from "@/components/ui/form";
import { useUploadProfilePicture } from "@/hooks/use-upload-profile-picture"

type TProfilePictureProps = {
    imageUrl?: string
}

export const ProfilePicture = ({
    imageUrl = `https://api.dicebear.com/9.x/identicon/svg?seed=aaa`,
}: TProfilePictureProps) => {
    const {
        isUploading,
        message,
        errorMessage,
        uploadedFilePath,
        uploadFile
    } = useUploadProfilePicture();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            uploadFile(event.target.files[0])
        }
    }

    return (
        <div className="flex flex-col">
            <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-44 rounded-full bg-base-200 ring ring-offset-2">
                    <Image
                        src={uploadedFilePath || imageUrl}
                        alt="Avatar Picture"
                        width="176"
                        height="176"
                    />
                </div>
            </div>

            <Form.FileInput 
                legend="Select your profile picture"
                onChange={onChange}
                label={message || errorMessage}
            />

            { isUploading && (
                <>
                    Uploading <span className="loading loading-dots loading-lg"></span>
                </>
            )}
        </div>
    )
}