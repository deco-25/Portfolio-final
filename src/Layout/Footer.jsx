import {
  ChevronUp,
  Linkedin,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
} from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import React, { useState } from "react";
import { TextHoverEffect } from "../Components/ui/text-hover-effect";

const Footer = () => {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10) + 1);
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10) + 1);
  const [userAnswer, setUserAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState("*Captcha validation");
  const correctAnswers = [
    " Math whiz",
    "ooh!, Numbers pro",
    "wow!",
    "Math genius, huh?",
    "Got math skills!",
    "Number ninja, nice!",
  ];
  const wrongAnswer = [
    "Numbers not your thing?",
    "Not a fan of numbers?",
    "Math feeling tough?",
    "Is math messing with you?",
    "Number stress",
  ];

  const handleKeyDown = (e) => {
    console.log(num1, num2, userAnswer);
    if (e.key === "Enter") {
      const answer = parseInt(userAnswer);
      if (!isNaN(answer)) {
        const isCorrect = answer === num1 + num2;
        const randomResponse = isCorrect
          ? correctAnswers[Math.floor(Math.random() * correctAnswers.length)]
          : wrongAnswer[Math.floor(Math.random() * wrongAnswer.length)];
        setIsCorrect(randomResponse);
      }
    }
  };

  return (
    <div className="flex w-screen justify-center items-center bg-[#070707] text-white">
      <div className="flex flex-col w-[80%] justify-center items-center">
        <div className="flex flex-col w-full justify-center items-center h-screen gap-16">
          <div className="text-6xl text-center font-aboreto flex flex-col gap-4">
            <h1>Not yet convinced?</h1>
            <h1>Let's Talk</h1>
          </div>
          <div className="w-full">
            <div className="px-12 flex flex-col gap-12">
              <div className="flex gap-8">
                <div className="relative w-[50%]">
                  <input
                    type="text"
                    id="charming-name"
                    name="charming-name"
                    placeholder=" "
                    required
                    className="peer w-full text-white p-2 pt-6 bg-black/90 placeholder-transparent border-b border-[#f5f5f5] focus:outline-none focus:border-white focus:border focus:rounded-xl duration-200 transition-all"
                  />
                  <label
                    htmlFor="charming-name"
                    className="absolute left-2 -top-2 text-sm text-black bg-black/90 px-1 transition-all duration-200 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#f5f5f5] peer-focus:-top-2 peer-focus:text-sm peer-focus:text-white"
                  >
                    Your charming name
                  </label>
                </div>
                <div className="relative w-[50%]">
                  <input
                    type="text"
                    id="email-address"
                    name="email-address"
                    placeholder=" "
                    required
                    className="peer w-full text-white p-2 pt-6 bg-black placeholder-transparent border-b border-[#f5f5f5] focus:outline-none focus:border-white focus:border focus:rounded-xl duration-200 transition-all"
                  />
                  <label
                    htmlFor="email-address"
                    className="absolute left-2 -top-2 text-sm text-gray-400 bg-black px-1 transition-all duration-200 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#f5f5f5] peer-focus:-top-2 peer-focus:text-sm peer-focus:text-white"
                  >
                    Your Email
                  </label>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="project-details"
                  name="project-details"
                  placeholder=" "
                  required
                  className="peer w-full text-white p-2 pt-6 bg-black placeholder-transparent border-b border-[#f5f5f5] focus:outline-none focus:border-white focus:border focus:rounded-xl duration-200 transition-all"
                />
                <label
                  htmlFor="project-details"
                  className="absolute left-2 -top-2 text-sm text-gray-400 bg-black px-1 transition-all duration-200 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#f5f5f5] peer-focus:-top-2 peer-focus:text-sm peer-focus:text-white"
                >
                  We'd love to hear more about your project
                </label>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="bg-white text-black w-[25px] h-[25px] flex items-center justify-center rounded-sm">
                  {num1}
                </div>
                <div>+</div>
                <div className="bg-white text-black w-[25px] h-[25px] flex items-center justify-center rounded-sm">
                  {num2}
                </div>
                <div>=</div>
                <input
                  type="number"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="bg-white text-black w-[25px] h-[25px] text-center rounded-sm border [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none appearance-none"
                />
                <div className="ml-2">{isCorrect}</div>
              </div>
              <div className="flex justify-center">
                <button className="bg-white text-black font-semibold px-10 py-2 rounded-full">
                  Send Mail
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col  h-screen w-full items-center justify-between"
          id="connect"
        >
          <div className="w-full flex flex-col justify-center gap-4 items-center py-8 text-center">
            <div>
              <h1 className="text-xl font-aboreto">Ready to work together?</h1>
            </div>
            <div className="flex flex-col w-full justify-center items-center font-lato">
              <div className="flex w-full justify-between items-center">
                <div className="flex flex-col justify-center items-center">
                  <MapPin size={24} color="#ffffff" fill="#ffffff" />
                  <h1>Puducherry</h1>
                </div>
                <div className="text-3xl font-semibold">
                  reachdeco@gmail.com
                </div>
                <div className="flex flex-col justify-center items-center">
                  <Phone size={24} color="#ffffff" fill="#ffffff" />
                  <h1>+91 99999 88888</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <TextHoverEffect text="DeCo" />
          </div>
          <div className="flex w-full font-garet justify-between py-5">
            <div className="flex items-center gap-4">
              <div className="border hover:border-slate-500 rounded-full">
                <ChevronUp />
              </div>
              Back Top
            </div>
            <div>2025 © DeCo. All rights resevered.</div>
            <div className="flex gap-4">
              <div>Follow Us</div>
              <div>
                <Share2 size={24} />
              </div>
              <div>
                <FaLinkedin className="text-white" size={24} />
              </div>
              <div>
                <FaWhatsapp className="text-white" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
