import React from "react";
import { solutionImg1 } from "../data";
import { LLM } from "../assets";

const Honest = () => {
  return (
    <section
      id="bootcamp-overview"
      className="h-screen text-white flex justify-center items-center"
      aria-labelledby="bootcamp-honest-look"
    >
      <div className="flex gap-12 md:px-32 items-center max-md:px-8">
        {/* Visual Section */}
        <div className="w-[40%] max-md:hidden">
          <img
            src={LLM}
            alt="Illustration representing Large Language Models"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        {/* Textual Content */}
        <article className="flex flex-col justify-center items-center gap-8 md:w-[60%]">
          <header>
            <h2
              id="bootcamp-honest-look"
              className="font-aboreto text-2xl font-bold max-md:text-xl text-center"
            >
              An Honest Look at What This Bootcamp Offers!
            </h2>
          </header>

          <p className="font-garet text-justify leading-relaxed text-lg text-primaryGray max-md:text-sm">
            This bootcamp gives you a practical and beginner-friendly
            understanding of how Large Language Models (LLMs) and agentic AI
            systems actually work. While it won't make you an expert overnight,
            you’ll gain hands-on experience, foundational AI concepts, and tools
            to build adaptive agents with confidence.
            <br />
            <br />
            We welcome learners from all backgrounds and provide a strong
            foundation in AI, machine learning, and agent-based architectures.
            You’ll learn how LLMs like GPT-4 are trained, how attention
            mechanisms work, and how to apply these in real-world use cases. By
            the end of the program, you’ll go from *using* AI to *building*
            it—ready to join the growing community of AI creators.
            <br />
            <br />
            Through mentorship, guidance, and practical projects, we’re here to
            support your learning journey every step of the way.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Honest;
