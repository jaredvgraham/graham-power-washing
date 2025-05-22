import React from "react";
import Link from "next/link";

const AREAS = [
  "Plymouth",
  "Kingston",
  "Duxbury",
  "Carver",
  "Marshfield",
  "Pembroke",
  "Hanson",
  "Wareham",
  "Hanover",
  "Norwell",
  "Bourne",
  "East Bridgewater",
  "Bridgewater",
  "Whitman",
  "Lakeville",
  "Sandwich",
  "Scituate",
  "Hingham",
  "Falmouth",
  "Buzzards Bay",
  "South Shore",
  "Cape Cod",
];

export const metadata = {
  title: "Areas Served | Graham Power Washing",
  description:
    "Graham Power Washing provides professional power washing, soft washing, and exterior cleaning services throughout Plymouth, Kingston, Duxbury, Carver, Marshfield, Pembroke, Hanson, Wareham, Hanover, Norwell, Bourne, East Bridgewater, Bridgewater, Whitman, Lakeville, Sandwich, and all South Shore & Cape Cod. See all towns and cities we serve.",
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
        Whitman, Lakeville, Sandwich, and all of the South Shore and Cape Cod.
        If you don&apos;t see your area listed,{" "}
        <Link href="/contact" className="text-blue-700 underline">
          contact us
        </Link>
        —we may still be able to help!
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
        {AREAS.map((area) => (
          <div
            key={area}
            className="bg-gray-100 rounded-lg p-3 text-center text-gray-800 shadow-sm"
          >
            {area}
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
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
      {/* LocalBusiness Schema for serviceArea */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Graham Power Washing",
            url: "https://www.grahampowerwashing.com",
            telephone: "7744877616",
            address: {
              "@type": "PostalAddress",
              streetAddress: "4 Winchester Avenue",
              addressLocality: "Buzzards Bay",
              addressRegion: "MA",
              postalCode: "02532",
              addressCountry: "US",
            },
            areaServed: AREAS,
            sameAs: ["https://www.facebook.com/profile.php?id=100063725705465"],
          }),
        }}
      />
    </main>
  );
}
