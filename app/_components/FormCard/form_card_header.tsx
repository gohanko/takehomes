import FormCardHeaderSubtitle from "./form_card_header_subtitle"
import FormCardHeaderTitle from "./form_card_header_title"

type TFormCardHeaderProps = {
    children?: React.ReactNode,
}

const FormCardHeader = ({
    children,
}: TFormCardHeaderProps) => (
    <div className="flex flex-col gap-4">
        { children }
    </div>
)

FormCardHeader.Title = FormCardHeaderTitle
FormCardHeader.Subtitle = FormCardHeaderSubtitle

export default FormCardHeader