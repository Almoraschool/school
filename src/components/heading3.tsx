import { poppins } from "@/utils/font";
import React from "react";

type Props = {
  title: string;
};

const Heading3 = ({ title }: Props) => {
  return (
    <div className="relative flex justify-center items-center">
      <h1
        className={`${poppins.className} font-bold text-2xl md:text-3xl  tracking-normal text-balance`}
      >
        {title}
      </h1>
      <div className="absolute -top-1 border-2 w-8 border-[#DB2F2F]"></div>
    </div>
  );
};

export default Heading3;
