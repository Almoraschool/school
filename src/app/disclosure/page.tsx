import Banner from "@/components/banner";
import Heading3 from "@/components/heading3";
import { Button } from "@/components/ui/button";
import { server_query_function } from "@/lib/graphql";
import Link from "next/link";
import React from "react";

export const dynamic = "force-dynamic";

const page = async () => {
  const query = `query MyQuery {
  disclosurePages {
    almoraDisclosure {
      id
      title
      url
    }
  }
}`;

  const response = await server_query_function(query);

  //@ts-expect-error
  const disclosure = response.disclosurePages[0]
    .almoraDisclosure as DisclosureType;

  return (
    <>
      <Banner
        source="/assets/image/aboutImage.jpg"
        title="Disclosure"
        description="Beersheba - Almora"
      />

      <section className="container p-5 lg:p-10">
        <Heading3 title="Mandatory Disclosure" />
        <div className="lg:p-10">
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full my-10 text-[#3B2565] border-collapse">
              <tbody>
                {disclosure.map((disclosure) => (
                  <tr
                    key={disclosure?.id}
                    className=" border-2  border-[#3B2565]"
                  >
                    <td className=" text-lg lg:text-xl font-semibold  py-2 px-5">
                      {disclosure?.title}
                    </td>
                    <td className="border-l-2 border-[#3B2565] py-2 px-5 flex justify-center items-center">
                      <Link href={`${disclosure?.url}`}>
                        <Button>View Details</Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
