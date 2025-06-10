import Image from "next/image";
import React from "react";
import Heading2 from "../heading2";

const facilitiesData = [
  {
    title: "Library",
    description:
      "The library is well stocked with books. Additionally, the subscription to newspapers and journals enhances students' knowledge, and the regular purchase of new books keeps the collection current. A diverse collection, including digital resources, would further enrich the learning experience. Comfortable reading spaces, knowledgeable library staff, and collaboration with teachers are crucial elements for fostering a positive environment. Implementing information literacy programs, organizing library events, and considering extended hours are also commendable practices that contribute to a thriving and dynamic library setting. Overall, your commitment to maintaining an engaging library bodes well for promoting a love of reading and supporting academic pursuits within the school community.",
    images: [
      "/assets/image/library.jpg",
      "/assets/image/library 2.jpg",
      "/assets/image/library 33.jpg",
    ],
  },
  {
    title: "Laboratory",
    description:
      "The school boasts well-equipped science laboratories, integral to the curriculum's scientific components. These laboratories are extensively utilized to support hands-on learning experiences, employing practical experiments whenever feasible to enrich students' understanding of scientific concepts.",
    images: [
      "/assets/image/lab.jpg",
      "/assets/image/lab 1.jpg",
      "/assets/image/lab 3.jpg",
    ],
  },
  {
    title: "Computer Lab",
    description:
      "The school features a spacious and well-equipped computer lab, complemented by a dedicated computer lecture room. Students benefit from ample hands-on experience with computers, recognizing the contemporary demand for technological proficiency. To meet this demand, the lab is equipped with the latest hardware and software. Furthermore, the program's syllabus is regularly updated to align with current technological advancements, ensuring students are well-prepared for the evolving landscape of technology.",
    images: [
      "/assets/image/computer lab.jpg",
      "/assets/image/computer 22.jpg",
      "/assets/image/computer lab 3.jpg",
    ],
  },
  {
    title: "School Bus Facility",
    description:
      "The bus routes and stops will be decided keeping in mind convenience to as many as possible.The change in bus route can be done on request of the parents, provided it does not cause any inconvenience to any body else.The student should arrive at the stop 5 minutes prior to the arrival time of the bus.Buses will not wait for the late comers.The safety of the student till he/she boards the bus is totally parents responsibility.",
    images: [
      "/assets/image/bus facility.jpg",
      "/assets/image/bus facility 1.jpg",
      "/assets/image/bus facility 2.jpg",
    ],
  },
  {
    title: "Music Room",
    description:
      "Acoustic Considerations: Proper acoustic treatment to minimize sound reflections and create an environment that enhances the quality of music production.Instruments: A variety of musical instruments based on the needs of the music program, such as pianos, guitars, drums, string instruments, and wind instruments.Music Stands: Adjustable and sturdy music stands for holding sheet music during practice and performances.Piano/Keyboard: An acoustic piano or electronic keyboard for accompaniment and practice.",
    images: [
      "/assets/image/music.jpg",
      "/assets/image/music 2.jpg",
      "/assets/image/music 3.jpg",
    ],
  },
  {
    title: "Art Room",
    description:
      "A quality music room in a school should prioritize acoustic design, soundproofing, and a diverse collection of well-maintained instruments. It should feature quality pianos/keyboards, amplification and recording equipment, and organized storage. Visual aids, and technology integration enhance the learning environment. ",
    images: [
      "/assets/image/art room.jpg",
      "/assets/image/art room 1.jpg",
      "/assets/image/art room 2.jpg",
    ],
  },
];

const Facilities = () => {
  return (
    <section className="p-5 lg:p-10">
      {facilitiesData.map((facility, index) => (
        <div
          key={index}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10"
        >
          <div className={`${index % 2 === 0 ? "order-1" : "lg:order-2"}`}>
            <img
              src={facility.images[0]}
              alt={facility.title}
              width={600}
              height={300}
              className=" h-[300px] w-full object-cover"
            />
            <div className="grid grid-cols-2">
              <img
                src={facility.images[1]}
                alt={facility.title}
                width={300}
                height={300}
                className="object-cover w-full"
              />
              <img
                src={facility.images[2]}
                alt={facility.title}
                width={300}
                height={300}
                className=" w-full  object-cover"
              />
            </div>
          </div>
          <div
            className={`flex justify-center flex-col gap-5 p-1 ${
              index % 2 === 0 ? "order-2" : "lg:order-1"
            }`}
          >
            <Heading2 title={facility.title} />
            <p className="text-sm md:text-base">{facility.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Facilities;
