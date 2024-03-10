import React from 'react';
//import icons
import { TiHtml5 } from "react-icons/ti";
import { SiCsswizardry } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

export const Skills = () => {
  return (
    <div className='bg-[#11235A] md:px-6 md:h-[400px] md:flex md:flex-col justify-center'>
        <div className='pt-6 text-white font-medium text-2xl flex justify-center items-center'>
            Skills
        </div>
        <div className=' flex flex-col items-center md:flex-row md:justify-between md:items-center'>
            <div className='my-4 flex flex-col items-center'>
                <TiHtml5 className='text-5xl text-orange-400'/>
                <p className='text-white'>HTML5</p>
            </div>
            <div className='my-4 flex flex-col items-center'>
                <SiCsswizardry className='text-5xl text-blue-400'/>
                <p className='text-white'>CSS3</p>
            </div>
            <div className='my-4 flex flex-col items-center'>
                <SiJavascript className='text-5xl text-yellow-500'/>
                <p className='text-white'>JavaScript</p>
            </div>
            <div className='my-4 flex flex-col items-center'>
                <SiReact className='text-5xl text-blue-400'/>
                <p className='text-white'>React</p>
            </div>
            <div className='my-4 flex flex-col items-center'>
                <SiTailwindcss className='text-5xl text-cyan-500'/>
                <p className='text-white'>Tailwindcss</p>
            </div>
            <div className='my-4 flex flex-col items-center'>
                <FaJava className='text-5xl text-blue-500'/>
                <p className='text-white'>Java</p>
            </div>
        </div>
    </div>
  )
}

