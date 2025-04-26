import React from "react";

const StrongBrand = () => {
  return (
    <div className="md:h-screen max-md:py-8 relative flex gap-12 font-a text-white justify-center items-center bg-primaryBlack">
      <div className="text-center text-5xl font-aboreto flex flex-col gap-8 z-50 max-md:text-xl max-md:px-8">
        <h1 className="max-md:hidden">
          Strong brands start with powerful design.
        </h1>
        <h1 className="max-md:hidden">Let’s create one that lasts.</h1>
        <h1 className="max-md:hidden">“pixel by pixel, just for you”</h1>
        <h1 className="md:hidden">
          Strong brands start with powerful design.Let’s create one that
          lasts.“pixel by pixel, just for you”
        </h1>
      </div>
      <div className="absolute">
        <h2 className="text-[30.3rem] max-md:text-[8rem] opacity-50 font-lato font-bold  px-8 text-black/60 text-outline">
          DECO
        </h2>
      </div>
    </div>
  );
};

export default StrongBrand;
