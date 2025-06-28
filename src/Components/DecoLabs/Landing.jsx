import React from "react";
import { HalfLogo } from "../../assets";
import { solutionImg1 } from "../../data";

const Landing = () => {
  return (
    <div className="min-h-screen text-white bg-primaryBlack flex justify-between  flex-col relative">
      <div className="absolute w-1/2 bottom-40 right-20 rotate-[15deg]">
        <img
          src={solutionImg1}
          alt="Solution"
          className="w-full h-full object-cover transition duration-500 z-50 hidden"
        />
      </div>
      <div className="absolute flex flex-col justify-center bg-white items-center gap-5 text-black p-4 left-0 top-[50px] hidden">
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
      <div className="mx-40 max-md:mx-6">
        <h1 className="stroke-text text-[60px] font-extrabold leading-[100px] font-ilisarniq max-md:text-xl">
          LARGE LANGUAGE MODELS: BEYOND THE PROMPT
        </h1>
        <h1 className="pt-8 text-xl font-medium font-lato max-md:text-sm">
          <span className="underline">Cohort-based</span> Agentic AI{" "}
          <span className="underline">bootcamp</span> to build practical
          LLM-powered agents
        </h1>
      </div>
      {/*<span className="text-white">scroll</span> */}
      <div className="md:px-40 max-md:mx-6 md:w-[80%] pb-20 font-garet text-[#808080] max-md:text-xs text-justify text-[12.36px]">
        <p>
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
  );
};

export default Landing;
