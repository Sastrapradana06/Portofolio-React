
import {PiSmileyBlankFill, PiSmileyFill, PiSmileySadFill } from "react-icons/pi";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

import { useState } from "react";
export default function Footer() {
    const [icons, setIcons] = useState(<PiSmileyBlankFill />)

    function btnLike() {
        setIcons(<PiSmileyFill />)
    }
    function btnDisLike() {
        setIcons(<PiSmileySadFill />)
    }

    return (
        <div className="w-full h-max  relative bottom-0" id="footer">
            <div className="w-[85%] h-max pb-4 m-auto pt-3 ">
                <div className="mb-3 flex items-center gap-2  h-[30px] justify-center">
                    <p className="text-[.7rem] text-gray-400">Apakah Anda Menyukai Website ini?</p>
                    <div className="flex gap-2 mb-2">
                        <button onClick={btnLike}>
                            <AiFillLike size={18} color="rgb(0, 179, 255)" />
                        </button>
                        <button className="mt-1" onClick={btnDisLike}>
                            <AiFillDislike size={18} color="crimson" />
                        </button>
                    </div>
                </div>
                <div className="w-max flex text-header  m-auto gap-2 items-center h-[30px]">
                    <h1 className="text-[1rem]">Tanks For Watching</h1>
                    <p className="text-[22px] text-[#ffe100] duration-300"> 
                    {icons}
                    </p>
                </div>
                <p className="text-[.7rem] text-gray-400 text-center">Copyright | Sastrapradana💙</p>
            </div>
        </div>
    )
}