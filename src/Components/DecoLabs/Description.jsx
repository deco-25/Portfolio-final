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
    <section
      id="description-section"
      className="min-h-screen text-white bg-primaryBlack flex md:justify-between max-md:gap-6 flex-col relative items-center"
    >
      <div className="sr-only">This section introduces the AI Bootcamp</div>

      <header className="md:mx-40">
        <h1 className="text-[47.12px] font-extrabold leading-[100px] font-ilisarniq text-white max-md:text-xl">
          Don’t Just Use AI. Build It.
        </h1>
      </header>

      <article
        id="desc-body"
        className="md:px-44 max-md:px-6 w-full pb-20 font-garet text-primaryGray text-justify text-lg md:leading-relaxed max-md:text-xs"
      >
        <p>
          As of mid<span className="font-lato">-</span>2025, over 1 billion
          people—nearly{" "}
          <Link
            className="font-bold text-white cursor-pointer"
            to="/DecoLabs/informationSource"
            aria-label="25% internet users data source"
          >
            25<span className="font-lato">%*</span>
          </Link>{" "}
          of global Internet users—use LLM tools like ChatGPT and Gemini. But
          only{" "}
          <Link
            className="font-bold text-white cursor-pointer"
            to="/DecoLabs/informationSource"
            aria-label="15% AI literacy data source"
          >
            15<span className="font-lato">%*</span>
          </Link>{" "}
          truly understand how these models work or how to build intelligent
          systems with them. Our bootcamp is designed to bridge that knowledge
          gap, going far beyond prompt engineering into the realm of Agentic AI.
        </p>

        <p className="mt-6">
          We begin with the fundamentals of AI and machine learning, then dive
          into how LLMs like{" "}
          <strong className="text-white">
            GPT<span className="font-lato">-4</span>
          </strong>{" "}
          and <strong className="text-white">Gemini</strong> are trained and
          generate language. Through clear and intuitive lessons, you'll learn
          key concepts such as attention mechanisms and transformer
          architecture.
        </p>

        <p className="mt-6">
          From there, we guide you through building intelligent agents—AI
          programs that can think, act, use tools, and solve real-world problems
          with memory and context awareness.
        </p>

        <p className="mt-6">
          By the end of the bootcamp, you'll have completed a hands-on project
          where you design and implement adaptive AI agents. You won’t become a{" "}
          <Link
            className="font-bold text-white/70 cursor-pointer relative group"
            to="/DecoLabs/honestlook"
            aria-label="realistic expectations of AI learning"
          >
            prodigy overnight<span className="font-lato">**</span>
            <span className="duration-300 group-hover:opacity-100 opacity-0 min-w-[90%] absolute -bottom-[2px] left-0 bg-white min-h-[1px]"></span>
          </Link>
          , but you’ll gain a foundational understanding of how these systems
          work.
        </p>

        <p className="mt-6 text-[#e6e3e3]">
          No advanced background required. With just Python basics, high school
          math, and a curiosity to learn, you can move from knowing about AI to
          building it.
        </p>
      </article>
    </section>
  );
};

export default Description;
