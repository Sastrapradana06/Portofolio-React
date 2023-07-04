import { BsArrowRightShort } from "react-icons/bs";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";


export default function Contact() {
    return (
        <div className="w-full h-max bg-contact lg:h-[600px]">
            <div className="w-[85%] h-[500px] m-auto flex flex-col " id="contact">
                <div className="flex items-center gap-1 mt-2">
                    <h1 className="text-[.8rem] text-gray-400 " data-aos="fade-right">Contact Us</h1>
                    <BsArrowRightShort size={22} color="aqua" />
                </div>
                <div className="flex flex-col gap-5 lg:flex-row  h-max mb-4  w-full lg:h-max lg:items-center">
                    <div className="  flex items-center justify-center  lg:w-[50%] w-full">
                        <div id="img-contact" className="" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000"></div>
                    </div>
                    <div className="w-full h-[250px] flex flex-col gap-5 justify-between lg:ml-16 lg:w-[50%] pb-4 lg:pb-0" data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000">
                        <div className="flex flex-col gap-3">
                            <div className="">
                                <p className="lg:text-[1.1rem]">Email: </p>
                                <p className="text-[.8rem] text-gray-400 lg:text-[1rem]">sastrapradana353@gmail.com</p>
                            </div>
                            <div className="">
                                <p className="lg:text-[1.1rem]">Phone: </p>
                                <p className="text-[.8rem] text-gray-400 lg:text-[1rem]">6283870915417</p>
                            </div>
                            <div className="">
                                <p className="lg:text-[1.1rem]">WhatsApp: </p>
                                <p className="text-[.8rem] text-gray-400 lg:text-[1rem]">6283183679470</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center  gap-6 text-[30px]">
                            <button className="border rounded-full p-1 text-[crimson] hover:bg-[white] duration-300 ease-in-out">
                                <a href="https://instagram.com/sastrapradn?igshid=NTc4MTIwNjQ2YQ==">
                                    <AiFillInstagram />
                                </a>
                            </button>
                            <button className="border rounded-full p-1 text-[#0080ff] hover:bg-[white] duration-300 ease-in-out">
                                <a href="https://www.facebook.com/sastra.pradana.96?mibextid=ZbWKwL">
                                    <AiFillFacebook />
                                </a>
                            </button>
                            <button className="border rounded-full p-1 text-[pink] hover:bg-[white] duration-300 ease-in-out">
                                <a href="https://www.tiktok.com/@sstra_pradana?_t=8di62kSoL34&_r=1">
                                    <BiLogoTiktok />
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}