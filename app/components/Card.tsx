// Card.js
"use client";
import Image from "next/image";
import Link from "next/link";
import useHover from "../utils/useHover";
import Signature from "./ImageSvg/signnature";
import SvgCar from "./ImageSvg/sync";
import TextList from "./TextList";
import { motion, useMotionValue, useTransform } from "framer-motion";

export interface CardProps {
  title?: string | string[];
  Firstname?: string;
  Lastname?: string;
  description: string | string[];
  imageUrl?: any;
}

export const PersonalCard = ({
  title,
  description,
  imageUrl,
  Firstname,
  Lastname,
}: CardProps) => {
  const { handleHover, handleHoverExit, textStyle } = useHover();
  

  return (
    <motion.div
      //  drag="x" style={{ x, opacity }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}
      className="sm:w-full hover:cursor-pointer  md:w-auto lg:w-[50%]  mt-[90px] rounded-mainradius"
    >
      <div className="grid grid-cols-1 md:py-6 sm:flex rounded-mainradius  shadow-lg bg-gradient-to-r from-[#1f1f1f] to-[#141414]">
        {/* Card content goes here */}
        <div className="md:pl-10 p-10 sm:pl-10 sm:pr-3 md:p-7 w-full sm:w-[40%] md:w-auto">
          <Image
            src={imageUrl}
            alt=""
            className="object-cover w-full md:max-w-[100%] md:mt-4 lg:mt-0 rounded-tl-[30px] rounded-br-[30px] bg-gradient-to-r from-blue-500 to-purple-500"
          />
        </div>
        <div className="px-2 pt-0 sm:pt-20 md:my-10 lg:my-0 md:pt-[50px] md:text-left">
          <h4 className="font-bold lg:text-xl text-cardText sm:text-lg md:text-base">
            {title}
          </h4>
          <h4 className="md:text-5xl md:py-2 text-2xl  font-medium leading-10">
            {Firstname}
            <br className="hidden md:block"/>
            {Lastname}.
          </h4>
          <p
            style={textStyle}
            className="text-cardText text-base sm:text-sm md:text-sm"
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const AboutCard = ({ title, description }: CardProps) => {
  const { handleHover, handleHoverExit, textStyle } = useHover();

  return (
    <div className="md:mt-[90px] mt-10 md:ml-mobilem sm:max-w-full  md:w-[50%]">
      <TextList />

      <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
       className=" grid grid-col-1 sm:flex md:justify-between  pt-5 md:space-x-2 ">
        <Link
          href="/about"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
          className="sm:w-full sm:mr-mobilem rounded-[30px] md:w-[50%] md:mt-0 mt-mobilem py-6 overflow-hidden shadow-lg bg-gradient-to-r from-[#1f1f1f] to-[#141414]"
        >
          <div className="items-center justify-center py-2 px-4">
            <Signature
              style={textStyle}
              className="object-cover items-center mx-auto my-auto"
            />
          </div>
          <div className="justify-between py-4 flex">
            <div className="pl-6">
              <h4 className="opacity-50 text-xs uppercase my-2 text-white">
                {title}
              </h4>
              <p className="text-white text-base text-[20px] font-semibold">
                {description}
              </p>
            </div>
            <div className="text-right justify-end pt-4 ">
              <SvgCar
                style={textStyle}
                className=" justify-end text-right text-[#5d5c5c] font-thin"
              />
            </div>
          </div>
        </Link>
        <ProjectCard title="SHOWCASE" description="Projects" />
      </motion.div>
    </div>
  );
};

export const ProjectCard = ({ title, description, imageUrl }: CardProps) => {
  const { handleHover, handleHoverExit, textStyle } = useHover();

  return (
    <>
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverExit}
        style={textStyle}
        className="sm:w-full rounded-[30px] md:w-[50%] md:mt-0 mt-mobilem py-6 overflow-hidden shadow-lg bg-gradient-to-r from-[#1f1f1f] to-[#141414]"
      >
        <Link href="/work">
          {/* Card content goes here */}
          <div className="items-center justify-center py-2 px-4">
            <Signature
              style={textStyle}
              className=" object-cover items-center mx-auto my-auto text-white"
            />
          </div>
          <div className="justify-between py-4 flex">
            <div className="pl-6">
              <h4 className="opacity-50 text-[12px] uppercase my-2 text-white">
                {title}
              </h4>
              <p className="text-white text-base text-[20px] font-semibold">
                {description}
              </p>
            </div>
            <div className="text-right justify-end  pt-4 ">
              <SvgCar
                style={textStyle}
                className=" justify-end text-right text-[#130d0d] font-thin"
              />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default PersonalCard;
