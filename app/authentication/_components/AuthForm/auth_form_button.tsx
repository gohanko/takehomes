type TAuthFormButtonProps = {
    label: string
}

const AuthFormButton = ({
    label
}: TAuthFormButtonProps) => (
    <div className="form-control mt-6">
        <button className="btn btn-primary">
            { label }
        </button>
    </div>
)

export default AuthFormButton