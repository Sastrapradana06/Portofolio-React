import { useState } from "react";
import { BsArrowRightShort, BsGithub, BsLinkedin } from "react-icons/bs";

import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript, BiLogoTailwindCss, BiLogoReact, BiLogoRedux, BiLogoNodejs, BiLogoGithub } from "react-icons/bi";

export default function About() {
  const [isAbout, setIsAbout] = useState(true);
  const [isSkill, setIsSkill] = useState(false);
  function handleBtnAbout() {
    setIsAbout(true);
    setIsSkill(false)
  }

  function handleBtnSkill() {
    setIsSkill(true)
    setIsAbout(false)
  }

  const skill = [
    {
      Skill: 'Html',
      logo: <AiFillHtml5 size={35} color="orangered"/>
    },
    {
      Skill: 'Css',
      logo: <BiLogoCss3 size={35} color="rgb(0, 179, 255)"/>
    },
    {
      Skill: 'Javascript',
      logo: <BiLogoJavascript size={35} color="rgb(255, 255, 0)"/>
    },
    {
      Skill: 'Tailwind',
      logo: <BiLogoTailwindCss size={35} color="teal"/>
    },
    {
      Skill: 'React Js',
      logo: <BiLogoReact size={35} color="teal"/>
    },
    {
      Skill: 'Redux',
      logo: <BiLogoRedux size={35} color="violet"/>
    },
    {
      Skill: 'Node Js',
      logo: <BiLogoNodejs size={35} color="rgb(47, 255, 71)"/>
    },
    {
      Skill: 'GitHub',
      logo: <BiLogoGithub size={35} color="white"/>
    }
  ]

  return (
    <div className="w-full h-[455px] lg:h-[400px] bg-about" id="about">
      <div className="w-[80%] h-[100%] m-auto flex flex-col lg:justify-around ">
        <div className="flex gap-1 items-center text-gray-400">
          <p className="text-[.8rem] lg:text-[.9rem]"  data-aos="fade-right">About Us</p>
          <button>
            <BsArrowRightShort size={23} color="aqua" />
          </button>
        </div>
        <div className=" mt-1 flex flex-col gap-3 lg:flex-row lg:items-center  lg:gap-10 ">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="img-saya w-[120px] h-[120px] rounded-full lg:w-[200px] lg:h-[200px]"></div>
            <div className=" flex items-center  justify-around w-[70%] lg:w-[200px]">
              <button className={isAbout ? 'about-aktif' : ''} onClick={handleBtnAbout}>
                Saya
              </button>
              <button className={isSkill ? 'skill-aktif duration-300' : ''} onClick={handleBtnSkill}>
                Skill
              </button>
            </div>
          </div>
          <div className="border-t border-b w-[100%] m-auto  p-1 lg:w-[80%]">
            {isAbout ? (
              <div className="card-about ">
                <p className="text-[.7rem] mt-0  text-gray-400 lg:text-[1.1rem] lg:p-1 lg:mt-1">
                  "Halo, perkenalkan, nama saya Sastra Pradana asal Medan. Saya seorang mahasiswa yang memiliki minat di bidang Web Developer terutama di front-end developer dengan pengalaman dalam membangun antarmuka pengguna yang menarik dan
                  responsif. </p>
                <p  className="text-[.7rem] mt-1  text-gray-400 lg:text-[1.1rem] lg:p-1 lg:mt-1">Saya senang bekerja dalam tim untuk menghadirkan solusi kreatif yang dapat meningkatkan
                  pengalaman pengguna secara keseluruhan."
                </p>
              </div>
            ) : null}
            {isSkill ? (
              <div className=" flex items-center justify-around flex-wrap card-skill w-[90%] lg:w-full m-auto">
                {skill.map((skills, i) => {
                  return (
                    <div className="w-[60px]  flex justify-center items-center flex-col hover:-translate-y-3 duration-300 animate-pulse" key={i}>
                      <button className="">{skills.logo}</button>
                    </div>
                  )
                })}
              </div>
            ) : null}
          </div>
        </div>
        <div className=" mt-2 flex items-center gap-6 pb-2 ">
          <a href="">
            <button className="text-[white] hover:text-[aqua] duration-300">
              <a href="https://github.com/Sastrapradana06?tab=repositories">
                <BsGithub size={22} />
              </a>
            </button>
          </a>
          <a href="">
            <button className="text-[white] hover:text-[aqua] duration-300">
              <a href="https://www.linkedin.com/in/sastra-pradana-a50b72252/">
                <BsLinkedin size={22} />
              </a>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
