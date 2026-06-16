"use client";

import axios, { isAxiosError } from "axios";
import { useState, useRef } from "react";
import { type PutBlobResult } from "@vercel/blob";
import { upload } from "@vercel/blob/client";
import { useRouter } from "next/navigation";
import { FaPaperclip, FaTrash } from "react-icons/fa";
import { Lock, MapPin, Phone, ShieldCheck } from "lucide-react";
import { clientData } from "@/../config";

function formatPhoneDisplay(digits: string) {
  const d = digits.replace(/\D/g, "");
  if (d.length === 10) {
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  }
  return digits;
}

const TRUST_BULLETS = [
  "Serving Plymouth County & Cape Cod",
  "Licensed & insured",
  "Free quote with no obligation",
  "Safe soft washing for siding, decks, patios, and walkways",
  "Interior & exterior painting available",
  "Fast local response — real people, not a call center",
] as const;

const TRUST_PILLARS = [
  {
    icon: ShieldCheck,
    title: "Licensed & insured",
    body: "We carry the insurance and credentials you expect from a professional exterior cleaning company. Ask us anything before work is scheduled.",
  },
  {
    icon: Lock,
    title: "Your privacy matters",
    body: "This form is secure (HTTPS). We use what you send only to follow up about your quote and answer questions — no unnecessary follow-up.",
  },
  {
    icon: MapPin,
    title: "Truly local",
    body: `Based in ${clientData.address.city}, ${clientData.address.state} — we know Plymouth County & Cape Cod properties firsthand.`,
  },
] as const;

const STEPS = [
  {
    title: "Tell us what needs cleaning",
    body: "A few quick details are all we need to get started.",
  },
  {
    title: "We review the details",
    body: "We look over your request so we can price it fairly.",
  },
  {
    title: "We contact you with a fast quote",
    body: "You’ll hear from us with next steps - no pressure.",
  },
] as const;

const SERVICE_CHECKBOXES = [
  "House Wash",
  "Deck Cleaning",
  "Walkway Cleaning",
  "Porch Cleaning",
  "Patio Cleaning",
  "Shed Wash",
  "Fence Cleaning",
  "Stone Wall Cleaning",
  "Exterior Painting",
  "Interior Painting",
] as const;

const HOW_FOUND_OPTIONS = [
  "Google search",
  "Facebook",
  "Instagram",
  "Yard sign or saw our truck",
  "Friend or neighbor referral",
  "Previous customer",
  "Other",
] as const;

/** Slate surfaces + brighter blue accents (CTAs, links, focus) */
const ctaClasses =
  "inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3.5 text-center text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto";

const GetAiQuote = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    town: "",
    howYouFoundUs: "",
    howYouFoundUsOther: "",
    options: [] as string[],
    images: [] as File[],
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    if (formData.options.length === 0) {
      setErrorMessage(
        "Please select at least one service you're interested in.",
      );
      setIsSubmitting(false);
      return;
    }

    const howYouFoundUs =
      formData.howYouFoundUs === "Other"
        ? formData.howYouFoundUsOther.trim()
        : formData.howYouFoundUs.trim();

    if (!howYouFoundUs) {
      setErrorMessage("Please tell us how you found us.");
      setIsSubmitting(false);
      return;
    }

    try {
      const uploadedBlobUrls = await Promise.all(
        formData.images.map(async (file) => {
          const newBlob: PutBlobResult = await upload(file.name, file, {
            access: "public",
            handleUploadUrl: "/api/avatar/upload",
          });
          return newBlob.url;
        }),
      );

      await axios.post("/api/admin/quote", {
        name: formData.name.trim(),
        town: formData.town.trim(),
        phone: formData.phone.trim(),
        howYouFoundUs,
        ...(formData.email.trim() ? { email: formData.email.trim() } : {}),
        phoneNumber: formData.phone.trim(),
      });

      await axios.post("/api/quote/wash", {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        town: formData.town.trim(),
        howYouFoundUs,
        message: formData.message.trim(),
        imageUrls: uploadedBlobUrls,
        options: formData.options,
      });

      router.push("/thank-you");
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response?.data);
        const data = error.response?.data as
          | { details?: string; error?: string }
          | undefined;
        setErrorMessage(
          data?.details ||
            data?.error ||
            "Something went wrong. Please try again.",
        );
      } else {
        setErrorMessage("An unexpected error occurred");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setFormData((prevState) => ({
        ...prevState,
        images: [...prevState.images, ...filesArray],
      }));
    }
  };

  const removeImage = (index: number) => {
    setFormData((prevState) => ({
      ...prevState,
      images: prevState.images.filter((_, i) => i !== index),
    }));
  };

  const handleOptionChange = (option: string) => {
    setFormData((prevState) => {
      const next = prevState.options.includes(option)
        ? prevState.options.filter((o) => o !== option)
        : [...prevState.options, option];
      return { ...prevState, options: next };
    });
  };

  const inputClasses =
    "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm placeholder:text-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20";
  const labelClasses =
    "mb-2 block text-sm font-semibold tracking-tight text-slate-700";

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_min(440px,42%)] lg:gap-12 lg:items-start">
          <div className="space-y-8 lg:max-w-xl">
            <header className="space-y-5 text-left">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Graham Power Washing
              </p>
              <h1 className="text-3xl font-normal tracking-tight text-slate-900 sm:text-4xl lg:text-[2.35rem] lg:leading-tight">
                <span className="text-red-500 font-bold">Soft Wash</span>{" "}
                Special for Plymouth County &amp; Cape Cod Homes
              </h1>
              <p className="text-lg leading-relaxed text-slate-600">
                Get a fast, free exterior cleaning quote for siding, decks,
                patios, walkways, and more.
              </p>
              <p className="leading-relaxed text-slate-600">
                Safe low-pressure cleaning for algae, mildew, dirt, and grime —
                without damaging your home&apos;s exterior.
              </p>
              <a href="#quote-form" className={ctaClasses}>
                Request My Free Estimate
              </a>
              <ul className="grid gap-3 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-3">
                {TRUST_BULLETS.map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm leading-snug text-slate-600 shadow-sm"
                  >
                    <span
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <p className="border-l-2 border-slate-300 pl-3 text-xs leading-relaxed text-slate-500">
                {clientData.name} — same team homeowners rely on across the
                South Shore and Cape Cod.
              </p>
            </header>

            <div
              className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6"
              aria-labelledby="trust-pillars-heading"
            >
              <h2
                id="trust-pillars-heading"
                className="mb-4 border-b border-slate-200 pb-3 text-sm font-semibold uppercase tracking-wide text-slate-500"
              >
                What you can expect from us
              </h2>
              <ul className="grid gap-4 sm:grid-cols-3 sm:gap-5">
                {TRUST_PILLARS.map(({ icon: Icon, title, body }) => (
                  <li key={title} className="flex gap-3 sm:flex-col sm:gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
                How it works
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {STEPS.map((step, i) => (
                  <div
                    key={step.title}
                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white shadow-sm">
                      {i + 1}
                    </div>
                    <h3 className="mb-1.5 text-sm font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="quote-form" className="scroll-mt-24 lg:scroll-mt-28">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-5 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-medium">
                  <Lock className="h-3.5 w-3.5 text-slate-500" aria-hidden />
                  Secure form
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-medium">
                  <ShieldCheck
                    className="h-3.5 w-3.5 text-slate-500"
                    aria-hidden
                  />
                  Licensed & insured
                </span>
              </div>
              <div className="mb-6 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-5">
                <p className="text-sm leading-relaxed text-slate-600">
                  Local exterior cleaning for homeowners across Plymouth County
                  and Cape Cod.
                </p>
                <a
                  href={`tel:${clientData.phone}`}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 underline decoration-slate-300 underline-offset-2 transition hover:text-blue-800 hover:decoration-blue-600"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden />
                  Prefer to call? {formatPhoneDisplay(clientData.phone)}
                </a>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={inputClasses}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    inputMode="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={inputClasses}
                    placeholder="Best phone number"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="town" className={labelClasses}>
                    Town
                  </label>
                  <input
                    type="text"
                    id="town"
                    name="town"
                    autoComplete="address-level2"
                    value={formData.town}
                    onChange={(e) =>
                      setFormData({ ...formData, town: e.target.value })
                    }
                    className={inputClasses}
                    placeholder="Plymouth, Sandwich, Bourne, etc."
                    required
                  />
                </div>
                <div>
                  <span id="services-label" className={labelClasses}>
                    Service interested in
                  </span>
                  <p className="mb-3 text-xs text-slate-500">
                    Select all that apply — e.g. house wash, deck, patio,
                    walkway…
                  </p>
                  <div
                    className="grid grid-cols-2 gap-3 md:grid-cols-3"
                    role="group"
                    aria-labelledby="services-label"
                  >
                    {SERVICE_CHECKBOXES.map((option) => (
                      <label
                        key={option}
                        className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50/80"
                      >
                        <input
                          type="checkbox"
                          value={option}
                          checked={formData.options.includes(option)}
                          onChange={() => handleOptionChange(option)}
                          className="h-4 w-4 shrink-0 rounded border-slate-300 text-blue-600 accent-blue-600 focus:ring-blue-500/30"
                        />
                        <span className="text-sm font-medium capitalize text-slate-700">
                          {option.replace(/-/g, " ")}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="howYouFoundUs" className={labelClasses}>
                    How did you find us?
                  </label>
                  <select
                    id="howYouFoundUs"
                    name="howYouFoundUs"
                    value={formData.howYouFoundUs}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        howYouFoundUs: e.target.value,
                        howYouFoundUsOther: "",
                      })
                    }
                    className={inputClasses}
                    required
                  >
                    <option value="">Select one…</option>
                    {HOW_FOUND_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {formData.howYouFoundUs === "Other" && (
                    <input
                      type="text"
                      id="howYouFoundUsOther"
                      name="howYouFoundUsOther"
                      value={formData.howYouFoundUsOther}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          howYouFoundUsOther: e.target.value,
                        })
                      }
                      className={`${inputClasses} mt-3`}
                      placeholder="Please tell us how you heard about us"
                      required
                    />
                  )}
                </div>
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email{" "}
                    <span className="font-normal text-slate-500">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={inputClasses}
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className={labelClasses}>
                    Message{" "}
                    <span className="font-normal text-slate-500">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    className={`${inputClasses} min-h-[100px] resize-y`}
                    placeholder="Anything else we should know?"
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
                <div className="border-t border-slate-100 pt-5">
                  <label htmlFor="images" className={labelClasses}>
                    Optional: Upload photos if you want a more accurate
                    estimate.
                  </label>
                  <div
                    role="button"
                    tabIndex={0}
                    aria-label="Optional: upload project photos"
                    className="mt-2 flex cursor-pointer justify-center rounded-lg border-2 border-dashed border-slate-200 bg-slate-50/80 px-4 py-8 transition hover:border-slate-300 hover:bg-white"
                    onClick={() => inputFileRef.current?.click()}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        inputFileRef.current?.click();
                      }
                    }}
                  >
                    <div className="space-y-1 text-center">
                      <FaPaperclip className="mx-auto h-10 w-10 text-slate-400" />
                      <p className="text-sm text-slate-600">
                        Tap to add photos — not required
                      </p>
                      <p className="text-xs text-slate-500">
                        PNG, JPG, GIF up to 10MB each
                      </p>
                    </div>
                  </div>
                  <input
                    ref={inputFileRef}
                    type="file"
                    id="images"
                    multiple
                    onChange={handleFileChange}
                    className="sr-only"
                    accept="image/*"
                  />
                  {formData.images.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {formData.images.map((file, index) => (
                        <div
                          key={`${file.name}-${index}`}
                          className="relative group"
                        >
                          <img
                            src={URL.createObjectURL(file)}
                            alt=""
                            className="h-24 w-full rounded-lg object-cover"
                          />
                          <button
                            type="button"
                            className="absolute right-1 top-1 rounded-full bg-slate-700 p-1.5 text-white opacity-90 shadow transition hover:bg-slate-800 hover:opacity-100"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeImage(index);
                            }}
                            aria-label={`Remove ${file.name}`}
                          >
                            <FaTrash size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="pt-1">
                  {errorMessage && (
                    <div className="mt-4 rounded-lg border border-slate-200 bg-slate-100 p-4 text-sm text-slate-800">
                      {errorMessage}
                    </div>
                  )}
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending…" : "Request My Free Estimate"}
                  </button>
                  <p className="mt-3 text-center text-xs leading-relaxed text-slate-500">
                    No obligation. We&apos;ll only use your info to follow up
                    about your quote.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAiQuote;
