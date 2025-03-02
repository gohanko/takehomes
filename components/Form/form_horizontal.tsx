import { ReactNode } from "react"

type TFormHorizontalProps = {
    children: ReactNode
}

const FormHorizontal = ({
    children,
}: TFormHorizontalProps) => (
    <div className='flex flex-row gap-5'>
        { children }
    </div>
)

export default FormHorizontal