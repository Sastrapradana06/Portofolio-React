
import { BsFillArrowDownCircleFill } from "react-icons/bs";
export default function Home() {
    return ( 
        <div className=" w-full h-[250px] bg-home lg:h-[450px]" id="home">
            <div className="w-[100%] m-auto h-[100%] flex justify-center items-center text-white flex-col ">
                <div className="mb-10 text-center">
                    <h1 className="text-[1.7rem] text-[aqua] -mb-2 lg:text-[2rem] ">Hello, <span className="text-white text-[1.3rem]">saya</span></h1>
                    <p className="text-[1.6rem] font-nama text-[aqua] lg:text-[2.5rem]">Sastra Pradana</p>
                    <p className="text-[.8rem] lg:text-[1rem]">Mahasiswa | Web Developer</p>
                </div>
                <button className="animate-bounce">
                    <BsFillArrowDownCircleFill size={28} color="white"/>
                </button>
            </div>
        </div>
    )
}