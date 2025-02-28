
const AuthenticationLayout = ({
    children
}: TLayoutProps) => (
    <>
        <div className="navbar bg-base-100">
            <a className="btn btn-ghost text-xl">Convertium TakeHome</a>
        </div>
    
        { children}
    </>    
)

export default AuthenticationLayout;