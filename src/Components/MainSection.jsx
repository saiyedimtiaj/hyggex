import React from 'react';
import { MdOutlineHome } from "react-icons/md";
import { GoChevronRight } from "react-icons/go";

const MainSection = () => {
    return (
        <div>
            <div className='flex gap-1 items-center flex-wrap'>
                <span><MdOutlineHome size={22} /></span>
                <span><GoChevronRight/></span>
                <span>Flashcard</span>
                <span><GoChevronRight/></span>
                <span>Mathmematics</span>
                <span><GoChevronRight/></span>
                <span className='text-indigo-600 font-semibold'>Relation and Function</span>
            </div>
            <h1 className='text-indigo-600 font-semibold my-8 text-2xl'>Relation and Function(Mathmematics)</h1>
        </div>
    );
};

export default MainSection;