
type TLoginFormTextProps = {
    title: string,
    text: string
}

const LoginFormText = ({
    title,
    text
}: TLoginFormTextProps) => (
    <div >
        <header className="mb-2 text-left">
            <h3 className="text-xl font-medium text-slate-700">{ title }</h3>
        </header>
        <div className="flex flex-col space-y-8">
            <p>{ text }</p>
        </div>
    </div>
)

export default LoginFormText