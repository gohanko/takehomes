type TFormButtonProps = {
    label: string
}

const FormButton = ({
    label
}: TFormButtonProps) => (
    <div className="form-control mt-6 grow">
        <button className="btn btn-primary">
            { label }
        </button>
    </div>
)

export default FormButton