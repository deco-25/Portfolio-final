import React from "react";
import ImageSection from "../Components/ImageSection";
import TestimonialSection from "../Components/TestimonialSection";
import DecoApproach from "../Components/DecoApproach";
import Hero from "../Components/Hero";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <ImageSection />
      <TestimonialSection />
      <DecoApproach />
    </div>
  );
};

export default Homepage;
