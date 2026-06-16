// pages/concrete-pressure-washing.tsx
"use client";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ConcretePressureWashing() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.06,
        duration: 0.35,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <Head>
        <title>Concrete Pressure Washing | Graham Power Washing</title>
        <meta
          name="description"
          content="Professional concrete pressure washing by Graham Power Washing. Restore the look of driveways, walkways, patios, and more."
        />
        <meta
          name="keywords"
          content="concrete pressure washing, driveway cleaning, patio cleaning, walkway pressure wash, concrete surface cleaning, Graham Power Washing"
        />
        <link
          rel="canonical"
          href="https://grahampowerwashing.com/concrete-pressure-washing"
        />
        <meta
          property="og:title"
          content="Concrete Pressure Washing | Graham Power Washing"
        />
        <meta
          property="og:description"
          content="Concrete pressure washing services for driveways, sidewalks, patios, and more. Safe and effective cleaning from Graham Power Washing."
        />
        <meta
          property="og:url"
          content="https://grahampowerwashing.com/concrete-pressure-washing"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://grahampowerwashing.com/images/concrete-wash.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Concrete Pressure Washing",
            description:
              "Graham Power Washing provides expert pressure washing for concrete surfaces including driveways, patios, walkways, and more.",
            provider: {
              "@type": "Organization",
              name: "Graham Power Washing",
              url: "https://grahampowerwashing.com",
            },
            areaServed: {
              "@type": "Place",
              name: "South Shore, Massachusetts",
            },
            serviceType: "Pressure Washing",
          })}
        </script>
      </Head>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl shadow-slate-300/60 mb-16"
        >
          <Image
            src="/concrete-pressure-wash.png"
            alt="Concrete Pressure Washing"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent z-10" />
          <div className="absolute left-0 top-0 z-10 h-1.5 w-full bg-red-600" />
          <div className="absolute bottom-10 left-10 z-20">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
              Graham Power Washing
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-white drop-shadow-lg">
              Concrete Pressure Washing
            </h1>
          </div>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto mb-16 text-center"
        >
          {` Dirty or stained concrete can drag down your home's curb appeal. Our
          concrete pressure washing service restores a like-new appearance to
          driveways, walkways, patios, and more—safely and effectively.`}
        </motion.p>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-slate-950 mb-10">
            Benefits of Concrete Pressure Washing
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-lg text-slate-700 max-w-4xl mx-auto">
            {[
              "Eliminates years of built-up grime and stains",
              "Improves curb appeal and property value",
              "Removes slippery algae and mildew",
              "Prepares surface for sealing or treatment",
            ].map((item, i) => (
              <motion.li
                key={i}
                className="relative rounded-2xl border border-slate-200 bg-white p-5 pl-12 shadow-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring" }}
              >
                <span className="absolute left-5 top-5 text-red-600 text-xl">
                  ✓
                </span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-slate-950 mb-10">
            Our Cleaning Process
          </h2>
          <div className="max-w-3xl mx-auto rounded-3xl border border-slate-200 bg-white p-6 text-slate-700 text-lg space-y-6 shadow-sm">
            <p>
              <strong>1. Evaluation:</strong> We assess the concrete surface to
              identify stains, buildup, or sensitive areas.
            </p>
            <p>
              <strong>2. Pretreatment:</strong> Stain removers and degreasers
              are applied to penetrate deep into porous surfaces.
            </p>
            <p>
              <strong>3. Pressure Wash:</strong> High-powered cleaning removes
              embedded contaminants and restores surface brightness.
            </p>
            <p>
              <strong>4. Rinse & Finish:</strong> A final rinse clears residue
              and readies the concrete for sealing if desired.
            </p>
          </div>
        </motion.section>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-center text-slate-950 mb-10">
            Clean Surfaces, Lasting Results
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto text-center leading-relaxed">
            {`Whether you're preparing for a home sale, sealing concrete, or just
            want to refresh your outdoor space, our team delivers results that
            speak for themselves.`}
          </p>
        </motion.section>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 text-white p-8 sm:p-12 rounded-3xl shadow-2xl text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Request a Quote</h3>
          <p className="mb-6 text-lg opacity-90">
            Reach out today to schedule concrete pressure washing or get a
            personalized quote.
          </p>
          <Link
            href="/quote"
            className="inline-block bg-red-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-red-700 transition"
          >
            Get a Quote
          </Link>
        </motion.div>

        {/* FAQ Section for SEO */}
        <section className="mb-24 mt-5" id="faq">
          <h2 className="text-3xl font-bold text-center text-slate-950 mb-10">
            Concrete Pressure Washing FAQs
          </h2>
          <div className="max-w-3xl mx-auto text-slate-700 text-lg space-y-6">
            <div>
              <h3 className="font-bold">
                How often should I have my concrete surfaces pressure washed?
              </h3>
              <p>
                Most driveways, walkways, and patios benefit from annual
                cleaning, but high-traffic or heavily stained areas may need
                more frequent service.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Is pressure washing safe for all types of concrete?
              </h3>
              <p>
                Yes. We adjust our equipment and cleaning solutions to safely
                clean all types of concrete, including stamped, colored, and
                exposed aggregate.
              </p>
            </div>
            <div>
              <h3 className="font-bold">
                How soon can I use my concrete after cleaning?
              </h3>
              <p>
                {`Your concrete is ready for use as soon as it's dry—usually
                within a few hours after we finish.`}
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
                  name: "How often should I have my concrete surfaces pressure washed?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most driveways, walkways, and patios benefit from annual cleaning, but high-traffic or heavily stained areas may need more frequent service.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Will pressure washing remove oil stains from my driveway?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pressure washing can remove many surface stains, but deep oil stains may require special treatment. We use degreasers and stain removers for best results.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is pressure washing safe for all types of concrete?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. We adjust our equipment and cleaning solutions to safely clean all types of concrete, including stamped, colored, and exposed aggregate.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How soon can I use my concrete after cleaning?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Your concrete is ready for use as soon as it's dry—usually within a few hours after we finish.",
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
