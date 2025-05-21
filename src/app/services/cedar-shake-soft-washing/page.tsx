// pages/cedar-shake-soft-washing.tsx
"use client";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CedarShakeSoftWashing() {
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
        <title>Cedar Shake Soft Washing | Graham Power Washing</title>
        <meta
          name="description"
          content="Professional cedar shake soft washing services by Graham Power Washing. Low-pressure cleaning tailored for delicate wood surfaces, including painted cedar siding."
        />
        <meta
          name="keywords"
          content="cedar shake soft washing, painted cedar shake, wood siding cleaning, soft washing service, low pressure cleaning, exterior wood care, Graham Power Washing"
        />
        <link
          rel="canonical"
          href="https://grahampowerwashing.com/cedar-shake-soft-washing"
        />
        <meta
          property="og:title"
          content="Cedar Shake Soft Washing | Graham Power Washing"
        />
        <meta
          property="og:description"
          content="Gentle and effective cedar shake soft washing by Graham Power Washing. Restore and protect your natural or painted cedar siding with expert care."
        />
        <meta
          property="og:url"
          content="https://grahampowerwashing.com/cedar-shake-soft-washing"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://grahampowerwashing.com/images/cedar-soft-wash.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Cedar Shake Soft Washing",
            description:
              "Graham Power Washing offers professional soft washing services specifically for cedar shake siding, including painted cedar, using safe, low-pressure techniques.",
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
          className="relative h-[500px] w-full overflow-hidden rounded-3xl shadow-xl mb-16 p-2"
        >
          <Image
            src="/cedar-shake-soft-wash.png"
            alt="Cedar Shake Soft Washing"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
          <div className="absolute bottom-10 left-10 z-20">
            <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
              Cedar Shake Soft Washing
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
          Cedar shake siding requires a delicate touch. Our soft washing process
          uses specialized low-pressure techniques and biodegradable solutions
          to clean and restore the natural beauty of cedar without causing
          damage to the wood grain. We also specialize in soft washing for
          painted cedar shake, using an approach that preserves the finish while
          effectively removing mildew, dirt, and buildup.
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
            Benefits of Cedar Shake Soft Washing
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-lg text-gray-700 max-w-4xl mx-auto">
            {[
              "Preserves the wood's natural or painted appearance",
              "Removes mold, mildew, and lichen growth",
              "Minimizes moisture retention and wood decay",
              "Gentle cleaning process for untreated and painted cedar",
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
              <strong>1. Inspection:</strong> We assess the condition of your
              cedar siding—including any painted areas—to identify problem
              spots.
            </p>
            <p>
              <strong>2. Pre-treatment:</strong> A tailored solution is applied
              to loosen dirt and organic buildup.
            </p>
            <p>
              <strong>3. Soft Wash:</strong> We use a low-pressure rinse safe
              for natural and painted cedar shake surfaces.
            </p>
            <p>
              <strong>4. Final Rinse:</strong> A final rinse ensures a clean,
              even result with no residue left behind.
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
            Built on Quality and Care
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
            At Graham Power Washing, our team is trained to care for natural and
            painted wood surfaces with precision and attention to detail. We use
            industry-standard techniques to ensure your cedar siding remains
            strong, beautiful, and protected.
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
            {`Reach out today to schedule a cedar soft wash—natural or painted—or
            request a free quote. We'll respond quickly with service details.`}
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
            Cedar Shake Soft Washing FAQs
          </h2>
          <div className="max-w-3xl mx-auto text-gray-700 text-lg space-y-6">
            <div>
              <h3 className="font-bold">
                How often should cedar shake siding be soft washed?
              </h3>
              <p>
                {` Most cedar shake siding benefits from soft washing every 1–2
                years, depending on exposure to shade, moisture, and organic
                buildup.`}
              </p>
            </div>
            <div>
              <h3 className="font-bold">
                Is soft washing safe for painted cedar shake?
              </h3>
              <p>
                Yes. Our process is gentle and designed to protect both natural
                and painted cedar surfaces, removing buildup without damaging
                the finish.
              </p>
            </div>
            <div>
              <h3 className="font-bold">
                Will soft washing remove mold and mildew?
              </h3>
              <p>
                Absolutely. Our biodegradable solutions and low-pressure rinse
                effectively remove mold, mildew, and lichen from cedar siding.
              </p>
            </div>
            <div>
              <h3 className="font-bold">
                How soon can I paint or seal my cedar after soft washing?
              </h3>
              <p>
                {` We recommend waiting until the wood is fully dry—usually 24–48
                hours—before painting or sealing after a soft wash.`}
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
                  name: "How often should cedar shake siding be soft washed?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most cedar shake siding benefits from soft washing every 1–2 years, depending on exposure to shade, moisture, and organic buildup.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is soft washing safe for painted cedar shake?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Our process is gentle and designed to protect both natural and painted cedar surfaces, removing buildup without damaging the finish.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Will soft washing remove mold and mildew?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. Our biodegradable solutions and low-pressure rinse effectively remove mold, mildew, and lichen from cedar siding.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How soon can I paint or seal my cedar after soft washing?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We recommend waiting until the wood is fully dry—usually 24–48 hours—before painting or sealing after a soft wash.",
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
