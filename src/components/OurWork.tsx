"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

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
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl font-light text-gray-800">Our Work</h1>
        <p className="text-gray-600 mt-4">
          Check out some of our recent projects
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {projects.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-lg shadow-lg box"
            style={{ aspectRatio: "1 / 1" }}
          >
            <Image
              onClick={() => handleExpandImg(img)}
              src={img.imageUrl}
              alt={`Power Washing Project - ${img.title} by Graham Power Washing in Plymouth MA`}
              width={600}
              height={600}
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
            />
          </motion.div>
        ))}
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
