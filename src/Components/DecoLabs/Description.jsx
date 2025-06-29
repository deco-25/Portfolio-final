import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
const Description = () => {
  useGSAP(() => {
    gsap.from("#desc-body", {
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: "#desc-body",
      },
    });
  }, []);

  return (
    <div className="min-h-screen text-white bg-primaryBlack flex md:justify-between max-md:gap-6  flex-col relative items-center">
      <div></div>
      <div className="md:mx-40">
        <h1 className="text-[47.12px] font-extrabold leading-[100px] font-ilisarniq text-white max-md:text-xl">
          Don’t Just Use AI. Build It.
        </h1>
      </div>
      {/*<span className="text-white">scroll</span> */}
      <div
        id="desc-body"
        className="md:px-44 max-md:px-6 w-[100%] pb-20 font-garet text-primaryGray text-justify text-lg md:leading-relaxed max-md:text-xs"
      >
        <p>
          As of mid<span className="font-lato">-</span>2025, over 1 billion
          people, nearly{" "}
          <Link
            className="font-bold text-white cursor-pointer"
            to="/DecoLabs/informationSource"
          >
            25
            <span className="font-lato">%*</span>
          </Link>{" "}
          Internet users use LLM tools like ChatGPT and Gemini. But only about{" "}
          <Link
            className="font-bold text-white cursor-pointer"
            to="/DecoLabs/informationSource"
          >
            15
            <span className="font-lato">%*</span>
          </Link>{" "}
          truly understand how they work or how to build intelligent, useful
          systems with them. That’s the gap we’re here to help close. This
          bootcamp takes you beyond writing prompts and into the world of LLMs
          and Agentic AI, where intelligent systems reason, plan, and act.
        </p>
        <p>
          <br /> We’ll begin with the basics of AI and machine learning, then
          dive into how LLMs are trained, what makes them powerful, and how they
          generate language. You’ll explore the core concepts behind models like
          GPT<span className="font-lato">-4</span> and Gemini, things like
          attention mechanisms and transformer architecture, in a way that feels
          simple and intuitive. From there, we’ll build intelligent agents
          together, AI programs that can act, use tools, remember context, and
          solve real
          <span className="font-lato">-</span>world problems.
        </p>{" "}
        <br />
        <p>
          By the end, you’ll have built adaptive AI agents through a hands
          <span className="font-lato">-</span>on mini
          <span className="font-lato">-</span>project and gained a real, working
          understanding of how these systems function. Of course no
          <span className="font-lato">-</span>you won’t become a{" "}
          <Link
            className="font-bold text-white/70 cursor-pointer relative group"
            to="/DecoLabs/honestlook"
          >
            prodigy overnight<span className="font-lato">**</span>
            <span className="duration-300 group-hover:opacity-100 opacity-0 min-w-[90%] absolute -bottom-[2px] left-0 bg-white min-h-[1px]"></span>
          </Link>
          , but you’ll be well on your way to joining that 15 percent who truly
          get it.{" "}
          <span className="text-[#e6e3e3]">
            You don’t need a deep background to get started. With Python skills,
            high school math, and a curious mindset, we’ll help you go from
            knowing to building
          </span>
        </p>
      </div>
    </div>
  );
};

export default Description;
