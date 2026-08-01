"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";
import { phoneDisplay, phoneTelHref } from "@/lib/phone";

type Props = {
  /** Location line above the brand */
  locationLabel: string;
  /** Primary SEO heading (keyword-led for area hubs) */
  headline: string;
  /** One short supporting sentence */
  support: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  trustLine?: string;
  breadcrumbs?: Crumb[];
};

/**
 * Area-hub hero: keyword H1 for local SEO, brand as a strong visual signal,
 * homepage-parity CTAs for conversion.
 */
export default function LocalLandingHero({
  locationLabel,
  headline,
  support,
  imageSrc,
  imageAlt,
  imagePosition = "object-center",
  trustLine = "Licensed & insured · Free quotes · Local crew",
  breadcrumbs,
}: Props) {
  return (
    <section className="relative flex min-h-[100svh] w-full overflow-hidden bg-slate-950">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={`object-cover ${imagePosition}`}
          priority
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/35 to-black/55" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col px-4 pb-10 pt-28 text-center sm:px-6 sm:pb-14 sm:pt-32 lg:px-8 lg:pb-16 lg:pt-28">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-6 self-start text-left">
            <Breadcrumbs variant="light" items={breadcrumbs} />
          </div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col items-center gap-4 sm:gap-5"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-red-300 sm:text-xs">
            {locationLabel}
          </p>

          <p className="max-w-5xl text-balance text-[2.2rem] font-black leading-[0.98] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            <span className="block lg:inline">Graham</span>
            <span className="mt-2 block text-[0.88em] font-extrabold leading-tight lg:mt-0 lg:ml-3 lg:inline lg:whitespace-nowrap lg:text-[1em]">
              <span className="text-red-400">Painting</span>
              <span className="text-white"> &amp; </span>
              <span className="text-blue-300">Power Washing</span>
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="flex flex-1 flex-col items-center justify-center gap-5 py-8 sm:gap-6 sm:py-10"
        >
          <h1 className="max-w-4xl text-balance text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
            {headline}
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
            {support}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.24 }}
          className="flex flex-col items-center gap-5"
        >
          <div className="flex w-full flex-col items-stretch gap-3 sm:max-w-xl sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <a
              href="#quote-form"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-4 text-base font-bold text-white transition hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get My Free Quote
              <ArrowRight className="h-5 w-5" aria-hidden />
            </a>
            <a
              href={phoneTelHref}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/45 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call {phoneDisplay}
            </a>
          </div>
          <p className="text-sm font-medium text-white/65">{trustLine}</p>
        </motion.div>
      </div>
    </section>
  );
}
