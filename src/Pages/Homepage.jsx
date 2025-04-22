import React from "react";
import ImageSection from "../Components/ImageSection";
import TestimonialSection from "../Components/TestimonialSection";
import DecoApproach from "../Components/DecoApproach";
import Hero from "../Components/Hero";

const Homepage = () => {
<<<<<<< HEAD
  return (
    <div>
      <Hero />
      <ImageSection />
      <TestimonialSection />
      <DecoApproach />
    </div>
  );
=======
  return <div>
    <div className='min-h-screen'></div>
    <ImageSection />
    <div className="relative z-50">
      <TestimonialSection />
      <div className="min-h-60 md:min-h-0 bg-white"></div> {/* Spacer for mobile only */}
      <DecoApproach />
    </div>
  </div>;
>>>>>>> 0b3818a053a05f8fdcfd7d41f67db847bdfc90b9
};

export default Homepage;
