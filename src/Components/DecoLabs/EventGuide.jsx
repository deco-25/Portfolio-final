import React from "react";
import { GiEarthAmerica } from "react-icons/gi";
import { Workflow } from "lucide-react";
import { FaProjectDiagram, FaUsers } from "react-icons/fa";
import { MdOutlinePriceCheck, MdTranslate } from "react-icons/md";

const EventGuide = () => {
  return (
    <div className="h-screen text-white flex flex-1  gap-32 justify-center items-center">
      <div className="flex flex-col items-center gap-8 bg-[#4e4b4b]/40 p-8 rounded-3xl">
        <h1 className="text-4xl font-extrabold  text-white font-ilisarniq max-md:text-3xl">
          EVENT GUIDE
        </h1>
        <div className="flex md:gap-8 max-md:gap-4 max-md:flex-col">
          <div className="flex flex-col gap-12 justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-[#4e4b4b] p-2 rounded-xl">
                {" "}
                <GiEarthAmerica size={40} className="max-md:hidden" />
                <GiEarthAmerica size={30} className="md:hidden" />
              </div>
              <div>
                <h1 className="text-xl max-md:text-lg font-lato font-semibold">
                  Environment
                </h1>
                <p className="font-garet max-md:text-xs">
                  Atal Incubation Centre <span className="font-lato">(</span>
                  AIC<span className="font-lato">-</span>PECF
                  <span className="font-lato">)</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#4e4b4b] p-2 rounded-xl">
                {" "}
                <MdOutlinePriceCheck
                  size={40}
                  className="text-white max-md:hidden"
                />
                <MdOutlinePriceCheck
                  size={30}
                  className="text-white md:hidden"
                />
              </div>
              <div>
                <h1 className="text-xl max-md:text-lg font-lato font-semibold">
                  Inference Fee
                </h1>
                <p className="font-garet">
                  <span className="font-lato max-md:text-xs">₹1699</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-12 justify-between flex-col">
            <div className="flex items-center gap-4">
              <div className="bg-[#4e4b4b] p-2 rounded-xl">
                {" "}
                <MdTranslate size={40} className="max-md:hidden text-white" />
                <MdTranslate size={30} className="md:hidden text-white" />
              </div>
              <div>
                <h1 className="text-xl max-md:text-lg font-lato font-semibold">
                  Conversation
                </h1>
                <p className="font-garet max-md:text-xs">English</p>
                <p className="text-white/50 max-md:text-xs">
                  <span className="font-lato">(</span>
                  But hey<span className="font-lato">-</span>we’ll switch to
                  Tamil if you need it!
                  <span className="font-lato">)</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#4e4b4b] p-2 rounded-xl">
                {" "}
                <FaUsers size={40} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl max-md:text-lg font-lato font-semibold">
                  Cohort Runtime
                </h1>
                <p className="font-garet max-md:text-sm">
                  6 Saturdays <span className="font-lato">|</span> 6 Epochs{" "}
                  <span className="font-lato">|</span> 6 Milestones
                </p>
                <p className="text-white/50 max-md:text-xs">
                  Aug 23, 30, Sept 06, 13, 20, 27
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventGuide;
