import { ReactNode } from "react"

type TFormCardHeaderSubtitleProps = {
    children: ReactNode
}

export const FormCardHeaderSubtitle = ({
    children
}: TFormCardHeaderSubtitleProps) => (
    <div className="grow-0">
        <span className="text-base-content">
            { children }
        </span>
    </div>
)