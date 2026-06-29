import type { Metadata } from "next";
import Link from "next/link";
import { clientData } from "@/../config";
import { phoneDisplay, phoneTelHref } from "@/lib/phone";

export const metadata: Metadata = {
  title: "Privacy Policy | Graham Painting Inc",
  description:
    "Privacy Policy for Graham Painting Inc. Learn how we collect, use, and protect your information when you request a quote or contact us.",
  alternates: {
    canonical: "https://www.grahampowerwashing.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-center text-4xl font-bold text-gray-900">
        Privacy Policy
      </h1>
      <p className="mb-10 text-center text-lg leading-relaxed text-gray-600">
        Graham Painting Inc (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;) respects your privacy. This policy explains how we
        collect and use information when you fill out a form, request a quote,
        send photos, or otherwise contact our business.
      </p>

      <div className="space-y-10 text-gray-700">
        <section aria-labelledby="information-we-collect">
          <h2
            id="information-we-collect"
            className="mb-4 border-b border-gray-200 pb-2 text-2xl font-semibold text-gray-900"
          >
            Information we collect
          </h2>
          <p className="mb-4 leading-relaxed">
            When you contact Graham Painting Inc or submit a request through our
            website, we may collect the following information:
          </p>
          <ul className="list-disc space-y-2 pl-6 leading-relaxed">
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Service address</li>
            <li>Photos of the property or project</li>
            <li>Details about the service you are interested in</li>
          </ul>
        </section>

        <section aria-labelledby="how-we-use-information">
          <h2
            id="how-we-use-information"
            className="mb-4 border-b border-gray-200 pb-2 text-2xl font-semibold text-gray-900"
          >
            How we use your information
          </h2>
          <p className="mb-4 leading-relaxed">
            We use the information you provide to:
          </p>
          <ul className="list-disc space-y-2 pl-6 leading-relaxed">
            <li>Respond to quote requests</li>
            <li>Contact you about your project</li>
            <li>Schedule services</li>
            <li>Provide estimates</li>
            <li>Improve customer service</li>
          </ul>
        </section>

        <section aria-labelledby="we-do-not-sell">
          <h2
            id="we-do-not-sell"
            className="mb-4 border-b border-gray-200 pb-2 text-2xl font-semibold text-gray-900"
          >
            We do not sell your information
          </h2>
          <p className="leading-relaxed">
            Graham Painting Inc does not sell your personal information to third
            parties.
          </p>
        </section>

        <section aria-labelledby="information-sharing">
          <h2
            id="information-sharing"
            className="mb-4 border-b border-gray-200 pb-2 text-2xl font-semibold text-gray-900"
          >
            When information may be shared
          </h2>
          <p className="leading-relaxed">
            Your information may only be shared when needed to provide services,
            operate our business, or comply with legal requirements.
          </p>
        </section>

        <section aria-labelledby="contact-consent">
          <h2
            id="contact-consent"
            className="mb-4 border-b border-gray-200 pb-2 text-2xl font-semibold text-gray-900"
          >
            Contact consent
          </h2>
          <p className="leading-relaxed">
            By submitting your information, you agree that Graham Painting Inc
            may contact you by phone, text, email, or message about your
            request.
          </p>
        </section>

        <section aria-labelledby="your-choices">
          <h2
            id="your-choices"
            className="mb-4 border-b border-gray-200 pb-2 text-2xl font-semibold text-gray-900"
          >
            Your choices
          </h2>
          <p className="mb-4 leading-relaxed">
            If you would like your information updated or deleted, please
            contact Graham Painting Inc using the information below.
          </p>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
            <p className="font-semibold text-gray-900">Graham Painting Inc</p>
            <p className="mt-2">
              Email:{" "}
              <a
                href={`mailto:${clientData.email}`}
                className="text-blue-700 underline hover:text-blue-800"
              >
                {clientData.email}
              </a>
            </p>
            <p className="mt-1">
              Phone:{" "}
              <a
                href={phoneTelHref}
                className="text-blue-700 underline hover:text-blue-800"
              >
                {phoneDisplay}
              </a>
            </p>
          </div>
        </section>
      </div>

      <p className="mt-12 border-t border-gray-200 pt-6 text-sm text-gray-500">
        Last updated: June 10, 2026
      </p>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="text-blue-700 font-semibold underline hover:text-blue-800"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}
