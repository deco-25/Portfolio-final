// SolutionsSlider.jsx (parent component)
import { useRef, useState, useEffect } from 'react';
import DistortedImage from './DistortedImage';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { imageSectionData } from '../data'; 
import { FaLongArrowAltRight } from 'react-icons/fa';


const ImageSection = () => {
  const overlayRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // First effect to handle initial visibility
  useEffect(() => {
    const checkVisibility = () => {
      if (!sectionRef.current || !overlayRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      gsap.set(overlayRef.current, {
        autoAlpha: isVisible ? 1 : 0
      });
    };

    // Initial check
    checkVisibility();

    // Check again after a short delay
    const timeout = setTimeout(checkVisibility, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // GSAP animations
  useGSAP(() => {
    // Force hide initially (important!)
    gsap.set(overlayRef.current, { autoAlpha: 0 });

    const mainTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom bottom',
      onEnter: () => gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.5 }),
      onLeave: () => gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0 }),
      onEnterBack: () => gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0 }),
      onRefresh: self => {
        gsap.set(overlayRef.current, { autoAlpha: self.isActive ? 1 : 0 });
      }
    });

    imageSectionData.forEach((_, index) => {
      ScrollTrigger.create({
        trigger: `#slide-${index}`,
        start: 'top 60%',
        end: 'bottom 40%',
        onEnter: () => setActiveSlide(index),
        onEnterBack: () => setActiveSlide(index)
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
    
    if (titleRef.current.getAttribute('data-initialized') === 'true') {
      tl.to(titleRef.current, {
        opacity: 0,
        filter: "blur(5px)",
        duration: 0.1,
        ease: "power2.out"
      })
      .fromTo(titleRef.current, 
        {
          opacity: 0,
          filter: "blur(5px)",
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.2,
          ease: "none"
        }
      );
    } else {
      titleRef.current.setAttribute('data-initialized', 'true');
    }
  }, [activeSlide, isReady]);

  return (
    <div ref={sectionRef} className="relative bg-black/95">
      {/* SINGLE overlay div - removed the duplicate */}
      <div
        ref={overlayRef}
        className='fixed inset-0 flex items-center justify-between w-full z-10 pointer-events-none'
        // REMOVED the inline style - let GSAP handle it completely
      >
        <h2 style={{writingMode: "vertical-rl", lineHeight: "1", letterSpacing: "0.1em"}} 
            className='text-[7.3rem] font-lato font-bold rotate-180 px-8 text-black/95 text-outline'>
          {"0"+(activeSlide + 1)}/0{imageSectionData.length}
        </h2>
        <div ref={titleRef} className='flex flex-col items-center justify-center'>
          <h2 className='text-7xl drop-shadow-lg font-aboreto text-center text-white max-w-[95%]'>
            {imageSectionData[activeSlide].title || "UI/UX Design"}
          </h2>
          <h3 className='text-xl text-center drop-shadow-lg font-lato uppercase text-white mt-8'>
            {imageSectionData[activeSlide].subtitle || "Where aesthetics meet functionality"}
          </h3>
          <h3 className='text-xl text-center drop-shadow-lg pt-2 font-garet uppercase text-white'>
            {imageSectionData[activeSlide].tags || "User Research | Interface Design | Wireframing & Prototyping"}
          </h3>
        </div>
        <h2 style={{writingMode: "vertical-rl", lineHeight: "1"}} 
            className='text-[7.3rem] font-lato font-bold rotate-180 px-8 text-black/95 text-outline'>
          SOLUTIONS
        </h2>
      </div>

      {/* Scrollable images */}
      <div className="relative">
        {imageSectionData.map((section, index) => (
          <div id={`slide-${index}`} key={index} className="min-h-screen mb-32">
            <DistortedImage
              image={section.image}
              width="60%"
              height="400px"
            />
          </div>
        ))}
      </div>

      <div className='h-[30vh] flex justify-center items-center'>
        <span className='flex items-center gap-5 pb-40 text-white'>
          <p>HOP ON A CALL</p>
          <button className='bg-white p-4 rounded-full text-black group'>
            <FaLongArrowAltRight className='group-hover:translate-x-1 duration-300' />
          </button>
        </span>
      </div>
    </div>
  );
};

export default ImageSection