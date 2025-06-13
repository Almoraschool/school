import React from "react";
import { poppins } from "@/utils/font";
import Heading2 from "../heading2";
import Image from "next/image";

const About = () => {
  return (
    <section className=" container relative mx-auto grid grid-cols-1  lg:grid-cols-2 gap-4 py-10 px-5 md:px-10">
      <div className="md:px-10">
        <p
          className={`${poppins.className} text-2xl font-medium text-[#DB2F2F]`}
        >
          About
        </p>

        <Heading2 title="Beersheba School" />

        <p className="text-gray-600 mt-5">
          Established in the heart of Almora, Beersheba Sr. Sec School began its
          journey in 1993, under the visionary leadership of the late Shri. and
          Smt. N.N.D. Bhatt. Starting with just 60 students, their dedication
          and inspiration have been pivotal in shaping the school&apos;s growth
          and commitment to educational excellence. Today, Beersheba Sr. Sec
          School stands as a premier co-educational English Medium institution,
          renowned for its nurturing environment and comprehensive curriculum.
        </p>
        <p className="text-gray-600 mt-5">
          Over the decades, Beersheba Sr. Sec School has expanded to accommodate
          a diverse student body and a dedicated faculty committed to holistic
          development. With a rich legacy of over many years of academic
          excellence, our school features a library of over 3000 books and
          advanced facilities, including 70 computers. Affiliated with CBSE and
          adhering to state government norms, we uphold rigorous standards in
          education to prepare students for a successful future.
        </p>
        <p className="text-gray-600 mt-5">
          Beersheba School, situated in Almora, was founded on , 1993, at the
          city&apos;s core, starting with just 60 students. This co-educational
          English Medium school was established by the late Shri. and Smt.
          N.N.D. Bhatt. The school&apos;s origin, growth, and legacy are a
          testament to the enduring dedication of the late Mr. N.N.D. Bhatt.
        </p>
      </div>
      <div
        className="relative h-[70vh] md:h-full
      "
      >
        <Image
          src={"/assets/image/about 1.jpg"}
          alt="About Image"
          width={400}
          height={400}
          className="rounded-lg absolute top-0 left-0 md:left-24 w-60 h-80 object-cover"
        />
        <Image
          src={"/assets/image/about 2.jpg"}
          alt="About Image"
          width={400}
          height={400}
          className="rounded-lg absolute bottom-0 right-0 md:right-24 w-60 h-80 object-cover"
        />
      </div>
    </section>
  );
};

export default About;
