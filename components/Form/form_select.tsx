import classNames from "classnames"

type TFormSelectProps = {
    label: string,
    name: string, 
    placeholder: string,
    options: string[],
    className?: string
}

const FormSelect = ({
    label,
    name,
    placeholder,
    options,
    className
}: TFormSelectProps) => (
    <fieldset className={classNames("fieldset flex", className)}>
        <legend className="fieldset-legend">{ label }</legend>
        <select name={name} defaultValue={placeholder} className="select flex-1">
            <option disabled={true}>{placeholder}</option>

            { options.map((option, index) => (
                <option key={index}>{ option }</option>
            ))}
        </select>
    </fieldset>
)

export default FormSelect