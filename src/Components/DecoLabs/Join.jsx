import React, { useRef, useState } from "react";
import { joinning } from "../../data/decoOrginals";

const Join = () => {
  const [toggle, setToggle] = useState(null);
  const contentRefs = useRef([]);

  const handleClick = (index) => {
    setToggle(prev => (prev === index ? null : index));
  };



  return (
    <section
      id="join-cohort"
      className="min-h-screen text-white flex justify-center items-center w-screen py-[20vh] md:py-[50vh]"
      aria-labelledby="join-heading"
    >
      <div className="flex flex-col gap-8 justify-center items-start w-[80%] max-md:w-[90%]">
        <header className="flex justify-center w-full">
          <h2
            id="join-heading"
            className="text-3xl font-bold font-aboreto max-md:px-6 max-md:text-lg"
          >
            You've come this far for a reason. Take the next step.
            <br className="md:hidden" /> Join the cohort.
          </h2>
        </header>

        {/* Mobile Accordion */}
        <section className="flex flex-col justify-center items-center p-5 md:hidden">
          <div>
            {joinning.map((ele, ind) => {
              const isOpen = toggle === ind;
              return (
                <article
                  key={ind}
                  className="border-b-2 border-gray-500 flex flex-col w-full overflow-hidden"
                  aria-labelledby={`mobile-option-${ind}`}
                >
                  <button
                    onClick={() => handleClick(ind)}
                    className="cursor-pointer flex justify-between p-4 w-full"
                    aria-expanded={isOpen}
                    aria-controls={`mobile-content-${ind}`}
                  >
                    <h3
                      id={`mobile-option-${ind}`}
                      className="text-xl font-semibold"
                    >
                      {ele.title}
                    </h3>
                    <span>{isOpen ? "−" : "+"}</span>
                  </button>

                  <div
                    id={`mobile-content-${ind}`}
                    ref={(el) => (contentRefs.current[ind] = el)}
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      height: isOpen
                        ? `${contentRefs.current[ind]?.scrollHeight}px`
                        : "0px",
                    }}
                    role="region"
                    aria-labelledby={`mobile-option-${ind}`}
                  >
                    <p className="p-4 text-gray-400">{ele.content}</p>
                    <div className="w-full flex justify-between p-5">
                      <span className="bg-[#1a1a1a] border border-white/10 p-2 rounded-lg">
                        ₹{ele.price}
                      </span>
                      <a
                        href={ele.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Apply for ${ele.title}`}
                      >
                        <button className="bg-white text-black p-2 rounded-xl hover:border-white hover:border-2 hover:bg-transparent duration-200 ease-linear transition-all hover:text-white border-black border-2">
                          Apply Now
                        </button>
                      </a>
                    </div>
                  </div>

                </article>
              );
            })}
          </div>
        </section>

        {/* Desktop Grid */}
        <section
          className="flex flex-col gap-4 justify-center items-center my-4 max-md:hidden"
          aria-label="Join options grid"
        >
          <div className="font-garet border border-white/10 p-6 rounded-2xl bg-gradient-to-br from-[#1e1e1e] to-[#2c2c2c] space-y-4 shadow-2xl w-full">
            {/* Header Row */}
            <div className="flex justify-between text-lg md:text-2xl text-center font-semibold gap-6">
              {joinning.map((label, index) => (
                <div
                  key={index}
                  className="w-1/4 flex justify-center items-center bg-[#3a3a3a] text-white border border-white/10 rounded-xl py-3 px-2 shadow-md hover:shadow-lg transition duration-300"
                >
                  <h3 className="text-lg font-semibold">{label.title}</h3>
                </div>
              ))}
            </div>

            {/* Description Row */}
            <div className="flex justify-between text-sm text-white/90 text-justify gap-6">
              {joinning.map((ele, index) => (
                <article
                  key={index}
                  className="w-1/4 border flex flex-col justify-between gap-4 border-white/10 rounded-xl p-4 bg-[#1a1a1a] transition duration-300"
                  aria-labelledby={`option-${index}`}
                >
                  <p id={`option-${index}`}>{ele.content}</p>
                  <div className="flex w-full justify-end items-end">
                    <a
                      href={ele.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Apply now for ${ele.title}`}
                      className="cursor-pointer"
                    >
                      <button className="bg-white text-black p-2 rounded-xl hover:border-white hover:border-2 hover:bg-transparent duration-200 ease-linear transition-all hover:text-white border-black border-2">
                        Apply Now
                      </button>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Price Row */}
            <div className="flex justify-between font-extrabold text-2xl gap-6 text-center text-white">
              {joinning.map((ele, index) => (
                <div
                  key={index}
                  className="w-1/4 bg-[#1a1a1a] border border-white/10 rounded-xl py-4 shadow-inner hover:shadow-2xl transition-all duration-300"
                >
                  ₹{ele.price}
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="flex justify-center items-center w-full">
          <p className="text-lg pt-8 font-garet max-md:text-xs max-md:px-6 text-center w-full">
            We keep the cohort small so everyone gets the support they need.
            Lock in your spot before it’s gone.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Join;
