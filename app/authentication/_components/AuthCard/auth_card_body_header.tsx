type TAuthCardBodyHeaderProps = {
    children?: React.ReactNode,
    title: string,
}

const AuthCardBodyHeader = ({
    children,
    title,
}: TAuthCardBodyHeaderProps) => (
    <>
        <div className="card-title">
            <h1 className="text-2xl font-bold">{ title }</h1>
        </div>
        <div className="grow-0">
            { children }
        </div>
    </>
)

export default AuthCardBodyHeader