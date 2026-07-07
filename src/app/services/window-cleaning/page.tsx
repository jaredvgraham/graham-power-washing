import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Window Cleaning Plymouth MA | Interior & Exterior Window Washing | Graham Power Washing",
  description:
    "Professional window cleaning in Plymouth, MA, the South Shore, and Cape Cod. Streak-free interior & exterior window washing, screens, and sills. Licensed & insured. Free quotes.",
  keywords: [
    "window cleaning plymouth ma",
    "window cleaning near me",
    "window washing plymouth ma",
    "window washing near me",
    "residential window cleaning",
    "exterior window cleaning",
    "interior window cleaning",
    "window cleaning south shore ma",
    "window cleaning cape cod",
    "window cleaning kingston ma",
    "window cleaning duxbury ma",
    "window cleaning marshfield ma",
    "window cleaning sandwich ma",
    "window cleaning bourne ma",
    "screen cleaning",
    "streak free window cleaning",
    "graham power washing window cleaning",
  ],
  alternates: {
    canonical: "https://www.grahampowerwashing.com/services/window-cleaning",
  },
  openGraph: {
    title: "Window Cleaning in Plymouth MA | Graham Power Washing",
    description:
      "Streak-free interior & exterior window cleaning for homes and businesses in Plymouth, the South Shore, and Cape Cod. Free quotes.",
    url: "https://www.grahampowerwashing.com/services/window-cleaning",
    type: "website",
    images: [
      {
        url: "https://www.grahampowerwashing.com/window-cleaning.png",
        width: 1200,
        height: 900,
        alt: "Professional window cleaning in Plymouth MA",
      },
    ],
  },
};

const BENEFITS = [
  "Streak-free glass, inside and out",
  "Screens, sills, and tracks cleaned too",
  "Removes hard water spots, pollen, and salt haze",
  "Brightens your home and boosts curb appeal",
];

const FAQS = [
  {
    question: "How often should I have my windows professionally cleaned?",
    answer:
      "Most homes benefit from professional window cleaning twice a year — typically spring and fall. Coastal homes on the South Shore and Cape Cod may need more frequent cleaning due to salt spray and pollen buildup.",
  },
  {
    question: "Do you clean both the inside and outside of windows?",
    answer:
      "Yes. We offer exterior-only cleaning as well as full interior and exterior service, including screens, sills, and tracks. Choose whichever fits your needs and budget.",
  },
  {
    question: "Can you remove hard water stains and salt residue from glass?",
    answer:
      "In most cases, yes. Light mineral deposits and coastal salt haze come off with our standard process. Heavily etched glass may require specialty restoration, which we can evaluate during your free quote.",
  },
  {
    question: "Can window cleaning be combined with a house wash?",
    answer:
      "Absolutely — window cleaning pairs perfectly with our soft washing and power washing services. Bundling services in one visit is the most cost-effective way to refresh your home's entire exterior.",
  },
];

export default function WindowCleaning() {
  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="relative mb-16 h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl shadow-slate-300/60">
          <Image
            src="/window-cleaning.png"
            alt="Professional window cleaning service in Plymouth MA - streak-free window washing"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
          <div className="absolute left-0 top-0 z-10 h-1.5 w-full bg-red-600" />
          <div className="absolute bottom-10 left-10 z-20">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
              Graham Power Washing
            </p>
            <h1 className="text-4xl font-black text-white drop-shadow-lg sm:text-5xl">
              Window Cleaning
            </h1>
          </div>
        </div>

        {/* Intro */}
        <p className="mx-auto mb-16 max-w-3xl text-center text-xl leading-relaxed text-slate-700">
          Crystal-clear, streak-free windows for homes and businesses in
          Plymouth, the South Shore, and Cape Cod. Our professional window
          cleaning removes dirt, pollen, hard water spots, and coastal salt
          haze — so you get more light in and a better view out.
        </p>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="mb-10 text-center text-3xl font-bold text-slate-950">
            Benefits of Professional Window Cleaning
          </h2>
          <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-5 text-lg text-slate-700 sm:grid-cols-2">
            {BENEFITS.map((item) => (
              <li
                key={item}
                className="relative rounded-2xl border border-slate-200 bg-white p-5 pl-12 shadow-sm"
              >
                <span className="absolute left-5 top-5 text-xl text-red-600">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Process */}
        <section className="mb-20">
          <h2 className="mb-10 text-center text-3xl font-bold text-slate-950">
            Our Window Cleaning Process
          </h2>
          <div className="mx-auto max-w-3xl space-y-6 rounded-3xl border border-slate-200 bg-white p-6 text-lg text-slate-700 shadow-sm">
            <p>
              <strong>1. Inspection:</strong> We assess your windows, screens,
              and frames, and note any hard water stains or problem areas.
            </p>
            <p>
              <strong>2. Screen &amp; Track Cleaning:</strong> Screens are
              removed and washed, and sills and tracks are cleared of dirt and
              debris.
            </p>
            <p>
              <strong>3. Wash &amp; Squeegee:</strong> Each pane is hand-washed
              with professional solution and squeegeed for a streak-free
              finish.
            </p>
            <p>
              <strong>4. Detail &amp; Final Check:</strong> Edges are detailed,
              frames wiped down, and every window checked before we leave.
            </p>
          </div>
        </section>

        {/* Pairing */}
        <section className="mb-24">
          <h2 className="mb-10 text-center text-3xl font-bold text-slate-950">
            The Perfect Finish to a House Wash
          </h2>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-slate-700">
            Window cleaning pairs perfectly with our{" "}
            <Link
              href="/services/vinyl-siding-soft-washing"
              className="font-semibold text-blue-700 hover:underline"
            >
              house soft washing
            </Link>{" "}
            and{" "}
            <Link
              href="/services/concrete-pressure-washing"
              className="font-semibold text-blue-700 hover:underline"
            >
              pressure washing
            </Link>{" "}
            services. Bundle them in one visit and your whole home exterior —
            siding, surfaces, and glass — looks brand new.
          </p>
        </section>

        {/* CTA */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 p-8 text-center text-white shadow-2xl sm:p-12">
          <h3 className="mb-4 text-3xl font-bold">Request a Quote</h3>
          <p className="mb-6 text-lg opacity-90">
            Get in touch today to schedule your window cleaning or request a
            free estimate. Our team is here to help.
          </p>
          <Link
            href="/quote"
            className="inline-block rounded-full bg-red-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-red-700"
          >
            Get a Quote
          </Link>
        </div>

        {/* FAQ Section for SEO */}
        <section className="mb-24 mt-5" id="faq">
          <h2 className="mb-10 text-center text-3xl font-bold text-slate-950">
            Window Cleaning FAQs
          </h2>
          <div className="mx-auto max-w-3xl space-y-6 text-lg text-slate-700">
            {FAQS.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-bold">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Window Cleaning",
              description:
                "Graham Power Washing provides professional interior and exterior window cleaning for homes and businesses in Plymouth, the South Shore, and Cape Cod — including screens, sills, and tracks.",
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
              serviceType: "Window Cleaning",
              url: "https://www.grahampowerwashing.com/services/window-cleaning",
            }),
          }}
        />

        {/* FAQPage Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQS.map((faq) => ({
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
    </>
  );
}
