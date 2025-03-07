import Image from "next/image";

type TAvatarProps = {
    url?: string,
    seed?: string,
}

export const Avatar = ({
    url, 
    seed =  "defaultSeed",
}: TAvatarProps) => {
    if (!url) {
        url = `https://api.dicebear.com/9.x/identicon/svg?seed=${seed}`
    }
    
    return (
        <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-44 rounded-full bg-base-200 ring ring-offset-2">
                <Image src={url} alt="Avatar Picture" width="176" height="176" />
            </div>
        </div>
    )
}

