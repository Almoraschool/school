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
  events: SchoolEvent[];
};

const Events = ({ blogs, events }: EventsProps) => {
  return (
    <section className="p-5 lg:p-10 container bg-[#DED4F2] grid grid-cols-1 lg:grid-cols-2">
      <div className="pt-5 flex flex-col items-center lg:items-start">
        <Heading2 title="News & Events" />
        <Carousel className="mt-10 max-w-xs">
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
                    <h3 className="px-2 py-1 text-[#3B2565] text-lg font-semibold tracking-tight leading-snug">
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
      <div className="pt-5 lg:mt-0 flex flex-col items-center lg:items-start">
        <Heading2 title="Upcoming Events" />
        <div className="mt-10">
          <div className="rounded-3xl bg-white h-96 w-80 lg:w-96 overflow-y-auto shadow-lg border border-purple-100">
            {events?.length > 0 ? (
              events.map((event, index) => (
                <React.Fragment key={event?.id}>
                  {index > 0 && <hr className="mx-4 my-3 border-gray-200" />}
                  <div className="flex items-start border-l-4 border-[#3B2565] m-3 hover:bg-gray-50 transition-colors rounded-r-md">
                    <div className="bg-[#F8EF2E] w-24 py-3 px-3 text-center rounded-r-md shadow-sm">
                      <span className="text-lg font-bold block">
                        {event?.day}
                      </span>
                    </div>
                    <div className="px-4 py-2 flex-1">
                      <p className="text-[#3B2565] text-lg font-semibold">
                        {event?.eventName}
                      </p>
                    </div>
                  </div>
                </React.Fragment>
              ))
            ) : (
              <p className="p-6 text-gray-500 text-center">
                No upcoming events
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
