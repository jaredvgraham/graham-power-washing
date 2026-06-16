"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

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
      title: "House Washing",
      beforeUrl: "/img11.jpeg",
      afterUrl: "/img12.jpeg",
    },
    {
      title: "House Washing",
      beforeUrl: "/img13.jpeg",
      afterUrl: "/img14.jpeg",
    },
    {
      title: "Deck Washing",
      beforeUrl: "/img15.jpeg",
      afterUrl: "/img16.jpeg",
    },
  ];

  return (
    <div className="bg-slate-950 py-20 text-white sm:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Before &amp; After
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            <span className="text-red-400">Pressure Washing</span>{" "}
            <span className="text-blue-300">Before &amp; After</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            See how the right pressure washing and soft washing method can
            revive siding, decks, patios, fences, and exterior surfaces for
            South Shore and Cape Cod homes.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.35, delay: (index % 2) * 0.05 }}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/20"
              onClick={() => handleExpandProject(project)}
            >
              <div className="grid grid-cols-2">
                <div className="relative">
                  <Image
                    src={project.beforeUrl}
                    alt={`Before shot of ${project.title}`}
                    width={600}
                    height={600}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 bg-slate-950/80 text-white px-3 py-1 font-semibold">
                    Before
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.afterUrl}
                    alt={`After shot of ${project.title}`}
                    width={600}
                    height={600}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 right-0 bg-blue-600/90 text-white px-3 py-1 font-semibold">
                    After
                  </div>
                </div>
              </div>
              <div className="border-t border-white/10 px-5 py-4">
                <p className="text-sm font-semibold text-white">
                  {project.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3.5 text-base font-bold text-white shadow-sm transition hover:bg-red-700"
          >
            Request My Free Estimate
          </Link>
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
