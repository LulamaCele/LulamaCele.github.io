import React from "react";
//import link
import { Link } from "react-router-dom";
//import icons
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
//import use state
import { useState } from "react";

export const Nav = () => {
  const [active, setActive] = useState(false);

  const openMenu = () => {
    const menu = document.querySelector("#menu");
    const closeBtn = document.querySelector("#closeButton");
    const openBtn = document.querySelector("#openButton");

    if (active === false) {
      menu.classList.add("opacity-100");
      menu.classList.add("top-[50px]");
      openBtn.classList.add("hidden");
      closeBtn.classList.remove("hidden");
      setActive(true);
    } else if (active === true) {
      menu.classList.remove("opacity-100");
      menu.classList.remove("top-[50px]");
      closeBtn.classList.add("hidden");
      openBtn.classList.remove("hidden");
      setActive(false);
    }
  };

  return (
    // <div className="bg-white px-5 h-[50px] flex justify-between items-center shadow">
    //   {/* logo */}
    //   <div className="flex justify-center items-center">
    //     <span
    //       className="bg-blue-200 p-1 mr-2
    //         font-thin italic rounded-full"
    //     >
    //       LC
    //     </span>
    //     <div>Lulama Cele</div>
    //   </div>
    //   <div >
    //     <RxHamburgerMenu  />
    //   </div>
    //   {/* navigation links */}
    //   <nav className="">
    //     <ul className="gap-4 flex">
    //       <li>
    //         <a href="">About</a>
    //       </li>
    //       <li>
    //         <a href="">Skills</a>
    //       </li>
    //       <li>
    //         <a href="">Projects</a>
    //       </li>
    //       <li>
    //         <a href=""></a>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
    <nav className="p-5 bg-[#11235A]   md:flex items-center justify-between">
      <div className="flex justify-between items-center">
        <a
          href="/"
          className="text-2xl text-center font-[Poppins] cursor-pointer h-[100%] w-8 bg-cyan-400 hover:bg-cyan-500 text-white  rounded-full"
        >
          LC
        </a>

        <span className="text-3xl cursor-pointer mx-2 md:hidden block">
          <RxHamburgerMenu id="openButton" className="text-white hover:text-cyan-400" onClick={openMenu} />
          <IoMdClose
            id="closeButton"
            className="hidden text-white hover:text-red-500"
            onClick={openMenu}
          />
        </span>
      </div>

      <ul
        id="menu"
        className=" bg-[#11235A] text-white rounded-b-2xl shadow-lg shadow-cyan-500/20 md:shadow-none md:flex md:items-center z-1 md:z-auto
      md:static absolute w-full left-0 md:w-auto
      md:py-0 py-4 mt-5 md:mt-0  md:pl-0 pl-7
      md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"
      >
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="hover:text-cyan-500 duration-500">
            About
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="hover:text-cyan-500 duration-500">
            Skills
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="hover:text-cyan-500 duration-500">
            Projects
          </a>
        </li>
        <button className="bg-cyan-400 text-white py-2 px-6 rounded mx-4 hover:bg-cyan-500 duration-500">
          <a
            href="MagicForexDivergence.pdf"
            download="MagicForexDivergence.pdf"
          >
            Download CV
          </a>
        </button>
      </ul>
    </nav>
  );
};
