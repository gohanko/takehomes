
type TFormCheckboxProps = {
    label: string
    defaultChecked: boolean
}

const FormCheckbox = ({
    label,
    defaultChecked
}: TFormCheckboxProps) => (
    <div className="form-control mt-3">
        <label className="label cursor-pointer">
            <span className="label-text">{ label }</span>
            <input type="checkbox" defaultChecked={defaultChecked} className="checkbox" />
        </label>
    </div>
)

export default FormCheckbox