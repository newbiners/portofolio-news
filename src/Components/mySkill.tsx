import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import TitleRotate from "./titleRotate";
import { BsPersonCircle } from "react-icons/bs";
import Link from "next/link";
const MySkill = () => {
    return (
        <div className="h-[23rem] min-[300px]:h-[30rem] md:h-[50rem] px-7 relative" id="skill">
            <div className=" w-44 relative self-start mt-5">
                <p className="text-4xl min-[300px]:text-5xl md:text-8xl 2xl:text-9xl font-extrabold outline-text text-transparent " data-aos="fade-right">My</p>
                <p className="text-3xl min-[300px]:text-4xl md:text-6xl 2xl:text-8xl font-bold name-outline text-end absolute right-24 min-[300px]:right-20 md:right-[-1rem] 2xl:bottom-[-3rem] 2xl:right-[-5rem] bottom-[-1.6rem] min-[300px]:bottom-[-2rem] md:bottom-[-2.5rem] -z-10" data-aos="fade-left">Skill</p>
            </div>
            <div className=" flex items-center justify-center relative h-full">
                <div className="p-3 bg-secondary w-2/3 h-4/5 rounded-3xl flex justify-center items-center shadow-2xl shadow-slate-600/75">
                    <div className="w-full h-full bg-slate-100 rounded-2xl overflow-hidden ">
                        <div className="bg-white w-full h-14 flex justify-between items-center">
                            <p className="text-xl font-bold ml-5">GufronDev</p>
                            <div className="flex gap-3 items-center">
                                <div className="px-4 py-1 bg-secondary rounded-full cursor-pointer">
                                    <p>Back end</p>
                                </div>
                                <div className="text-slate-400 cursor-pointer">
                                    <p>Front end</p>
                                </div>
                                <div className="text-slate-400 cursor-pointer">
                                    <p>Terminal</p>
                                </div>
                            </div>
                            <div className="mr-5 cursor-pointer">
                                <Link href={"/login"}>
                                    <BsPersonCircle className="text-xl" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-end h-full">
                            <div className="w-28 h-full bg-slate-300 flex justify-start items-start flex-col">
                                <Image src={"/next.svg"} alt="skill" height={500} width={500} className="w-full p-5" />
                                <Image src={"/react.svg"} alt="skill" height={500} width={500} className="w-full p-5" />
                                <Image src={"/typescript.svg"} alt="skill" height={500} width={500} className="w-full p-5" />
                                <Image src={"/tailwind.svg"} alt="skill" height={500} width={500} className="w-full p-5" />
                            </div>
                        </div>
                    </div>
                </div>
                <Link href={"#portofolio"} className="hidden min-[500px]:flex gap-7 rotate-90 items-center justify-center absolute right-[-4rem]">
                    <p className="text-lg font-semibold">My Portofolio</p>
                    <div>
                        <FaArrowRight className="text-2xl text-secondary animate-shake animate-infinite animate-duration-1000" />
                    </div>
                </Link>
            </div>
            <div className="-z-20 h-full w-full absolute top-0 flex left-[-4rem] items-center">
                <Image src={"/patung.png"} alt="patung" height={450} width={450} className="rotate-[30deg] w-40 min-[300px]:w-60 md:w-96 opacity-25" />
            </div>
            <div className="-z-10 flex justify-center items-center absolute bottom-24 left-[-10rem]">
                <div className="min-[300px]:w-24 w-16 h-16 min-[300px]:h-24 md:h-44 md:w-44 bg-secondary absolute rounded-full" />
                <TitleRotate />
            </div>
        </div>
    )
}

export default MySkill;