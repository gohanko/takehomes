import { FormCardHeader } from "./form-card-header"
import { FormCardBody } from "./form-card-body"

type TFormCardProps = {
    children: React.ReactNode,
}

export const FormCard = ({
    children
}: TFormCardProps) => (
    <div className="card bg-base-300 h-full p-5 lg:p-12 rounded-3xl shadow-2xl overflow-auto">
        <div className="card-body gap-5 lg:gap-10">
            { children }
        </div>
    </div>
)

FormCard.Header = FormCardHeader
FormCard.Body = FormCardBody
