"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { server_query_function } from "@/lib/graphql";
import { ListRestart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [filteredImages, setFilteredImages] = useState<ImageGallery[]>([]);
  const query = `query MyQuery {
  imageGalleries (first: 100) {
    heading
    id
    banner {
      url
    }
  }
}`;

  useEffect(() => {
    images();
  }, []);

  interface ImageGallery {
    heading: string;
    id: string;
    banner: {
      url: string;
    };
  }

  interface QueryResponse {
    imageGalleries: ImageGallery[];
  }

  async function images() {
    const result = (await server_query_function(query)) as QueryResponse;
    console.log(result);
    setFilteredImages(result.imageGalleries);
  }

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="flex gap-2 mb-4">
          <Input
            type="text"
            placeholder="Search from here..."
            className="w-full p-2 border rounded-lg"
            onChange={(e) => {
              const searchTerm = e.target.value.toLowerCase().trim();
              if (!searchTerm) {
                images();
                return;
              }
              const searchResults = filteredImages.filter((item) => {
                const heading = item.heading.toLowerCase();
                return (
                  heading.includes(searchTerm) ||
                  heading.startsWith(searchTerm) ||
                  heading.split(" ").some((word) => word === searchTerm)
                );
              });
              setFilteredImages(searchResults);
            }}
          />
          <Button
            onClick={() => images()} // Reset search
          >
            Reset Filter <ListRestart size={20} className="ml-2" />
          </Button>
        </div>
        <div className="container grid py-10 md:py-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {filteredImages.reverse().map((item) => (
            <Link href={`/image-gallery/${item?.id}`} key={item?.id}>
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Image
                  src={item?.banner.url}
                  alt={item?.heading}
                  width={500}
                  height={500}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item?.heading}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
