import Link from "next/link";
import { Navbar } from "../../../components/layout/navbar";
import { NavigationSideMenu } from "../../../components/layout/navigation-side-menu";
import { getUserAndProfileData } from "./actions";
import { routesConfig } from "../../../configs/routes-config";

const Layout = async ({
    children
}: TLayoutProps) => {
    const { profile } = await getUserAndProfileData()

    return (
        <>
            <Navbar />
    
            <main className="flex-1 flex flex-col lg:flex-row m-5 gap-5">
                <div className="flex-1 flex flex-col gap-5">
                    <NavigationSideMenu profile={profile} />
    
                    <Link className="hidden lg:flex btn btn-soft" href={routesConfig.api_authentication_logout.route} prefetch={false}>Log Out</Link>
                </div>
    
                <div className="flex-4 flex flex-col gap-5 bg-base-300 rounded-box p-5">    
                    { children }
                </div>
            </main>
        </>
    )
}

export default Layout;