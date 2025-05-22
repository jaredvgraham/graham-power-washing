import React from "react";
import Link from "next/link";
import Image from "next/image";

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

export const metadata = {
  title: "Our Services | Graham Power Washing",
  description:
    "Explore all professional power washing and soft washing services offered by Graham Power Washing in Plymouth, MA and the South Shore.",
  alternates: {
    canonical: "https://www.grahampowerwashing.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <p className="text-lg text-gray-700 text-center mb-10 max-w-2xl mx-auto">
        Graham Power Washing offers a full range of exterior cleaning services
        for homes and businesses in Plymouth, the South Shore, and Cape Cod.
        Click below to learn more about each service:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
        {SERVICES.map((service) => (
          <div
            key={service.href}
            className="bg-gray-100 rounded-lg p-6 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-center mb-4">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-blue-900">
                <Link
                  href={service.href}
                  className="hover:underline text-blue-700"
                >
                  {service.name}
                </Link>
              </h2>
              <p className="text-gray-700 mb-4">{service.description}</p>
            </div>
            <Link
              href={service.href}
              className="mt-auto text-blue-700 font-semibold underline"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
