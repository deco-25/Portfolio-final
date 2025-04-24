import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 2000); // 2 second overlay duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="portfolio"
      className="relative h-screen overflow-hidden bg-[#f5f5f5] flex flex-col gap-12 justify-center items-center"
    >
      {/* Black Overlay */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-black z-50"
          />
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="z-10">
        <h1 className="font-aboreto font-[500] text-7xl">INNOVATING AT THE</h1>
      </div>
      <div className="flex justify-center gap-8 z-10">
        <h1 className="font-aboreto font-[500] text-7xl">INTERSECTION OF</h1>
        <p className="font-garet max-w-[35%] text-start">
          Great products are built where design meets code with strategy. At
          Deco, we create seamless digital experiences that don’t just look good
          but perform exceptionally.
        </p>
      </div>
      <div className="z-10">
        <h1 className="font-aboreto font-[600] text-7xl">DESIGN & CODE</h1>
      </div>
    </div>
  );
};

export default Hero;
