function getExtension(filename: string) {
    var parts = filename.split('.');
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

    var ext = getExtension(filename);
    return supportedImageExtensions.includes(ext)
}
