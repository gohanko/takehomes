import Link from "next/link";
import Navbar from "../../components/navbar";
import Menu from "../../components/Menu";
import NavigationSideMenu from "@/containers/navigation-side-menu";

const ProfileLayout = ({
    children
}: TLayoutProps) => {
    const urls = [
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

    return (
        <>
            <Navbar />
    
            <main className="flex-1 flex flex-col lg:flex-row mx-5 mb-5 gap-5">
                <div className="flex-1 flex flex-col gap-5">
                    <NavigationSideMenu />
    
                    <Link className="hidden lg:flex btn btn-soft" href="/authentication/logout">Logout</Link>
                </div>
    
                <div className="flex-4 flex flex-col gap-5 bg-base-200 rounded-box p-5">    
                    { children }
                </div>
            </main>
        </>
    )
}

export default ProfileLayout;