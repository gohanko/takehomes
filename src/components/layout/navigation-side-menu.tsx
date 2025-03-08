"use client"

import { Menu } from "@/components/ui/Menu"
import { routesConfig } from "@/configs/routes-config"
import { Profile } from "@prisma/client"
import { usePathname } from "next/navigation"

type TNavigationSideMenuProps = {
    profile: Profile
}

export const NavigationSideMenu = ({
    profile
}: TNavigationSideMenuProps) => {
    const menuItems = [
        {
            label: "Basic Details",
            link: routesConfig.user_profile_basic_details.route,
        },
        {
            label: "Additional Details",
            link: routesConfig.user_profile_additional_details.route
        },
        {
            label: "Personal Preferences",
            link: routesConfig.user_profile_personal_preferences.route
        }
    ]

    if (profile.marital_status == 'Married') {
        menuItems.splice(2, 0, {
            label: "Spouse Details",
            link: routesConfig.user_profile_spouse_details.route
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