import classNames from "classnames"
import Link from "next/link"

type TProfileMenuItemProps = {
    label: string,
    link: string,
    isActive?: boolean,
}

const ProfileMenuItem = ({
    label,
    link,
    isActive,
}: TProfileMenuItemProps) => (
    <li>
        <Link 
            className={classNames({ "menu-active": isActive })} 
            href={link}
        >
            {label}
        </Link>
    </li>
)

export default ProfileMenuItem