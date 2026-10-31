type TTextInputProps = {
    type: "text" | "password",
    placeholder: string,
    value: string,
    onInput: (input: string) => void
}

const TextInput = ({
    type,
    placeholder,
    value,
    onInput
}: TTextInputProps) => (
    <div className="relative my-6">
        <input
            id="id-l13"
            type={type}
            value={value}
            name="id-l13"
            required
            placeholder={placeholder}
            className="relative w-full h-12 px-4 pr-12 placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            onInput={(event) => onInput((event.target as HTMLInputElement).value)}
        />
        <label
            htmlFor="id-l13"
            className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
            { placeholder }
        </label>
    </div>
)

export default TextInput