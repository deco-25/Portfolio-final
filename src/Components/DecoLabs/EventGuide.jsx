import React from "react";
import { GiEarthAmerica } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";

const EventGuide = () => {
  return (
    <section
      id="event-guide"
      className="md:h-screen text-white flex flex-1 px-8 gap-32 justify-center items-center"
      aria-labelledby="event-guide-heading"
    >
      <div className="flex flex-col items-center gap-16 rounded-3xl">
        <header>
          <h1
            id="event-guide-heading"
            className="text-5xl font-extrabold text-white font-ilisarniq max-md:text-3xl"
          >
            Where? When? How?
          </h1>
        </header>

        <div className="flex md:gap-8 max-md:gap-4 max-md:flex-col">
          <div className="flex flex-wrap gap-12 justify-between items-stretch text-white">
            {/* Environment */}
            <article
              className="flex items-center gap-4 bg-[#2c2c2c] p-5 rounded-2xl shadow-md hover:scale-[1.02] transition-all w-full md:w-[300px]"
              aria-label="Event Environment"
            >
              <div
                className="bg-gradient-to-br from-gray-600 p-3 rounded-xl flex items-center justify-center"
                aria-hidden="true"
              >
                <GiEarthAmerica size={32} className="text-white" />
              </div>
              <div>
                <h2 className="text-xl font-lato font-semibold mb-1">
                  Environment
                </h2>
                <p className="font-garet text-sm leading-snug text-gray-300 hover:underline">
                  <a
                    href="https://maps.app.goo.gl/aRR7iJvNkuqSFfhy7"
                    target="_blank"
                  >
                    Atal Incubation Centre{" "}
                    <span className="font-lato">
                      <br />(
                    </span>
                    AIC<span className="font-lato">-</span>PECF, PTU
                    <span className="font-lato">)</span>
                  </a>
                </p>
              </div>
            </article>

            {/* Cohort Runtime */}
            <article
              className="flex items-center gap-4 bg-[#2c2c2c] p-5 rounded-2xl shadow-md hover:scale-[1.02] transition-all w-full md:w-[300px]"
              aria-label="Cohort Schedule"
            >
              <div
                className="bg-gradient-to-br from-gray-600 p-3 rounded-xl flex items-center justify-center"
                aria-hidden="true"
              >
                <FaUsers size={32} className="text-white" />
              </div>
              <div className="w-fit">
                <h2 className="text-xl font-lato font-semibold mb-1">
                  Cohort Runtime
                </h2>
                <p className="font-garet text-sm leading-snug text-gray-300 w-fit text-nowrap">
                  <span className="font-lato">4</span> Weeks{" "}
                  <span className="font-lato">|</span> 8 Chapters
                </p>
                <p className="text-white/50 text-xs mt-1">
                  Aug 23, 30, Sept 06, 13, 20, 27
                </p>
              </div>
            </article>

            {/* Conversation */}
            <article
              className="flex items-center gap-4 bg-[#2c2c2c] p-5 rounded-2xl shadow-md hover:scale-[1.02] transition-all w-full md:w-[300px]"
              aria-label="Language of Conversation"
            >
              <div
                className="bg-gradient-to-br from-gray-600 p-3 rounded-xl flex items-center justify-center"
                aria-hidden="true"
              >
                <MdTranslate size={32} className="text-white" />
              </div>
              <div>
                <h2 className="text-xl font-lato font-semibold mb-1">
                  Conversation
                </h2>
                <p className="font-garet text-sm text-gray-300">English</p>
                <p className="text-white/50 text-xs mt-1 text-nowrap">
                  <span className="font-lato">(</span>
                  we’ll switch to Tamil if you need it!
                  <span className="font-lato">)</span>
                </p>
              </div>
            </article>
          </div>
        </div>
        <h1 className="text-xl font-bold text-white/70 font-garet max-md:text-sm">
          “Scroll down to see the pricing tiers.”
        </h1>
      </div>
    </section>
  );
};

export default EventGuide;
