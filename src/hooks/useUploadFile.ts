import { isSupportedImage } from "@/utility/file_format_validation"
import { useState } from "react"

export const useUploadFile = () => {
    const [isUploading, setIsUploading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>()
    const [errorMessage, setErrorMessage] = useState<string>()
    const [uploadedFilePath, setUploadedFilePath] = useState<string>()

    const uploadFile = async (file: File) => {
        if (!file) {
            setErrorMessage("No files to upload!")
            return
        }

        if (!isSupportedImage(file.name)) {
            setErrorMessage("File type not supported!")
            return
        }
        
        if (file.size > 3145728) {
            setErrorMessage("Files must be less than 3MB!")
            return
        }

        const formData = new FormData()
        formData.append('file', file)
        
        setIsUploading(true)
        const response = await fetch("/api/file_upload", {
            method: "PUT",
            body: formData
        })
        setIsUploading(false)

        const fileUploadResponse = await response.json()
        if (fileUploadResponse.success) {
            setMessage(fileUploadResponse.message)
            setUploadedFilePath(fileUploadResponse.filepath)
        }

        if (!fileUploadResponse.success) {
            setErrorMessage(fileUploadResponse.message)
        }
    }

    return {
        isUploading,
        message,
        errorMessage,
        uploadedFilePath,
        uploadFile,
    }
}