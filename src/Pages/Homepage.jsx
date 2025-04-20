import React from "react";
import ImageSection from "../Components/ImageSection";
import TestimonialSection from "../Components/TestimonialSection";
import DecoApproach from "../Components/DecoApproach";

const Homepage = () => {
  return <div>
    <div className='min-h-screen'></div>
    <ImageSection />
    <div className="relative z-50">
      <TestimonialSection />
      <div className="min-h-60 md:min-h-0 bg-white"></div> {/* Spacer for mobile only */}
      <DecoApproach />
    </div>
  </div>;
};

export default Homepage;
