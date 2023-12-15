import Marquee from "react-fast-marquee";
import Star from "./ImageSvg/star";
const TextList = () => {
 
  const features: { prove: string; main: string }[] = [
    { prove: "LATEST WORK AND", main: "FEATURE" },
    { prove: "GET YOUR WEBSITE", main: "DONE" },
    // { prove: "GET YOUR WEBSITE", main: "DONE" },

    
  ];

  return (
    <div className="rounded-[30px] md:w-[100%]">
      <Marquee
      loop={8}
        className="bg-gradient-to-r w-[30%]  from-[#1f1f1f] to-[#141414] flex text-center overflow-hidden rounded-[30px] justify-around py-4">
        {features.map((items) => (
          <p className="text-white text-[12px] flex" key={items.prove}>{items.prove}</p>
        ))} 
      </Marquee>
    </div>
  );
};

export default TextList;
