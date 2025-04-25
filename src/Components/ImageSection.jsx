// SolutionsSlider.jsx (parent component)
import { useRef, useState, useEffect } from "react";
import DistortedImage from "./DistortedImage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { imageSectionData } from "../data";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ImageSection = () => {
  const overlayRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // GSAP animations
  useGSAP(() => {
    // Force hide initially (important!)
    gsap.set(overlayRef.current, { autoAlpha: 0, pointerEvents: "none" });

    const mainTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      onEnter: () =>
        gsap.to(overlayRef.current, {
          autoAlpha: 1,
          duration: 0.5,
          pointerEvents: "all",
        }),
      onLeave: () =>
        gsap.to(overlayRef.current, {
          autoAlpha: 0,
          duration: 0,
          pointerEvents: "none",
        }),
      onEnterBack: () =>
        gsap.to(overlayRef.current, {
          autoAlpha: 1,
          duration: 0.5,
          pointerEvents: "all",
        }),
      onLeaveBack: () =>
        gsap.to(overlayRef.current, {
          autoAlpha: 0,
          duration: 0,
          pointerEvents: "none",
        }),
      onRefresh: (self) => {
        const visible = self.isActive;
        gsap.set(overlayRef.current, {
          autoAlpha: visible ? 1 : 0,
          pointerEvents: visible ? "all" : "none",
        });
      },
    });

    imageSectionData.forEach((_, index) => {
      ScrollTrigger.create({
        trigger: `#slide-${index}`,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => setActiveSlide(index),
        onEnterBack: () => setActiveSlide(index),
      });
    });

    setIsReady(true);

    return () => {
      mainTrigger?.kill();
    };
  }, []);

  // Title animation
  useGSAP(() => {
    if (!isReady) return;

    const tl = gsap.timeline();

    if (titleRef.current.getAttribute("data-initialized") === "true") {
      tl.to(titleRef.current, {
        opacity: 0,
        filter: "blur(5px)",
        duration: 0.1,
        ease: "power2.out",
      }).fromTo(
        titleRef.current,
        {
          opacity: 0,
          filter: "blur(5px)",
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.2,
          ease: "none",
        }
      );
    } else {
      titleRef.current.setAttribute("data-initialized", "true");
    }
  }, [activeSlide, isReady]);

  return (
    <div ref={sectionRef} className="relative bg-primaryBlack" id="solutions">
      <div
        ref={overlayRef}
        className={`fixed inset-0 flex flex-col md:flex-row items-center justify-between w-full px-4 py-10 md:p-0 z-10 pointer-events-none`}
      >
        <div
          style={{
            writingMode: "vertical-rl",
            lineHeight: "1",
            letterSpacing: "0.1em",
          }}
          className="text-3xl md:text-5xl lg:text-[7.3rem] font-lato font-bold rotate-180 md:px-8  text-outline-small md:text-outline flex justify-start md:justify-center w-full md:w-auto"
        >
          <span className="max-w-fit">
            {"0" + (activeSlide + 1)}/0{imageSectionData.length}
          </span>
        </div>

        <div
          ref={titleRef}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-2xl md:text-5xl lg:text-7xl drop-shadow-lg font-aboreto text-center text-white max-w-[95%]">
            {imageSectionData[activeSlide].title}
          </h2>
          <h3 className="text-sm md:text-lg text-center drop-shadow-lg font-lato uppercase text-white mt-3 md:mt-8">
            {imageSectionData[activeSlide].subtitle}
          </h3>
          <h3 className="text-sm md:text-lg text-center drop-shadow-lg pt-2 font-garet uppercase text-white">
            {imageSectionData[activeSlide].tags}
          </h3>
        </div>
        <div
          style={{ writingMode: "vertical-rl", lineHeight: "1" }}
          className="text-3xl md:text-5xl lg:text-[7.3rem] font-lato font-bold rotate-180 md:px-8 text-primaryBlack text-outline-small md:text-outline flex justify-end items-end md:justify-center w-full md:w-auto"
        >
          <span className="max-w-fit">SOLUTIONS</span>
        </div>
      </div>

      {/* Scrollable images */}
      <div className="relative">
        {imageSectionData.map((section, index) => (
          <div
            id={`slide-${index}`}
            key={index}
            className="min-h-[60vh] md:min-h-screen md:mb-32"
          >
            <DistortedImage image={section.image} />
          </div>
        ))}
      </div>

      <div className="h-[30vh] relative z-50 flex justify-center items-center bg-primaryBlack">
        <span className="flex items-center gap-5 py-28 text-white">
          <p>HOP ON A CALL</p>
          <a href="#connect" className="bg-white p-4 rounded-full text-black group">
            <FaLongArrowAltRight className="group-hover:translate-x-1 duration-300" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default ImageSection;
