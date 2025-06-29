import React, { useState } from "react";
import { HalfLogo } from "../../assets";
import { solutionImg1 } from "../../data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Landing = () => {
  const [hovering, setHovering] = useState("");

  useGSAP(() => {
    gsap.fromTo('#image-1', {
      y: 100,
      rotateZ: -8,
      opacity: 0,
      duration: 0.1
    }, {
      y: 0,
      rotateZ: -3,
      opacity: 1
    })

    gsap.fromTo('#image-2', {
      y: 100,
      rotateZ: 8,
      opacity: 0,
      duration: 0.1
    }, {
      y: 0,
      rotateZ: 3,
      opacity: 1
    })
  }, [hovering])

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
      }
    })

    gsap.from('.text-chunk', {
      opacity: 0.3,
      rotateZ: 4,
      y: 80,
      duration: 1,
      transformOrigin: '0% 50%', // right center
      stagger: 0.1
    })
  }, [])
  return (
    <div className="min-h-screen text-white bg-primaryBlack flex justify-between  flex-col relative">
      <div className="absolute flex flex-col justify-center bg-white items-center gap-5 text-black p-4 left-0 top-[50px]">
        <img src={HalfLogo} alt="" className="w-8 invert" />
        <p
          className="text-lg font-bold font-garet"
          style={{
            writingMode: "sideways-lr",
          }}
        >
          DeCo Orginals
        </p>
      </div>
      <div className="max-md:hidde"></div>
      <div id="text-content" className="mx-40 max-md:mx-6 text-content-head">
        <div className="relative">
          
          <h1 className="text-chunk absolute inset-0 z-[30] custom-stroke text-[60px] font-extrabold leading-[100px] font-ilisarniq max-md:text-xl">
            LARGE LANGUAGE MODELS: BEYOND THE PROMPT
          </h1>
          {/* Hovering images */}
          {
            hovering === "Cohort-based" && (
              <div id="image-1" className="absolute top-0 z-[20] -right-40 flex items-center justify-center">
                <img
                  src={solutionImg1}
                  alt="Solution"
                  className="w-[800px] aspect-[5/3] object-cover transition duration-500"
                />
              </div>
            )
          }
          
          {
            hovering === "bootcamp" && (
              <div id="image-2" className="absolute top-0 z-[20] right-20 flex items-center justify-center">
                <img
                  src={solutionImg1}
                  alt="Solution"
                  className="w-[800px] aspect-[5/3] object-cover transition duration-500"
                />
              </div>
            )
          }
          <h1 className="text-chunk stroke-text text-[60px] z-[10] font-extrabold leading-[100px] font-ilisarniq max-md:text-xl">
            LARGE LANGUAGE MODELS: BEYOND THE PROMPT
          </h1>
        </div>
        <h1 className="text-chunk pt-8 text-xl font-medium font-lato max-md:text-sm z-10">
          <span className="underline" onMouseEnter={() => setHovering("Cohort-based")} onMouseLeave={() => setHovering("")}>Cohort-based</span> Agentic AI{" "}
          <span className="underline" onMouseEnter={() => setHovering("bootcamp")} onMouseLeave={() => setHovering("")}>bootcamp</span> to build practical
          LLM-powered agents
        </h1>
      {/*<span className="text-white">scroll</span> */}
      <div className="text-chunk max-md:mx-6 md:w-[80%] z-[30] mt-20 pb-20 font-garet text-[#808080] max-md:text-xs text-justify text-[12.36px]">
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
          are built and how they work, going beyond writing prompts to equip you
          with the skills to design agentic. AI systems that reason, adapt, and
          act in real
          <span className="font-lato">-</span>world environments through hands
          <span className="font-lato">-</span>on projects and practical tools
        </p>
      </div>
      </div>

      <div></div>
    </div>
  );
};

export default Landing;
