import React from "react";
// import { Cursor, useTypewriter, Typewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import img from "../assets/pfp.svg";

type Props = {
  setCursorVariant:any
};

const Hero = ({ setCursorVariant }:Props) => {
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const imgEnter = () => setCursorVariant("image");
  const imgLeave = () => setCursorVariant("default");

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        onMouseEnter={imgEnter}
        onMouseLeave={imgLeave}
        src={img}
        alt="Shivpreet"
        height={130}
        width={130}
        className="relative rounded-full mx-auto"
      />
      <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Full Stack DEveloper
        </h2>
        <h1 className="text-3xl lg:text-6xl font-semibold px-10">
          <span className="mr-1 text-[#919191]">
            <Typewriter
              options={{
                strings: ["Hi, The name's Shivpreet",
                "< Coder />",
                "< Code For Good '24 - Finalist />",
                "< Anime weeb />",
                "< Coffee maniac />",
                "< Artist for fun />",],
                autoStart: true,
                loop: true,
                cursor: "_",
              }}
            />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
