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
    <div className={classNames("form-control", className)}>
        <label className="label">
            <span className="label-text">{ label }</span>
        </label>
        <select defaultValue={placeholder} className="select">
            <option disabled={true}>{placeholder}</option>

            { options.map((option, index) => (
                <option key={index}>{ option }</option>
            ))}
        </select>
    </div>
)

export default FormSelect