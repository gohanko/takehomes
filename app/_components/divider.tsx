import { ReactNode } from "react"

type TDividerProps = {
    children: ReactNode
}

const Divider = ({
    children
}: TDividerProps) => (
    <div className="flex w-full flex-col">
        <div className="divider">
            { children }
        </div>
    </div>
)

export default Divider