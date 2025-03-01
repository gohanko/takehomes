import FormCardHeader from "./form_card_header"
import FormCardBody from "./form_card_body"

type TFormCardProps = {
    children: React.ReactNode,
}

const FormCard = ({
    children
}: TFormCardProps) => (
    <div className="card bg-base-300 h-full p-12 rounded-3xl shadow-2xl overflow-auto">
        <div className="card-body gap-10">
            { children }
        </div>
    </div>
)

FormCard.Header = FormCardHeader
FormCard.Body = FormCardBody

export default FormCard