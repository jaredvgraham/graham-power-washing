import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  //
  return (
    <div className="bg-slate-50 py-20 sm:py-24">
      <div className="container mx-auto px-6 text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          Family-Owned
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          The <span className="text-red-600">Local Crew</span> Behind the{" "}
          <span className="text-blue-600">Quote</span>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Welcome to Graham Painting and Power-Washing, a family-owned power
          washing and painting company serving Plymouth MA, the South Shore, and
          Cape Cod. Brothers Justin and Jared provide professional house
          washing, pressure washing, soft washing, and interior &amp; exterior
          painting with the care homeowners expect from a local crew.
        </p>
      </div>
      <div className="container mx-auto grid gap-6 px-6 md:grid-cols-2 lg:max-w-5xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <Image
            src="/justin2.jpeg"
            alt="Justin Graham - Owner of Graham Power Washing, Plymouth MA"
            width={320}
            height={320}
            className="h-80 w-full rounded-2xl object-cover"
          />
          <h2 className="mt-5 text-2xl font-bold text-slate-950">Justin</h2>
          <p className="mt-2 leading-7 text-slate-600">
            Justin brings his extensive experience and keen eye for detail to
            every project, ensuring each job is completed to the highest
            standard.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <Image
            src="/me.jpg"
            alt="Jared Graham - of Graham Power Washing, Plymouth MA"
            width={300}
            height={300}
            className="h-80 w-full rounded-2xl object-cover"
          />
          <h2 className="mt-5 text-2xl font-bold text-slate-950">Jared</h2>
          <p className="mt-2 leading-7 text-slate-600">
            Jared&apos;s dedication and commitment to customer satisfaction
            shine through in his work, making sure every client is happy with
            the results.
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-12 px-6 text-center">
        <div className="mx-auto max-w-3xl rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
          <p className="leading-8 text-slate-600">
            At Graham Power-Washing, we believe in delivering exceptional
            results and building long-lasting relationships with our clients.
            Whether you need vinyl siding soft washing, concrete pressure
            washing, deck cleaning, patio washing, or fresh interior or exterior
            paint, we have the expertise and equipment to get the job done
            right.
          </p>
          <Link
            href="/quote"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3.5 text-base font-bold text-white shadow-sm transition hover:bg-red-700"
          >
            Talk With the Graham Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
