
import Image from "next/image";
import { Inter, Questrial,Poppins } from "next/font/google";
import HomeComponent from "@/Components/homeComponent";
import AboutUs from "@/Components/aboutUs";
import MySkill from "@/Components/mySkill";
import MyPortofolio from "@/Components/myProtofolio";
import SocialMedia from "@/Components/socialMedia";
import Quetion from "@/Components/quetion";
import Footer from "@/Components/footer";
import Loading from "@/Components/loading";
import { useEffect, useState } from "react";
const inter = Poppins({
  subsets: ["latin"],
  weight: "600"
});

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setIsVisible(false);
      }, 2200);

      return () => clearTimeout(timer);
  }, []);

  if(isVisible){
    return <Loading/>
  }
  return (
    <main className={`relative ${inter.className}  overflow-hidden`}>
     <HomeComponent/>
     <AboutUs/>
     <MySkill/>
     <MyPortofolio/>
     <SocialMedia/>
     <Quetion/>
     <Footer/>
    </main>
  );
}
