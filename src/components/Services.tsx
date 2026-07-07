"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AppWindow,
  ArrowRight,
  Building2,
  Droplets,
  Fence,
  Home,
  Layers,
  Paintbrush,
  PaintRoller,
  SprayCan,
  Square,
  Waves,
  type LucideIcon,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}

const SERVICES: Service[] = [
  {
    title: "Home Soft Washing",
    description:
      "Gentle, low-pressure cleaning that safely removes algae, mold, and mildew from siding without causing damage — extending the life of your exterior.",
    icon: SprayCan,
    href: "/services/vinyl-siding-soft-washing",
  },
  {
    title: "Cedar Shake Soft Washing",
    description:
      "Specialized soft washing for cedar shake siding that lifts dirt and organic growth while protecting the natural wood.",
    icon: Home,
    href: "/services/cedar-shake-soft-washing",
  },
  {
    title: "Window Cleaning",
    description:
      "Streak-free interior and exterior window washing — including screens, sills, and tracks — for more light in and a better view out.",
    icon: AppWindow,
    href: "/services/window-cleaning",
  },
  {
    title: "Driveway Pressure Washing",
    description:
      "High-pressure cleaning that lifts oil stains, dirt, and grime to restore your driveway and boost curb appeal.",
    icon: Droplets,
  },
  {
    title: "Deck & Patio Cleaning",
    description:
      "Safe, effective cleaning for wood and stone surfaces that removes dirt, algae, and mildew to make outdoor spaces look new.",
    icon: Layers,
    href: "/services/deck-pressure-washing",
  },
  {
    title: "Concrete Cleaning",
    description:
      "Deep cleaning for driveways, walkways, and patios that removes stains, dirt, and grime for a clean, safe surface.",
    icon: Square,
    href: "/services/concrete-pressure-washing",
  },
  {
    title: "Fence Pressure Washing",
    description:
      "Restore your fence by removing dirt, mold, and discoloration — making it look new and extending its lifespan.",
    icon: Fence,
  },
  {
    title: "Commercial Power Washing",
    description:
      "Keep storefronts, parking lots, and building exteriors looking professional and welcoming for your customers.",
    icon: Building2,
  },
  {
    title: "Pool Apron Cleaning",
    description:
      "Remove dirt, algae, and mildew from the areas surrounding your pool for a clean, safe space for family and guests.",
    icon: Waves,
  },
  {
    title: "Exterior Painting",
    description:
      "Refresh your curb appeal with proper surface prep and durable finishes on siding, trim, decks, and more.",
    icon: PaintRoller,
  },
  {
    title: "Interior Painting",
    description:
      "Transform your living spaces with clean lines and a flawless finish on walls, ceilings, trim, and doors.",
    icon: Paintbrush,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="text-red-400">Power Washing</span>,{" "}
            <span className="text-blue-300">Soft Washing</span> &amp; Painting
            Services
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Professional house washing, soft washing, concrete pressure washing,
            deck cleaning, patio cleaning, window cleaning, and painting for
            homes and businesses in Plymouth, the South Shore, and Cape Cod.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const CardInner = (
              <>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">
                  {service.description}
                </p>
                {service.href && (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-300">
                    Learn more
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                )}
              </>
            );

            const baseClasses =
              "group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-white/[0.09] hover:shadow-2xl hover:shadow-blue-950/20";

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.3, delay: (index % 2) * 0.04 }}
              >
                {service.href ? (
                  <Link href={service.href} className={baseClasses}>
                    {CardInner}
                  </Link>
                ) : (
                  <div className={baseClasses}>{CardInner}</div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-red-700"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/15"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
