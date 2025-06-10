import Sessions from "@/components/academics/sessions";
import TransferCertificate from "@/components/academics/transfer-certificate";
import Uniform from "@/components/academics/uniform";
import Banner from "@/components/banner";
import React from "react";

const page = () => {
  return (
    <>
      <Banner
        title="Academics"
        description="Beersheba - Almora"
        source="/assets/image/aboutImage.jpg"
      />
      <Sessions />
      <Uniform />
      {/* <TransferCertificate /> */}
    </>
  );
};

export default page;
