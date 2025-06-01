import { NextRequest, NextResponse } from "next/server";
import { del, put } from "@vercel/blob";
import { updateProfileByUserId } from "@/services/database/profile";
import { getUserAndProfileData } from "@/app/user/profile/actions";

export const PUT = async (request: NextRequest) => {
    const { user, profile } = await getUserAndProfileData()

    const formData = await request.formData()
    const body = Object.fromEntries(formData);
    const file = (body.file as Blob) || null;

    if (!file) {
        const responseJSON: TFileUploadResponse = {
            success: false,
            message: "File not found!",
            filepath: ""
        } 

        return NextResponse.json(responseJSON, { status: 400 })
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const filename = (body.file as File).name

    if (profile.profile_picture_url) {
        await updateProfileByUserId(user.id, { profile_picture_url: "" })
        del(profile.profile_picture_url)
    }

    const { url } = await put(`${filename}`, buffer, { access: 'public' })
    await updateProfileByUserId(user.id, { profile_picture_url: url })
    
    const fileUploadResponse: TFileUploadResponse = {
        success: true,
        message: "File is successfully uploaded!",
        filepath: url,
    }
    return NextResponse.json(fileUploadResponse, { status: 201 })
}