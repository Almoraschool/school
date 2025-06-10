import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const AdmissionEnquiry = () => {
  return (
    <section className=" relative h-72 overflow-hidden">
      <img
        src={"/assets/image/you deserve .jpg"}
        alt="Admission Enquiry"
        width={1000}
        height={350}
        className="object-cover w-full h-full"
      />
      <div className="absolute flex flex-col gap-5 justify-center items-center w-full h-72 inset-0 bg-[#3B2565]/80">
        <p className=" text-3xl lg:text-4xl font-semibold text-white text-balance text-center">
          Your kids deserve the best education
        </p>
        <Link href={"/registeration"}>
          <Button size={"lg"}>Admission Enquiry</Button>
        </Link>
      </div>
    </section>
  );
};

export default AdmissionEnquiry;
