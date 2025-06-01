
type TLayoutProps = {
    children: React.ReactNode
}

const Layout = ({
    children
}: TLayoutProps) => (
    <div className="m-4 px-96 flex flex-col justify-center">
        {children}
    </div>
)

export default Layout