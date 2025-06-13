import React from "react";
import Heading2 from "../heading2";
import VideoCard from "./video-card";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

// Define the Featured item type for better type safety
type FeaturedItem = {
  id: string;
  newsHeading: string;
  newsImage: { url: string };
};

const Video = ({ featured }: { featured: FeaturedItem[] }) => {
  return (
   <section className="container relative bg-[#DED4F2] grid grid-cols-1 lg:grid-cols-2 pt-20 pb-96 lg:pb-48">
      <div>
        <Heading2
          title="Leading School in City
Since 1977"
        />
        <p className="text-gray-600 my-5">
          Since 1993, Beersheba School has been Almora&apos;s beacon of
          educational distinction. For three decades, we&apos;ve fostered
          academic brilliance and holistic growth, shaping well-rounded
          individuals. Our commitment to innovative learning and character
          development prepares students for future success. Join Beersheba and
          embark on a transformative educational journey.
        </p>
        <Link href={"/news-event"}>
          <Button>Explore Our Highlights</Button>
        </Link>
      </div>
      <div>
        <Carousel className="mt-8 max-w-xs">
          <CarouselContent>
            {featured.map((item) => (
              <CarouselItem key={item.id}>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-center items-center">
                      <Image
                        src={item.newsImage.url}
                        alt={`Featured news: ${item.newsHeading}`}
                        width={400}
                        height={300}
                        className="w-64 h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <Link href={`/news-event/${item.id}`}>
                        <p className="text-lg  font-semibold text-gray-800">
                          {item.newsHeading}
                        </p>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="absolute md:-bottom-20  -bottom-96 lg:-bottom-44 flex justify-evenly items-center w-full flex-wrap gap-2">
        <VideoCard
          title="Campus"
          desc="Discover our state-of-the-art facilities and vibrant learning spaces."
          source="/assets/image/icon cool-icon-l19.svg"
          link="/image-gallery/cm5mnfbsx02mx07o1cneh7g2p"
        />
        <VideoCard
          title=" Teacher"
          desc="Meet our dedicated educators shaping bright futures with passion."
          source="/assets/image/icon cool-icon-l22.svg"
          link="/image-gallery/cm5mnegp902d807o727z5rmcy"
        />
        <VideoCard
          title="Library"
          desc="Explore our vast collection of books and digital resources for knowledge seekers."
          source="/assets/image/icon cool-icon-l25.svg"
          link="/image-gallery/cm5moi6bh037107o75b1f654h"
        />
        <VideoCard
          title="Smart School"
          desc="Experience cutting-edge technology enhancing every aspect of learning"
          source="/assets/image/icon cool-icon-l28.svg"
          link="/image-gallery/cm5moitf803ei07o1bwivnwd7"
        />
      </div>
    </section>
  );
};

export default Video;
