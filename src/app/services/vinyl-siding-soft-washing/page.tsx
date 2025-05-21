// pages/vinyl-siding-soft-washing.tsx
"use client";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function VinylSidingSoftWashing() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  return (
    <>
      <Head>
        <title>Vinyl Siding Soft Washing | Graham Power Washing</title>
        <meta
          name="description"
          content="Professional vinyl siding soft washing services by Graham Power Washing. We use a low-pressure method to clean siding safely and effectively."
        />
        <meta
          name="keywords"
          content="vinyl siding soft washing, house washing, siding cleaning, soft washing service, low pressure washing, exterior cleaning, Graham Power Washing"
        />
        <link
          rel="canonical"
          href="https://grahampowerwashing.com/vinyl-siding-soft-washing"
        />
        <meta
          property="og:title"
          content="Vinyl Siding Soft Washing | Graham Power Washing"
        />
        <meta
          property="og:description"
          content="Vinyl siding soft washing using low-pressure techniques. Safe, effective, and environmentally responsible cleaning by Graham Power Washing."
        />
        <meta
          property="og:url"
          content="https://grahampowerwashing.com/vinyl-siding-soft-washing"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://grahampowerwashing.com/images/soft-wash.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Vinyl Siding Soft Washing",
            description:
              "Graham Power Washing provides professional soft washing services for vinyl siding using low-pressure techniques and eco-conscious solutions.",
            provider: {
              "@type": "Organization",
              name: "Graham Power Washing",
              url: "https://grahampowerwashing.com",
            },
            areaServed: {
              "@type": "Place",
              name: "South Shore, Massachusetts",
            },
            serviceType: "Soft Washing",
          })}
        </script>
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Hero Image with gradient overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[500px] w-full overflow-hidden rounded-3xl shadow-xl mb-16"
        >
          <Image
            src="/vinyl-siding-soft-wash.png"
            alt="Vinyl Siding Soft Washing"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
          <div className="absolute bottom-10 left-10 z-20">
            <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
              Vinyl Siding Soft Washing
            </h1>
          </div>
        </motion.div>

        {/* Intro */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto mb-16 text-center"
        >
          Our soft washing method is a safe, low-pressure solution designed to
          restore vinyl siding without damaging surfaces. It effectively removes
          organic buildup, stains, and mildew—leaving your exterior clean and
          protected.
        </motion.p>

        {/* Benefits */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-10">
            Why Choose Soft Washing?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-lg text-gray-700 max-w-4xl mx-auto">
            {[
              "Low-pressure, surface-safe application",
              "Removes algae, mildew, and organic buildup",
              "Eco-friendly, biodegradable cleaning agents",
              "Helps extend the life of your siding",
            ].map((item, i) => (
              <motion.li
                key={i}
                className="relative pl-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring" }}
              >
                <span className="absolute left-0 top-1 text-blue-600 text-xl">
                  ✓
                </span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Process */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-10">
            Our Process
          </h2>
          <div className="max-w-3xl mx-auto text-gray-700 text-lg space-y-6">
            <p>
              <strong>1. Evaluation:</strong> We begin with a full inspection of
              your siding to identify areas of buildup, stains, or wear.
            </p>
            <p>
              <strong>2. Pre-treatment:</strong> Eco-safe detergents are applied
              to break down contaminants and organic matter.
            </p>
            <p>
              <strong>3. Soft Wash:</strong> We use a low-pressure rinse to
              gently lift away dirt without harming the surface.
            </p>
            <p>
              <strong>4. Final Check:</strong> Our team ensures consistent
              results and full coverage before wrapping up.
            </p>
          </div>
        </motion.section>

        {/* Quality Statement */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mb-24"
        >
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-10">
            Commitment to Quality
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
            Graham Power Washing delivers results with integrity, care, and
            technical precision. We treat every home as our own—protecting your
            investment and ensuring your exterior looks its best.
          </p>
        </motion.section>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="bg-gradient-to-tr from-blue-700 to-blue-500 text-white p-12 rounded-3xl shadow-2xl text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Request a Quote</h3>
          <p className="mb-6 text-lg opacity-90">
            Contact us today to receive a free, no-obligation quote. Our team
            will follow up promptly with availability and details.
          </p>
          <Link
            href="/quote"
            className="inline-block bg-white text-blue-700 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Get a Quote
          </Link>
        </motion.div>

        {/* FAQ Section for SEO */}
        <section className="mb-24 mt-5" id="faq">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-10">
            Vinyl Siding Soft Washing FAQs
          </h2>
          <div className="max-w-3xl mx-auto text-gray-700 text-lg space-y-6">
            <div>
              <h3 className="font-bold">
                How often should vinyl siding be soft washed?
              </h3>
              <p>
                Most homes benefit from soft washing every 1–2 years, but shaded
                or damp areas may need more frequent cleaning to prevent algae
                and mildew.
              </p>
            </div>
            <div>
              <h3 className="font-bold">
                Is soft washing safe for all types of vinyl siding?
              </h3>
              <p>
                Yes. Our low-pressure process is safe for all vinyl siding types
                and colors, and will not cause warping or damage.
              </p>
            </div>
            <div>
              <h3 className="font-bold">
                Will soft washing remove green algae and black streaks?
              </h3>
              <p>
                Absolutely. Our eco-friendly detergents and soft wash technique
                remove algae, mildew, and stains for a like-new appearance.
              </p>
            </div>
          </div>
        </section>

        {/* FAQPage Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How often should vinyl siding be soft washed?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most homes benefit from soft washing every 1–2 years, but shaded or damp areas may need more frequent cleaning to prevent algae and mildew.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is soft washing safe for all types of vinyl siding?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Our low-pressure process is safe for all vinyl siding types and colors, and will not cause warping or damage.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Will soft washing remove green algae and black streaks?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. Our eco-friendly detergents and soft wash technique remove algae, mildew, and stains for a like-new appearance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How soon can I paint or touch up my siding after soft washing?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We recommend waiting until the siding is fully dry—usually 24–48 hours—before painting or making repairs after a soft wash.",
                  },
                },
              ],
            }),
          }}
        />
      </main>
    </>
  );
}
