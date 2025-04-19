import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

const flipContents = [
    "Powering up ideas",
    "Target locked!",
    "Connecting the dots",
    "Your vision, validated",
    "Algorithm in motion",
    "Syncing toward success",
    "Always by your side",
]

const approachSteps = [
    "Consultation",
    "Contract Signing",
    "UX Research & UI Design",
    "Design Approval",
    "Development",
    "On-Time Delivery",
    "After-Support Service"
]

const DecoApproach = () => {
    const mainRef = useRef(null);
    const stepsRefs = useRef([]);
    const numberRef = useRef(null);
    const textRef = useRef(null);
    const [currentStep, setCurrentStep] = useState(0);
    const prevIndex = useRef(0);


    useGSAP(() => {
        ScrollTrigger.create({
            trigger: mainRef.current,
            start: "top top",
            end: "+=3000", // scroll distance in px (adjust as needed)
            pin: true,
            scrub: true,
            onUpdate: (self) => {
                const progress = self.progress;
                const totalSteps = approachSteps.length;
                const index = Math.min(
                    totalSteps - 1,
                    Math.floor(progress * totalSteps)
                );

                if (index !== prevIndex.current) {
                    prevIndex.current = index;
                    setCurrentStep(index);

                    // Animate number and text
                    gsap.fromTo(numberRef.current,
                        { opacity: 0, y: -20 },
                        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
                    );

                    gsap.fromTo(textRef.current,
                        { opacity: 0, y: -20 },
                        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
                    );
                }
            }
        });

        

    }, []);


    return (
        <div ref={mainRef} className='relative w-screen px-20 flex'>
            <div className='h-screen w-screen flex items-center justify-between'>
                <h2
                    style={{ writingMode: "vertical-rl", lineHeight: "1" }}
                    className='text-8xl font-light min-w-[20vw]  text-center font-aboreto rotate-180 px-8 text-black/95'
                >
                    The Deco Approach
                </h2>

                <section className='space-y-10 max-w-[45vw]'>
                    <div className='space-y-6'>
                        {approachSteps.map((step, index) => (
                            <h3
                                key={index}
                                ref={el => stepsRefs.current[index] = el}
                                className={`${index === currentStep ? "font-aboreto text-black" : index < currentStep ? "font-lato text-black/70" : "font-lato text-black/40"}  text-5xl font-extrabold text-center transition-all duration-300`}
                            >
                                {step}
                            </h3>
                        ))}
                    </div>
                    <p className='text-xl text-center'>
                        Free consultation + 3 weeks of support, because we care about your success.
                        <Link className="underline pl-2">Setup a call now</Link>
                    </p>
                </section>

                <div className='space-y-10 min-w-[20vw]'>
                    <div ref={numberRef} className='font-lato text-white text-9xl font-extrabold text-center text-outline'>
                        {currentStep + 1}
                    </div>
                    <p ref={textRef} className='text-2xl text-center'>
                        {flipContents[currentStep]}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DecoApproach