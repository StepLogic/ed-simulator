import React from "react";

const Subtext = (props) => {
  return (
    <div className="flex flex-col items-center  gap-2 pt-4 text-center">
      <h3 className=" font-[Poppins] md:text-[32px] !leading-[140%] text-primary  font-normal text-[24px]">
        {props?.text}
      </h3>
      <p className="text-secondary font-[Poppins] text-base !leading-[140%]  ">
        {props?.subtext}
      </p>
    </div>
  );
};

export default Subtext;
