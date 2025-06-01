import { routesConfig } from "@/configs/routes-config"
import Link from "next/link"

export const Navbar = () => (
    <div className="navbar bg-base-200">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-md dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow-sm">
                    <li>
                        <Link href={routesConfig.user_profile_basic_details.route}>Home</Link>
                    </li>
                    <li>
                        <Link href={routesConfig.user_profile_basic_details.route}>My Profile</Link>
                    </li>
                    <li>
                        <Link href={routesConfig.user_profile_basic_details.route}>Edit Profile</Link>
                    </li>
                    <li>
                        <Link href={routesConfig.api_authentication_logout.route} prefetch={false}>Log Out</Link>
                    </li>
                </ul>
            </div>
            <a className="btn btn-ghost text-xl overflow-ellipsis">React/NextJS TakeHome</a>
        </div>
    </div>
)
