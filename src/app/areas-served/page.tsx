import React from "react";
import Link from "next/link";
import ServiceAreaMap from "@/components/ServiceAreaMap";

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
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">Areas We Serve</h1>
      <p className="text-lg text-gray-700 text-center mb-10 max-w-2xl mx-auto">
        Graham Power Washing proudly serves homeowners and businesses across
        Plymouth, Kingston, Duxbury, Carver, Marshfield, Pembroke, Hanson,
        Wareham, Hanover, Norwell, Bourne, East Bridgewater, Bridgewater,
        Whitman, Lakeville, Sandwich, and all of the South Shore and Cape Cod
        with power washing, soft washing, and interior &amp; exterior painting.
        If you don&apos;t see your area listed,{" "}
        <Link href="/contact" className="text-blue-700 underline">
          contact us
        </Link>
        —we may still be able to help!
      </p>
      <ServiceAreaMap heading="" subheading="" showCta={false} className="py-0" />
      <div className="text-center mt-12">
        <Link
          href="/services"
          className="text-blue-700 font-semibold underline mr-4"
        >
          See All Services
        </Link>
        <Link href="/quote" className="text-blue-700 font-semibold underline">
          Get a Free Quote
        </Link>
      </div>
    </main>
  );
}
