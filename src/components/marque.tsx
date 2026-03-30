import Link from "next/link";
import React from "react";

const Marque = () => {
  return (
    <div className=" bg-primary grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white  px-2 py-1 text-xs md:text-sm font-semibold ">
      <Link href={"/registeration"}>
        <p className=" animate-marquee text-center whitespace-nowrap">
          Online Registration Open
        </p>
      </Link>
      <Link href={"/registeration"}>
        <p className=" animate-marquee text-center whitespace-nowrap">
          Online Registration Open
        </p>
      </Link>
      <Link href={"/registeration"} className="hidden md:block">
        <p className=" animate-marquee text-center whitespace-nowrap">
          Online Registration Open
        </p>
      </Link>
      <Link href={"/registeration"} className="hidden lg:block">
        <p className=" animate-marquee text-center whitespace-nowrap">
          Online Registration Open
        </p>
      </Link>
    </div>
  );
};

export default Marque;
