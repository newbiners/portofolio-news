import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    return (
        <div className="mt-16 md:mt-24 h-80 bg-[#CBD5F5] border-t-[#] flex items-center sm:px-16 ">
            <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row justify-between">
                <div className="flex flex-row sm:flex-col sm:justify-start justify-center gap-4 text-xl font-medium">
                    <Link href={"#"} className="text-xl font-medium">Home</Link>
                    <Link href={"#skill"} className="text-xl font-medium">My Skill</Link>
                    <Link href={"#portofolio"} className="text-xl font-medium">Portofolio</Link>
                    <Link href={"#social"} className="text-xl hidden md:block font-medium">Social Media</Link>
                </div>
                <div className="self-center sm:self-end w-[80%] sm:w-[50%] lg:w-[30%] 2xl:w-[20%]">
                    <div className="flex items-center">
                        <Link href={"https://www.instagram.com/gufanto/"}>
                            <Image src={"/instagram.svg"} alt="instagram" height={500} width={500} className="h-12" />
                        </Link>
                        <Link href={"https://www.linkedin.com/in/gufron-aprilianto-a046b1266/"}>
                        <Image src={"/linkedin.svg"} alt="instagram" height={500} width={500} className="h-12" />
                        </Link>
                        <Link href={"https://github.com/newbiners"}>
                        <Image src={"/github.svg"} alt="instagram" height={500} width={500} className="h-16" />
                        </Link>
                        <Link href={"https://www.facebook.com/profile.php?id=100048054977197"}>
                        <Image src={"/fb.svg"} alt="instagram" height={500} width={500} className="h-10" />
                        </Link>
                    </div>
                    <div className="text-center sm:text-end  font-bold">
                        <p className="min-[300px]:text-base text-xs">GufronAprilianto6@gmail.com</p>
                        <p>Jember, Indonesia</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;