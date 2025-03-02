import classNames from "classnames"
import { ReactNode } from "react"

type TFormHorizontalProps = {
    children: ReactNode,
    className?: string
}

const FormHorizontal = ({
    children,
    className,
}: TFormHorizontalProps) => (
    <div className={classNames('flex flex-row gap-5', className)}>
        { children }
    </div>
)

export default FormHorizontal