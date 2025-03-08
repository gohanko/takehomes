import classNames from "classnames"

type TFormSelectProps = {
    label: string,
    name: string, 
    placeholder: string,
    options: string[],
    className?: string
    defaultValue?: string,
    disabled?: boolean,
    required?: boolean
    validationHint?: string[]
}

export const FormSelect = ({
    label,
    name,
    placeholder,
    options,
    className,
    defaultValue,
    disabled,
    required,
    validationHint
}: TFormSelectProps) => (
    <fieldset className={classNames("fieldset flex flex-col", className)} disabled={disabled}>
        <legend className="fieldset-legend">{ label }</legend>
        <select name={name} defaultValue={defaultValue || placeholder} required={required} className="select w-full">
            <option disabled={true}>{placeholder}</option>

            { options.map((option, index) => (
                <option key={index}>{ option }</option>
            ))}
        </select>
        { validationHint?.map((hint, index) => (
            <div key={index} className="text-error">{hint}</div>
        ))}
    </fieldset>
)
