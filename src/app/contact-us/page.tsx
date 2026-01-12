// @ts-nocheck
import Banner from "@/components/banner";
import ContactUsCard from "@/components/contact-us/contact-us-card";
import React from "react";

const page = () => {
  return (
    <>
      <Banner
        source="/assets/image/aboutImage.jpg"
        title="Contact Us"
        description="Beersheba - Almora"
      />
      <ContactUsCard />
      <div
        style={{
          width: "100%",
        }}
      >
        <iframe
          title="Beersheba Senior Secondary School location"
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?q=Beersheba%20Senior%20Secondary%20School%20Bhawani%20Datt%20Parisar%2C%20Hira%20Dungri%20N.T.D.%2C%20Almora.&t=&z=15&ie=UTF8&iwloc=&output=embed"
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>
    </>
  );
};

export default page;
