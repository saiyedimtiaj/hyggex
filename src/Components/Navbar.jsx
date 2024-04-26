import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../assets/Component-3.png"

export const NavBar6 = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between px-4 py-2 text-black mb-10">
      <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-black transition-all duration-200 hover:scale-110">
        <img src={logo} className="h-6 md:h-9 object-cover" alt="" />
      </div>
        <div className="flex gap-4">
        <ul className="hidden items-center justify-between gap-10 lg:flex">
        <li className="group flex  cursor-pointer flex-col">
          Home
          <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-black transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex  cursor-pointer flex-col">
          Flashcard
          <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-black transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex  cursor-pointer flex-col">
          Contact
          <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-black transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex  cursor-pointer flex-col">
          FAQ
          <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-black transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li>
            <button className="bg-gradient-to-r from-indigo-700 to-indigo-500 px-5 py-2.5 rounded-full text-white">Login</button>
        </li>
      </ul>
      <div
        ref={dropDownMenuRef}
        onClick={() => setDropDownState(!dropDownState)}
        className="relative flex items-center gap-3 transition-transform lg:hidden"
      >
        <button className="bg-gradient-to-r from-indigo-700 to-indigo-500 px-4 text-sm py-1.5 rounded-full text-white">Login</button>
       <div className="cursor-pointer text-2xl">
      {
        !dropDownState ?  <GiHamburgerMenu/> : <IoCloseSharp/>
      }
       </div>
        {dropDownState && (
          <ul className="z-10 gap-2 bg-[#111]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg  text-base ">
            <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-indigo-600 ">
              Home
            </li>
            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-indigo-600 ">
            Flashcard
            </li>
            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-indigo-600 ">
              Contact
            </li>
            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-indigo-600 ">
              FAQ
            </li>
          </ul>
        )}
      </div>
        </div>
    </nav>
  );
};
