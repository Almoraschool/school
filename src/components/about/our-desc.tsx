import React from "react";
import Heading3 from "../heading3";
import IconCard from "./icon-card";
import { Eye, Goal } from "lucide-react";
import { poppins } from "@/utils/font";

const OurDesc = () => {
  return (
    <section className="container mx-auto py-10 px-5 md:px-20">
      <Heading3 title="Milestones of Excellence" />
      <p className=" text-gray-600 mt-3 md:mt-5">
        At Beersheba School, we take pride in our rich legacy of excellence,
        supported by a vibrant community of alumni, advanced facilities, and a
        comprehensive library. We are dedicated to providing quality education
        and fostering holistic development, preparing students to excel in a
        dynamic world.
      </p>
      <IconCard />
      <p className=" text-gray-600 mt-3 md:mt-5">
        Beersheba School, located in Almora, was established on July 4, 1977, in
        the heart of the city with an initial enrollment of only 60 children.
        This co-educational English Medium school was founded by the late Shri.
        and Smt. N.N.D. Bhatt. The school&apos;s origin, existence, and
        development can be attributed to the unwavering efforts of the late Mr.
        N.N.D. Bhatt.
      </p>

      <div className="max-w-4xl mx-auto ">
        <table className="w-full my-10 text-[#3B2565] border-collapse">
          <tr>
            <td className="border-2 border-[#3B2565] py-3 px-5">
              Medium of Instruction :
            </td>
            <td className="border-2 border-[#3B2565] py-3 px-5">English</td>
          </tr>
          <tr>
            <td className="border-2 border-[#3B2565] py-3 px-5">
              Board Affiliated to:
            </td>
            <td className="border-2 border-[#3B2565] py-3 px-5">C.B.S.E.</td>
          </tr>
          <tr>
            <td className="border-2 border-[#3B2565] py-3 px-5">
              Affiliation No:
            </td>
            <td className="border-2 border-[#3B2565] py-3 px-5">3530131</td>
          </tr>
          <tr>
            <td className="border-2 border-[#3B2565] py-3 px-5">
              Affiliation Status:
            </td>
            <td className="border-2 border-[#3B2565] py-3 px-5">
              April 1, 2023 to March 31, 2028
            </td>
          </tr>
          <tr>
            <td className="border-2 border-[#3B2565] py-3 px-5">
              Norms followed for Fixing Fees:
            </td>
            <td className="border-2 border-[#3B2565] py-3 px-5">
              As per State Government
            </td>
          </tr>
        </table>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
        <div className="">
          <div className="flex gap-5 items-center">
            <Goal size={60} className="text-[#DB2F2F]" />
            <h5
              className={`${poppins.className} text-[#3B2565] text-xl font-extrabold`}
            >
              Our Mission
            </h5>
          </div>
          <p className="py-3 text-gray-600">
            At Beersheba Sr. Sec School, Almora, our mission is to foster a
            nurturing and inclusive learning environment that empowers students
            to reach their full potential. We strive to instill a passion for
            learning, critical thinking skills, and values that prepare our
            students to become responsible global citizens. Through innovative
            teaching methods and a holistic educational approach, we aim to
            cultivate lifelong learners equipped to tackle the challenges of a
            dynamic world.
          </p>
        </div>
        <div className="">
          <div className="flex gap-5 items-center">
            <Eye size={60} className="text-[#DB2F2F]" />
            <h5
              className={`${poppins.className} text-[#3B2565] text-xl font-extrabold`}
            >
              Our Vision
            </h5>
          </div>
          <p className="py-3 text-gray-600">
            At Beersheba School, we envision a future where every student is
            empowered to achieve their full potential. We strive to cultivate a
            dynamic learning environment that fosters curiosity, creativity, and
            critical thinking. Our goal is to inspire lifelong learners who
            embrace diversity, uphold integrity, and contribute positively to
            society. Through innovative education and holistic development, we
            aim to nurture responsible global citizens equipped to thrive in an
            ever-changing world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurDesc;
