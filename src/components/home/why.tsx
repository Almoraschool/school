import React from "react";
import Heading3 from "../heading3";
import Image from "next/image";

const Why = () => {
  return (
    <section className="p-5 lg:p-10 ">
      <Heading3 title="Why Beersheba School" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
        <div className="bg-[#DED4F2] rounded-md p-5 shadow-lg">
          <div className="flex justify-between items-center">
            <p className="text-[#3B2565] text-xl font-semibold decoration-[#3B2565] underline underline-offset-8">
              Best Teachers
            </p>
            <img
              src={
                "/assets/image/teacher-pointing-at-blackboard-svgrepo-com 1.png"
              }
              alt="best teacher logo"
              width={40}
              height={40}
            />
          </div>
          <p className="my-3 text-[#3B2565]">
            We have a strong expertise in diverse domains.We have a strong
            expertise.
          </p>
        </div>
        <div className=" rounded-md p-5 shadow-lg">
          <div className="flex justify-between items-center">
            <p className="text-[#3B2565] text-xl font-semibold decoration-[#3B2565] underline underline-offset-8">
              Our Achivers
            </p>
            <img
              src={"/assets/image/success-svgrepo-com (1) 1.png"}
              alt="best teacher logo"
              width={40}
              height={40}
            />
          </div>
          <p className="my-3 text-[#3B2565]">
            We provide a constant channel of talent for your requirements.
          </p>
        </div>
        <div className="bg-[#DED4F2] rounded-md p-5 shadow-lg">
          <div className="flex justify-between items-center">
            <p className="text-[#3B2565] text-xl font-semibold decoration-[#3B2565] underline underline-offset-8">
              Safe Campus
            </p>
            <img
              src={"/assets/image/monitoring-svgrepo-com 1.png"}
              alt="best teacher logo"
              width={40}
              height={40}
            />
          </div>
          <p className="my-3 text-[#3B2565]">
            Our recruitment panel is highly experienced and efficient for
            complete recruitment solutions.
          </p>
        </div>
        <div className="bg-[#3B2565] rounded-md p-5 shadow-lg">
          <div className="flex justify-between items-center">
            <p className="text-white text-xl font-semibold decoration-white underline underline-offset-8">
              Modern Education
            </p>
            <img
              src={"/assets/image/computer-tv-svgrepo-com 1.png"}
              alt="best teacher logo"
              width={40}
              height={40}
            />
          </div>
          <p className="my-3 text-white">
            We have a strong expertise in diverse industrial domains.
          </p>
        </div>
        <div className=" rounded-md p-5 shadow-lg">
          <div className="flex justify-between items-center">
            <p className="text-[#3B2565] text-xl font-semibold decoration-[#3B2565] underline underline-offset-8">
              Academic Excellence
            </p>
            <img
              src={"/assets/image/student-reading-svgrepo-com 1.png"}
              alt="best teacher logo"
              width={40}
              height={40}
            />
          </div>
          <p className="my-3 text-[#3B2565]">
            We provide a constant channel of talent for your business
            requirements.
          </p>
        </div>
        <div className="bg-[#3B2565] rounded-md p-5 shadow-lg">
          <div className="flex justify-between items-center">
            <p className="text-white text-xl font-semibold decoration-white underline underline-offset-8">
              Good Sports Facilities
            </p>
            <img
              src={"/assets/image/=s.png"}
              alt="best teacher logo"
              width={40}
              height={40}
            />
          </div>
          <p className="my-3 text-white">
            Enhancing school life at Beersheba with top-notch sports facilities
            and exceptional recruitment solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Why;
