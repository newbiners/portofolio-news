import Image from "next/image";
import { MdWork } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoArrowDownCircleOutline } from "react-icons/io5";
const HomeComponent = () => {
    const handleButtonClick = () => {
        window.scroll({
            top: window.scrollY + 800,
            behavior: 'smooth',
        })
    }
    return (
        <main className="flex flex-col items-center h-[33rem] min-[350px]:h-[30rem] sm:h-[50rem] md:h-[45rem] lg:h-[40rem] xl:h-[100vh]">
            <div className="bg-secondary xl:h-32 h-16 w-16 md:w-28 md:h-28 xl:w-32 right-24 top-32 rounded-full absolute" data-aos="zoom-in" />
            <div className="absolute left-[-10rem] top-[-10rem]">
                <div className="bg-secondary md:h-80 w-64 h-64 md:w-80 xl:h-96 xl:w-96 rounded-full" />
                <Image src={"/decor.svg"} alt="decor" height={500} width={500} className="h-5 md:h-8 xl:h-12 absolute bottom-8 left-24" data-aos="fade-right" />
            </div>
            <p className="mt-24 min-[350px]:mt-24 sm:mt-36 lg:mt-24  text-base sm:text-xl md:text-2xl xl:text-4xl font-semibold tracking-[0.2em] min-[350px]:tracking-[0.3em] name-outline" data-aos="fade-up">Hi I’am Gufron</p>
            <p className="mt-44 min-[350px]:mt-48 sm:mt-64 md:mt-72 lg:mt-64 xl:mt-72 text-2xl sm:text-4xl md:text-5xl xl:text-7xl  2xl:font-extrabold font-extrabold tracking-[0.3em] sm:tracking-[0.5em] name-outline absolute " data-aos="fade-up" data-aos-delay="300">PORTOFOLIO</p>
            <div className="relative flex justify-center items-center">
                <div className="xl:h-72 sm:h-44 w-32 h-32 sm:w-44 md:h-52 md:w-52 xl:w-72 2xl:w-80 2xl:h-80 bg-secondary absolute rounded-full -z-20" />
                <div className=" rounded-full xl:h-80 md:w-64 sm:h-52 h-40 w-40 sm:w-52 md:h-64 xl:w-80 2xl:h-96 2xl:w-96 relative overflow-hidden " data-aos="fade-down">
                    <Image src={"/image-profile.png"} alt="profile" height={500} width={500} className="h-full w-full absolute bottom-[0.5px] right-7" />
                </div>
                <div className="sm:h-20 h-16 w-16 sm:w-20 md:w-28 md:h-28 xl:h-36 xl:w-36 bg-secondary absolute rounded-full z-20 opacity-40 bottom-[-4rem] left-0 " />
            </div>
            <div className="relative flex justify-center max-[350px]:mt-[2rem]">
                <div className="flex flex-col max-[350px]:gap-2 min-[350px]:flex-row justify-center min-[350px]:justify-between  w-[21rem]  sm:w-[25rem] md:w-[29rem] h-12 sm:h-28 z-30  absolute ">
                    <div className="flex flex-col min-[350px]:flex-row sm:gap-2 items-center min-[350px]:self-start justify-center min-[350px]:justify-end" data-aos="fade-up"
                        data-aos-duration="3000">
                        <MdWork className="text-text-primary text-2xl sm:text-4xl min-[350px]:hidden" />
                        <p className="name-outline font-semibold text-xs md:text-base">Front end developer</p>
                        <MdWork className="text-text-primary text-2xl sm:text-4xl min-[350px]:block hidden" />
                    </div>
                    <div className="flex flex-col min-[350px]:flex-row sm:gap-2 items-center max-[350px]:justify-center  min-[350px]:self-end min-[350px]:w-[45%]" data-aos="fade-up"
                        data-aos-duration="3000">
                        <FaLocationDot className="text-text-primary text-2xl sm:text-4xl" />
                        <p className="name-outline font-semibold">Indonesia</p>
                    </div>
                </div>
                <div className="absolute bottom-[-10rem] min-[350px]:bottom-[-8rem] sm:bottom-[-13rem]  flex flex-col items-center gap-2">
                    <div className="hidden min-[350px]:block h-24 sm:h-36 md:h-48  w-1  bg-secondary " />
                    <button onClick={handleButtonClick}>
                        <IoArrowDownCircleOutline className="text-secondary font-bold text-3xl md:text-5xl " />
                    </button>
                    <p className="w-40 text-center font-bold animate-bounce animate-infinite animate-duration-1000">Scroll down</p>
                </div>
            </div>
        </main>
    )
}

export default HomeComponent;