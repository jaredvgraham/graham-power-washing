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
 * Service×area page: unique local copy + FAQs first; shared process lives on
 * the parent service URL to avoid near-duplicate bodies across towns.
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
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: content.h1,
        description: content.metaDescription,
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": LOCAL_BUSINESS_ID },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}${service.heroImage}`,
        },
        breadcrumb: {
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
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: content.h1,
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
          alt={`${content.h1} — Graham Power Washing`}
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
            Graham Power Washing · {area.name}, MA
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
        {/* Unique local body first */}
        <section className="mx-auto max-w-3xl">
          <p className="text-center text-xl leading-relaxed text-slate-700">
            {content.intro}
          </p>
          <h2 className="mt-14 text-center text-3xl font-bold text-slate-950">
            {content.localTitle}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            {content.localBody}
          </p>
        </section>

        <section className="mt-16" id="faq">
          <h2 className="text-center text-3xl font-bold text-slate-950">
            {service.shortName} questions for {area.name} homeowners
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

        {/* Short benefit summary — full process lives on parent service page */}
        <section className="mx-auto mt-20 max-w-3xl border-t border-slate-200 pt-14">
          <h2 className="text-center text-2xl font-bold text-slate-950">
            What you get with {service.shortName.toLowerCase()} {place}
          </h2>
          <ul className="mt-8 space-y-3">
            {service.benefits.slice(0, 3).map((item) => (
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
          <p className="mt-6 text-center text-slate-600">
            Full process, gallery, and details:{" "}
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
          <h2 className="text-3xl font-bold">
            Free quote for {service.shortName.toLowerCase()} in {area.name}
          </h2>
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

        <section className="mt-20 border-t border-slate-200 pt-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-950">
                More services in {area.name}
              </h2>
              <ul className="mt-5 space-y-2">
                <li>
                  <Link
                    href={`/areas-served/${area.slug}`}
                    className="font-medium text-blue-700 hover:underline"
                  >
                    All power washing in {area.name}
                  </Link>
                </li>
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}/${area.slug}`}
                      className="text-slate-700 hover:text-blue-700 hover:underline"
                    >
                      {s.name} in {area.name}
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
