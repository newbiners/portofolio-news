/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
const Quetion = () => {
    return (
        <div className="relative  md:mt-0 mt-20" id="quotes">
            <div className="flex gap-5 items-center justify-center md:justify-start">
                <Image src={"/profile.png"} height={400} width={400} alt="profile" className="hidden md:block w-56 xl:w-72" />
                <div className="w-[90%] md:w-[50%]">
                    <p className="md:text-4xl font-semibold text-center name-outline text-2xl ">Implementing design into code is my favorite</p>
                </div>
            </div>
            <div className="text-[4rem] min-[300px]:text-[7rem] min-[400px]:text-[9rem] md:text-[15rem] name-outline z-30 h-1 absolute top-[-2rem] min-[300px]:top-[-4rem] min-[400px]:top-[-6rem] xl:top-[-2rem] right-2 min-[300px]:right-11 min-[500px]:right-20 md:right-36">"</div>
            <Link href={"#portofolio"} className="md:flex hidden  items-center gap-5 absolute rotate-[-90deg] right-[-3rem] top-24 xl:top-40">
                <p className="text-xl font-semibold">My Portofolio</p>
                <div>
                <FaArrowRight className="text-xl text-secondary animate-shake animate-infinite animate-duration-1000"/>
                </div>
            </Link>
        </div>
    )
}

export default Quetion;