import React, { useState } from "react";
import { DeCoLogo, HalfLogo, vid1, vid2 } from "../../assets";
import { solutionImg1 } from "../../data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Landing = () => {
  const [hovering, setHovering] = useState("");

  useGSAP(() => {
    gsap.fromTo(
      "#image-1",
      {
        y: 100,
        rotateZ: -8,
        opacity: 0,
        duration: 0.1,
      },
      {
        y: 0,
        rotateZ: -3,
        opacity: 1,
      }
    );

    gsap.fromTo(
      "#image-2",
      {
        y: 100,
        rotateZ: 8,
        opacity: 0,
        duration: 0.1,
      },
      {
        y: 0,
        rotateZ: 3,
        opacity: 1,
      }
    );
  }, [hovering]);

  useGSAP(() => {
    gsap.to("#text-content", {
      opacity: 0.3,
      rotateZ: 4,
      transformOrigin: "100% 50%", // right center
      scrollTrigger: {
        trigger: ".text-content-head",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.from(".text-chunk", {
      opacity: 0.3,
      rotateZ: 4,
      y: 80,
      duration: 1,
      transformOrigin: "0% 50%", // right center
      stagger: 0.1,
    });
  }, []);
  return (
    <div className="min-h-screen text-white bg-primaryBlack flex md:justify-evenly max-md:justify-between max-md:h-screen max-md:py-20  flex-col relative">
      <div className="absolute top-0 left-0 flex p-5">
        <img src={DeCoLogo} alt="" className="w-[80px] invert" />
      </div>
      <div className="absolute flex md:flex-col justify-center bg-white items-center gap-5 text-black p-4 md:left-0 md:top-[100px] max-md:top-0 max-md:right-0 max-md:hidden">
        <img src={HalfLogo} alt="" className="w-6 invert" />
        <p
          className="text-md font-bold font-garet max-md:hidden"
          style={{
            writingMode: "sideways-lr",
          }}
        >
          DeCo Originals
        </p>
        <p className="text-md font-bold font-garet md:hidden">DeCo Originals</p>
      </div>
      <div
        id="text-content"
        className="mx-40 max-md:mx-6 text-content-head flex flex-col"
      >
        <div className="relative">
          <h1 className="text-chunk absolute inset-0 z-[30] custom-stroke text-[65px] font-extrabold leading-[90px] font-ilisarniq max-md:text-xl">
            LARGE LANGUAGE MODELS: BEYOND THE PROMPT
          </h1>
          {/* Hovering images */}
          {hovering === "Cohort-based" && (
            <div
              id="image-1"
              className="absolute top-0 z-[20] -right-40 flex items-center justify-center max-md:hidden"
            >
              <img
                src={vid1}
                alt="Solution"
                className="w-[800px] aspect-[5/3] object-cover transition duration-500"
              />
            </div>
          )}

          {hovering === "bootcamp" && (
            <div
              id="image-2"
              className="absolute top-0 z-[20] right-20 flex items-center justify-center max-md:hidden"
            >
              <img
                src={vid2}
                alt="Solution"
                className="w-[800px] aspect-[5/3] object-cover transition duration-500"
              />
            </div>
          )}
          <h1 className="text-chunk stroke-text text-[65px] z-[10] font-extrabold leading-[90px] font-ilisarniq max-md:text-xl">
            LARGE LANGUAGE MODELS: BEYOND THE PROMPT
          </h1>
        </div>

        <h1 className="text-chunk pt-8 text-xl font-medium font-lato max-md:text-sm z-10">
          <span
            className="underline"
            onMouseEnter={() => setHovering("Cohort-based")}
            onMouseLeave={() => setHovering("")}
          >
            Cohort-based
          </span>{" "}
          Agentic AI{" "}
          <span
            className="underline"
            onMouseEnter={() => setHovering("bootcamp")}
            onMouseLeave={() => setHovering("")}
          >
            bootcamp
          </span>{" "}
          to build practical LLM-powered agents
        </h1>
        <div className="min-h-[10vh]"></div>
        {/*<span className="text-white">scroll</span> */}
        <div className="text-chunk   md:w-[80%] z-[30] mt-20 font-garet text-[#808080] max-md:text-xs text-justify text-[12.36px]">
          <p className="z-[30]">
            This immersive{" "}
            <span className="text-white">
              cohort<span className="font-lato">-</span>based bootcamp
            </span>{" "}
            builds a solid foundation in how{" "}
            <span className="text-white">
              LLMs like GPT
              <span className="font-lato">-4</span> and Gemini
            </span>{" "}
            are built and how they work, going beyond writing prompts to equip
            you with the skills to design agentic. AI systems that reason,
            adapt, and act in real
            <span className="font-lato">-</span>world environments through hands
            <span className="font-lato">-</span>on projects and practical tools
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
