import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    name: "Vinyl Siding Soft Washing",
    href: "/services/vinyl-siding-soft-washing",
    description:
      "Low-pressure, safe cleaning for vinyl siding to remove algae, mildew, and stains.",
    image: "/vinyl-siding-soft-wash.png",
    alt: "Vinyl Siding Soft Washing Service",
  },
  {
    name: "Cedar Shake Soft Washing",
    href: "/services/cedar-shake-soft-washing",
    description:
      "Gentle soft washing for natural and painted cedar shake siding—removes mold, mildew, and preserves wood.",
    image: "/cedar-shake-soft-wash.png",
    alt: "Cedar Shake Soft Washing Service",
  },
  {
    name: "Patio Pressure Washing",
    href: "/services/patio-pressure-washing",
    description:
      "Restore the beauty and safety of your patio with professional pressure washing for stone, paver, and concrete surfaces.",
    image: "/patio-pressure-wash.png",
    alt: "Patio Pressure Washing Service",
  },
  {
    name: "Concrete Pressure Washing",
    href: "/services/concrete-pressure-washing",
    description:
      "Remove stains, grime, and buildup from driveways, walkways, and more with expert concrete cleaning.",
    image: "/concrete-pressure-wash.png",
    alt: "Concrete Pressure Washing Service",
  },
  {
    name: "Deck Pressure Washing",
    href: "/services/deck-pressure-washing",
    description:
      "Revitalize wood and composite decks with safe, effective pressure washing.",
    image: "/deck-pressure-wash.png",
    alt: "Deck Pressure Washing Service",
  },
];

const PAINTING_SERVICES = [
  {
    name: "Exterior Painting",
    description:
      "Professional exterior painting for siding, trim, decks, fences, and more—proper prep for a long-lasting finish.",
  },
  {
    name: "Interior Painting",
    description:
      "Interior painting for walls, ceilings, trim, and doors. Clean lines, careful prep, and a flawless finish.",
  },
];

export const metadata = {
  title: "Our Services | Graham Power Washing",
  description:
    "Explore professional power washing, soft washing, and interior & exterior painting services from Graham Power Washing in Plymouth, MA and the South Shore.",
  alternates: {
    canonical: "https://www.grahampowerwashing.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-slate-50">
      <section className="bg-slate-950 px-4 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            Graham Services
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
            Power washing, pressure washing, soft washing, and painting services.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Graham Power Washing provides house washing, vinyl siding soft
            washing, deck cleaning, patio pressure washing, concrete cleaning,
            and interior &amp; exterior painting in Plymouth, the South Shore,
            and Cape Cod.
          </p>
          <Link
            href="/quote"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-3.5 text-base font-bold text-white shadow-sm transition hover:bg-red-700"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {SERVICES.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
          >
            <div>
              <div className="mb-5 flex justify-center rounded-2xl bg-slate-100 p-5">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={112}
                  height={112}
                  className="rounded-2xl object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-slate-950">
                {service.name}
              </h2>
              <p className="text-slate-600 mb-4 leading-7">
                {service.description}
              </p>
            </div>
            <span className="mt-auto inline-flex items-center gap-2 font-semibold text-blue-700">
              Learn More
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mb-4 text-slate-950">
        Painting Services
      </h2>
      <p className="text-lg text-slate-600 text-center mb-8 max-w-2xl mx-auto">
        We also offer professional interior painting and exterior painting for
        Plymouth, South Shore, and Cape Cod homes. Contact us for a free quote
        on your next project.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {PAINTING_SERVICES.map((service) => (
          <div
            key={service.name}
            className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold mb-2 text-slate-950">
                {service.name}
              </h2>
              <p className="text-slate-600 mb-4 leading-7">
                {service.description}
              </p>
            </div>
            <Link
              href="/quote"
              className="mt-auto inline-flex items-center gap-2 font-semibold text-blue-700"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
      </section>
    </main>
  );
}
