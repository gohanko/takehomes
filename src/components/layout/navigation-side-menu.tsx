"use client"

import Menu from "@/components/ui/Menu"
import { Profile } from "@prisma/client"
import { usePathname } from "next/navigation"

type TNavigationSideMenuProps = {
    profile: Profile
}

const NavigationSideMenu = ({
    profile
}: TNavigationSideMenuProps) => {
    const menuItems = [
        {
            label: "Basic Details",
            link: "/user/profile/basic_details",
        },
        {
            label: "Additional Details",
            link: "/user/profile/additional_details"
        },
        {
            label: "Personal Preferences",
            link: "/user/profile/personal_preferences"
        }
    ]

    if (profile.marital_status == 'Married') {
        menuItems.splice(2, 0, {
            label: "Spouse Details",
            link: "/user/profile/spouse_details"
        },)
    }

    const currentPath = usePathname()
    return (
        <Menu>
            { menuItems.map((item, index) => (
                <Menu.Item 
                    key={index}
                    label={item.label}
                    link={item.link}
                    active={currentPath == item.link}
                />
            ))}
        </Menu>
    )
}

export default NavigationSideMenu