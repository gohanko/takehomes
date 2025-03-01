import ProfileMenuItem from "./profile_menu_item";

type TProfileViewerMenuProps = {
    children: React.ReactNode[]
}

const ProfileMenu = ({
    children
}: TProfileViewerMenuProps) => (
    <ul className="menu menu-md bg-base-200 rounded-box w-full">
        { children}
    </ul>
)

ProfileMenu.Item = ProfileMenuItem

export default ProfileMenu;