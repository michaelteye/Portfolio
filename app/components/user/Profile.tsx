import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CardProps } from "../Card";
import Signature from "../ImageSvg/signnature";
import SvgCar from "../ImageSvg/sync";
import LinkedIn from "../ImageSvg/LinkedIn";
import Twitter from "../ImageSvg/Twitter";

const Profile = ({ title, description }: CardProps) => {
  return (
    <Link href="/blog">
      <div className="w-full md:w-auto border-2 rounded-[30px]  md:mt-5 mt-mobilem overflow-hidden shadow-lg bg-gradient-to-r from-[#1f1f1f] to-[#141414]">
          {/* Card content goes here */}
          <div className="items-center justify-center flex space-x-4 border mx-5 my-5 rounded-mainradius border-[#2b2b2b] bg-gradient-to-r from-[#1f1f1f] to-[#141414c7]">
            <div className=" p-4 border-2 rounded-full border-[#2b2b2b] border-opacity-100 bg-gradient-to-r from-[#1f1f1f] to-[#141414c7]">
              <LinkedIn className="object-cover items-center m-2" />
            </div>
            <div className="p-4 border rounded-full mx-3 my-4 border-[#2b2b2b] bg-gradient-to-r from-[#1f1f1f] to-[#141414c7]">
              <Twitter className="object-cover items-center m-2 box-border border-solid border-white" />
            </div>
          </div>
          <div className="justify-between flex text-left">
            <div className="pl-6">
              <h4 className="opacity-50 text-sm uppercase my-2 text-white">
                {title}
              </h4>
              <p className="text-white text-lg font-semibold">{description}</p>
            </div>
            <div className="lg:text-right lg:justify-end pt-4">
              <SvgCar className=" justify-end text-right text-[#5d5c5c] font-thin" />
            </div>
          </div>
        </div>
    </Link>
  );
};
export default Profile;
