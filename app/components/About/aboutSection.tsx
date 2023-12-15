import Image from "next/image";
import asterisk from "../../../public/asterisk.png";
import profile from "../../../public/met.png";
import starcap from "../../../public/starcap.png";
import EducationExperience from "./eduExperience";
import OtherInfo from "./otherInfo";
import AsteriskSvg from "../ImageSvg/asterisk";
import DownarrowSvg from "../ImageSvg/downarrow";

const AboutSection = () => {
  return (
    <>
      <div className="grid grid-col-1 justify-between md:flex md:pt-20 w-full">
        <div className="w-1/2 sm:w-[30%] md:w-[33%] justify-center">
          <div className="text-center p-5 rounded-mainradius flex bg-gradient-to-r from-[#1f1f1f] to-[#141414c7] sm:grid grid-col-1 sm:w-full md:justify-center">
            <Image
              width={500}
              height={500}
              src={profile}
              alt="keep"
              className="max-w-full md:max-w-full rounded-mainradius object-cover bg-gradient-to-r from-blue-500 to-purple-500"
            />
          </div>
        </div>

        <div className=" md:w-[69%]">
          <div className="md:pl-mobilem w-full">
            <div className="flex  justify-center py-mobilem md:py-0">
              <AsteriskSvg className="text-[#777777]" />
              <p className="text-lg pt-2 mb:pt-0 sm:text-4xl md:text-5xl tracking-wider lg:text-6xl font-bold">
                SELF-SUMMARY
              </p>
              <AsteriskSvg className="text-[#777777]"/>
            </div>
            <div className=" w-full md:mt-[18px]">
              <div className=" rounded-mainradius w-full overflow-hidden shadow-lg bg-gradient-to-r from-[#1f1f1f] to-[#141414c7] md:py-2 relative">
                {/* Card content goes here */}
                <div className="w-auto px-[40px] md:mx-auto flex justify-between">
                  <div className="w-full md:px-2 md:mr-4 py-4 sm:pt-0 pt-0">
                    {/* <p> */}
                     <DownarrowSvg className=" text-[#777777] mt-[-23px]"/>
                    {/* </p> */}
                    <h1 className=" md:text-4xl text-white uppercase mt-10">
                      cool
                    </h1>
                    <p className="text-white md:text-base pb-2">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quae deserunt ullam, officiis ea praesentium aut ut, id,
                      nihil quos nemo quisquam cumque? Culpa similique
                      the main afirm yet to be pronounced
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EducationExperience/>
      <OtherInfo />
    </>
  );
};
export default AboutSection;
