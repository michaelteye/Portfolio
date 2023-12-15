import Image from "next/image";
import React from "react";
import SvgCar from "../components/ImageSvg/sync";
import profile1 from "../../public/project2.jpeg";
import profile5 from "../../public/project5.jpeg";
import profile6 from "../../public/project6.jpeg";
import Gallery from "../components/Work/gallery";
import { CardProps } from "../components/Card";

const images = [profile5, profile6];
const check = [
  { title: "Mobile Designing", description: "Seven Studio" },
  { title: "Branding", description: "Raven Studio" },
];

const Subwork = ({title, description}:CardProps) => {
  return (
    <div className="md:flex grid grid-cols-1 justify-center">
      <div className="justify-center border-1 text-center mx-auto  md:mt-[-90px]">
        <div className="md:mr-mobilem w-auto max-w-auto  text-center md:w-auto bg-[#202020] rounded-mainradius">
          <div className=" py-1  justify-center px-4 md:px-0 ">
            <Image
              width={500}
              height={500}
              src={profile1}
              alt="keep"
              className="md:max-w-[90%] justify-center  rounded-mainradius md:ml-4 mt-3  object-cover bg-gradient-to-r from-blue-500 to-purple-500"
            />
            <div className="flex border-blue-600 py-3 justify-between">
              <div className="text-left pl-6">
                <p className="text-textDes  text-lg  brightness-200 font-normal">{title}</p>
                <p className="text-white md:text-2xl font-semibold">
                  {description}
                </p>
              </div>
              <div className=" ">
                <SvgCar className="text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rendering the image gallery here */}
      <div className="pt-mobilem ">
        <Gallery images={images} />
      </div>
    </div>
  );
};

export default Subwork;
