import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import type { ServiceDefinition } from "@/data/services";
import { serviceCanonical } from "@/data/services";
import { phoneDisplay, phoneTelHref } from "@/lib/phone";

type Props = {
  service: ServiceDefinition;
};

export default function ServiceDetailPage({ service }: Props) {
  const url = serviceCanonical(service.slug);

  return (
    <main className="bg-white">
      {/* Full-bleed photo hero */}
      <section className="relative h-[58vh] min-h-[420px] w-full overflow-hidden sm:h-[62vh]">
        <Image
          src={service.heroImage}
          alt={service.heroAlt}
          fill
          priority
          className={`object-cover ${service.heroObjectPosition ?? "object-center"}`}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/15" />
        <div className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">
            Graham Power Washing
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            {service.name}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-white/90 sm:text-xl">
            Plymouth · South Shore · Cape Cod
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-slate-700">
          {service.intro}
        </p>

        {/* Real work gallery */}
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

        {/* Benefits */}
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
        </section>

        {/* Process */}
        <section className="mt-20">
          <h2 className="text-center text-3xl font-bold text-slate-950">
            {service.processTitle}
          </h2>
          <ol className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-2">
            {service.process.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-slate-950 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-1 leading-relaxed text-slate-600">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Highlight */}
        <section className="mt-20 border-y border-slate-200 py-14">
          <h2 className="text-center text-3xl font-bold text-slate-950">
            {service.highlightTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-relaxed text-slate-700">
            {service.highlightBody}
          </p>
        </section>

        {/* CTA */}
        <div className="mt-16 bg-slate-950 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <h3 className="text-3xl font-bold">Request a Free Quote</h3>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            Tell us your town and what needs cleaning. We&apos;ll follow up with
            clear next steps — no pressure.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/quote"
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

        {/* FAQ */}
        <section className="mt-20 mb-8" id="faq">
          <h2 className="text-center text-3xl font-bold text-slate-950">
            {service.shortName} FAQs
          </h2>
          <div className="mx-auto mt-10 max-w-3xl space-y-8 text-lg text-slate-700">
            {service.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-bold text-slate-950">{faq.question}</h3>
                <p className="mt-2 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            description: service.metaDescription,
            provider: {
              "@type": "Organization",
              name: "Graham Power Washing",
              url: "https://www.grahampowerwashing.com",
              telephone: "7744877616",
            },
            areaServed: [
              { "@type": "Place", name: "Plymouth, Massachusetts" },
              { "@type": "Place", name: "South Shore, Massachusetts" },
              { "@type": "Place", name: "Cape Cod, Massachusetts" },
            ],
            serviceType: service.serviceType,
            url,
            image: `https://www.grahampowerwashing.com${service.heroImage}`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
