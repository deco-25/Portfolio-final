import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Homepage from "./Pages/Homepage";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import AnimatedCursor from "react-animated-cursor";
import CountUp from "react-countup";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [isCountUpFinished, setIsCountupFinished] = useState(false);
  useGSAP(() => {
  if (isCountUpFinished) {
    gsap.to("#wait-text", {
      y: 0,
      duration: 1,
      opacity: 1,
      ease: "power2.out",
    });
  }
}, [isCountUpFinished]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
      wheelMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  });


  useEffect(() => {
    let timer;
    if(isCountUpFinished){
    timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

    return () => clearTimeout(timer);
  },[isCountUpFinished])

  return (
    <BrowserRouter>
    <AnimatedCursor
            color="0, 0, 0" // black
            innerSize={0}
            outerSize={35}
            innerScale={1}
            outerScale={1.7}
            outerAlpha={0}
            outerStyle={{
              mixBlendMode: "difference", // creates black/white invert effect
              backgroundColor: "#fff", // needed for exclusion to visibly contrast
            }}
            innerStyle={{
              backgroundColor: "#000",
            }}
          />
      {
        isLoading ? (
          <div className="w-screen h-screen flex flex-col gap-2 text-center items-center justify-center bg-black z-50">
            <div className="loader text-white text-7xl font-bold">
              <CountUp start={0} end={100} duration={4} onEnd={() => setIsCountupFinished(true)} />
            </div>
            <h2 id={`${isCountUpFinished && "wait-text"}`} className="text-4xl font-bold opacity-0 translate-y-20 text-white">wait</h2>
          </div>
        ) : (<>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
            </Route>
          </Routes>
        </>)}
    </BrowserRouter>

  );
}
