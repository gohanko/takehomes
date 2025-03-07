"use client"

import { Avatar } from "@/components/ui/avatar";
import Form from "@/components/ui/Form";
import { useUploadFile } from "@/hooks/useUploadFile"

type TImageUploaderProps = {
    imageUrl?: string
}

export const ImageUploader = ({
    imageUrl,
}: TImageUploaderProps) => {
    const {
        isUploading,
        message,
        errorMessage,
        uploadedFilePath,
        uploadFile
    } = useUploadFile();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            uploadFile(event.target.files[0])
        }
    }

    return (
        <div className="flex flex-col">
            <Avatar url={uploadedFilePath || imageUrl} />

            <Form.FileInput 
                legend="Select a image"
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