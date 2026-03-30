// @ts-nocheck
import Banner from "@/components/banner";
import ContactUsCard from "@/components/contact-us/contact-us-card";
import React from "react";

const page = () => {
  return (
    <>
      <Banner
        source="/assets/image/banner.jpg"
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13876.253504939306!2d79.64638542802575!3d29.601843859456853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0b7ac7b4cc613%3A0x82a18a9411947209!2sBeersheba%20Sr.%20Sec%20School%20Almora!5e0!3m2!1sen!2sin!4v1768236541486!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>
    </>
  );
};

export default page;
