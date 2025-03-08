import { FormCardHeaderSubtitle } from "./form-card-header-subtitle"
import { FormCardHeaderTitle } from "./form-card-header-title"

type TFormCardHeaderProps = {
    children?: React.ReactNode,
}

export const FormCardHeader = ({
    children,
}: TFormCardHeaderProps) => (
    <div className="flex flex-col gap-4">
        { children }
    </div>
)

FormCardHeader.Title = FormCardHeaderTitle
FormCardHeader.Subtitle = FormCardHeaderSubtitle
