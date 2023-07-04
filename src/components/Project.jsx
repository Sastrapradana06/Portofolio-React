import { BsArrowRightShort,  BsGlobe2 } from "react-icons/bs";
import { BiLogoGithub, BiLogoTailwindCss, BiLogoReact, BiLogoRedux } from "react-icons/bi";


export default function Project() {

    const project = [
        {
            Nama: 'ScatterApp.com',
            deskripsi: 'Meniru Tampilan Dari Aplikasi Twitter',
            teknologi: [<BiLogoReact color="rgb(47, 252, 255)"/>, <BiLogoTailwindCss color="rgba(34, 181, 207, 0.5)"/>],
            classBg: 'bg-scatter',
            classImage: 'img-scatter',
            classBorder: 'border-scatter',
            linkWeb: 'https://scatter-app61.netlify.app/',
            linkGitHub: 'https://github.com/Sastrapradana06/Scatter-App'
        },
        {
            Nama: 'AlquranZamanNow.com',
            deskripsi: 'Membuat Website Yang berisi Surah di dalam Alquran',
            teknologi: [<BiLogoReact color="rgb(47, 252, 255)"/>, <BiLogoTailwindCss color="rgba(34, 181, 207, 0.5)"/>],
            classBg: 'bg-alquran',
            classImage: 'img-alquran',
            classBorder: 'border-alquran',
            linkWeb: 'https://alquranzamannow66.netlify.app/',
            linkGitHub: 'https://github.com/Sastrapradana06/Alquranzamannow'
        },
        {
            Nama: 'Catatanku.com',
            deskripsi: 'Anda dapat Menyimpan Catatan anda dalam website ini',
            teknologi: [<BiLogoReact color="rgb(47, 252, 255)"/>, <BiLogoRedux color="violet"/>, <BiLogoTailwindCss color="rgba(34, 181, 207, 0.5)"/>],
            classBg: 'bg-catatan',
            classImage: 'img-catatanku',
            classBorder: 'border-catatanku',
            linkWeb: 'https://catatanku-app.netlify.app/',
            linkGitHub: 'https://github.com/Sastrapradana06/Catatanku-app'
        }
    ]

    return (
        <div className="w-full h-max pb-8  bg-project pt-4" >
            <div className="w-[80%] m-auto" id="project">
                <div className="flex items-center gap-1">
                    <h1 className="text-[.8rem] text-gray-400" data-aos="fade-right">My Project</h1>
                    <BsArrowRightShort size={23} color="aqua" />
                </div>
                <div className=" flex flex-col gap-3 lg:gap-5" >
                {project.map((projects, i) => {
                    return (
                        <div id={projects.classBg} className="w-full border h-max lg:h-max flex flex-col  items-center gap-2 mt-4 rounded-lg relative " key={i}  data-aos="flip-down" data-aos-duration="800" >
                                <div className="text-center relative z-10">
                                    <h1 className="text-[1.3rem] relative z-[12] lg:text-[1.5rem]">{projects.Nama}</h1>
                                    <p id={projects.classBorder} className="m-auto"></p>
                                    <p className=" text-gray-400 text-[.7rem]  mt-3 -mb-2  m-auto lg:text-[.9rem] lg:w-max">"{projects.deskripsi}"</p>
                                </div>
                                <div className=" gap-3  w-full h-max p-2">
                                    <div className="w-[90%] m-auto border h-[120px] lg:h-[400px]">
                                        <div className="w-full h-[100%]" id={projects.classImage}></div>
                                    </div>
                                </div>
                                <div className="w-[85%] flex justify-between items-center mb-3">
                                    <div className="">
                                        <div className="flex items-center gap-2 text-[30px] lg:text-[35px]">
                                            {projects.teknologi.map((stack, i) => {
                                                return (
                                                    <button className="animate-spin hover:animate-none text-[23px] lg:text-[30px]" key={i}>
                                                        {stack}
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className="flex gap-3 text-[25px] lg:text-[30px]">
                                        <button className="animate-pulse">
                                            <a href={projects.linkWeb}>
                                                <BsGlobe2 color="rgb(61, 58, 162)" />
                                            </a>
                                        </button>
                                        <button className="animate-pulse">
                                            <a href={projects.linkGitHub}>
                                                <BiLogoGithub />
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}