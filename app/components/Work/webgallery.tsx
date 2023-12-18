"use client";
import Image from "next/image";
import React from "react";
import SvgCar from "../ImageSvg/sync";
import profile from "../../../public/project1.jpeg";
import project3 from "../../../public/project3.jpeg";
import project4 from "../../../public/project4.jpeg";
import Gallery from "./gallery";
import AsteriskSvg from "../ImageSvg/asterisk";
import { CardProps } from "../Card";
import useHover from "@/app/utils/useHover";
import { motion } from "framer-motion";

const images = [
  { src: project3, title: "Full Stack", description: "Mobile Designer" },
  { src: project4, title: "Mobile Developer", description: "Web Designer" },
];

const Webgallery = ({ title, description }: CardProps) => {
  const { handleHover, handleHoverExit, textStyle } = useHover();
  return (
    <>
      <div className="md:flex grid grid-col-1 justify-center mt-16">
        <div className="justify-center  mr-0  h-full text-center">
          <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
            className="md:mr-mobilem w-auto max-w-auto  text-center md:w-auto bg-[#202020] rounded-mainradius"
          >
            <div className=" py-1  justify-center px-4 md:px-0 ">
              <Image
                width={500}
                height={500}
                src={profile}
                alt="keep"
                className="md:max-w-[90%] justify-center  rounded-mainradius md:ml-4 mt-3  object-cover bg-gradient-to-r from-blue-500 to-purple-500"
              />
              <div className="flex border-blue-600 py-3 justify-between">
                <div className="text-left pl-6">
                  <p className="text-textDes  text-lg  brightness-200 font-normal">
                    {title}
                  </p>
                  <p className="text-white md:text-2xl font-semibold">
                    {description}
                  </p>
                </div>
                <div className=" ">
                  <SvgCar style={textStyle} className="text-black" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="md:w-[50%">
          <div className="flex  justify-center py-mobilem md:py-0">
            <AsteriskSvg className="text-[#777777] mt-1" />
            <p className="text-lg pt-2 mb:pt-0 sm:text-4xl md:text-6xl tracking-wider lg:text-6xl font-bold">
              ALL PROJECTS
            </p>
            <AsteriskSvg className="text-[#777777] mt-1" />
          </div>
          {/* start card */}
          <div className="pt-10">
            <Gallery images={images} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Webgallery;
