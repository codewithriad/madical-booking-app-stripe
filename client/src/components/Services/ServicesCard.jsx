/* eslint-disable no-unused-vars */

import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServicesCard = (item, index) => {
  const { name, desc, bgColor, textColor } = item.item;
  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[25px] leading-9 font-bold" style={{color:`${textColor}`}}>
        {name}
      </h2>
      <p className="text-base leading-7 text-textColor mt-4">{desc}</p>
      <div className="flex items-center justify-between">
        <Link
          to="/doctors"
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:text-white"
        >
          <BsArrowRight />
        </Link>
          <span className="w-[44px] h-[44px] flex justify-center items-center text-lg font-semibold" style={{background:`${bgColor}`, color:`${textColor}`, borderRadius:"6px 0 0 6px"}}>
            {item.index + 1}
          </span>
      </div>
    </div>
  );
};

export default ServicesCard;

//  name: "Burn Treatment",
// desc: "World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.",
// bgColor: "rgba(151, 113, 255, .2)",
// textColor: "#9771FF",
