import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { ServiceDefinition } from "@/data/services";
import { SERVICES } from "@/data/services";
import {
  getNearbyAreas,
  serviceAreaCanonical,
  type ServiceAreaDefinition,
} from "@/data/serviceAreas";
import { phoneDisplay, phoneTelHref } from "@/lib/phone";
import {
  buildLocalizedServiceContent,
  placePhrase,
  type LocalizedServiceContent,
} from "@/lib/seo/serviceAreaContent";
import {
  LOCAL_BUSINESS_ID,
  shouldIndexServiceArea,
  SITE_URL,
} from "@/lib/seo/localSeo";

type Props = {
  service: ServiceDefinition;
  area: ServiceAreaDefinition;
  content?: LocalizedServiceContent;
};

/**
 * Focused service×area page: unique local copy + proof, links up to the
 * service authority page for shared process/benefits (reduces thin duplication).
 */
export default function ServiceAreaDetailPage({
  service,
  area,
  content: contentProp,
}: Props) {
  const content = contentProp ?? buildLocalizedServiceContent(service, area);
  const url = serviceAreaCanonical(service.slug, area.slug);
  const nearby = getNearbyAreas(area, 4).filter((near) =>
    shouldIndexServiceArea(service, near),
  );
  const otherServices = SERVICES.filter(
    (s) => s.slug !== service.slug && shouldIndexServiceArea(s, area),
  );
  const place = placePhrase(area);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${SITE_URL}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.name,
            item: `${SITE_URL}/services/${service.slug}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: area.name,
            item: url,
          },
        ],
      },
      {
        "@type": "Service",
        name: service.name,
        description: content.metaDescription,
        serviceType: service.serviceType,
        url,
        image: `${SITE_URL}${service.heroImage}`,
        provider: { "@id": LOCAL_BUSINESS_ID },
        areaServed: {
          "@type": "City",
          name: `${area.name}, Massachusetts`,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: content.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-white">
      <section className="relative h-[58vh] min-h-[420px] w-full overflow-hidden sm:h-[62vh]">
        <Image
          src={service.heroImage}
          alt={`${service.name} by Graham Power Washing ${place}`}
          fill
          priority
          className={`object-cover ${service.heroObjectPosition ?? "object-center"}`}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/15" />
        <div className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8">
          <Breadcrumbs
            variant="light"
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.shortName, href: service.href },
              { label: area.name },
            ]}
          />
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/75">
            Graham Power Washing · {area.name}
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            {content.h1}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-white/90 sm:text-xl">
            {content.heroSubhead}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-slate-700">
          {content.intro}
        </p>

        <section className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-slate-950">
            {content.localTitle}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            {content.localBody}
          </p>
        </section>

        {service.gallery.length > 0 && (
          <section className="mt-16">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
              Real Jobs
            </p>
            <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-slate-950">
              Recent {service.shortName} work
            </h2>
            <div
              className={`mt-10 grid gap-4 ${
                service.gallery.length === 1
                  ? "mx-auto max-w-3xl grid-cols-1"
                  : service.gallery.length === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {service.gallery.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[4/3] overflow-hidden bg-slate-100"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className={`object-cover ${
                      img.src === service.heroImage
                        ? (service.heroObjectPosition ?? "object-center")
                        : "object-center"
                    }`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-20">
          <h2 className="text-center text-3xl font-bold text-slate-950">
            {service.benefitsTitle}
          </h2>
          <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
            {service.benefits.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-lg leading-relaxed text-slate-700"
              >
                <span className="mt-1 font-bold text-red-600" aria-hidden>
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-2xl text-center text-slate-600">
            See our full process on the{" "}
            <Link
              href={service.href}
              className="font-semibold text-blue-700 underline"
            >
              {service.name} overview
            </Link>
            .
          </p>
        </section>

        <div className="mt-16 bg-slate-950 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <h3 className="text-3xl font-bold">
            Get a free quote for {area.name}
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            Tell us what needs cleaning. We&apos;ll follow up with clear next
            steps — no pressure.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={`/areas-served/${area.slug}#quote-form`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-3.5 text-base font-bold text-white transition hover:bg-red-500"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href={phoneTelHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-3.5 text-base font-bold text-white transition hover:bg-white/15"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {phoneDisplay}
            </a>
          </div>
        </div>

        <section className="mt-20 mb-8" id="faq">
          <h2 className="text-center text-3xl font-bold text-slate-950">
            {service.shortName} FAQs — {area.name}
          </h2>
          <div className="mx-auto mt-10 max-w-3xl space-y-8 text-lg text-slate-700">
            {content.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-bold text-slate-950">{faq.question}</h3>
                <p className="mt-2 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-slate-200 pt-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-950">
                More in {area.name}
              </h2>
              <ul className="mt-5 space-y-2">
                <li>
                  <Link
                    href={`/areas-served/${area.slug}`}
                    className="font-medium text-blue-700 hover:underline"
                  >
                    {area.name} power washing homepage
                  </Link>
                </li>
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}/${area.slug}`}
                      className="text-slate-700 hover:text-blue-700 hover:underline"
                    >
                      {s.name} {place}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950">
                {service.shortName} nearby
              </h2>
              <ul className="mt-5 space-y-2">
                <li>
                  <Link
                    href={service.href}
                    className="font-medium text-blue-700 hover:underline"
                  >
                    {service.name} overview
                  </Link>
                </li>
                {nearby.map((near) => (
                  <li key={near.slug}>
                    <Link
                      href={`/services/${service.slug}/${near.slug}`}
                      className="inline-flex items-center gap-1.5 text-slate-700 hover:text-blue-700 hover:underline"
                    >
                      <MapPin
                        className="h-3.5 w-3.5 text-blue-600"
                        aria-hidden
                      />
                      {service.shortName} in {near.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
