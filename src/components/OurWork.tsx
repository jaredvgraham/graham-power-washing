"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Img {
  title: string;
  imageUrl: string;
}

const OurWork = () => {
  const [expandedImg, setExpandedImg] = useState<Img | null>(null);

  const handleExpandImg = (img: Img) => {
    setExpandedImg(img);
  };

  const handleCloseModal = () => {
    setExpandedImg(null);
  };

  const projects = [
    {
      title: "House 1",
      imageUrl: "/img1.jpeg",
    },
    {
      title: "House 2",
      imageUrl: "/img2.jpeg",
    },
    {
      title: "House 3",
      imageUrl: "/img3.jpeg",
    },
    {
      title: "House 4",
      imageUrl: "/img4.jpeg",
    },
    {
      title: "House 5",
      imageUrl: "/img5.jpeg",
    },
    {
      title: "House 6",
      imageUrl: "/img6.jpeg",
    },

    {
      title: "House 8",
      imageUrl: "/img8.jpeg",
    },
    {
      title: "House 9",
      imageUrl: "/new1.jpg",
    },
    {
      title: "House 10",
      imageUrl: "/new2.jpg",
    },
    {
      title: "House 11",
      imageUrl: "/new3.jpg",
    },
    {
      title: "House 12",
      imageUrl: "/new4.jpg",
    },
  ];

  return (
    <div className="bg-white py-20 sm:py-24">
      <div className="container mx-auto px-6 text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          Recent Results
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          <span className="text-red-600">Clean Homes</span> Convert{" "}
          <span className="text-blue-600">Curb Appeal</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          Recent power washing, soft washing, deck cleaning, patio cleaning, and
          siding washing projects for homeowners across Plymouth, the South
          Shore, and Cape Cod.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-5 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.35, delay: (index % 2) * 0.04 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm"
            style={{ aspectRatio: "1 / 1" }}
          >
            <Image
              onClick={() => handleExpandImg(img)}
              src={img.imageUrl}
              alt={`Power Washing Project - ${img.title} by Graham Power Washing in Plymouth MA`}
              width={600}
              height={600}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-left text-sm font-semibold text-white">
                Tap to view project
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/quote"
          className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3.5 text-base font-bold text-white shadow-sm transition hover:bg-red-700"
        >
          Get Results Like This
        </Link>
      </div>

      {expandedImg && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative p-4 bg-white rounded-lg max-w-3xl">
            <button
              className="absolute top-2 right-2 text-gray-700 text-2xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <Image
              src={expandedImg.imageUrl}
              alt={`Expanded View: Power Washing Project - ${expandedImg.title} by Graham Power Washing in Plymouth MA`}
              width={600}
              height={600}
              style={{ objectFit: "contain" }}
            />
            <p className="text-center mt-4">{expandedImg.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurWork;
