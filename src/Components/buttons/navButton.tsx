import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { useAtom } from "jotai";
import { atomBtnAct } from "@/atom";
type buttonInputType = {
    data: any
}

export default function NavButton({ data }: buttonInputType) {
    const [navAct, setNavAct] = useAtom(atomBtnAct);
    return (
        <div className="text-[#CBD5F5] text-4xl  gap-4 flex flex-col">
            <div>
                {navAct != 'home' &&
                    <FaRegArrowAltCircleUp />
                }
            </div>
            <div>
                {navAct != 'project' &&
                    <FaRegArrowAltCircleDown />
                }
            </div>
        </div>
    )
}