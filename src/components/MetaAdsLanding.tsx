"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { FaStar } from "react-icons/fa";
import GetAiQuote from "@/components/AiQuote";
import GoogleReviewCard, {
  type GoogleReviewCardData,
} from "@/components/google/GoogleReviewCard";
import { GoogleG } from "@/components/google/GoogleLogo";

const REVIEW_URL = "https://g.page/r/Ce-IiV_Ozzm3EAI/review";

const BEFORE_AFTER = [
  {
    title: "House wash",
    before: "/IMG_7729.jpeg",
    after: "/IMG_7730.jpeg",
  },
  {
    title: "Cedar soft wash",
    before: "/before1.jpeg",
    after: "/after1.jpeg",
  },
  {
    title: "Vinyl siding",
    before: "/IMG_7696.jpeg",
    after: "/IMG_7699.jpeg",
  },
] as const;

export type MetaAdsLandingProps = {
  reviews: GoogleReviewCardData[];
  rating: number | null;
  total: number | null;
  fromGoogle?: boolean;
};

export default function MetaAdsLanding({
  reviews,
  rating,
  total,
  fromGoogle = false,
}: MetaAdsLandingProps) {
  const ratingValue = rating ?? 5;
  const reviewCount = total ?? reviews.length;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto w-full max-w-md">
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-md">
          <p className="text-center text-sm font-bold tracking-tight">
            <span className="text-red-600">Graham</span>{" "}
            <span className="text-blue-700">Power Washing</span>
          </p>
        </header>

        <main className="px-4 pb-10 pt-5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-center"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-red-600">
              Plymouth · South Shore · Cape Cod
            </p>
            <h1 className="mt-2 text-balance text-[1.75rem] font-black leading-tight tracking-tight text-slate-900">
              <span className="text-red-600">Soft Wash</span> Special for{" "}
              <span className="text-blue-700">Plymouth County</span> &amp; Cape
              Cod Homes
            </h1>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
              Get a fast, free quote for siding, decks, patios, walkways,
              concrete, house washing, and more. Safe soft washing that brings
              the color back — without damaging your home.
            </p>
            <div className="mt-3 flex items-center justify-center gap-3 text-xs font-medium text-slate-600">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-red-600" aria-hidden />
                Licensed &amp; insured
              </span>
              <span className="text-slate-300" aria-hidden>
                ·
              </span>
              <span>No obligation</span>
            </div>
          </motion.div>

          {/* Google rating trust strip */}
          <motion.a
            href={REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.04 }}
            className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-3 shadow-sm transition hover:border-blue-200"
          >
            <div className="flex items-center gap-2.5">
              <GoogleG className="h-7 w-7 shrink-0" />
              <div className="text-left">
                <p className="text-xs font-semibold text-slate-900">
                  {fromGoogle ? "Google Reviews" : "Customer Reviews"}
                </p>
                <p className="text-[11px] text-slate-500">
                  {reviewCount}+ local reviews
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold leading-none text-slate-900">
                {ratingValue.toFixed(1)}
              </p>
              <div className="mt-0.5 flex justify-end gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`h-3 w-3 ${
                      i < Math.round(ratingValue)
                        ? "text-[#FBBC04]"
                        : "text-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.a>

          {/* Simple side-by-side before/after — clear labels, no interaction */}
          <motion.figure
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="mt-4 overflow-hidden rounded-xl ring-1 ring-slate-200 shadow-sm"
          >
            <div className="grid grid-cols-2">
              <div className="relative h-44">
                <Image
                  src="/IMG_7743.jpeg"
                  alt="Cedar shake siding before soft washing"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="220px"
                />
                <span className="absolute bottom-0 left-0 bg-slate-950/85 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                  Before
                </span>
              </div>
              <div className="relative h-44">
                <Image
                  src="/IMG_7750.jpeg"
                  alt="Cedar shake siding after soft washing"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="220px"
                />
                <span className="absolute bottom-0 right-0 bg-red-600 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                  After
                </span>
              </div>
            </div>
            <figcaption className="bg-white px-3 py-2 text-center text-xs font-medium text-slate-500">
              Cedar soft wash — gray weathering restored to natural wood
            </figcaption>
          </motion.figure>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="mt-4"
          >
            <a
              href="#quote-form"
              className="inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
            >
              Get My Free Quote
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="mt-5"
          >
            <GetAiQuote
              formOnly
              hideHowYouFoundUs
              defaultHowYouFoundUs="Facebook Ad"
            />
          </motion.div>

          {/* Google reviews */}
          <section className="mt-8" aria-labelledby="reviews-heading">
            <div className="mb-4 text-center">
              <div className="mb-2 flex items-center justify-center gap-2">
                <GoogleG className="h-5 w-5" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-red-600">
                  Trusted locally
                </p>
              </div>
              <h2
                id="reviews-heading"
                className="text-lg font-bold tracking-tight text-slate-900"
              >
                What customers say
              </h2>
              {fromGoogle && total != null && (
                <p className="mt-1 text-xs text-slate-500">
                  {ratingValue.toFixed(1)} stars · {total} Google reviews
                </p>
              )}
            </div>
            <div className="space-y-3">
              {reviews.slice(0, 3).map((review, index) => (
                <GoogleReviewCard
                  key={`${review.author}-${index}`}
                  {...review}
                />
              ))}
            </div>
          </section>

          <section className="mt-8" aria-labelledby="results-heading">
            <h2
              id="results-heading"
              className="text-center text-lg font-bold tracking-tight text-slate-900"
            >
              More soft wash results
            </h2>
            <p className="mt-1 text-center text-xs text-slate-500">
              Algae, mildew, and salt haze gone — without blasting your siding.
            </p>
            <div className="mt-4 space-y-3">
              {BEFORE_AFTER.map((project) => (
                <figure
                  key={project.title}
                  className="overflow-hidden rounded-xl ring-1 ring-slate-200"
                >
                  <div className="grid grid-cols-2">
                    <div className="relative h-40">
                      <Image
                        src={project.before}
                        alt={`${project.title} before cleaning`}
                        fill
                        className="object-cover"
                        sizes="200px"
                      />
                      <span className="absolute bottom-0 left-0 bg-slate-950/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                        Before
                      </span>
                    </div>
                    <div className="relative h-40">
                      <Image
                        src={project.after}
                        alt={`${project.title} after cleaning`}
                        fill
                        className="object-cover"
                        sizes="200px"
                      />
                      <span className="absolute bottom-0 right-0 bg-red-600/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                        After
                      </span>
                    </div>
                  </div>
                  <figcaption className="bg-white px-3 py-2 text-center text-sm font-semibold text-slate-700">
                    {project.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="mt-8" aria-labelledby="why-heading">
            <h2
              id="why-heading"
              className="text-lg font-bold tracking-tight text-slate-900"
            >
              Why homeowners choose us
            </h2>
            <ul className="mt-3 space-y-2.5">
              {[
                "Safe soft washing for vinyl & cedar — not harsh pressure on siding",
                "Local crew based in Buzzards Bay, MA",
                "Clear pricing with no obligation quotes",
                "Decks, patios, driveways, windows, and painting available",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm leading-snug text-slate-700"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-red-600"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <a
            href="#quote-form"
            className="mt-8 inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
          >
            Get My Free Quote
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </main>

        <footer className="border-t border-slate-200 bg-slate-950 px-4 py-6 text-center">
          <p className="text-sm font-bold text-white">
            <span className="text-red-400">Graham</span>{" "}
            <span className="text-blue-300">Power Washing</span>
          </p>
          <a
            href="#quote-form"
            className="mt-3 inline-flex items-center justify-center gap-2 text-sm font-semibold text-red-300 transition hover:text-red-200"
          >
            Back to free quote form
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </a>
          <p className="mt-1.5 text-xs text-white/50">
            Licensed &amp; insured · Plymouth County, South Shore &amp; Cape Cod
          </p>
        </footer>
      </div>
    </div>
  );
}
