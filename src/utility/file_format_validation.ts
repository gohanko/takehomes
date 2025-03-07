const getExtension = (filename: string) => {
    const parts = filename.split('.');
    return parts[parts.length - 1];
}

export const isSupportedImage = (filename: string) => {
    const supportedImageExtensions = [
        "apng",
        "png",
        "avif",
        "gif",
        "jpg",
        "jpeg",
        "jfif",
        "pjpeg",
        "pjp",
        "svg",
        "webp"
    ]

    const ext = getExtension(filename);
    return supportedImageExtensions.includes(ext)
}
