import React from "react";

const Join = () => {
  return (
    <div className="min-h-screen text-white flex justify-center items-center w-screen py-[50vh]">
      <div className="flex flex-col justify-center items-start w-[80%]">
        <h1 className="text-4xl max-sm:text-3xl font-bold font-aboreto max-md:px-6">
          You've come this far for a reason. Take the next step.
        </h1>
        <h1 className="text-4xl max-sm:text-3xl font-bold  max-md:px-6 font-aboreto">
          Join the cohort.
        </h1>
        <div className="flex flex-col gap-4 justify-center items-center my-4">
          <h1 className="text-3xl font-bold">PRICING PLANS</h1>

          <div className="font-garet border border-white/10 p-6 rounded-2xl bg-gradient-to-br from-[#1e1e1e] to-[#2c2c2c] space-y-4 shadow-2xl">
            {/* Header Row */}
            <div className="flex justify-between text-lg md:text-2xl text-center font-semibold gap-6">
              {["EARLY BID", "STUDENT", "GENERAL", "PAST ATTENDEE"].map(
                (label, index) => (
                  <div
                    key={index}
                    className="w-1/4 flex justify-center items-center bg-[#3a3a3a] text-white border border-white/30 rounded-xl py-3 px-2 shadow-md hover:shadow-lg transition duration-300"
                  >
                    {label}
                  </div>
                )
              )}
            </div>

            {/* Description Row */}
            <div className="flex justify-between text-sm text-white/90 text-justify gap-6">
              {[
                "A discounted rate for those who register early and secure their spot in the cohort before anyone else.",
                "For students currently pursuing their education and looking to gain hands-on experience with real-world AI. Upload a valid college/school ID.",
                "Ideal for those already in the industry—whether in tech, design, or research—who want to deepen their understanding of AI and LLMs.",
                "Available to previous DeCo workshop participants. Enter your workshop ID (sent to your email) to unlock this discount.",
              ].map((desc, index) => (
                <div
                  key={index}
                  className="w-1/4 border flex flex-col justify-between gap-4
                   border-white/20 rounded-xl p-4 bg-[#1a1a1a]  transition duration-300"
                >
                  {desc}
                  <div className=" text-black  flex w-full justify-end items-end">
                    <button className="bg-white p-2 rounded-xl">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Row */}
            <div className="flex justify-between font-extrabold text-2xl gap-6 text-center text-white">
              {["1799", "1999", "2099", "1899"].map((price, index) => (
                <div
                  key={index}
                  className="w-1/4 bg-[#1a1a1a] border border-white/20 rounded-xl py-4 shadow-inner hover:shadow-2xl transition-all duration-300"
                >
                  ₹{price}
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-lg pt-8 font-garet max-md:text-xs max-md:px-6">
          We keep the cohort small so everyone gets the support they need. Lock
          in your spot before it’s gone.
        </p>
      </div>
    </div>
  );
};

export default Join;
