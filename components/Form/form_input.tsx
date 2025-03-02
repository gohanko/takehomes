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
    defaultValue?: string
    disabled?: boolean
}

const FormInput = ({
    label,
    name,
    placeholder,
    required,
    type,
    className,
    validationHint,
    defaultValue,
    disabled
}: TFormInputProps) => (
    <fieldset className={classNames("fieldset", className)} disabled={disabled}>
        <legend className="fieldset-legend">{ label }</legend>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={classNames("input input-border validator input-md w-full", { "input-error": validationHint })}
            required={required}
            defaultValue={defaultValue}
        />
        { validationHint?.map((hint, index) => (
            <div key={index} className="text-error">{hint}</div>
        ))}
    </fieldset>
)

export default FormInput