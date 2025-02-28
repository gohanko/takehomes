import AuthCardBody from "./auth_card_body"

type TAuthCardProps = {
    children: React.ReactNode,
}

const AuthCard = ({
    children
}: TAuthCardProps) => (
    <div className="card bg-base-300 h-full p-12 shadow-2xl overflow-auto">
        { children }
    </div>
)

AuthCard.Body = AuthCardBody

export default AuthCard