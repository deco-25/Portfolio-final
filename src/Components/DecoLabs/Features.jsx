import React, { useState, useEffect } from "react";
import { solutionImg1 } from "../../data";
import { epochs } from "../../data/decoOrginals";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { sampleImg } from "../../assets";

gsap.registerPlugin(ScrollTrigger);
const FeaturesComponent = ({ ...props }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const ref = React.useRef(null);

  useGSAP(() => {
    gsap.from(`#day-text-${props.number}`, {
      left: 200,
      scrollTrigger: {
        trigger: `#day-${props.number}`,
        start: "top bottom",
        scrub: true,
      },
    });

    gsap.fromTo(
      `#feature-image-${props.number}`,
      { scale: 1 },
      {
        scale: 1.3,
        scrollTrigger: {
          trigger: `#feature-image-${props.number}`,
          start: "top bottom", // when top of image hits bottom of viewport
          end: "bottom top", // when bottom of image hits top of viewport
          scrub: 1, // makes it smoother (number = time in seconds to catch up)
          markers: false, // remove in production
          ease: "power1.out", // smoother easing
        },
      }
    );

    gsap.fromTo(
      ".circle-text",
      {
        rotate: 0,
      },
      {
        rotate: 360,
        duration: 4,
        repeat: -1,
        ease: "linear",
      }
    );
  }, []);

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
      className="min-h-screen flex items-center overflow-hidden"
    >
      <div className="flex h-screen items-center gap-8 w-[80vw]">
        <div className="h-screen relative flex flex-col justify-between items-start w-[90%]">
          {/* OPOINT Text */}

          <div className="h-full text-center flex justify-center items-end md:hidden px-6 -mb-32">
            <h1
              data-text={`DAY - ${props.number}`}
              className="text-[50px] font-bold font-ilisarniq half-fill-text"
              style={{ writingMode: "sideways-lr" }}
            >
              DAY - {`${props.number}`}
            </h1>
          </div>

          <div className="h-full text-center pl-96 flex justify-center items-end -mb-[25px] max-md:hidden">
            <h1
              id={`day-text-${props.number}`}
              data-text={`What's rolling ?`}
              className="text-[72px] font-bold font-ilisarniq half-fill-text w-full"
            >
              <span id={`day-${props.number}`}>What's rolling ?</span>
            </h1>
          </div>

          {/* Image Section */}
          <div className="relative bottom-0 left-0 z-20 md:aspect-[16/10] max-md:aspect-[8/16] md:h-[80%] max-md:h-[80vh] group ">
            <div className=" inset-0 w-full h-full overflow-hidden">
              <img
                id={`feature-image-${props.number}`}
                src={props.image}
                alt="Solution"
                className="w-full h-full object-cover transition"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-20 opacity-0 left-0 w-full text-white p-4 md:px-12 z-20 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              <h1 className="text-3xl mb-4 font-bold max-md:text-xl">
                {props.title}
              </h1>
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
            <div className="circle-text">
              <h1 className="scale-105 group-hover:scale-[150%] font-bold duration-200 ease-linear transition-all">
                <span>{props.date}</span>
              </h1>
            </div>
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
          className="text-[350px] text-black text-outline font-bold font-ilisarniq  -mr-[100px]"
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
    <div className="min-h-screen text-white relative flex flex-col justify-between">
      {epochs.map((ele, ind) => (
        <FeaturesComponent
          key={ind}
          number={ele.number}
          type={ele.type}
          title={ele.title}
          content={ele.content}
          date={ele.date}
          image={ele.image}
        />
      ))}
      <div className="sticky w-fit bottom-0 left-0 bg-white text-black px-4 py-2 md:py-4 md:px-8 font-semibold font-lato z-[100]">
        <h1 className="text-xl">CURRICULUM</h1>
      </div>
    </div>
  );
};

export default Features;
