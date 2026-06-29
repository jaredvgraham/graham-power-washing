"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import { phoneDisplay, phoneTelHref } from "@/lib/phone";

const Hero = () => {

  const trustPoints = [
    "Licensed & insured",
    "Fast local response",
    "Plymouth, South Shore & Cape Cod",
  ];

  return (
    <section className="relative flex min-h-[720px] w-full items-center overflow-hidden bg-slate-950 pb-20 pt-24 sm:min-h-[760px] lg:min-h-[820px] lg:pt-28">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/img1.jpeg"
          alt="Professional Power Washing Service in Plymouth MA - Graham Power Washing crew cleaning exterior surfaces"
          fill
          className="object-cover object-center brightness-[0.55]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-slate-950/45 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.28),transparent_32rem)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.18),transparent_28rem)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.04fr)_minmax(360px,0.82fr)] lg:items-center lg:px-8">
        <div className="max-w-3xl text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100 backdrop-blur lg:mx-0"
          >
            <Star
              className="h-4 w-4 fill-yellow-300 text-yellow-300"
              aria-hidden
            />
            5-star power washing in Plymouth MA
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-balance text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            Power washing, soft washing, and painting in{" "}
            <span className="text-white">Plymouth MA</span> with{" "}
            <span className="text-red-400">Graham Painting</span> &{" "}
            <span className="text-blue-400">Power Washing</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-8 text-slate-200 sm:text-xl lg:mx-0"
          >
            Professional house washing, pressure washing, soft washing, and
            interior &amp; exterior painting for South Shore and Cape Cod homes.
            Send a few details and we&apos;ll follow up with a free, no-pressure
            quote.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.14 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href="#quote-form"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-red-950/30 transition hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get My Free Quote
              <ArrowRight className="h-5 w-5" aria-hidden />
            </a>
            <a
              href={phoneTelHref}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-blue-950/30 transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call {phoneDisplay}
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mx-auto mt-7 grid max-w-xl gap-2 text-left sm:grid-cols-3 lg:mx-0"
          >
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm font-semibold text-slate-100 backdrop-blur"
              >
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-blue-200"
                  aria-hidden
                />
                {point}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.18 }}
          className="mx-auto w-full max-w-md lg:mx-0"
        >
          <div className="rounded-3xl border border-white/15 bg-blue-950/25 p-4 shadow-2xl shadow-black/30 backdrop-blur sm:p-6">
            <div className="rounded-2xl bg-blue-900/50 p-5 text-white">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600">
                  <ShieldCheck className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-blue-100">
                    Quote-ready in minutes
                  </p>
                  <p className="text-2xl font-black">No obligation</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-white/10 p-3">
                  <p className="text-2xl font-black">1K+</p>
                  <p className="mt-1 text-xs text-blue-100">Projects</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-3">
                  <p className="text-2xl font-black">5★</p>
                  <p className="mt-1 text-xs text-blue-100">Reviews</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-3">
                  <p className="text-2xl font-black">Local</p>
                  <p className="mt-1 text-xs text-blue-100">Crew</p>
                </div>
              </div>
            </div>
            <div className="relative mt-4 h-72 overflow-hidden rounded-2xl border border-white/15 bg-white p-2 shadow-sm sm:h-80 lg:h-96">
              <Image
                src="/areas-served.png"
                alt="Map of the areas Graham Power Washing serves across Plymouth, the South Shore, and Cape Cod."
                fill
                className="rounded-xl bg-slate-50 object-contain"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
            <ol className="mt-5 space-y-3">
              {[
                "Tell us your town and what needs cleaning.",
                "Add photos only if you want a more accurate estimate.",
                "We call or text with clear next steps.",
              ].map((step, index) => (
                <li key={step} className="flex gap-3 text-sm text-blue-100">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">
                    {index + 1}
                  </span>
                  <span className="pt-1 font-medium leading-relaxed">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
            <a
              href="#quote-form"
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-red-600 px-5 py-4 text-base font-bold text-white transition hover:bg-red-700"
            >
              Start My Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
