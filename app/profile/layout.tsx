import Navbar from "./_components/navbar";

const ProfileLayout = ({
    children
}: TLayoutProps) => (
    <>
        <Navbar />

        <main className="">
            { children}
        </main>
    </>
)

export default ProfileLayout;