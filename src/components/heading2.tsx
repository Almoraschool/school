import { poppins } from "@/utils/font";
import React from "react";

type Props = {
  title: string;
};

const Heading2 = ({ title }: Props) => {
  return (
    <h1
      className={`${poppins.className} font-bold  text-[#3B2565] text-3xl md:text-4xl tracking-normal text-balance`}
    >
      {title}
    </h1>
  );
};

export default Heading2;
