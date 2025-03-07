import classNames from "classnames"
import Link from "next/link"

type TMenuItemProps = {
    label: string,
    link: string,
    active?: boolean,
}

const MenuItem = ({
    label,
    link,
    active
}: TMenuItemProps) => (
    <li>
        <Link 
            className={classNames({ "menu-active": active })} 
            href={link}
        >
            {label}
        </Link>
    </li>
)

export default MenuItem