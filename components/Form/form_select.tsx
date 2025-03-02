import classNames from "classnames"

type TFormSelectProps = {
    label: string,
    name: string, 
    placeholder: string,
    options: string[],
    className?: string
    defaultValue?: string,
    disabled?: boolean
}

const FormSelect = ({
    label,
    name,
    placeholder,
    options,
    className,
    defaultValue,
    disabled
}: TFormSelectProps) => (
    <fieldset className={classNames("fieldset flex", className)} disabled={disabled}>
        <legend className="fieldset-legend">{ label }</legend>
        <select name={name} defaultValue={defaultValue || placeholder} className="select flex-1">
            <option disabled={true}>{placeholder}</option>

            { options.map((option, index) => (
                <option key={index}>{ option }</option>
            ))}
        </select>
    </fieldset>
)

export default FormSelect