"use client"

import Menu from "@/components/Menu"
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
            link: "/profile/basic_details",
        },
        {
            label: "Additional Details",
            link: "/profile/additional_details"
        },
        {
            label: "Personal Preferences",
            link: "/profile/personal_preferences"
        }
    ]

    if (!['Single', 'Divorced', null].includes(profile.marital_status)) {
        menuItems.splice(2, 0, {
            label: "Spouse Details",
            link: "/profile/spouse_details"
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