import { Anton } from "next/font/google";
import { FaArrowCircleDown } from "react-icons/fa";
import { useState, useRef } from "react";
import axios from "axios";
import Image from "next/image";
const anton = Anton({
    subsets: ["latin"],
    weight: "400"
});


const AboutUs = () => {
    const terminalRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState({ top: 0, bottom: 0 });
    const [height, setHeight] = useState(400);
    const [width, setWidth] = useState(40); // Width dalam persen
    const [lastScrollY, setLastScrollY] = useState(0);
    const [dataInput, setDataInput] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const [arrDataInput, setArrDataInput] = useState<string[]>([
        'Apakah ada yang bisa saya bantu ?',
    ]);
    const handleScroll = () => {
        if (terminalRef.current && containerRef.current) {
            const rect = terminalRef.current.getBoundingClientRect();
            const currentScrollY = containerRef.current.scrollTop;

            setPosition({ top: rect.top, bottom: rect.bottom });

            if (currentScrollY > lastScrollY) {
                // Scroll ke bawah → Perbesar ukuran
                setHeight(prev => (prev < 500 ? prev + 300 : prev));
                setWidth(prev => (prev < 80 ? prev + 2 : prev));
            } else {
                // Scroll ke atas → Kembali ke ukuran semula secara perlahan
                setHeight(prev => (prev > 400 ? prev - 300 : prev));
                setWidth(prev => (prev > 40 ? prev - 2 : prev));
            }

            setLastScrollY(currentScrollY);
        }
    };

    const handleScrollToTerminal = () => {
        if (terminalRef.current) {
            terminalRef.current.scrollIntoView({ behavior: "smooth" });
        }
        containerRef.current?.addEventListener("scroll", handleScroll);
    }

    const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            setIsLogin(false);
            if ((event.target as HTMLInputElement).value == "clear") {
                setArrDataInput(['Apakah ada yang bisa saya bantu ?']);
                setIsLogin(true);
                (event.target as HTMLInputElement).value = "";
                return
            }
            setArrDataInput([...arrDataInput, (event.target as HTMLInputElement).value]);

            const { data } = await axios.post('/api/chatbot/send', { prompt: (event.target as HTMLInputElement).value });
            if (data) {
                setArrDataInput([...arrDataInput, (event.target as HTMLInputElement).value, data]);
            }
            setIsLogin(true);
            console.log(isLogin);
            (event.target as HTMLInputElement).value = "";
        }
    };
    return (
        <div
            ref={containerRef}
            className="overflow-y-auto text-[#CBD5F5] relative hide-scrollbar"
            onScroll={handleScroll}
        >
            <div >
                <div className="pt-14 xl:pt-24">
                    <h2 className={`${anton.className} text-center text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl`}>About Us</h2>
                    <p className="text-center text-3xl lg:text-4xl 2xl:text-5xl mt-10 lg:mt-14 px-20">
                        Code is not just lines of text; it&#39;s a reflection of creativity, persistence, and the courage to turn ideas into reality.
                    </p>
                </div>
                <div className="text-center mt-11 flex flex-col items-center">
                    <p>Scroll Down</p>
                    <FaArrowCircleDown className="text-4xl animate-bounce animate-infinite animate-duration-1000 mt-5 cursor-pointer" />
                </div>
                <div className="flex justify-center">
                    <div className="bg-[#CBD5F5] p-4 shadow-2xl shadow-slate-600/75 flex lg:mt-14 mt-6 mb-11 lg:mb-32 w-4/6">
                        <Image src={"/logo-next.svg"} alt="skill" height={500} width={500} className="w-full h-11" />
                        <Image src={"/tailwind.svg"} alt="skill" height={500} width={500} className="w-full h-11" />
                        <Image src={"/react.svg"} alt="skill" height={500} width={500} className="w-full h-11" />
                        <Image src={"/typescript.svg"} alt="skill" height={500} width={500} className="w-full h-11" />
                        <Image src={"/ai.svg"} alt="skill" height={500} width={500} className="w-full h-11" />
                    </div>
                </div>
                <div className="flex justify-center mt-[7rem] lg:mt-[12rem] mb-24" id="terminal-container">
                    <div
                        className="bg-[#3E3F5B] rounded-2xl border-[#53B964] border-4 transition-all duration-300"
                        id="terminal-box"
                        ref={terminalRef}
                        style={{
                            height: `${height}px`,
                            width: `70%`
                        }}
                    >
                        <div className="w-full h-16 border-b-4 border-[#53B964] px-4 flex items-center gap-3">
                            <div className="h-5 w-5 bg-red-600 rounded-full"></div>
                            <div className="h-5 w-5 bg-yellow-600 rounded-full"></div>
                            <div className="h-5 w-5 bg-green-600 rounded-full"></div>
                        </div>
                        <div className="p-3 max-h-[39rem] overflow-y-auto hide-scrollbar">
                            {
                                arrDataInput.map((item, index) => {
                                    return (
                                        <div className="flex items-start" key={index}>
                                            <span>{'> '}</span>
                                            <p className="ml-2">{item}</p>
                                        </div>
                                    )
                                })
                            }
                            <div>
                                {isLogin &&
                                    <div className="flex items-center">
                                        <span>{'> '}</span>
                                        <input type="text" className="w-full h-10 bg-transparent outline-none border-none ml-2" placeholder="Ketik sesuatu..." onKeyDown={handleKeyDown} />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
