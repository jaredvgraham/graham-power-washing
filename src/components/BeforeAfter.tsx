"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface BeforeAfterImage {
  title: string;
  beforeUrl: string;
  afterUrl: string;
}

const BeforeAfter = () => {
  const [expandedProject, setExpandedProject] =
    useState<BeforeAfterImage | null>(null);

  const handleExpandProject = (project: BeforeAfterImage) => {
    setExpandedProject(project);
  };

  const handleCloseModal = () => {
    setExpandedProject(null);
  };

  const projects: BeforeAfterImage[] = [
    {
      title: "Siding Cleaning",
      beforeUrl: "/red-before.jpeg",
      afterUrl: "/red-after.jpeg",
    },
    {
      title: "Deck Restoration",
      beforeUrl: "/img11.jpeg",
      afterUrl: "/img12.jpeg",
    },
    {
      title: "Patio Cleaning",
      beforeUrl: "/img13.jpeg",
      afterUrl: "/img14.jpeg",
    },
    {
      title: "Fence Washing",
      beforeUrl: "/img15.jpeg",
      afterUrl: "/img16.jpeg",
    },
  ];

  return (
    <div className="bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Before & After
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            See the transformative power of our services.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
              onClick={() => handleExpandProject(project)}
            >
              <div className="grid grid-cols-2">
                <div className="relative">
                  <Image
                    src={project.beforeUrl}
                    alt={`Before shot of ${project.title}`}
                    width={600}
                    height={600}
                    className="object-cover h-64 w-full"
                  />
                  <div className="absolute bottom-0 left-0 bg-black/70 text-white px-3 py-1 font-semibold">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.afterUrl}
                    alt={`After shot of ${project.title}`}
                    width={600}
                    height={600}
                    className="object-cover h-64 w-full"
                  />
                  <div className="absolute bottom-0 right-0 bg-primary/80 text-white px-3 py-1 font-semibold">
                    After
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {expandedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-4"
          onClick={handleCloseModal}
        >
          <motion.div
            initial={{ scale: 0.9, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative bg-white rounded-lg max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-4 -right-4 text-white bg-primary rounded-full p-2 z-10 hover:bg-primary/80 transition-colors"
              onClick={handleCloseModal}
            >
              <FaTimes size={20} />
            </button>
            <div className="p-6">
              <h2 className="text-3xl font-bold text-center mb-6">
                {expandedProject.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Before</h3>
                  <Image
                    src={expandedProject.beforeUrl}
                    alt={`Before shot of ${expandedProject.title}`}
                    width={800}
                    height={800}
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">After</h3>
                  <Image
                    src={expandedProject.afterUrl}
                    alt={`After shot of ${expandedProject.title}`}
                    width={800}
                    height={800}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default BeforeAfter;
