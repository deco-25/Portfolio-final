import React from "react";
import ImageSection from "../Components/ImageSection";
import TestimonialSection from "../Components/TestimonialSection";
import DecoApproach from "../Components/DecoApproach";
import Hero from "../Components/Hero";
import OurStory from "../Components/OurStory";
import StrongBrand from "../Components/StrongBrand";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <OurStory />

      <ImageSection />
      <div className="relative z-50">
        <TestimonialSection />
        <div className="min-h-60 md:min-h-0 bg-white"></div>{" "}
        {/* Spacer for mobile only */}
        <DecoApproach />
      </div>
    </div>
  );
};

export default Homepage;
