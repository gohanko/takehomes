// BackgroundImage.tsx
import Image from "next/image";
import { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react";
import classNames, { Argument } from "classnames";

interface TBackgroundImageProps {
    children?: ReactNode;
    className?: Argument;
    image: ReactElement<typeof Image>;
}

type TBackgroundImageAdditionalProps = Omit<
    ComponentPropsWithoutRef<"div">,
    keyof TBackgroundImageProps
>;

export const BackgroundImage = ({
    children,
    className,
    image,
    ...props
}: TBackgroundImageProps & TBackgroundImageAdditionalProps) => {
    return (
        <div
            className={classNames("lg:relative", "overflow-hidden", className)}
            {...props}
        >
            <div className="absolute inset-0 -z-10">{image}</div>
            <div className="z-10 flex h-full justify-center">{children}</div>
        </div>
    );
}
