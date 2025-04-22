import React from "react";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col gap-12 justify-center items-center bg-[#f5f5f5]">
      <div>
        <h1 className="font-aboreto font-[500]  text-7xl">INNOVATING AT THE</h1>
      </div>
      <div className="flex justify-center gap-8">
        <h1 className="font-aboreto font-[500] text-7xl">INTERSECTION OF</h1>
        <p className="font-garet max-w-[35%] text-start">
          Great products are built where design meets code with strategy. At
          Deco, we create seamless digital experiences that don’t just look good
          but perform exceptionally.
        </p>
      </div>
      <div>
        <h1 className="font-aboreto font-[600] text-7xl">DESIGN & CODE</h1>
      </div>
    </div>
  );
};

export default Hero;
