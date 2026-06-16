"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Droplets,
  Facebook,
  Home,
  MapPin,
  Paintbrush,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  SprayCan,
} from "lucide-react";
import { clientData } from "@/../config";

function formatPhoneDisplay(digits: string) {
  const d = digits.replace(/\D/g, "");
  if (d.length === 10) {
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  }
  return digits;
}

const phoneDisplay = formatPhoneDisplay(clientData.phone);
const phoneHref = `tel:+1${clientData.phone.replace(/\D/g, "")}`;

const SERVICES = [
  { label: "House Soft Washing", icon: SprayCan },
  { label: "Deck & Patio", icon: Droplets },
  { label: "Driveways & Concrete", icon: Droplets },
  { label: "Vinyl & Cedar Siding", icon: ShieldCheck },
  { label: "Interior & Exterior Painting", icon: Paintbrush },
] as const;

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    label: "Licensed & insured",
    color: "bg-blue-50 text-blue-600",
  },
  { icon: Star, label: "5-star rated", color: "bg-amber-50 text-amber-600" },
  { icon: Sparkles, label: "1,000+ projects", color: "bg-red-50 text-red-600" },
  { icon: Phone, label: "Free quotes", color: "bg-green-50 text-green-600" },
] as const;

const btnCall =
  "flex w-full items-center justify-center gap-3 rounded-xl border-2 border-blue-600 bg-white px-5 py-3.5 text-sm font-semibold text-blue-700 transition hover:border-blue-700 hover:bg-blue-600 hover:text-white";

const btnQuote =
  "flex w-full items-center justify-center gap-2 rounded-xl border-2 border-green-600 bg-white px-5 py-3.5 text-sm font-semibold text-green-700 transition hover:border-green-700 hover:bg-green-600 hover:text-white";

const btnStickyCall =
  "flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-blue-600 bg-white py-3 text-sm font-semibold text-blue-700 transition hover:border-blue-700 hover:bg-blue-600 hover:text-white";

const btnStickyQuote =
  "flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-green-600 bg-white py-3 text-sm font-semibold text-green-700 transition hover:border-green-700 hover:bg-green-600 hover:text-white";

const REVIEW = {
  text: "Unbelievable job at my house!! They did my house, deck, pool deck, and pool fence. Highly recommend — exceptional work and a very reasonable price.",
  author: "C.J.",
};

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function QrLanding() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[340px] overflow-hidden">
        <Image
          src="/img1.jpeg"
          alt=""
          fill
          className="object-cover object-center brightness-[0.55]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-gray-50" />

        <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-28 text-center">
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.35 }}
            className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg"
          >
            <span className="text-red-400">Graham</span>{" "}
            <span className="text-gray-100">Power</span>{" "}
            <span className="text-gray-100">Washing</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.35, delay: 0.04 }}
            className="mt-2 max-w-xs text-sm font-medium leading-relaxed text-gray-200"
          >
            Soft washing, pressure washing &amp; painting
            <br />
            <span className="text-blue-200">
              Plymouth County &amp; Cape Cod
            </span>
          </motion.p>
        </div>
      </section>

      {/* Floating CTA card */}
      <div className="relative z-20 mx-auto -mt-20 max-w-md px-5">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.35, delay: 0.08 }}
          className="overflow-hidden rounded-2xl border border-white/80 bg-white shadow-xl shadow-black/10"
        >
          <div className="h-1 bg-gradient-to-r from-red-500 via-red-400 to-red-600" />
          <div className="space-y-3 p-5">
            <a href={phoneHref} className={btnCall}>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-200 bg-blue-50">
                <Phone className="h-4 w-4 text-blue-600" aria-hidden />
              </span>
              {phoneDisplay}
            </a>
            <Link href="/quote" className={btnQuote}>
              Get a Free Quote
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-md space-y-6 px-5 pb-36 pt-8">
        {/* Trust grid */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="grid grid-cols-2 gap-3"
          aria-label="Why choose us"
        >
          {TRUST_ITEMS.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3.5 shadow-sm"
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${color}`}
              >
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <span className="text-xs font-semibold leading-snug text-gray-700">
                {label}
              </span>
            </div>
          ))}
        </motion.section>

        {/* Services */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.3, delay: 0.12 }}
          aria-labelledby="qr-services-heading"
        >
          <h2
            id="qr-services-heading"
            className="mb-4 border-b-2 border-red-500 pb-2 text-lg font-bold text-gray-900"
          >
            What we do
          </h2>
          <ul className="space-y-2">
            {SERVICES.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3.5 shadow-sm transition hover:border-blue-100 hover:shadow-md"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <span className="text-sm font-medium text-gray-800">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Review */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.3, delay: 0.14 }}
          className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
          aria-label="Customer review"
        >
          <Quote
            className="absolute -right-2 -top-2 h-16 w-16 text-red-100"
            aria-hidden
          />
          <div className="mb-3 flex items-center gap-2">
            <div className="flex gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
              5-Star Review
            </span>
          </div>
          <p className="relative text-sm italic leading-relaxed text-gray-600">
            &ldquo;{REVIEW.text}&rdquo;
          </p>
          <p className="mt-4 text-right text-sm font-bold text-gray-800">
            — {REVIEW.author}
          </p>
        </motion.section>

        {/* Location */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.3, delay: 0.16 }}
          className="flex gap-4 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5 shadow-sm"
          aria-label="Service area"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-white text-blue-600">
            <MapPin className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <h2 className="font-bold text-gray-900">
              Locally owned &amp; operated
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              Based in {clientData.address.city}, {clientData.address.state}.
              Proudly serving Plymouth, the South Shore, Cape Cod, and
              surrounding towns.
            </p>
          </div>
        </motion.section>

        {/* Social + website */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.3, delay: 0.18 }}
          className="flex flex-col gap-3"
          aria-label="Links"
        >
          <div className="grid grid-cols-2 gap-3">
            <a
              href={clientData.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
            >
              <Facebook className="h-4 w-4" aria-hidden />
              Facebook
            </a>
            <a
              href={clientData.social.homeAdvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-green-200 hover:text-green-700"
            >
              <Home className="h-4 w-4" aria-hidden />
              HomeAdvisor
            </a>
          </div>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 py-2 text-sm font-medium text-gray-500 transition hover:text-gray-800"
          >
            Visit our full website
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </motion.section>
      </div>

      {/* Sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-50">
        <div className="mx-auto max-w-md border-t border-gray-200/80 bg-white/90 px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-lg pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <div className="flex gap-3">
            <a href={phoneHref} className={btnStickyCall}>
              <Phone className="h-4 w-4" aria-hidden />
              Call
            </a>
            <Link href="/quote" className={btnStickyQuote}>
              Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
