import Link from "next/link";
import Navbar from "../../components/navbar";
import NavigationSideMenu from "@/containers/navigation-side-menu";
import { getUserAndProfileData } from "./actions";

const ProfileLayout = async ({
    children
}: TLayoutProps) => {
    const { profile } = await getUserAndProfileData()

    return (
        <>
            <Navbar />
    
            <main className="flex-1 flex flex-col lg:flex-row m-5 gap-5">
                <div className="flex-1 flex flex-col gap-5">
                    <NavigationSideMenu profile={profile} />
    
                    <Link className="hidden lg:flex btn btn-soft" href="/authentication/logout" prefetch={false}>Log Out</Link>
                </div>
    
                <div className="flex-4 flex flex-col gap-5 bg-base-300 rounded-box p-5">    
                    { children }
                </div>
            </main>
        </>
    )
}

export default ProfileLayout;