import { server_query_function } from "@/lib/graphql";
import { gql } from "graphql-request";
import Image from "next/image";
import React from "react";

export const dynamic = "force-dynamic";

const page = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  console.log(params.slug);
  const query = gql`
    query MyQuery {
      almoraBlogs(where: { slug: "${params.slug}" }) {
        id
        mainImage {
          url
        }
        title
        shortDesc
        content {
          html
        }
      }
    }
  `;

  console.log(query);

  const response = (await server_query_function(query)) as SingleBlogType;

  return (
    <>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <img
          width={1200}
          height={500}
          src={response.almoraBlogs[0]?.mainImage.url}
          alt="banner"
          className="h-80 w-full object-cover object-center"
        />

        <h1 className="text-3xl font-bold mt-6">
          {response.almoraBlogs[0]?.title}
        </h1>

        <div
          className="mt-6"
          dangerouslySetInnerHTML={{
            __html: response.almoraBlogs[0]?.content?.html,
          }}
        />
      </section>
    </>
  );
};

export default page;
