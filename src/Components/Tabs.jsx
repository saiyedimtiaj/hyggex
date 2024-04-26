import React, { useState } from "react";
import { FaRegLightbulb, FaPlus } from "react-icons/fa";
import { AiOutlineSound } from "react-icons/ai";
import { IoReload } from "react-icons/io5";
import { MdFullscreen } from "react-icons/md";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import publishLogo from "../assets/Frame 41.png";

const Tabs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const data = [
    { math: "9 + 6 + 7x + 2x + 8" },
    { math: "3 + 8 + 7x + 2x + 4" },
    { math: "5 + 6 + 3x + 5x + 6" },
    { math: "2 + 3x + 4 + 5x + 6" },
    { math: "4 + 5x + 6 + 7x + 8" },
    { math: "6 + 7x + 8 + 9x + 10" },
    { math: "8 + 9x + 10 + 11x + 12" },
    { math: "10 + 11x + 12 + 13x + 14" },
    { math: "12 + 13x + 14 + 15x + 16" },
    { math: "14 + 15x + 16 + 17x + 18" }
  ];

  const nextEquation = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevEquation = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const reloadEquation = () => {
    setCurrentIndex(0); 
  };

  return (
    <div>
      <div className="flex gap-4 md:gap-6 items-center justify-center flex-wrap text-sm md:text-lg">
        <span className="text-indigo-600 cursor-pointer font-semibold">
          Study
        </span>
        <span className="text-gray-500 cursor-pointer font-medium">Quiz</span>
        <span className="text-gray-500 cursor-pointer font-medium">Test</span>
        <span className="text-gray-500 cursor-pointer font-medium">Game</span>
        <span className="text-gray-500 cursor-pointer font-medium">Other</span>
      </div>
      <div>
        <div className={`${isFullScreen ? 'w-full' : 'max-w-[550px]'} rounded-xl mx-auto mt-7 bg-gradient-to-r from-indigo-700 to-indigo-500`}>
          <div className=" flex items-center text-white px-4 justify-between py-4">
            <span>
              <FaRegLightbulb size={23} />
            </span>
            <span>
              <AiOutlineSound size={23} />
            </span>
          </div>
          <div className="text-center pt-28 pb-32">
            <h1 className="text-2xl font-semibold text-white">
              {data[currentIndex]?.math}
            </h1>
          </div>
        </div>
        <div className="flex max-w-[500px] gap-4 px-5 mx-auto justify-between items-center pt-4 pb-8">
          <span className="text-indigo-600 cursor-pointer font-bold" onClick={reloadEquation}>
            <IoReload size={21} />
          </span>
          <div className="flex gap-3 items-center">
            <button
              className="bg-gradient-to-r from-indigo-700 to-indigo-500 p-2 rounded-full text-white"
              onClick={prevEquation}
            >
              <FaAngleLeft />
            </button>
            <span className="font-semibold">
              {currentIndex + 1} / {data.length}
            </span>
            <button
              className="bg-gradient-to-r from-indigo-700 to-indigo-500 p-2 rounded-full text-white"
              onClick={nextEquation}
            >
              <FaAngleRight />
            </button>
          </div>
          <span
            onClick={() => setIsFullScreen(!isFullScreen)}
            className="text-indigo-600 cursor-pointer font-bold"
          >
            <MdFullscreen size={23} />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between py-8">
        <img src={publishLogo} className="md:h-20 h-12" alt="" />
        <button className="flex gap-2 items-center">
          <span className="bg-gradient-to-r text-xs from-indigo-700 to-indigo-500 p-2 rounded-full text-white">
            <FaPlus />
          </span>
          <span className="text-indigo-600 text-sm md:text-base font-medium">
            Create Flashcard
          </span>
        </button>
      </div>
    </div>
  );
};

export default Tabs;
