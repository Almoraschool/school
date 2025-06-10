import AdmissionEnquiry from "@/components/admission-enquiry";
import Facilities from "@/components/facility/facilities";
import Video from "@/components/video";
import React from "react";

const page = () => {
  return (
    <>
      <Facilities />
      <Video source="/assets/image/WhatsApp Video 2024-08-26 at 10.38.14 PM.mp4" />
      <AdmissionEnquiry />
    </>
  );
};

export default page;
