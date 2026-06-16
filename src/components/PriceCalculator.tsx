"use client";
import React from "react";
import GetAiQuote from "./AiQuote";
import Link from "next/link";

const PricingPage: React.FC = () => {
  return (
    <div className="bg-slate-50">
      <section className="bg-slate-950 px-4 py-20 text-center text-white sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            Free Estimates
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
            <span className="text-red-400">Fair pricing</span>{" "}
            <span className="text-blue-300">
              starts with the right details.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Every property is different. Send us the basics for house washing,
            pressure washing, soft washing, concrete cleaning, deck cleaning,
            patio washing, or painting, and we&apos;ll follow up with a clear
            quote.
          </p>
          <Link
            href="#quote-form"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3.5 text-base font-bold text-white shadow-sm transition hover:bg-red-700"
          >
            Start My Estimate
          </Link>
        </div>
      </section>
      <GetAiQuote />
    </div>
  );
};

export default PricingPage;
