import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock3, Home, MessageSquareText } from "lucide-react";
import MetaPixelLead from "@/components/MetaPixelLead";

export const metadata: Metadata = {
  title: "Thank You | Graham Power Washing",
  description:
    "Your free quote request was received. Graham Power Washing will follow up soon.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-slate-100">
      <MetaPixelLead />

      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.45) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-red-200/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 right-0 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-md flex-col justify-center px-4 py-12">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5">
          <div className="bg-slate-950 px-6 py-5 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-red-300">
              Plymouth · South Shore · Cape Cod
            </p>
            <p className="mt-2 text-lg font-bold tracking-tight">
              <span className="text-red-400">Graham</span>{" "}
              <span className="text-blue-300">Power Washing</span>
            </p>
          </div>
          <div className="h-1 bg-red-600" aria-hidden />

          <div className="px-6 py-8 text-center sm:px-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 ring-8 ring-red-50">
              <CheckCircle2
                className="h-8 w-8 text-red-600"
                strokeWidth={2.25}
                aria-hidden
              />
            </div>

            <h1 className="mt-5 text-3xl font-black tracking-tight text-slate-900">
              Thank you!
            </h1>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Your free quote request is in. We&apos;ll review the details and
              get back to you soon — usually within the same day.
            </p>

            <ul className="mt-7 space-y-3 text-left">
              <li className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                <MessageSquareText
                  className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
                  aria-hidden
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Request received
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                    Your info was sent securely to our local team.
                  </p>
                </div>
              </li>
              <li className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                <Clock3
                  className="mt-0.5 h-5 w-5 shrink-0 text-red-600"
                  aria-hidden
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    We&apos;ll follow up next
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                    Keep an eye on your phone — we&apos;ll reach out with your
                    quote.
                  </p>
                </div>
              </li>
            </ul>

            <Link
              href="/"
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
            >
              <Home className="h-4 w-4" aria-hidden />
              Back to home
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Licensed &amp; insured · Serving Plymouth County, the South Shore
          &amp; Cape Cod
        </p>
      </div>
    </div>
  );
}
