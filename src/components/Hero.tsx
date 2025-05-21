"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/img1.jpeg"
          alt="Professional Power Washing Service in Plymouth MA - Graham Power Washing crew cleaning exterior surfaces"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6 h-full py-10 md:py-0">
        {/* Left Section */}
        <div className="flex-1 flex flex-col md:items-start space-y-6 max-w-lg  mt-10 md:mt-0">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl md:text-6xl font-extrabold leading-tight text-center md:text-left border-b-4 border-red-500 pb-2"
          >
            <span className="text-red-500  drop-shadow-lg">Graham</span>{" "}
            <span className="text-gray-300">Power</span>{" "}
            <span className="text-gray-300">Washing</span>
            <br />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-200 text-lg md:text-xl leading-relaxed text-center md:text-left font-semibold"
          >
            Graham Power Washing delivers expert exterior{" "}
            <span className="font-extrabold text-blue-200 ">soft washing</span>{" "}
            /{" "}
            <span className="font-extrabold text-red-400 ">
              {" "}
              pressure washing
            </span>{" "}
            in Plymouth and surrounding areas built on trust, quality, and
            exceptional care for your home or business.
          </motion.p>

          <motion.button
            onClick={() => router.push("/quote")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-4 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold shadow-lg transition-all duration-300 self-center md:self-start"
          >
            Get a Free Quote
          </motion.button>
        </div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="flex md:flex-1 w-full md:w-auto md:justify-center justify-end  items-center mt-10 md:mt-0"
        >
          <div className="relative w-full max-w-sm md:w-96 md:h-96 bg-white/10 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center p-8 border border-white/20">
            <p className="text-white text-2xl font-bold mb-4 text-center md:text-left">
              Over 1,000+ Projects Completed
            </p>
            <p className="text-gray-300 text-center">
              Trusted by homeowners and businesses across the South Shore.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
