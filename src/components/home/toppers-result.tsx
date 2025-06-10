"use client";
import React, { useEffect, useState } from "react";
import Heading3 from "../heading3";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { client_query_function } from "@/lib/graphql";
import { set } from "date-fns";

const ToppersResult = () => {
  const [topper, setTopper] = useState<TopperType>();
  const [otherTopper, setOtherTopper] = useState<TopperType>();
  const [classXTopperHeading, setClassXTopperHeading] = useState<string>("");
  const [classXTopperDesc, setClassXTopperDesc] = useState<string>("");
  const [classXiiTopperHeading, setClassXiiTopperHeading] =
    useState<string>("");
  const [classXiiTopperDesc, setClassXiiTopperDesc] = useState<string>("");

  useEffect(() => {
    toppers();
  }, []);

  const query = `
  query MyQuery {
    homes {
      toppers {
        class
        id
        topperDetails {
          id
          name
          percentage
          subject
          topperImage {
            url
          }
        }
      }
    classXTopperHeading
    classXTopperDesc
    classXiiTopperHeading
    classXiiTopperDesc
    }
  }
  `;

  async function toppers() {
    const response = (await client_query_function(query)) 
    //@ts-expect-error
    setTopper(response.homes[0].toppers[0]);
    //@ts-expect-error
    setOtherTopper(response.homes[0].toppers[1]);
    //@ts-expect-error
    setClassXTopperHeading(response.homes[0].classXTopperHeading);
    //@ts-expect-error

    setClassXTopperDesc(response.homes[0].classXTopperDesc);
    //@ts-expect-error
    setClassXiiTopperHeading(response.homes[0].classXiiTopperHeading);
    //@ts-expect-error
    setClassXiiTopperDesc(response.homes[0].classXiiTopperDesc);
  }

  return (
    <section className="container p-5 lg:p-10">
      <Heading3 title="Our Outstanding Result" />

      <div className=" my-5 lg:my-0 lg:p-10 grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:p-5">
          <Carousel>
            <CarouselContent>
              {topper?.topperDetails?.map((t) => (
                <CarouselItem className="basis-1/2 " key={t?.id}>
                  <div className="rounded-md w-40 bg-gray-300">
                    <div className=" grid grid-cols-3">
                      <div className="bg-[#FFDDDD] text-[#3B2565] col-span-2 text-lg italic text-center">
                        {t?.subject} Topper
                      </div>
                      <div className="bg-[#3B2565] text-white col-span-1 text-lg flex justify-center items-center">
                        {t?.percentage}%
                      </div>
                    </div>
                    <img
                      src={t?.topperImage?.url}
                      alt="topper image"
                      width={170}
                      height={200}
                    />
                    <div className="bg-[#3B2565]  text-center">
                      <p className="text-white">{t?.name}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="lg:p-10 py-10">
          <h3 className="font-extrabold text-[#3B2565] text-balance text-3xl">
            {classXTopperHeading}
          </h3>
          <p className="py-5">{classXTopperDesc}</p>
        </div>
      </div>
      <div className="lg:p-10 grid grid-cols-1 lg:grid-cols-2 ">
        <div className="lg:p-5 order-1 lg:order-2">
          <Carousel>
            <CarouselContent>
              {otherTopper?.topperDetails?.map((oT) => (
                <CarouselItem key={oT?.id} className="basis-1/2">
                  <div className="rounded-md w-40 bg-gray-300">
                    <div className=" grid grid-cols-3">
                      <div className="bg-[#FFDDDD] text-[#3B2565] col-span-2 text-lg italic text-center">
                        {oT?.subject} Topper
                      </div>
                      <div className="bg-[#3B2565] text-white col-span-1 text-lg flex justify-center items-center">
                        {oT?.percentage}%
                      </div>
                    </div>
                    <img
                      src={oT?.topperImage?.url}
                      alt="topper image"
                      width={170}
                      height={200}
                    />
                    <div className="bg-[#3B2565]  text-center">
                      <p className="text-white">{oT?.name}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="my-5 lg:my-0 lg:p-10 order-2 lg:order-1">
          <h3 className="font-extrabold text-[#3B2565] text-balance text-3xl">
            {classXiiTopperHeading}
          </h3>
          <p className="py-5">{classXiiTopperDesc}</p>
        </div>
      </div>
    </section>
  );
};

export default ToppersResult;
