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
    <fieldset className={classNames("fieldset flex", className)}>
        <legend className="fieldset-legend">{ label }</legend>
        <input
            type={type}
            placeholder={placeholder}
            className="input input-border input-md flex-1"
            required={required}
        />
    </fieldset>
)

export default FormInput