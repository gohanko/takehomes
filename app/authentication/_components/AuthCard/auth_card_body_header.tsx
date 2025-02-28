type TAuthCardBodyHeaderProps = {
    children?: React.ReactNode,
    title: string,
}

const AuthCardBodyHeader = ({
    children,
    title,
}: TAuthCardBodyHeaderProps) => (
    <div className="flex flex-col gap-4">
        <div className="card-title">
            <h1 className="text-5xl font-bold">{ title }</h1>
        </div>
        <div className="grow-0">
            { children }
        </div>
    </div>
)

export default AuthCardBodyHeader