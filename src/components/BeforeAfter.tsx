"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Img {
  title: string;
  imageUrl: string;
}

const BeforeAfter = () => {
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
      imageUrl: "/img9.jpeg",
    },
    {
      title: "House 2",
      imageUrl: "/img10.jpeg",
    },
    {
      title: "House 3",
      imageUrl: "/img11.jpeg",
    },
    {
      title: "House 4",
      imageUrl: "/img12.jpeg",
    },
    {
      title: "House 5",
      imageUrl: "/img13.jpeg",
    },
    {
      title: "House 6",
      imageUrl: "/img14.jpeg",
    },
    {
      title: "House 7",
      imageUrl: "/img15.jpeg",
    },
    {
      title: "House 8",
      imageUrl: "/img16.jpeg",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl font-light text-gray-800">Before and After</h1>
        <p className="text-gray-600 mt-4">
          Check out some before and after photos
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {projects.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg box"
            style={{ aspectRatio: "1 / 1" }}
          >
            <Image
              onClick={() => handleExpandImg(img)}
              src={img.imageUrl}
              alt={img.title}
              fill
              style={{ objectFit: "cover", cursor: "pointer" }}
            />
          </div>
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
              alt={expandedImg.title}
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

export default BeforeAfter;
