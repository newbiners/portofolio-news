import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import TitleRotate2 from "./titleRotate2";
import TitleRotate from "./titleRotate";
const Loading = () => {
    return (
        <div className="relative h-[100vh] overflow-hidden flex items-center justify-center">
            <div className="loading-grey absolute left-0" />
            <div className="loading-yellow absolute right-0" />
            <h1
               /* I want "type" to be different only for the exit animation */
               className={`absolute z-50 text-6xl font-extrabold  text-left pl-7 welcome name-outline`}>
                Welcome To
            </h1>
            <h1
               /* I want "type" to be different only for the exit animation */
               className={`absolute z-50 text-6xl font-extrabold  text-left pl-7 My name-outline`}>
                My Website
            </h1>
            <h1
               /* I want "type" to be different only for the exit animation */
               className={`absolute z-50 text-6xl font-extrabold  text-left pl-7 portofolio name-outline`}>
                Portofolio
            </h1>
            <motion.div
            initial={{x:-100}}
            animate={{x:100}}
            className="absolute left-[-7rem]"
            >
            <motion.img
            src={"/patung.png"}
            alt="patung"
            height={500}
            width={500}
            className=" z-20 rotate-[30deg] w-96 opacity-25"/>
            </motion.div>
            <div className="absolute left-7 bottom-7 flex justify-center items-center">
                <div className="h-36 absolute w-36 bg-secondary opacity-25 rounded-full"/>
                <TitleRotate2/>
            </div>
            <div className="absolute right-[-5rem] top-[-5rem] flex justify-center items-center">
                <TitleRotate/>
            </div>
        </div>
    )
}

export default Loading;
