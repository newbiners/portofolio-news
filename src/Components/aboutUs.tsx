/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import TitleRotate from "./titleRotate";

const AboutUs = () => {
    return(
        <div className="h-[250px] md:h-[450px] 2xl:h-[540px] bg-secondary  flex justify-center relative items-center">
            <div className="text-[150px] sm:text-[200px] md:text-[350px] 2xl:text-[400px] font-semibold name-outline-2 absolute top-[-4rem] md:top-[-8rem] 2xl:top-[-10rem] left-0 h-52">"</div>
            <Image src={"/decor.svg"} alt="decor" height={500} width={200} className="h-6 md:h-10 2xl:h-12 absolute top-[-0.7rem] 2xl:top-[-1.4rem] right-[0rem] lg:right-[1rem] " data-aos="fade-down"/>
            <div className="w-[80%]">
            <p className="text-base min-[400px]:text-xl md:text-3xl 2xl:text-4xl font-semibold name-outline-2 text-center" data-aos="fade-up">I am a front end developer, I have an interest in design and programming code. I have been a front end developer for more than a year. If you are interested you can contact me</p>
            </div>
            <div className="absolute bottom-40 h-4 right-[-8rem]">
            <TitleRotate/>
            </div>
        </div>
    )
}

export default AboutUs;