import MenuItem from "./menu_item";

type TMenuProps = {
    children: React.ReactNode[]
}

const Menu = ({
    children
}: TMenuProps) => (
    <ul className="menu menu-md bg-base-200 rounded-box w-full">
        { children}
    </ul>
)

Menu.Item = MenuItem

export default Menu;