import { ReactNode } from "react"

type TDividerProps = {
    children: ReactNode
}

export const Divider = ({
    children
}: TDividerProps) => (
    <div className="flex w-full flex-col">
        <div className="divider">
            { children }
        </div>
    </div>
)