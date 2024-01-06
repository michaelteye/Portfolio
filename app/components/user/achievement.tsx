"use client"
import Link from "next/link";
import { CardProps } from "../Card";
import People from "../ImageSvg/People";
import SvgCar from "../ImageSvg/sync";
import useHover from "@/app/utils/useHover";
import { motion } from "framer-motion";

const Achievement = ({ title, description }: CardProps) => {
  const {handleHover, handleHoverExit, textStyle} = useHover()
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
     className="grid grid-cols-1 md:flex mt-mobilem md:mt-0 ">
      <div className="w-full md:w-[90%] mt-[21px] md:mr-mobilem">
        <div className=" rounded-mainradius  shadow-lg bg-gradient-to-r from-[#1f1f1f] to-[#141414c7]">
          <div className=" w-full px-2 flex md:grid grid-cols-3 pt-[28px] pb-8 ">
            <div className="w-full md:w-auto  shadow-lg mx-5 md:mx-2 leading-6 text-center rounded-mainradius border-[#2b2b2b] bg-gradient-to-r from-[#383838] to-[#141414c7]">
              <h1 className="md:pt-5 lg:pt-10 pt-5 md:pb-3 text-4xl">03</h1>
              <p className="text-sm md:px-7">YEARS</p>
              <p className="text-sm pb-5 md:pb-5 lg:pb-10 mb-2">EXPERIENCE</p>
            </div>
            <div className="w-full md:w-auto  md:my-0 shadow-lg mx-5 md:mx-2  leading-6 text-center rounded-mainradius border-[#2b2b2b] bg-gradient-to-r from-[#383838] to-[#141414c7]">
              <h1 className="md:pt-5 lg:pt-10 pt-5 md:pb-3 text-4xl">+12</h1>
              <p className=" text-sm md:px-7">YEARS</p>
              <p className="text-sm pb-5 md:pb-5 lg:pb-10 mb-2">EXPERIENCE</p>
            </div>
            <div className="w-full md:w-auto shadow-lg mx-5 md:mx-2 py-2 leading-6 text-center rounded-mainradius border-[#2b2b2b] bg-gradient-to-r from-[#383838] to-[#141414c7]">
              <h1 className="md:pt-5 lg:pt-10 pt-5 md:pb-3 text-4xl">+12</h1>
              <p className="text-sm md:px-7">YEARS</p>
              <p className="text-sm pb-5 md:pb-5 lg:pb-10 mb-2">EXPERIENCE</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[90%] mt-mobilem">
        <Link href="/blog">
          <div className=" rounded-mainradius z-0 w-full py-auto shadow-lg bg-gradient-to-r from-[#1f1f1f] to-[#141414c7] py-2 relative">
            {/* Card content goes here */}
            <div 
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
            className="px-10 md:mx-auto md:pb-3 lg:pb-6 flex justify-between">
              <div className="md:px-2 md:mr-4">
                <p>
                  <People />
                </p>
                <h1 className=" md:text-3xl lg:text-5xl text-white tracking-tigh uppercase my-2 md:pb-2">
                  {title}
                </h1>
                <h1 className="text-white md:text-3xl lg:text-5xl font-semibold pb-2">
                  {description}{" "}
                  <span className="text-[#5b78f6]">together.</span>
                </h1>
              </div>
              <div 
              className="text-right md:ml-[50px] md:pl-2 ml-mobilepa pt-4 absolute bottom-0 right-0 md:mr-[50px] mb-[50px]">
                <SvgCar
              style={textStyle}

                 className="justify-end text-right hover:text-white text-[#5d5c5c] font-thin" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Achievement;
