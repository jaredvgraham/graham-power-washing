import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { SERVICE_AREAS } from "@/data/serviceAreas";

interface ServiceAreaMapProps {
  heading?: string;
  subheading?: string;
  areas?: readonly string[];
  showTowns?: boolean;
  showCta?: boolean;
  compact?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

const ServiceAreaMap = ({
  heading = "",
  subheading = "",
  areas = SERVICE_AREAS,
  showTowns = false,
  showCta = true,
  compact = false,
  imageSrc = "/areas-served.png",
  imageAlt = "Map of the areas Graham Power Washing serves across the South Shore and Cape Cod, including Plymouth, Bourne, Wareham, Sandwich, Falmouth, and surrounding towns.",
  className = "",
}: ServiceAreaMapProps) => {
  const Wrapper = compact ? "div" : "section";
  const wrapperClass = compact
    ? className
    : `bg-white py-12 ${className}`;

  return (
    <Wrapper className={wrapperClass}>
      <div className={compact ? "" : "container mx-auto px-4"}>
        {(heading || subheading) && (
          <div className="text-center mb-10">
            {heading && (
              <h2 className="text-4xl font-light text-gray-800">{heading}</h2>
            )}
            {subheading && (
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                {subheading}
              </p>
            )}
          </div>
        )}

        <div className={compact ? "" : "mx-auto max-w-2xl"}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={819}
            height={1024}
            className="h-auto w-full rounded-2xl"
            sizes={
              compact
                ? "(max-width: 1024px) 100vw, 480px"
                : "(max-width: 768px) 100vw, 672px"
            }
          />
        </div>

        {showTowns && (
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3">
            {areas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-800 shadow-sm"
              >
                <MapPin className="h-4 w-4 shrink-0 text-blue-600" aria-hidden />
                <span>{area}</span>
              </div>
            ))}
          </div>
        )}

        {showCta && (
          <div className="mt-10 text-center">
            <p className="text-gray-600">
              Don&apos;t see your town?{" "}
              <Link href="/contact" className="text-blue-700 underline">
                Contact us
              </Link>{" "}
              — we may still be able to help.
            </p>
            <Link
              href="/quote"
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Get a Free Quote
            </Link>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default ServiceAreaMap;
