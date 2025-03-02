type TFormButtonProps = {
    label: string
}

const FormButton = ({
    label
}: TFormButtonProps) => (
    <fieldset className="fieldset mt-6 grow">
        <button className="btn btn-primary">
            { label }
        </button>
    </fieldset>
)

export default FormButton