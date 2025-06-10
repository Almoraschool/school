"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { server_query_function } from "@/lib/graphql";
import { ListRestart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [filteredNews, setFilteredNews] = useState<NewsEvent[]>([]);
  const query = `query MyQuery {
  newsEvents (first: 100) {
    newsImage {
      url
    }
    newsHeading
    id
  }
}`;

  interface NewsEvent {
    newsImage: {
      url: string;
    };
    newsHeading: string;
    id: string;
  }

  interface VideoResponse {
    newsEvents: NewsEvent[];
  }

  useEffect(() => {
    news();
  }, []);

  async function news() {
    const result = (await server_query_function(query)) as VideoResponse;
    setFilteredNews(result.newsEvents);
  }

  console.log(news);

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
                news();
                return;
              }
              const searchResults = filteredNews.filter((item) => {
                const heading = item.newsHeading.toLowerCase();
                return (
                  heading.includes(searchTerm) ||
                  heading.startsWith(searchTerm) ||
                  heading.split(" ").some((word) => word === searchTerm)
                );
              });
              setFilteredNews(searchResults);
            }}
          />
          <Button
            onClick={() => news()} // Reset search
          >
            Reset Filter <ListRestart size={20} className="ml-2" />
          </Button>
        </div>
        <div className="container grid py-10 md:py-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {filteredNews.reverse().map((item) => (
            <Link href={`/news-event/${item?.id}`} key={item?.id}>
              <div
                key={item.id}
                className="bg-white w-80 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={item?.newsImage.url}
                  alt={item?.newsHeading}
                  width={500}
                  height={500}
                  className=" h-72 w-80 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item?.newsHeading}
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
