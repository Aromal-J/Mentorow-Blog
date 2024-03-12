import React from "react";
import image from '/src/assets/image.png'
import { ArrowUpRight } from "lucide-react";
function MidSection() {
  return (
    <div className="flex mt-10 mb-6">
      <div className="flex flex-col justify-center items-center px-16 md:flex-row gap-4 ">
        <div className="w-full md:w-1/2 object-cover">
          <img
            className="w-full h-[202px]"
            src={image}
            alt=""
          />
        </div>
        <div className="space-y-1 md:w-1/2">
          <h1 className="text-[#6941C6] font-bold">Olivia Rhye • 1 Jan 2023</h1>
          <div className="flex gap-4">
            <h1 className="text-xl  font-bold tracking-wide ">
              Grid system for better Design User Interface
            </h1>
            <ArrowUpRight className=" h-6 w-6"/>
            {/* <img
              className="w-[34px] h-[34px] pt-2 md:w-[30px] md:h-[30px] md:pr-[10px]"
              src={arrowImage}
              alt=""
            /> */}
          </div>
          <p className=" text-[#667085] text-sm leading-6  md:line-clamp-5">
            A grid system is a design tool used to arrange content on a webpage.
            It is a series of vertical and horizontal lines that create a matrix
            of intersecting points, which can be used to align and organize page
            elements. Grid systems are used to create a consistent look and feel
            across a website, and can help to make the layout more visually
            appealing and easier to navigate.
          </p>
          <div className="space-x-6 flex">
            <button className=" w-[70px] h-[20px]  rounded items-center justify-center flex bg-[#FDF2FA] text-[#6941C6]">
              Design
            </button>
            <button className="text-[#C11574] w-[63px] h-[20px]  rounded items-center justify-center flex bg-[#FDF2FA]">
              Interface
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MidSection;
