import Image from "next/image";
import React from "react";

const OurWork = () => {
  const projects = [
    {
      title: "Project 1",
      imageUrl: "/img1.jpeg",
    },
    {
      title: "Project 2",
      imageUrl: "/img2.jpeg",
    },
    {
      title: "Project 3",
      imageUrl: "/img3.jpeg",
    },
    {
      title: "Project 4",
      imageUrl: "/img4.jpeg",
    },
    {
      title: "Project 5",
      imageUrl: "/img5.jpeg",
    },
    {
      title: "Project 6",
      imageUrl: "/img6.jpeg",
    },
    {
      title: "Project 7",
      imageUrl: "/img7.jpeg",
    },
    {
      title: "Project 8",
      imageUrl: "/img8.jpeg",
    },
  ];
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl font-light text-gray-800">Our Work</h1>
        <p className="text-gray-600 mt-4">
          Check out some of our recent projects
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {projects.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg box"
          >
            <Image
              src={img.imageUrl}
              alt={img.title}
              width={300}
              height={300}
              layout="responsive"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg">Project {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
