"use client"

import Menu from "@/components/Menu"
import { usePathname } from "next/navigation"

const NavigationSideMenu = () => {
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
            label: "Spouse Details",
            link: "/profile/spouse_details"
        },
        {
            label: "Personal Preferences",
            link: "/profile/personal_preferences"
        }
    ]

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