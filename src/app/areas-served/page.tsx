import React from "react";
import Link from "next/link";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata = {
  title: "Areas Served | Graham Power Washing",
  description:
    "Graham Power Washing provides professional power washing, soft washing, interior & exterior painting, and exterior cleaning services throughout Plymouth, Kingston, Duxbury, Carver, Marshfield, Pembroke, Hanson, Wareham, Hanover, Norwell, Bourne, East Bridgewater, Bridgewater, Whitman, Lakeville, Sandwich, and all South Shore & Cape Cod. See all towns and cities we serve.",
  alternates: {
    canonical: "https://www.grahampowerwashing.com/areas-served",
  },
};

export default function AreasServedPage() {
  return (
    <main className="bg-slate-50">
      <section className="bg-slate-950 px-4 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600">
            <MapPin className="h-7 w-7" aria-hidden />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
            South Shore &amp; Cape Cod
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
            <span className="text-red-400">Local power washing</span>{" "}
            <span className="text-blue-300">where you need it.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Graham Power Washing serves homeowners and businesses across
            Plymouth County, the South Shore, Cape Cod, and nearby towns.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-3.5 text-base font-bold text-white shadow-sm transition hover:bg-red-700"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-8 py-3.5 text-base font-bold text-white transition hover:bg-white/15"
            >
              See Services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="mx-auto mb-10 max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-lg leading-8 text-slate-600">
            We regularly serve Plymouth, Kingston, Duxbury, Carver, Marshfield,
            Pembroke, Hanson, Wareham, Hanover, Norwell, Bourne, East
            Bridgewater, Bridgewater, Whitman, Lakeville, Sandwich, and
            surrounding South Shore and Cape Cod towns. If you don&apos;t see your
            area listed,{" "}
            <Link href="/contact" className="font-semibold text-blue-700 underline">
              contact us
            </Link>
            . We may still be able to help.
          </p>
        </div>
        <ServiceAreaMap heading="" subheading="" showCta={false} className="py-0" />
      </section>
    </main>
  );
}
