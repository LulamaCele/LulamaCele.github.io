import React from "react";
//import world icon/s
import { BiWorld } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

export const Hero = () => {
  return (
    <div className="bg-[#11235A]  px-6 py-6 flex flex-col items-center justify-center md:grid md:grid-cols-2 transition-all ease-in duration-500">
      <div >
        <div className="flex items-center gap-3">
          <p className="text-white text-2xl">Hello World,</p>
          <div>
            <BiWorld className="text-cyan-500 text-4xl rounded-full shadow-xl shadow-blue-500/50"/>
          </div>
        </div>
        <div className="flex items-center mb-4 gap-3">
            <div className="w-[50px] h-[3px] bg-cyan-500" />
            <div className="text-3xl font-medium text-white hover:text-4xl duration-500">I'm <span className="text-cyan-500">Lulama.</span></div>
            <div className="w-[50px] h-[3px] bg-cyan-500" />
        </div>
        <div className="text-gray-300 mb-4">
          I'm a front-end web developer who enjoys creating/building websites.
          I like taking on new projects as they are an opportunity to learn new skills.
          One of my goals to learn new skills so I can be a better developer
          who can make meaningful contributions to future projects and help clients. 
        </div>
        <div className="mb-12">
          <a href="#contact">
            <button className="bg-cyan-400 py-2 px-6 rounded-full text-white hover:bg-cyan-500 duration-500">Contact</button>
          </a>
        </div>
        <div className="my-4 flex gap-3">
          <a href="https://github.com/LulamaCele" target="blank">
            <FaGithub className="text-3xl hover:text-cyan-500 duration-500"/>
            {/* <button className="bg-cyan-400 py-2 px-6 rounded-full text-white hover:bg-cyan-500 mr-3">Github</button> */}
          </a>
          <a href="" target="blank">
            <FaLinkedin className="text-3xl hover:text-cyan-500 duration-500"/>
            {/* <button className="bg-cyan-400 py-2 px-6 rounded-full text-white hover:bg-cyan-500 mr-3">LinkedIn</button> */}
          </a>
          <a href="" target="blank">
            <FaWhatsappSquare className="text-3xl hover:text-cyan-500 duration-500"/>
            {/* <button className="bg-cyan-400 py-2 px-6 rounded-full text-white hover:bg-cyan-500 ">WhatsApp</button> */}
          </a>
        </div>
      </div>

      <div className="">
        <img src="" alt="" />
      </div>
    </div>
  );
};
