import classNames from "classnames"
import { ReactNode } from "react"

type TFormHorizontalProps = {
    children: ReactNode,
    className?: string
}

export const FormHorizontal = ({
    children,
    className,
}: TFormHorizontalProps) => (
    <div className={classNames('flex flex-col lg:flex-row lg:gap-2', className)}>
        { children }
    </div>
)
