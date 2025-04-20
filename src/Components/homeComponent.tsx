import { IoPersonCircleOutline } from "react-icons/io5";
import { Anton } from "next/font/google";
import ButtonInput from "./buttons/button";


const anton = Anton({
    subsets: ["latin"],
    weight: "400"
});
const HomeComponent = () => {
    const handleButtonClick = () => {
        // window.scroll({
        //     top: window.scrollY + 800,
        //     behavior: 'smooth',
        // })
    }
    return (
        <main className="w-[100%] p-6 pl-9">
            <div className="h-[100%] flex flex-col justify-center">

            <div className="2xl:mt-16 xl:mt-11">
                <p className="text-[#53B964] 2xl:text-3xl text-xl md:text-2xl">Hi, My name is Gufron.( )</p>
                <div className="text-[#CBD5F5] 2xl:text-8xl xl:text-6xl md:text-5xl text-4xl font-bold xl:mt-16 lg:mt-10 w-3/5 mt-7">
                    <p className={`${anton.className}`}>Implementing design into code is my favorite.</p>
                </div>
            </div>
            <div className="flex gap-9 2xl:mt-20 xl:mt-10 lg:mt-8 mt-4">
                <div className="w-[1px] lg:h-56 bg-[#53B964]" />
                <div className="w-2/3 md:w-5/12 flex flex-col justify-between">
                    <p className="text-[#CBD5F5] xl:text-2xl lg:text-xl">I am a Sofware developer, I have an interest in design and programming code. I have been a front end developer for more than a year. If you are interested you can contact me.</p>
                    <div className="lg:w-60 lg:mt-0 mt-3">
                        <ButtonInput title="Contact Us.( )" onClick={handleButtonClick} />
                    </div>
                </div>
            </div>
            </div>
        </main>
    )
}

export default HomeComponent;