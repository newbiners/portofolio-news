import Image from "next/image";
import TitleRotate2 from "./titleRotate2";
import Link from "next/link";
const SocialMedia = () => {
    return (
        <div className="h-[39rem] hidden md:block lg:h-[40rem] w-full mt-32" id="social">
            <div className="h-[75%] min-[880px]:h-[80%] lg:h-[85%] w-[80%] bg-secondary shadow-2xl p-4 flex flex-col justify-between relative">
                <div className=" absolute right-[-5rem]">
                    <p className="text-[10rem] xl:text-[12rem] top-[5rem] left-[-10rem] absolute font-extrabold  tracking-[0.1em] -z-0 " data-aos="fade-left">Media</p>
                    <p className="text-8xl top-[-3rem] left-[-10rem] absolute font-semibold z-10 tracking-[0.3em]" data-aos="fade-right">Social</p>
                    <div className="rotate-[-20deg]">
                        <Image src={"/patung.png"} alt="patung" height={500} width={500} className="self-end w-[17rem] min-[880px]:w-[19rem] lg:w-[22rem] " data-aos="fade-left" data-aos-delay="300" />
                    </div>
                </div>
                <div className="absolute bottom-[-2rem] lg:bottom-[-4rem] right-0 flex justify-center items-center">
                    <div className="h-28 w-28 opacity-30 rounded-full bg-secondary absolute" />
                    <TitleRotate2 />
                </div>
                <p className="text-xl">My Social media</p>
                <div className="h-80 relative w-96">
                    <Link href={"https://www.facebook.com/profile.php?id=100048054977197"}>
                        <Image src={"/fb.svg"} alt="fb" height={400} width={400} className="w-32 h-32 lg:h-36 lg:w-36 absolute bottom-0 right-12 lg:right-0" />
                    </Link>
                    <Link href={"https://github.com/newbiners"}>
                        <Image src={"/github.svg"} alt="fb" height={600} width={600} className="h-40 w-40 lg:h-48 lg:w-48 absolute bottom-0" />
                    </Link>
                    <Link href={"https://www.instagram.com/gufanto/"}>
                        <Image src={"/instagram.svg"} alt="fb" height={400} width={400} className="h-24 w-24 absolute" />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/gufron-aprilianto-a046b1266/"}>
                        <Image src={"/linkedin.svg"} alt="fb" height={400} width={400} className="h-28 w-28 absolute top-10 right-36" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia;