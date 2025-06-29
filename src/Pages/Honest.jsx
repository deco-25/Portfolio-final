import React from "react";
import { solutionImg1 } from "../data";
import { LLM } from "../assets";

const Honest = () => {
  return (
    <div className="h-screen text-white flex justify-center items-center">
      <div className="flex gap-12 md:px-32 items-center max-md:px-8">
        <div className="w-[40%] max-md:hidden">
          <img src={LLM} alt="" className="" />
        </div>
        <div className="flex flex-col justify-center items-center gap-8 md:w-[60%]">
          <h1 className="font-aboreto text-2xl font-bold max-md:text-xl text-center">
            An Honest Look at What This Bootcamp Offers!
          </h1>
          <p className="font-garet text-justify leading-relaxed text-lg text-primaryGray max-md:text-sm">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This bootcamp is
            designed to give you a strong
            <span className="font-lato">,</span> practical understanding of how
            Large Language Models and agentic AI systems work
            <span className="font-lato">.</span> While it won
            <span className="font-lato">'’</span>t turn you into an expert
            overnight<span className="font-lato">,</span> it will equip you with
            essential concepts<span className="font-lato">,</span> hands
            <span className="font-lato">-</span>on experience
            <span className="font-lato">,</span> and real
            <span className="font-lato">-</span>world tools needed to
            confidently build adaptive AI agents
            <span className="font-lato">.</span> We want everyone to learn AI
            <span className="font-lato">,</span> regardless of their domain or
            prior knowledge<span className="font-lato">,</span> and cover
            everything from foundational AI and machine learning principles to
            the inner workings of LLMs and how to create intelligent AI agents
            that can plan<span className="font-lato">,</span> act
            <span className="font-lato">,</span> and collaborate
            <span className="font-lato">.</span> Our goal is to help you move
            beyond just using AI tools and start building your own
            <span className="font-lato">,</span> preparing you to be part of the
            growing community that truly understands and shapes the future of AI
            <span className="font-lato">.</span> We
            <span className="font-lato">'’</span>ll be there every step of the
            way
            <span className="font-lato">,</span> supporting your learning
            journey with clear guidance and practical projects
            <span className="font-lato">.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Honest;
