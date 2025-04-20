import { Abel } from "next/font/google";
import HomeComponent from "@/Components/homeComponent";
import AboutUs from "@/Components/aboutUs";
import { useAtom } from "jotai";
import { atomBtnAct } from "@/atom";
import { useEffect, useRef, useState } from "react";
import { Blog, MyProject, Footer } from "@/Components";
import { IoPersonCircleOutline } from "react-icons/io5";
import ButtonInput from "../Components/buttons/button";
import { IoIosCloseCircle } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
const inter = Abel({
  subsets: ["latin"],
  weight: "400"
});

export default function Home() {
  const [navAct, setNavAct] = useAtom(atomBtnAct);
  const [menuAct, setMenuAct] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMenuAct(true);
      } else {
        setMenuAct(false);
      }
    };
  
    // Set initial state saat pertama kali mount
    handleResize();
  
    // Pasang event listener
    window.addEventListener("resize", handleResize);
  
    // Bersihkan listener saat unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const styleAct = {
    // transform: "rotate(-90deg)",
    backgroundColor: "#53B964",
    color: "#FFFF"
  };

  const styleNotAct = {
    // transform: "rotate(-90deg)",
    color: "#53B964"
  };

  const menuActiveStyle = {
    transform: "translateX(0em)",
    transition: "transform 2s"
  }

  const menuNonActiveStyle = {
     transform: "translateX(-50rem)",
    transition: "transform 2s"
  }
  useEffect(() => {
    const act = localStorage.getItem("act") || "home";
    setNavAct(act);
  }, [setNavAct]);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const blogRef = useRef(null);
  const projectRef = useRef(null);

  const navButton = [
    { key: "home", title: "Home.( )", ref: homeRef },
    { key: "about", title: "About.( )", ref: aboutRef },
    { key: "blog", title: "Blog.( )", ref: blogRef },
    { key: "project", title: "My Project.( )", ref: projectRef },
  ];

  const tekan = (nav: string, ref?: any) => {
    localStorage.setItem("act", nav);
    setNavAct(nav);
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const menuClick = () => {
    setMenuAct(!menuAct)
    console.log(menuAct, 'act')
  
  }

  return (
    <main className={`relative ${inter.className} w-[100vw] overflow-hidden bg-[#000]  bg-dot-pattern `}>
      {/* Sidebar Navigation */}
      <button onClick={menuClick} className=" w-full flex justify-end p-5 xl:hidden">
      <IoMdMenu className="text-3xl text-[#53B964]"/>
      </button>
      <div className="flex xl:relative xl:flex-row flex-col fixed justify-between top-0 items-start xl:items-center z-50 gap-6 xl:bg-transparent bg-[#213448] xl:w-full lg:w-1/3 w-[60%] pl-4 pr-4 xl:h-auto h-[100vh]" style={
        menuAct ? menuActiveStyle : menuNonActiveStyle
      }>
        <nav className="flex xl:flex-row flex-col gap-2 xl:h-16 w-full">
          <div className="h-10 items-center flex justify-end mb-6 mt-3 xl:hidden">
            <button onClick={menuClick}>
          <IoIosCloseCircle className="text-5xl text-[#53B964]"/>
            </button>
          </div>
          {navButton.map((item, index) => (
            <button
              key={index}
              style={navAct === item.key ? styleAct : styleNotAct}
              className="h-full w-72 md:w-56 xl:w-48 flex items-center py-2 px-4"
              onClick={() => tekan(item.key, item.ref)}
            >
              <p className="text-2xl">{item.title}</p>
            </button>
          ))} 
        </nav>
        <div className="flex gap-6 items-center xl:mb-0 mb-6">
           <ButtonInput title="Compailer.( )" />
            <IoPersonCircleOutline className="text-[#53B964] text-6xl" />
        </div>
      </div>

      {/* Spacer */}
      <div className="w-36"></div>

      {/* Main Content Sections */}
      <div>
        <div id="home" ref={homeRef}>
          <HomeComponent data-aos="fade-up" />
        </div>
        <div id="about" ref={aboutRef}>
          <AboutUs data-aos="fade-up" />
        </div>
        <div id="blog" ref={blogRef}>
          {/* <Blog data-aos="fade-up" /> */}
        </div>
        <div id="project" ref={projectRef}>
          {/* <MyProject data-aos="fade-up" /> */}
        </div>
      </div>
      <Footer/>
    </main>
  );
}
