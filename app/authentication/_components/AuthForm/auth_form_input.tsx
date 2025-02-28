
type TAuthFormInputProps = {
    label: string
    placeholder: string
    type: "email" | "password"
    required: boolean
}

const AuthFormInput = ({
    label,
    placeholder,
    required,
    type,
}: TAuthFormInputProps) => (
    <div className="form-control">
        <label className="label">
            <span className="label-text">{ label }</span>
        </label>
        <input
            type={type}
            placeholder={placeholder}
            className="input input-bordered"
            required={required}
        />
    </div>
)

export default AuthFormInput