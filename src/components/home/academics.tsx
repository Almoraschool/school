import React from "react";
import Heading3 from "../heading3";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { poppins } from "@/utils/font";
import { Button } from "../ui/button";
import Heading2 from "../heading2";

const Academics = () => {
  return (
    <section className="container p-5">
      <Heading3 title="Academics" />

      <div className="py-5 lg:p-5 ">
        <Tabs defaultValue="early-years">
          <TabsList className="">
            <TabsTrigger value="early-years">EARLY YEARS</TabsTrigger>
            <TabsTrigger value="elementry-school">ELEMENTARY </TabsTrigger>
            <TabsTrigger value="middle-school">MIDDLE SCHOOL</TabsTrigger>
            <TabsTrigger value="high-school">HIGH SCHOOL</TabsTrigger>
            <TabsTrigger value="examination">EXAMINATION</TabsTrigger>
          </TabsList>

          <TabsContent value="early-years" className="my-7">
            <div className=" lg:p-10 gap-7 grid grid-cols-1 lg:grid-cols-2">
              <div className=" flex justify-center items-center">
                <img
                  src={"/assets/image/early years alm.jpg"}
                  alt="About Image"
                  width={330}
                  height={330}
                  className="object-cover z-10 rounded-md"
                />
              </div>
              <div className="md:px-10">
                <p
                  className={`${poppins.className} text-2xl font-medium text-[#DB2F2F]`}
                >
                  Early Years
                </p>

                <Heading2 title="Beersheba School" />

                <p className="text-gray-600 mt-5">
                  In our Early Years program, we focus on providing a nurturing
                  and stimulating environment for young learners. Through
                  play-based learning and structured activities, we lay the
                  foundation for cognitive, social, and emotional development.
                  Our dedicated educators ensure that every child receives
                  personalized attention to foster a love for learning from an
                  early age.
                </p>

                {/* <Button className="mt-5">Read More</Button> */}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="elementry-school" className="my-7">
            <div className=" lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-7">
              <div className=" flex justify-center items-center">
                <img
                  src={"/assets/image/elementary alm.jpg"}
                  alt="About Image"
                  width={330}
                  height={330}
                  className="object-cover z-10 rounded-md"
                />
              </div>
              <div className="md:px-10">
                <p
                  className={`${poppins.className} text-2xl font-medium text-[#DB2F2F]`}
                >
                  Elementry School
                </p>

                <Heading2 title="Beersheba School" />

                <p className="text-gray-600 mt-5">
                  At Beersheba School&apos;s Elementary School, we strive to
                  ignite curiosity and passion for knowledge. Our curriculum
                  blends academic rigor with creative exploration, encouraging
                  students to discover their interests and develop essential
                  skills. We emphasize a well-rounded education that prepares
                  students for the challenges ahead, building a strong academic
                  foundation in a supportive and engaging environment.
                </p>

                {/* <Button className="mt-5">Read More</Button> */}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="middle-school" className="my-7">
            <div className=" lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-7">
              <div className=" flex justify-center items-center">
                <img
                  src={"/assets/image/middle almora.jpg"}
                  alt="About Image"
                  width={330}
                  height={330}
                  className="object-cover z-10 rounded-md"
                />
              </div>
              <div className="md:px-10">
                <p
                  className={`${poppins.className} text-2xl font-medium text-[#DB2F2F]`}
                >
                  Middle School
                </p>

                <Heading2 title="Beersheba School" />

                <p className="text-gray-600 mt-5">
                  In Middle School, we empower students to explore and excel
                  academically while nurturing their personal growth. Our
                  curriculum is designed to deepen their understanding of
                  various subjects and develop critical thinking skills. We
                  foster a collaborative learning environment where students
                  build confidence, independence, and resilience, preparing them
                  for the transition to higher levels of education.
                </p>

                {/* <Button className="mt-5">Read More</Button> */}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="high-school" className="my-7">
            <div className=" lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-7">
              <div className=" flex justify-center items-center">
                <img
                  src={"/assets/image/high alm.jpg"}
                  alt="About Image"
                  width={330}
                  height={330}
                  className="object-cover z-10 rounded-md"
                />
              </div>
              <div className="md:px-10">
                <p
                  className={`${poppins.className} text-2xl font-medium text-[#DB2F2F]`}
                >
                  High School
                </p>

                <Heading2 title="Beersheba School" />

                <p className="text-gray-600 mt-5">
                  At Beersheba School&apos;s High School, we focus on academic
                  excellence and preparing students for future success. We
                  challenge students to reach their full potential through a
                  rigorous curriculum and personalized guidance. Our
                  comprehensive approach includes advanced coursework,
                  opportunities for leadership and extracurricular activities,
                  and support for college and career readiness.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="examination" className="my-7">
            <div className=" lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-7">
              <div className=" flex justify-center items-center">
                <img
                  src={"/assets/image/examination alm.jpg"}
                  alt="About Image"
                  width={330}
                  height={330}
                  className="object-cover z-10 rounded-md"
                />
              </div>
              <div className="md:px-10">
                <p
                  className={`${poppins.className} text-2xl font-medium text-[#DB2F2F]`}
                >
                  Examination
                </p>

                <Heading2 title="Beersheba School" />

                <p className="text-gray-600 mt-5">
                  Examinations at Beersheba School are conducted with a
                  commitment to fairness, transparency, and academic integrity.
                  We assess student progress and achievement through a variety
                  of methods, including regular assessments, standardized tests,
                  and project-based evaluations. Our goal is to provide accurate
                  feedback to students and parents while ensuring that our
                  educational standards uphold the highest quality of learning
                  and growth.
                </p>

                {/* <Button className="mt-5">Read More</Button> */}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Academics;
