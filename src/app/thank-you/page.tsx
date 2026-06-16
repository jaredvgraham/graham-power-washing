import React from "react";
import Link from "next/link";
import MetaPixelLead from "@/components/MetaPixelLead";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
      <MetaPixelLead />
      <div className="bg-white p-8 rounded-3xl border border-red-100 shadow-sm text-center max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-red-600">Thank You!</h1>
        <p className="text-lg mb-6 text-slate-700">
          Your quote request has been submitted successfully.
          <br />
          We appreciate your interest and will get back to you soon.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
