
type TFormCheckboxProps = {
    label: string
    defaultChecked: boolean
}

const FormCheckbox = ({
    label,
    defaultChecked
}: TFormCheckboxProps) => (
    <fieldset className="fieldset mt-3 flex">
        <label className="fieldset-label">
            <input type="checkbox" defaultChecked={defaultChecked} className="checkbox checkbox-primary" />
            { label }
        </label>

    </fieldset>
)

export default FormCheckbox