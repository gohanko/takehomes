
type TFormCheckboxProps = {
    label: string
    name?: string
    defaultChecked: boolean
}

export const FormCheckbox = ({
    label,
    name,
    defaultChecked
}: TFormCheckboxProps) => (
    <fieldset className="fieldset mt-3 flex">
        <label className="fieldset-label">
            <input type="checkbox" name={name} defaultChecked={defaultChecked} className="checkbox checkbox-primary" />
            { label }
        </label>

    </fieldset>
)
