import Image from "next/image";
import React from "react";
import Heading3 from "../heading3";

export const dynamic = "force-dynamic";

const Gallery = ({
  image,
}: {
  image: {
    url: string;
  }[];
}) => {
  console.log(image[0].url);

  return (
    <section className="container p-5 lg:p-10 ">
      <Heading3 title="Gallery" />

      <div className=" mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
        {image?.map((uri, index) => (
          <img
            key={index}
            src={uri.url}
            alt="image"
            width={300}
            height={300}
            className="w-full h-72 rounded-lg object-cover"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
