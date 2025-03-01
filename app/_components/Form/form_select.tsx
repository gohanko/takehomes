import classNames from "classnames"

type TFormSelectProps = {
    label: string,
    placeholder: string,
    options: string[],
    className?: string
}

const FormSelect = ({
    label,
    placeholder,
    options,
    className
}: TFormSelectProps) => (
    <fieldset className={classNames("fieldset flex", className)}>
        <legend className="fieldset-legend">{ label }</legend>
        <select defaultValue={placeholder} className="select flex-1">
            <option disabled={true}>{placeholder}</option>

            { options.map((option, index) => (
                <option key={index}>{ option }</option>
            ))}
        </select>
    </fieldset>
)

export default FormSelect