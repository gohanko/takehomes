import classNames from "classnames"
import { ReactNode } from "react"

type TFormInputProps = {
    label: string
    name: string
    placeholder?: string
    type: "email" | "password" | "text" | "date"
    required: boolean
    className?: string
    validationHint?: string[]
}

const FormInput = ({
    label,
    name,
    placeholder,
    required,
    type,
    className,
    validationHint
}: TFormInputProps) => (
    <fieldset className={classNames("fieldset", className)}>
        <legend className="fieldset-legend">{ label }</legend>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={classNames("input input-border validator input-md w-full", { "input-error": validationHint })}
            required={required}
        />
        { validationHint?.map((hint, index) => (
            <div key={index} className="text-error">{hint}</div>
        ))}
    </fieldset>
)

export default FormInput