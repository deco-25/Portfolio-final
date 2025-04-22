import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Homepage from "./Pages/Homepage";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import AnimatedCursor from "react-animated-cursor";

export default function App() {
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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
