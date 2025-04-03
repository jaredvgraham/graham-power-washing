"use client";
import React from "react";
import Video from "next-video";
import first from "../../videos/first.mov";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Hero = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Get a Quote");
    router.push("/quote");
  };

  return (
    <div className="flex flex-col items-center lg:justify-center w-full px-4">
      {/* Heading + Subheading */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-center mb-8 lg:mb-0 sm:text-left sm:w-full lg:w-1/2 p-7 text-gray-600"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl font-extralight mb-2 text-center redBorder"
        >
          Graham Power Washing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl text-center font-extralight"
        >
          Committed to delivering exceptional Power Washing services to the
          South Shore every time.
        </motion.p>
      </motion.div>

      {/* Video */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.6, ease: "easeOut" }}
        className="w-full md:w-5/6 lg:w-2/3 xl:w-2/4 box"
      >
        <Video
          src={first}
          muted
          playsInline
          className="object-cover w-full h-auto"
        />
      </motion.div>

      {/* Button */}
      <motion.button
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        onClick={handleClick}
        className="bg-slate-200 box breathing-animation text-green-600 p-2 rounded-lg mt-4"
      >
        Get a Quote
      </motion.button>
    </div>
  );
};

export default Hero;
