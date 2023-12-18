"use client"
import React from "react";
import LinkedIn from "../ImageSvg/LinkedIn";
import Twitter from "../ImageSvg/Twitter";
import LocationSvg from "../ImageSvg/location";
import PhoneSvg from "../ImageSvg/phone";
import EmailSvg from "../ImageSvg/email";
import ContactForm from "./contactForm";
import { motion } from "framer-motion";

const ContactCard = () => {
  return (
    <>
      <div className=" z-10 overflow-hidden py-20 dark:bg-dark lg:py-[120px]">
        <div className="contaner">
          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
           className="-mx-4 flex flex-wrap lg:justify-between bg-black rounded-mainradius shadow-2xl">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  GET IN TOUCH WITH US
                </h2>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <LocationSvg />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                      Our Location
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                      99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <PhoneSvg />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                      Phone Number
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                      (+62)81 414 257 9980
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <EmailSvg />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                      Email Address
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                      info@yourdomain.com
                    </p>
                  </div>
                </div>
                <div>
                  <div className="ml-6">
                    <p className="text-white ">SOCIAL INFO</p>
                  </div>
                  <div className="py-2 flex space-x-4  mx-5 ">
                    <div className="p-4 border rounded-full  my-4 border-[#2b2b2b] bg-gradient-to-r from-[#1f1f1f] to-[#141414c7]">
                      <LinkedIn className="object-cover items-center m-2 box-border border-solid border-white" />
                    </div>
                    <div className="p-4 border rounded-full my-4 border-[#2b2b2b] bg-gradient-to-r from-[#1f1f1f] to-[#141414c7]">
                      <Twitter className="object-cover items-center m-2 box-border border-solid border-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* contact form goes here */}
            <ContactForm/>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;


