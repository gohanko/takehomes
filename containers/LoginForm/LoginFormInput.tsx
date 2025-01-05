import TextInput from "@/components/TextInput"

type TLoginFormInputProps = {
    title: string,
    inputType: "text" | "password",
    input: string,
    onInput: (input: string) => void
}

const LoginFormInput = ({
    title,
    inputType,
    input,
    onInput
}: TLoginFormInputProps) => (
    <>
        <header className="mb-2 text-left">
            <h3 className="text-xl font-medium text-slate-700">{ title }</h3>
        </header>
        <div className="flex flex-col space-y-8">
            <TextInput
                type={inputType}
                placeholder={title}
                value={input}
                onInput={onInput}
            />
        </div>
    </>
)

export default LoginFormInput