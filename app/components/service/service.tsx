"use client";
import Link from "next/link";
import { CardProps } from "../Card";
import LinkedIn from "../ImageSvg/LinkedIn";
import Medium from "../ImageSvg/Medium";
import Twitter from "../ImageSvg/Twitter";
import Api from "../ImageSvg/api";
import Code from "../ImageSvg/code";
import Computer from "../ImageSvg/computer";
import JS from "../ImageSvg/js";
import SvgCar from "../ImageSvg/sync";
import useHover from "@/app/utils/useHover";

const Service = ({ title, description }: CardProps) => {
  const { handleHover, handleHoverExit, textStyle } = useHover();
  return (
    <div className="hover:text-white grid grid-col-1 md:flex md:justify-between pt-5 md:space-x-2  my-auto">
      {/* Including the block section here */}
      <div className="grid grid-colo-1 sm:flex w-full">
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
          className="hover:text-white w-full md:w-auto rounded-[30px] md:mt-5 mt-mobilem overflow-hidden shadow-lg bg-gradient-to-r from-[#1f1f1f] to-[#141414]"
        >
          {/* Card content goes here */}
          <Link href="/work">
            <div className="items-center justify-center flex space-x-4 border mx-5 my-5 rounded-mainradius border-[#2b2b2b] bg-gradient-to-r from-[#1f1f1f] to-[#141414c7]">
              <div
                style={textStyle}
                className=" p-4 border-2 rounded-full border-[#2b2b2b] border-opacity-100 bg-gradient-to-r from-[#1f1f1f] to-[#141414c7]"
              >
                <LinkedIn className="object-cover items-center m-2" />
              </div>
              <div className="p-4 border rounded-full mx-3 my-4 border-[#2b2b2b] bg-gradient-to-r from-[#1f1f1f] to-[#141414c7]">
                <Twitter className="object-cover items-center m-2 box-border border-solid border-white" />
              </div>
            </div>
          </Link>

          <div className="justify-between flex text-left">
            <div className="pl-6">
              <h4 className="opacity-50 text-sm uppercase my-2 text-white">
                {title}
              </h4>
              <p className="text-white  text-lg font-semibold">{description}</p>
            </div>
            <div className="lg:text-right lg:justify-end pt-4">
              <SvgCar
                style={textStyle}
                className=" justify-end text-right text-[#5d5c5c] font-thin"
              />
            </div>
          </div>
        </div>

        <div className="w-full  md:w-[70%] mt-[21px] md:ml-[21px] md:pr-mobilem md:pl-0 sm:pl-mobilem ">
          <Link href="/work">
            <div className=" border-white rounded-mainradius w-full shadow-lg bg-gradient-to-r from-[#1f1f1f] to-[#141414c7] py-2">
              <ul className="flex justify-evenly space-x-4 pt-[58px] pb-4  mx-4">
                <li>
                  <Api className=" object-cover" />
                </li>
                <li>
                  <JS className=" object-cover" />
                </li>
                <li>
                  <Computer className="object-cover" />
                </li>
                <li>
                  <Code className="object-cover" />
                </li>
              </ul>
              <div className="px-[40px] mx-auto py-4 flex justify-between">
                <div className="md:px-2 mr-4 py-4">
                  <p className="opacity-50 text-[10px] uppercase my-2 text-white">
                    {title}
                  </p>
                  <p className="text-white text-base text-[20px] font-semibold">
                    {description}
                  </p>
                </div>
                <div className="text-right ml-[50px] pl-2 md:pt-4 pt-10">
                  <SvgCar
                    style={textStyle}
                    className=" justify-end  text-right hover:text-white text-[#5d5c5c] font-thin"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* including the profile section here */}

      <div className="w-full md:w-[30%] rounded-[30px]  md:ml-mobilem md:mt-6 mt-mobilem overflow-hidden shadow-lg bg-gradient-to-r from-[#1f1f1f] to-[#141414]">
        {/* Card content goes here */}
        <div className="items-center justify-center mx-2">
          <Medium className="object-cover items-center mx-auto my-auto" />
        </div>
        <div className="justify-between md:py-4 py-2 flex w-auto">
          <div className="pl-6">
            <h4 className="opacity-50 text-[12px] uppercase my-2 text-white">
              {title}
            </h4>
            <p className="text-white text-base text-[20px] font-semibold">
              {description}
            </p>
          </div>
          <div className="text-right justify-end  pt-4">
            <SvgCar className=" justify-end text-right text-[#5d5c5c] font-thin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
