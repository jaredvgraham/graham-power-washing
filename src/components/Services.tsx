"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Paintbrush, PaintRoller } from "lucide-react";
import { SERVICES } from "@/data/services";

const PAINTING = [
  {
    title: "Exterior Painting",
    description:
      "Proper prep and durable finishes for siding, trim, decks, and more.",
    icon: PaintRoller,
  },
  {
    title: "Interior Painting",
    description:
      "Clean lines and a careful finish on walls, ceilings, trim, and doors.",
    icon: Paintbrush,
  },
];

const Services = () => {
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Real cleaning. Real results.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Soft washing, pressure washing, window cleaning, and painting for
            homes across Plymouth, the South Shore, and Cape Cod.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.35, delay: (index % 3) * 0.05 }}
            >
              <Link
                href={service.href}
                className="group relative block aspect-[4/5] overflow-hidden bg-slate-900"
              >
                <Image
                  src={service.heroImage}
                  alt={service.heroAlt}
                  fill
                  className={`object-cover transition duration-700 group-hover:scale-105 ${service.heroObjectPosition ?? "object-center"}`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {service.shortName}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/80">
                    {service.cardDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red-300">
                    Learn more
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {PAINTING.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex gap-4 border border-white/10 bg-white/[0.04] p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-red-600/20 text-red-300">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-red-500"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
