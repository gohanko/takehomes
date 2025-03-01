import { ReactNode } from "react"

type TFormCardHeaderSubtitleProps = {
    children: ReactNode
}

const FormCardHeaderSubtitle = ({
    children
}: TFormCardHeaderSubtitleProps) => (
    <div className="grow-0">
        <span className="text-base-content">
            { children }
        </span>
    </div>
)

export default FormCardHeaderSubtitle