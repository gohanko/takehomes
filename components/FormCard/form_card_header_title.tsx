import { ReactNode } from "react"

type TFormCardHeaderTitleProps = {
    children: ReactNode
}

const FormCardHeaderTitle = ({
    children
}: TFormCardHeaderTitleProps) => (
    <div className="card-title">
        <h1 className="text-3xl lg:text-5xl font-bold">{ children }</h1>
    </div>
)

export default FormCardHeaderTitle