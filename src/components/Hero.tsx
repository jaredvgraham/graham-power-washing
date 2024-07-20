"use client";
import React from "react";
import Video from "next-video";
import first from "../../videos/first.mov";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Get a Quote");
    router.push("/quote");
  };

  return (
    <div className="flex flex-col  items-center lg:justify-center w-full px-4">
      <div className="text-center mb-8 lg:mb-0  sm:text-left sm:w-full lg:w-1/2 p-7">
        <h1 className="text-4xl font-extralight mb-2 text-center redBorder  ">
          Graham Power-Washing
        </h1>
        <p className="text-xl text-center font-extralight">
          Committed to delivering exceptional results every time.
        </p>
      </div>
      <div className="w-full md:w-5/6 lg:w-2/3 xl:w-2/4 box">
        <Video
          src={first}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-auto"
        />
      </div>
      <button
        onClick={handleClick}
        className="bg-slate-200 box text-green-600 p-2 rounded-lg mt-4"
      >
        Get a Quote
      </button>
    </div>
  );
};

export default Hero;
