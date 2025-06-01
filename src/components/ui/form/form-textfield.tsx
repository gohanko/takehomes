import classNames from "classnames"

type TFormTextFieldProps = {
    label: string
    name: string
    placeholder?: string
    required?: boolean
    className?: string
    validationHint?: string[]
    defaultValue?: string
    disabled?: boolean
}

export const FormTextField = ({
    label,
    name,
    placeholder,
    required,
    className,
    validationHint,
    defaultValue,
    disabled,
}: TFormTextFieldProps) => (
    <fieldset className={classNames("fieldset", className)}>
        <legend className="fieldset-legend">{ label }</legend>
        <textarea
            className="textarea h-54 w-full"
            placeholder={placeholder}
            name={name}
            required={required}
            disabled={disabled}
            defaultValue={defaultValue}
        />
        { validationHint?.map((hint, index) => (
            <div key={index} className="text-error">{hint}</div>
        ))}
    </fieldset>
)
