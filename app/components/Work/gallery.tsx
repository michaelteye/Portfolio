"use client"
import Image from "next/image";
import React from "react";
import SvgCar from "../ImageSvg/sync";
import { CardProps } from "../Card";
import useHover from "@/app/utils/useHover";
import Link from "next/link";
import { motion } from "framer-motion";

interface ImageProps {
  images: string[] | any[];
}

interface info{
  title?: string;
  description?: string;
}

const Gallery = ({ images }: ImageProps ) => {
  const {handleHoverExit, handleHover, textStyle}= useHover()
  return (
    <>
      <div
      
       className="md:flex w-auto justify-center grid grid-col-1 ">
        {images &&
          images.map((image, index) => (
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
            key={index}
             className="justify-center  mr-0 h-full text-center ">
              <div className="md:mr-mobilem w-auto ml-2 text-center md:w-auto bg-[#202020] rounded-mainradius">
                <Link href="/:id">
                <div
                
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}
                key={index}
                 className=" py-1 px-4 md:px-0  justify-center ">
                  <Image
                    width={500}
                    height={500}
                    src={image.src}
                    alt="keep"
                    className="md:max-w-[90%] justify-center rounded-mainradius md:ml-4 mt-3  object-cover bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                  <div className="flex border-blue-600 py-3 justify-between">
                    <div className="text-left pl-6">
                      <p className="text-textDes text-lg brightness-200 font-normal">{image.title}</p>
                      <p className="text-white md:text-2xl font-semibold">
                       {image.description}
                      </p>
                    </div>
                    <div className=" ">
                      <SvgCar 
                      style={textStyle}
                      className="text-black" />
                    </div>
                  </div>
                </div>
                </Link>

              </div>
            </motion.div>
          ))}
      </div>
    </>
  );
};

export default Gallery;
