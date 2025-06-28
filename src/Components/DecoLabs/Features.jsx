import React, { useState, useEffect } from "react";
import { solutionImg1 } from "../../data";
import { epochs } from "../../data/decoOrginals";

const FeaturesComponent = ({ ...props }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const ref = React.useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const maxDist = 50;
    const factor = 0.05; // lower factor = smoother motion

    const offsetX = Math.max(Math.min(-deltaX * factor, maxDist), -maxDist);
    const offsetY = Math.max(Math.min(-deltaY * factor, maxDist), -maxDist);

    setOffset({ x: offsetX, y: offsetY });
  };

  const resetOffset = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetOffset}
      className="min-h-screen flex items-center justify-between overflow-hidden"
    >
      <div className="flex items-center gap-8 w-[80vw]">
        <div className="h-screen relative flex flex-col justify-between items-start w-[90%]">
          {/* OPOINT Text */}

          <div className="h-full text-center flex justify-center items-end md:hidden px-6 -mb-40">
            <h1
              data-text={props.type}
              className="text-[50px] font-bold font-ilisarniq half-fill-text"
              style={{ writingMode: "sideways-lr" }}
            >
              {props.type}
            </h1>
          </div>

          <div className="h-full text-center pl-32 flex justify-center items-end -mb-[30px] max-md:hidden">
            <h1
              data-text={`DAY - ${props.number}`}
              className="text-[90px] font-bold font-ilisarniq half-fill-text"
            >
              DAY - {props.number}
            </h1>
          </div>

          {/* Image Section */}
          <div className="relative bottom-0 z-20 md:aspect-[16/10] max-md:aspect-[8/16] md:h-[80%] max-md:h-[80vh] group ">
            <img
              src={solutionImg1}
              alt="Solution"
              className="w-full h-full object-cover transition duration-500"
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-[-100%] opacity-0 left-0 w-full text-white p-4 px-12 z-20 transition-all duration-200 group-hover:bottom-20 group-hover:opacity-100 ease-linear">
              <p className="text-lg font-garet text-white/60 max-sm:text-xs text-justify">
                {props.content}
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-screen flex justify-center items-center">
          <div
            className="absolute z-[500] bottom-20 group hover:bg-rose-500 border-rose-500 border-2 w-[150px] h-[150px] text-center flex justify-center items-center rounded-full duration-200 ease-linear transition-all"
            style={{
              transform: `translate3d(${offset.x}px, ${
                offset.y
              }px, 0px) rotateZ(${offset.x * 0.5}deg)`,
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            <h1 className="scale-105 group-hover:scale-[150%] font-bold duration-200 ease-linear transition-all">
              VIEW PRODUCT
            </h1>
          </div>
          <h1
            className="text-xl text-[#808080] font-bold font-garet"
            style={{ writingMode: "sideways-rl" }}
          >
            {props.title}
          </h1>
        </div>
      </div>
      <div>
        <h1
          className="text-[300px] text-[#808080] font-bold font-tommy -mr-[100px]"
          style={{ writingMode: "sideways-rl" }}
        >
          {props.number}
        </h1>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="min-h-screen text-white relative">
      {epochs.map((ele, ind) => (
        <FeaturesComponent
          key={ind}
          number={ele.number}
          type={ele.type}
          title={ele.title}
          content={ele.content}
        />
      ))}
      <div className="sticky w-fit bottom-0 left-0 bg-white text-black py-4 px-8 font-semibold font-lato z-[100]">
        <h1 className="text-xl">CURRICULUM</h1>
      </div>
    </div>
  );
};

export default Features;
