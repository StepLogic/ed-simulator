import React from "react";
import cn from "classnames";
function Footer(props) {
  return (
    <div
      className={cn("flex flex-col  h-full justify-center items-center ", {
        " bg-[#D9DAF3]": !props?.noBackground,
      })}
    >
      <div
        className={
          "grid grid-rows-[21px_calc(100%_-_21px)] place-items-center pl gap-2  h-fit w-full"
        }
      >
        <div
          className={
            "not-italic font-normal text-lg  flex flex-row items-center justify-center md:text-2xl text-center text-primary w-full px-1"
          }
        >
          {props?.prompt}
        </div>
        <div className={"w-full flex flex-col items-center py-2 px-6 "}>
          {props?.button}
        </div>
      </div>
    </div>
  );
}

export default Footer;
