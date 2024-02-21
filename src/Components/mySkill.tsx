import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import TitleRotate from "./titleRotate";
import Link from "next/link";
const MySkill = () => {
    return (
        <div className="h-[23rem] min-[300px]:h-[30rem] md:h-[50rem] px-7 relative" id="skill">
            <div className=" w-44 relative self-start mt-5">
                <p className="text-4xl min-[300px]:text-5xl md:text-8xl 2xl:text-9xl font-extrabold outline-text text-transparent " data-aos="fade-right">My</p>
                <p className="text-3xl min-[300px]:text-4xl md:text-6xl 2xl:text-8xl font-bold name-outline text-end absolute right-24 min-[300px]:right-20 md:right-[-1rem] 2xl:bottom-[-3rem] 2xl:right-[-5rem] bottom-[-1.6rem] min-[300px]:bottom-[-2rem] md:bottom-[-2.5rem] -z-10" data-aos="fade-left">Skill</p>
            </div>
            <div className=" flex items-center justify-center relative h-full">
                <div className=" w-[40rem] rounded-full  flex items-center justify-center">
                    <div className="md:h-96 min-[300px]:h-64 h-48 w-48 min-[300px]:w-64 md:w-96   rounded-full border-[0.3px] border-slate-700 z-10 relative flex justify-center items-center">
                        <div className="flex justify-center flex-col items-center absolute right-[-1rem] min-[300px]:right-[-2rem] z-10 top-0">
                            <Image src={"/ai.svg"} alt="ai" height={500} width={500} className="w-10 h-10 min-[300px]:w-16 min-[300px]:h-16 md:h-24 md:w-24" data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="300"
                                data-aos-offset="0" />
                            <p className="font-semibold text-[9px] min-[300px]:text-xs md:text-base name-outline">Adobe ilustrator</p>
                        </div>
                        <div className="flex justify-center flex-col items-center z-10 absolute bottom-[-2.5rem] min-[300px]:bottom-[-3rem] md:bottom-[-6rem]">
                            <Image src={"/react.svg"} alt="ai" height={500} width={500} className="min-[300px]:w-16 w-12 h-12 min-[300px]:h-16 md:h-24 md:w-24" data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="300"
                                data-aos-offset="0" />
                            <p className="font-semibold min-[300px]:text-base text-xs name-outline">React js</p>
                        </div>
                        <div className="flex justify-center flex-col items-center z-10 absolute left-[-2rem] min-[300px]:left-[-3rem] ">
                            <Image src={"/typescript.svg"} alt="ai" height={500} width={500} className="w-12 h-12 min-[300px]:w-16 min-[300px]:h-16 md:h-24 md:w-24" data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="300"
                                data-aos-offset="0" />
                            <p className="font-semibold text-xs min-[300px]:text-base name-outline">Typescript</p>
                        </div>
                        <div className="flex justify-center flex-col z-10 items-center absolute left-10 top-[-2rem] md:top-[-3rem]">
                            <Image src={"/logo-next.svg"} alt="ai" height={500} width={500} className="min-[300px]:w-16 w-12 h-12 min-[300px]:h-16 md:h-24 md:w-24" data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="300"
                                data-aos-offset="0" />
                            <p className="font-semibold text-xs min-[300px]:text-base name-outline">Next Js</p>
                        </div>
                        <div className="flex justify-center z-10 flex-col items-center absolute right-[-1rem] min-[300px]:right-[-2rem] md:right-[-3rem] bottom-8 md:bottom-20">
                            <Image src={"/tailwind.svg"} alt="ai" height={500} width={500} className="min-[300px]:w-16 w-12 h-12 min-[300px]:h-16 md:h-24 md:w-24" data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="300"
                                data-aos-offset="0" />
                            <p className="font-semibold text-xs min-[300px]:text-base name-outline">Tailwind</p>
                        </div>
                        <div className="w-12 h-12 min-[300px]:h-24 min-[300px]:w-24 md:w-40 md:h-40 bg-secondary rounded-full flex items-center justify-center">
                            <div className="md:w-20 min-[300px]:w-9 w-3 h-3 min-[300px]:h-9 md:h-20 rounded-full bg-white" />
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