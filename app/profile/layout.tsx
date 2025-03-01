"use client"

import Link from "next/link";
import Navbar from "./_components/navbar";
import ProfileMenu from "./_components/ProfileMenu";
import { usePathname } from "next/navigation";

const ProfileLayout = ({
    children
}: TLayoutProps) => {
    var urls = [
        {
            label: "Basic Details",
            link: "/profile/basic_details",
            isActive: true
        },
        {
            label: "Additional Details",
            link: "/profile/additional_details"
        },
        {
            label: "Spouse Details",
            link: "/profile/spouse_details"
        },
        {
            label: "Personal Preferences",
            link: "/profile/personal_preferences"
        }
    ]

    const currentPath = usePathname();

    return (
        <>
            <Navbar />
    
            <main className="flex-1 flex flex-row mx-5 mb-5 gap-5">
                <div className="flex-1 flex flex-col gap-5">
                    <ProfileMenu>
                        { urls.map((url, index) => (
                            <ProfileMenu.Item 
                                key={index}
                                label={url.label}
                                link={url.link}
                                isActive={currentPath === url.link}
                            />
                        ))}
                    </ProfileMenu>
    
                    <Link className="btn btn-soft" href="/authentication/logout">Logout</Link>
                </div>
    
                <div className="flex-4 flex flex-col gap-5 bg-base-200 rounded-box p-5">    
                    { children }
                </div>
            </main>
        </>
    )
}

export default ProfileLayout;