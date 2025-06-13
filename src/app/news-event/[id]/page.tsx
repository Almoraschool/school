import { server_query_function } from "@/lib/graphql";
import { gql } from "graphql-request";
import Image from "next/image";
import React from "react";

const page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const query = gql`
    query MyQuery {
  newsEvent(where: {id: "${params.id}"}) {
    newsHeading
    newsImage {
      url
    }
    newsDesc {
      html
    }
  }
}
  `;
  const response = await server_query_function(query);
  const { newsEvent } = response as {
    newsEvent: {
      newsHeading: string;
      newsDesc: {
        html: string;
      };
      newsImage: {
        url: string;
      };
    };
  };
  console.log(response);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg  overflow-hidden">
        <Image
          src={newsEvent.newsImage.url}
          alt={newsEvent.newsHeading}
          width={1920}
          height={1080}
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {newsEvent.newsHeading}
          </h1>
          <div
            className="text-gray-600 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: newsEvent.newsDesc.html }}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
