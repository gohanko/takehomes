import ProfileMenuItem from "./profile_menu_item";

type TProfileViewerMenuProps = {
    children: React.ReactNode[]
}

const ProfileMenu = ({
    children
}: TProfileViewerMenuProps) => (
    <ul className="menu bg-base-200 rounded-box w-56">
        { children}
    </ul>
)

ProfileMenu.Item = ProfileMenuItem

export default ProfileMenu;