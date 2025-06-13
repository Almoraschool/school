import Image from "next/image";
import React from "react";
import Heading2 from "../heading2";
import { poppins } from "@/utils/font";
import { Button } from "../ui/button";
import Link from "next/link";

const About = () => {
  return (
    <section className="container pt-96 mt-10 lg:pt-64 p-5 lg:p-10 grid grid-cols-1 lg:grid-cols-2">
      <div className="p-5 relative flex justify-center items-center">
        <Image
          src={"/assets/image/WhatsApp Image 2024-08-27 at 11.18.25 PM.jpeg"}
          alt="About Image"
          width={330}
          height={330}
          className="object-cover z-10 rounded-md"
        />

        <div className="absolute top-0 left-0 lg:left-32 border-2 border-dashed border-[#DB2F2F] rounded-md h-64 w-64 lg:h-80 lg:w-80 -z-10"></div>
      </div>
      <div className="md:px-10">
        <p
          className={`${poppins.className} text-2xl font-medium text-[#DB2F2F]`}
        >
          About
        </p>

        <Heading2 title="Beersheba School" />

        <p className="text-gray-600 mt-5">
          Founded in 1993, in Almora by the late Shri. and Smt. N.N.D. Bhatt,
          Beersheba School has evolved from 60 students to a leading educational
          institution. Our co-educational English Medium school offers diverse
          courses including Humanities, Commerce, AI, Coding, Yoga, and Science.
          We boast modern facilities like state-of-the-art labs, a comprehensive
          library, and advanced computer labs. We are dedicated to holistic
          development, integrating sports, arts, and extracurricular activities
          to prepare students for future challenges.
        </p>

        <Link href={"/about"}>
          <Button className="mt-5">Read More</Button>
        </Link>
      </div>
    </section>
  );
};

export default About;

// import Image from "next/image";
// import React from "react";
// import Heading2 from "../heading2";
// import { poppins } from "@/utils/font";
// import { Button } from "../ui/button";
// import Link from "next/link";

// const About = () => {
//   return (
//     <section className="container pt-64 lg:pt-48 p-5 lg:p-10 grid grid-cols-1 lg:grid-cols-2">
//       <div className="p-5 relative flex justify-center items-center">

//         <div className="absolute top-0 left-0 lg:left-32 border-2 border-dashed border-[#DB2F2F] rounded-md h-64 w-64 lg:h-80 lg:w-80 -z-10"></div>
//       </div>
//       <div className="md:px-10">
//         <p
//           className={`${poppins.className} text-2xl font-medium text-[#DB2F2F]`}
//         >
//           About
//         </p>

//         <Heading2 title="Beersheba School" />

//         <p className="text-gray-600 mt-5">

//         </p>

//         <Link href={"/about"}>
//           <Button className="mt-5">Read More</Button>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default About;
