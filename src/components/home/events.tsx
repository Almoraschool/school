//@ts-nocheck
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Heading2 from "../heading2";
import Link from "next/link";

type EventsProps = {
  blogs: Blog[];
  events: Event[];
};

const Events = ({ blogs, events }: EventsProps) => {
  return (
    <section className="p-5 lg:p-10 container bg-[#DED4F2] grid grid-cols-1 lg:grid-cols-2">
      <div className="pt-5 ">
        <Heading2 title="News & Events" />
        <Carousel className="mt-10 overflow-hidden md:overflow-visible">
          <CarouselContent>
            {blogs.map((blog) => (
              <CarouselItem className="md:basis-1/2 rounded-3xl" key={blog?.id}>
                <div className=" bg-white w-72 lg:w-80">
                  <Image
                    src={blog?.mainImage?.url}
                    alt="events"
                    width={400}
                    height={150}
                    className="h-60 w-80"
                  />

                  <Link href={`/blog/${blog?.slug}`}>
                    <h3 className="px-2 py-1 text-[#3B2565] text-2xl font-semibold tracking-tight leading-snug">
                      {blog?.title}
                    </h3>
                  </Link>

                  <p className="px-2 py-1 text-gray-600">{blog?.shortDesc}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="mt-5 flex justify-center items-center flex-col">
        <Heading2 title="Upcoming Events" />

        <div className="pt-5">
          <div className="rounded-3xl bg-white h-96 w-80 md:w-[28rem] overflow-y-auto">
            {events?.map((event) => (
              <div
                key={event?.id}
                className="flex items-center text-[#3B2565] border-l-4 border-[#3B2565]  border-b-2"
              >
                <div className="bg-[#F8EF2E] w-28 py-1 px-2">
                  <span className="text-lg lg:text-xl font-semibold">
                    {event?.day}
                  </span>
                </div>
                <div>
                  <p className="text-xl font-semibold px-3">
                    {event?.eventName}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
