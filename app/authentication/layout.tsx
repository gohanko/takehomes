import Image from "next/image";
import BackgroundImage from "../../components/background-image";
import authBg from "../../public/auth_bg.jpg";

const AuthenticationLayout = ({
    children
}: TLayoutProps) => (
    <div className="flex flex-col-reverse lg:flex-row gap-5 h-screen p-5">        
        <BackgroundImage 
            image={
                <Image
                    src={authBg}
                    alt="Image Alt Text"
                    className="object-cover object-center"
                    fill
                />
            }
            className="flex-1 flex lg:w-full lg:h-full rounded-3xl"
        />

        <div className="flex-1 flex flex-col w-full lg:w-1/3 xl:w-1/4 justify-center">
            { children }
        </div>
    </div>
)

export default AuthenticationLayout;