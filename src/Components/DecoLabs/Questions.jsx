import {
  ChevronUp,
  Linkedin,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  Mail,
} from "lucide-react";
import { FiShare2 } from "react-icons/fi";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import React, { useState, useRef, useEffect } from "react";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HalfLogo } from "../../assets";
import emailjs from "@emailjs/browser";
import { meta } from "@eslint/js";

const Questions = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center">
      <div className="md:w-[80%] max-md:w-[90%]">
        <div className="flex flex-col md:h-screen w-full items-center justify-between">
          <div className="w-full flex flex-col justify-center md:gap-4 items-center py-4 text-center">
            <div>
              <h1 className="text-xl font-aboreto mt-8">
                Questions? We're just an email away
              </h1>
            </div>
            <div className="flex flex-col w-full justify-center items-center font-lato max-md:hidden">
              <div className="flex w-full justify-between items-center">
                <div className="flex flex-col justify-center items-center">
                  <MapPin size={24} color="#ffffff" />
                  <h1 className="mt-2">
                    Puducherry
                    <br />
                    Bangalore
                  </h1>
                </div>
                <div className="text-5xl font-semibold ml-10">
                  reachus@teamdeco.in
                </div>
                <div className="flex flex-col justify-center items-center">
                  <Phone size={24} color="#ffffff" />
                  <h1 className="mt-2">
                    +91 88254 60719
                    <br />
                    +91 84387 16946
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-screen font-lato flex-1 md:hidden">
              <div className="flex w-full items-start flex-col gap-4 px-12 py-8 text-sm">
                <div className="flex justify-center gap-4 items-center">
                  <MapPin size={24} color="#ffffff" />
                  <h1>Puducherry / Bangalore</h1>
                </div>
                <div className="flex justify-center gap-4 items-center">
                  <Mail size={24} color="#ffffff" />
                  reachus@teamdeco.in
                </div>
                <div className="flex justify-center items-center gap-4">
                  <Phone size={24} color="#ffffff" />
                  <h1>+91 88254 60719 / +91 84387 16946</h1>
                </div>
              </div>
            </div>
            <div className="hidden">
              <img src={HalfLogo} alt="" className="scale-[80%]" />
            </div>
          </div>

          <div className="w-full max-md:hidden">
            <TextHoverEffect text="DeCo" />
          </div>
          <div className="flex w-full font-garet md:justify-between py-5 items-center max-md:justify-around">
            <div className="flex gap-4 items-center max-md:hidden">
              <button className="cursor-pointer">
                <div className="border hover:border-slate-500 rounded-full">
                  <ChevronUp />
                </div>
              </button>
              <div className="cursor-pointer text-sm text-muted-foreground hover:underline max-md:hidden">
                Back To Top
              </div>
            </div>
            <div className="md:text-center max-md:text-sm font-garet text-sm text-stone-400">
              2025 © DeCo. All rights reserved.
            </div>
            <div className="flex gap-4 max-md:hidden">
              <a>
                <FiShare2
                  className="hover:text-white transition cursor-pointer"
                  size={24}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/team-deco"
                target="_blank"
                className="cursor-pointer"
              >
                <FaLinkedin className="hover:text-white transition" size={24} />
              </a>
              <a
                className="cursor-pointer"
                href="https://wa.me/+918825460719?text=Hello%2C%20What%20Services%20You%20Offer"
                target="_blank"
              >
                <FaWhatsapp className="hover:text-white transition" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
