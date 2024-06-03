import Image from "next/image";
import { IoMdHome } from "react-icons/io";
import { IoMailSharp } from "react-icons/io5";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaSun } from "react-icons/fa";
import { useEffect } from "react";
const Header = () => {

    useEffect(() => {
const header = document.querySelector('header');
    },[])

    return(
        <header className="h-16 bg-slate-200 shadow-2xl z-50 fixed w-full">
            <div className="flex items-center h-full justify-around">
            <Image src={'/profile.png'}  alt="porto-1" height={600} width={800} className="w-10 rounded-full bg-yellow-300" />
               <ul className="flex gap-6 items-center justify-center text-xl">
                <li className="flex items-center gap-1 cursor-pointer">
                    <IoMdHome/>
                    <p>Home</p>
                </li>
                <li className="flex items-center gap-1 cursor-pointer">
                    <IoMailSharp/>
                    <p>Contact</p>
                </li>
                <li className="flex items-center gap-1 cursor-pointer">
                    <BiSolidDonateHeart/>
                    <p>Community</p>
                </li>
               </ul>
               <ul>
                <li>
                    <FaSun className="text-xl"/>
                </li>
               </ul>
            </div>
        </header>
    )
}

export default Header;