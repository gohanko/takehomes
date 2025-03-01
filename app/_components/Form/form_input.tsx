import classNames from "classnames"

type TFormInputProps = {
    label: string
    placeholder: string
    type: "email" | "password" | "text" | "datetime-local"
    required: boolean
    className?: string
}

const FormInput = ({
    label,
    placeholder,
    required,
    type,
    className
}: TFormInputProps) => (
    <div className={classNames("form-control", className)}>
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

export default FormInput