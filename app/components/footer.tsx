import Image from "next/image";
import Signature from "./ImageSvg/signnature";
import footimage from "../../public/logo-removebg-preview.png";

const Footer = () => {
  return (
    <div className="text-center justify-center">
      <div className="text-center  justify-center items-center mx-auto pt-10 ">
        <Image
          src={footimage}
          width={200}
          height={100}
          alt="Logo"
          className="rounded-full items-center text-white  text-center justify-center  mb-10 mx-auto mt-[70px] "
        />
         👋
      </div>
      <div>
        <ul className="flex justify-center space-x-10 text-[13px] text-[#5d5c5c]">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>WORK</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="py-10 text-[#5d5c5c] text-center">
        <p className="text-[14px] font-medium">
          @ All rights reserved by{" "}
          <span className="text-[#5b78f6]">WordPress River</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
