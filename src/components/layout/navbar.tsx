import Link from "next/link"

const Navbar = () => (
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
                        <Link href="/profile/basic_details">Home</Link>
                    </li>
                    <li>
                        <Link href="/profile/basic_details">My Profile</Link>
                    </li>
                    <li>
                        <Link href="/profile/basic_details">Edit Profile</Link>
                    </li>
                    <li>
                        <Link href="/authentication/logout" prefetch={false}>Log Out</Link>
                    </li>
                </ul>
            </div>
            <a className="btn btn-ghost text-xl">Convertium TakeHome Application</a>
        </div>
    </div>
)

export default Navbar