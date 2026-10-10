"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  LayoutGrid,
  Paintbrush,
  ShieldCheck,
} from "lucide-react";
import { FaStar } from "react-icons/fa";
import CabinetQuoteForm, {
  CABINET_SERVICES,
  type CabinetServiceValue,
} from "@/components/CabinetQuoteForm";
import GoogleReviewCard, {
  type GoogleReviewCardData,
} from "@/components/google/GoogleReviewCard";
import { GoogleG } from "@/components/google/GoogleLogo";

const REVIEW_URL = "https://g.page/r/Ce-IiV_Ozzm3EAI/review";

const CABINET_PROJECTS = [
  {
    title: "Cabinet painting",
    before: "/cabinet/before-oak.jpg",
    after: "/cabinet/after-white.jpg",
    caption: "Oak cabinets painted a clean white.",
  },
  {
    title: "Cabinet + backsplash package",
    before: "/cabinet/before-oak.jpg",
    after: "/cabinet/after-backsplash.jpg",
    caption: "Painted cabinets plus a new subway-tile backsplash.",
  },
] as const;

function BeforeAfterFigure({
  project,
  priority = false,
}: {
  project: (typeof CABINET_PROJECTS)[number];
  priority?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-xl shadow-sm ring-1 ring-slate-200">
      <div className="grid grid-cols-2">
        <div className="relative h-52">
          <Image
            src={project.before}
            alt={`${project.title} before`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 480px) 50vw, 320px"
            priority={priority}
          />
          <span className="absolute bottom-0 left-0 bg-slate-950/85 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
            Before
          </span>
        </div>
        <div className="relative h-52">
          <Image
            src={project.after}
            alt={`${project.title} after`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 480px) 50vw, 320px"
            priority={priority}
          />
          <span className="absolute bottom-0 right-0 bg-red-600 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
            After
          </span>
        </div>
      </div>
      <figcaption className="bg-white px-3 py-2 text-center text-xs font-medium text-slate-500">
        {project.caption}
      </figcaption>
    </figure>
  );
}

const OFFERS = [
  {
    icon: Paintbrush,
    service: CABINET_SERVICES[0].value,
    eyebrow: "Service 1",
    title: "Kitchen cabinet painting & refinishing",
    body: "Doors, drawer fronts, and frames painted in a color you choose. A smooth finish that makes a dated kitchen feel new.",
    points: [
      "Doors, drawers, and frames",
      "Color you choose",
      "Smooth painted finish",
    ],
  },
  {
    icon: LayoutGrid,
    service: CABINET_SERVICES[1].value,
    eyebrow: "Package deal",
    title: "Cabinet painting + tile backsplash",
    body: "Cabinet painting plus a new tile backsplash. Those two updates are what make the kitchen look finished.",
    points: [
      "Painted cabinets",
      "New tile backsplash",
      "One crew, one free estimate",
    ],
  },
] as const;

export type CabinetAdsLandingProps = {
  reviews: GoogleReviewCardData[];
  rating: number | null;
  total: number | null;
  fromGoogle?: boolean;
};

export default function CabinetAdsLanding({
  reviews,
  rating,
  total,
  fromGoogle = false,
}: CabinetAdsLandingProps) {
  const ratingValue = rating ?? 5;
  const reviewCount = total ?? reviews.length;
  const [showSticky, setShowSticky] = useState(true);
  const [selectedService, setSelectedService] = useState<
    CabinetServiceValue | ""
  >("");

  useEffect(() => {
    const quoteForm = document.getElementById("quote-form");
    if (!quoteForm) return;

    const update = () => {
      const rect = quoteForm.getBoundingClientRect();
      const focused = quoteForm.contains(document.activeElement);
      const onScreen = rect.top < window.innerHeight * 0.92 && rect.bottom > 72;
      const stillBelow = rect.top > window.innerHeight * 0.45;
      setShowSticky(!focused && !onScreen && stillBelow);
    };

    const observer = new IntersectionObserver(update, {
      rootMargin: "-8% 0px -12% 0px",
      threshold: [0, 0.1, 0.25],
    });
    const handleFocusOut = () => window.setTimeout(update, 0);

    observer.observe(quoteForm);
    update();
    window.addEventListener("scroll", update, { passive: true });
    quoteForm.addEventListener("focusin", update);
    quoteForm.addEventListener("focusout", handleFocusOut);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
      quoteForm.removeEventListener("focusin", update);
      quoteForm.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  const chooseOffer = (value: CabinetServiceValue) => {
    setSelectedService(value);
    document.getElementById("quote-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto w-full max-w-md">
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 px-4 py-2.5 backdrop-blur-md">
          <p className="text-center text-sm font-bold leading-tight tracking-tight">
            <span className="text-red-600">Graham</span>{" "}
            <span className="text-blue-700">Painting</span>
          </p>
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            &amp; Power Washing
          </p>
        </header>

        <main className="px-4 pb-28 pt-5">
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
              A new kitchen look.{" "}
              <span className="text-red-600">The same cabinets.</span>
            </h1>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
              Kitchen cabinet painting and refinishing, plus tile backsplash
              packages, for a dated kitchen that needs a fresh finish.
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-medium text-slate-600">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-red-600" aria-hidden />
                Licensed &amp; insured
              </span>
              <span className="text-slate-300" aria-hidden>
                ·
              </span>
              <span>Free estimate</span>
            </div>
          </motion.div>

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

          <div className="mt-4">
            <BeforeAfterFigure project={CABINET_PROJECTS[0]} priority />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="mt-4"
          >
            <a
              href="#quote-form"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
            >
              Get a Free Estimate
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="mt-5"
          >
            <CabinetQuoteForm
              selectedService={selectedService}
              onServiceChange={setSelectedService}
            />
          </motion.div>

          <section className="mt-8" aria-labelledby="package-heading">
            <h2
              id="package-heading"
              className="text-center text-lg font-bold tracking-tight text-slate-900"
            >
              Add the tile backsplash
            </h2>
            <p className="mt-1 text-center text-xs leading-relaxed text-slate-500">
              Painted cabinets and a new tile backsplash behind the counters.
            </p>
            <div className="mt-4">
              <BeforeAfterFigure project={CABINET_PROJECTS[1]} />
            </div>
          </section>

          <section className="mt-8" aria-labelledby="offers-heading">
            <h2
              id="offers-heading"
              className="text-center text-lg font-bold tracking-tight text-slate-900"
            >
              Two ways to update the kitchen
            </h2>
            <div className="mt-4 space-y-3">
              {OFFERS.map((offer) => {
                const Icon = offer.icon;
                return (
                  <article
                    key={offer.title}
                    className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-600">
                          {offer.eyebrow}
                        </p>
                        <h3 className="mt-1 text-base font-bold leading-snug text-slate-900">
                          {offer.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {offer.body}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {offer.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-sm leading-snug text-slate-700"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-red-600"
                            aria-hidden
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <button
                        type="button"
                        onClick={() => chooseOffer(offer.service)}
                        className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-slate-800"
                      >
                        Get a Free Estimate
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </button>
                  </article>
                );
              })}
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
                "Careful prep and a smooth painted finish",
                "Cabinet painting, tile backsplashes, and interior painting",
                "Family crew based in Buzzards Bay, serving the South Shore and Cape Cod",
                "Free estimate, no obligation",
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

          <section className="mt-8" aria-labelledby="steps-heading">
            <h2
              id="steps-heading"
              className="text-lg font-bold tracking-tight text-slate-900"
            >
              How the estimate works
            </h2>
            <ol className="mt-3 space-y-3">
              {[
                {
                  title: "Tell us about the kitchen",
                  body: "Name, phone, town, and whether you want cabinet painting, the backsplash package, or interior painting.",
                },
                {
                  title: "We look at the details",
                  body: "A photo of your cabinets helps us price the job.",
                },
                {
                  title: "You get a free estimate",
                  body: "We follow up with next steps. No pressure, and no obligation to book.",
                },
              ].map((step, index) => (
                <li
                  key={step.title}
                  className="flex gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <a
            href="#quote-form"
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
          >
            Get a Free Estimate
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </main>

        <footer className="border-t border-slate-200 bg-slate-950 px-4 pb-28 pt-6 text-center">
          <p className="text-sm font-bold text-white">
            <span className="text-red-400">Graham</span>{" "}
            <span className="text-blue-300">Painting</span>
            <span className="font-semibold text-white/70">
              {" "}
              &amp; Power Washing
            </span>
          </p>
          <a
            href="#quote-form"
            className="mt-3 inline-flex items-center justify-center gap-2 text-sm font-semibold text-red-300 transition hover:text-red-200"
          >
            Back to free estimate
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </a>
          <p className="mt-1.5 text-xs text-white/50">
            Licensed &amp; insured · Cabinet refinishing &amp; tile backsplashes
            · Plymouth County, South Shore &amp; Cape Cod
          </p>
        </footer>
      </div>

      {showSticky && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-14px_30px_rgba(15,23,42,0.16)] backdrop-blur">
          <a
            href="#quote-form"
            className="mx-auto inline-flex min-h-12 w-full max-w-md items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
          >
            Get a Free Estimate
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      )}
    </div>
  );
}
