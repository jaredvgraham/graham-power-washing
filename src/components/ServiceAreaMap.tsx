import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import {
  SERVICE_AREAS,
  SERVICE_AREA_NAMES,
  type ServiceAreaDefinition,
} from "@/data/serviceAreas";

interface ServiceAreaMapProps {
  heading?: string;
  subheading?: string;
  /** @deprecated Prefer `areaDefs`. Plain names still work for display-only. */
  areas?: readonly string[];
  areaDefs?: readonly ServiceAreaDefinition[];
  showTowns?: boolean;
  showCta?: boolean;
  compact?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  /** When true, town chips link to /areas-served/[slug] */
  linkTowns?: boolean;
}

const ServiceAreaMap = ({
  heading = "",
  subheading = "",
  areas = SERVICE_AREA_NAMES,
  areaDefs = SERVICE_AREAS,
  showTowns = false,
  showCta = true,
  compact = false,
  imageSrc = "/areas-served.png",
  imageAlt = "Map of the areas Graham Power Washing serves across the South Shore and Cape Cod, including Plymouth, Bourne, Wareham, Sandwich, Falmouth, and surrounding towns.",
  className = "",
  linkTowns = true,
}: ServiceAreaMapProps) => {
  const Wrapper = compact ? "div" : "section";
  const wrapperClass = compact
    ? className
    : `bg-white py-20 sm:py-24 ${className}`;

  const chips: { key: string; label: string; href?: string }[] = linkTowns
    ? areaDefs.map((area) => ({
        key: area.slug,
        label: area.name,
        href: `/areas-served/${area.slug}`,
      }))
    : areas.map((name) => ({ key: name, label: name }));

  return (
    <Wrapper className={wrapperClass}>
      <div className={compact ? "" : "container mx-auto px-4"}>
        {(heading || subheading) && (
          <div className="text-center mb-10">
            {heading && (
              <>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                  Service Area
                </p>
                <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                  {heading}
                </h2>
              </>
            )}
            {subheading && (
              <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
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
            className="h-auto w-full rounded-3xl border border-slate-200 bg-slate-50 shadow-sm"
            sizes={
              compact
                ? "(max-width: 1024px) 100vw, 480px"
                : "(max-width: 768px) 100vw, 672px"
            }
          />
        </div>

        {showTowns && (
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3">
            {chips.map((chip) => {
              const inner = (
                <>
                  <MapPin
                    className="h-4 w-4 shrink-0 text-blue-600"
                    aria-hidden
                  />
                  <span>{chip.label}</span>
                </>
              );
              const className =
                "flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:border-blue-300 hover:text-blue-800";

              return chip.href ? (
                <Link key={chip.key} href={chip.href} className={className}>
                  {inner}
                </Link>
              ) : (
                <div key={chip.key} className={className}>
                  {inner}
                </div>
              );
            })}
          </div>
        )}

        {showCta && (
          <div className="mt-10 text-center">
            <p className="text-slate-600">
              Don&apos;t see your town?{" "}
              <Link href="/contact" className="font-semibold text-blue-700 underline">
                Contact us
              </Link>{" "}
              — we may still be able to help.
            </p>
            <Link
              href="/quote"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3.5 text-base font-bold text-white shadow-sm transition hover:bg-red-700"
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
