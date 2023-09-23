
import { useState, useEffect } from "react";
import { AiTwotonePhone, AiTwotoneBulb, AiFillHome } from "react-icons/ai";
import { IoIosPerson } from "react-icons/io";
export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);

    const iconsNav = [
        {
            page: 'Home',
            icons: <AiFillHome />,
            url: '#home'
        },
        {
            page: 'About',
            icons: <IoIosPerson />,
            url: '#about'
        },
        {
            page: 'Project',
            icons: <AiTwotoneBulb />,
            url: '#project'
        },
        {
            page: 'Contact',
            icons: <AiTwotonePhone />,
            url: '#contact'

        }
    ]


    useEffect(() => {
        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsVisible(prevScrollPos > currentScrollPos);
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${isVisible ? ' navbar-open ' : ' navbar-close'} w-max h-[80vh] fixed p-1  flex items-center`}>
            <div className=" w-[50px] m-auto h-[350px] rounded-lg bg-blur-white z-10 flex flex-col items-center justify-around lg:w-[50px]">
                {iconsNav.map((pages, i) => {
                    return (
                        <div className="container-icons  w-[30px] bottom-1" key={i}>
                            <button className=" items-center gap-1 text-[gray] text-[25px] hover:text-[aqua] duration-300 flex btn-page hover:bg-[rgba(255,255,255,0.1)] rounded-xl p-1">
                                {pages.icons}
                                <a href={pages.url} className="text-page" id="text-page">
                                    <p>
                                        {pages.page}
                                    </p>
                                </a>
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}