import { MenuItem } from "./menu-item";

type TMenuProps = {
    children: React.ReactNode[]
}

export const Menu = ({
    children
}: TMenuProps) => (
    <ul className="menu menu-md bg-base-300 rounded-box w-full">
        { children}
    </ul>
)

Menu.Item = MenuItem
