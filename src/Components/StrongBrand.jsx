import React from "react";

const StrongBrand = () => {
  return (
    <div className="h-screen relative flex gap-12 font-a text-white justify-center items-center bg-primaryBlack">
      <div className="text-center text-5xl font-aboreto flex flex-col gap-8 z-50">
        <h1>Strong brands start with powerful design.</h1>
        <h1>Let’s create one that lasts.</h1>
        <h1>“pixel by pixel, just for you”</h1>
      </div>
      <div className="absolute">
        <h2 className="text-[30.3rem] opacity-50 font-lato font-bold  px-8 text-black/60 text-outline">
          DECO
        </h2>
      </div>
    </div>
  );
};

export default StrongBrand;
