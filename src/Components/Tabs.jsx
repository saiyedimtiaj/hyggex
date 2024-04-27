import React, { useState } from "react";
import { FaRegLightbulb, FaPlus } from "react-icons/fa";
import { AiOutlineSound } from "react-icons/ai";
import { IoReload } from "react-icons/io5";
import { MdFullscreen } from "react-icons/md";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import publishLogo from "../assets/Frame 41.png";
import ReactCardFlip from "react-card-flip";

const Tabs = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <div className="flex mb-7 gap-4 md:gap-6 items-center justify-center flex-wrap text-sm md:text-lg">
        <span className="text-indigo-600 cursor-pointer font-semibold">
          Study
        </span>
        <span className="text-gray-500 cursor-pointer font-medium">Quiz</span>
        <span className="text-gray-500 cursor-pointer font-medium">Test</span>
        <span className="text-gray-500 cursor-pointer font-medium">Game</span>
        <span className="text-gray-500 cursor-pointer font-medium">Other</span>
      </div>
      <div>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div
          onClick={handleClick}
            className={`max-w-[550px] rounded-xl mx-auto bg-gradient-to-r from-indigo-700 to-indigo-500`}
          >
            <div className=" flex items-center text-white px-4 justify-between py-4">
              <span>
                <FaRegLightbulb size={23} />
              </span>
              <span>
                <AiOutlineSound size={23} />
              </span>
            </div>
            <div className="text-center pt-28 pb-32">
              <h1 className="text-2xl font-semibold text-white">9 + 6 + 7x -2x -3</h1>
            </div>
          </div>

          <div
            onClick={handleClick}
            className={`max-w-[550px] rounded-xl mx-auto bg-gradient-to-r from-gray-700 to-gray-500`}
          >
            <div className=" flex items-center text-white px-4 justify-between py-4">
              <span>
                <FaRegLightbulb size={23} />
              </span>
              <span>
                <AiOutlineSound size={23} />
              </span>
            </div>
            <div className="text-center pt-28 pb-32">
              <h1 className="text-2xl font-semibold text-white">5x + 12</h1>
            </div>
          </div>
        </ReactCardFlip>

        <div className="flex max-w-[500px] gap-4 px-5 mx-auto justify-between items-center pt-4 pb-8">
          <span className="text-indigo-600 cursor-pointer font-bold">
            <IoReload size={21} />
          </span>
          <div className="flex gap-3 items-center">
            <button className="bg-gradient-to-r from-indigo-700 to-indigo-500 p-2 rounded-full text-white">
              <FaAngleLeft />
            </button>
            <span className="font-semibold">1 / 10</span>
            <button className="bg-gradient-to-r from-indigo-700 to-indigo-500 p-2 rounded-full text-white">
              <FaAngleRight />
            </button>
          </div>
          <span className="text-indigo-600 cursor-pointer font-bold">
            <MdFullscreen size={23} />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between my-8">
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
