import React, { useState } from "react";
import { joinning } from "../../data/decoOrginals";
import { Link } from "lucide-react";

const Join = () => {
  const [toggle, setToggle] = useState(0);
  const handleClick = (index) => {
    return setToggle(index);
  };

  return (
    <div className="min-h-screen text-white flex justify-center items-center w-screen py-[20vh] md:py-[50vh]">
      <div className="flex flex-col gap-8 justify-center items-start w-[80%] max-md:w-[90%]">
        <h1 className="text-3xl font-bold font-aboreto max-md:px-6 max-md:text-lg">
          You've come this far for a reason. Take the next step.
          <br className="md:hidden" /> Join the cohort.
        </h1>

        <div className="flex flex-col justify-center items-center p-5 md:hidden">
          <div>
            {joinning.map((ele, ind) => {
              const isOpen = toggle === ind;
              return (
                <div key={ind} className="border-b-2 border-gray-500 flex flex-col w-full overflow-hidden">
                  <div
                    onClick={() => handleClick(ind)}
                    className="cursor-pointer flex justify-between p-4 w-full"
                  >
                    <h1 className="text-xl font-semibold">{ele.title}</h1>
                    <h1>{isOpen ? "-" : "+"}</h1>
                  </div>

                  {/* Animated section */}
                  <div
                    className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px]" : "max-h-0"
                      }`}
                  >
                    <h1 className="p-4 text-gray-400">{ele.content}</h1>

                    <div className="w-full flex justify-between p-5">
                      <button className="bg-[#1a1a1a] border border-white/10 p-2 rounded-lg">
                        ₹{ele.price}
                      </button>
                      <a href={ele.link} target="_blank" rel="noopener noreferrer">
                        <button className="bg-white text-black p-2 rounded-lg">
                          Apply Now
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        <div className="flex flex-col gap-4 justify-center items-center my-4 max-md:hidden">
          <div className="font-garet border border-white/10 p-6 rounded-2xl bg-gradient-to-br from-[#1e1e1e] to-[#2c2c2c] space-y-4 shadow-2xl">
            {/* Header Row */}
            <div className="flex justify-between text-lg md:text-2xl text-center font-semibold gap-6">
              {joinning.map((label, index) => (
                <div
                  key={index}
                  className="w-1/4 flex justify-center items-center bg-[#3a3a3a] text-white border border-white/10 rounded-xl py-3 px-2 shadow-md hover:shadow-lg transition duration-300"
                >
                  {label.title}
                </div>
              ))}
            </div>

            {/* Description Row */}
            <div className="flex justify-between text-sm text-white/90 text-justify gap-6">
              {joinning.map((ele, index) => (
                <div
                  key={index}
                  className="w-1/4 border flex flex-col justify-between gap-4
                   border-white/10 rounded-xl p-4 bg-[#1a1a1a]  transition duration-300"
                >
                  {ele.content}
                  <div className=" text-black  flex w-full justify-end items-end">
                    <a href={ele.link} target="_blank">
                      <button className="bg-white p-2 rounded-xl">
                        Apply Now
                      </button>
                    </a>
                  </div>
                </div>
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
