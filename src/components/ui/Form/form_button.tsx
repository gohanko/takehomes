"use client"
import classNames from "classnames"

type TFormButtonProps = {
    label: string,
    type: "submit" | "reset"
    color: "neutral" | "primary" | "error" | "success"
    onClick?: () => void
}

const FormButton = ({
    label,
    type,
    color,
    onClick
}: TFormButtonProps) => (
    <fieldset className="fieldset mt-6 grow">
        <button 
            className={classNames(
                "btn", 
                {
                    'btn-neutral': color == 'neutral',
                    'btn-primary': color == 'primary',
                    'btn-error': color == 'error',
                    'btn-success': color == 'success',
                }
            )}
            type={type}
            onClick={onClick}
        >
            { label }
        </button>
    </fieldset>
)

export default FormButton