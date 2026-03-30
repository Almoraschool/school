import Banner from "@/components/banner";
import Heading3 from "@/components/heading3";
import { server_query_function } from "@/lib/graphql";
import Image from "next/image";
import React from "react";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const query = `
query MyQuery {
  almoraImageGalleries {
    imageGallery {
      imageCategoryName
      image {
        url
      }
    }
  }
}
`;

const page = async () => {
  const res = (await server_query_function(query)) as galleryType;

  const images = res.almoraImageGalleries[0].imageGallery;
  // console.log("😒😒😒😒😒", images);

  return (
    <>
      <Banner
        title="Gallery"
        description="Beersheba - Almora"
        source="/assets/image/gallery.jpg"
      />
      <section className="container p-5 lg:p-10 ">
        <Heading3 title="Gallery" />

        {images?.map((img, i) => {
          return (
            <div className="my-5 md:my-10" key={i}>
              <h2 className="text-3xl text-balance md:text-4xl font-semibold text-center">
                {img.imageCategoryName}
              </h2>

              <div className="flex flex-wrap items-center gap-5 justify-center md:justify-evenly py-5 md:py-10">
                {img.image?.map((uri, i) => (
                  <Image
                    key={i}
                    src={uri.url}
                    alt="gallery"
                    width={300}
                    height={300}
                    className="w-fit h-96 "
                  />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default page;
