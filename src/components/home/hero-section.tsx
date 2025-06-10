import React from "react";
import Slider from "../swiper/slider";

const HeroSection = ({
  video,
}: {
  video: {
    homeVideoBanner: {
      url: string;
    }[];
  }[];
}) => {
  return (
    <section>
      <Slider source={video[0]} />
    </section>
  );
};

export default HeroSection;
