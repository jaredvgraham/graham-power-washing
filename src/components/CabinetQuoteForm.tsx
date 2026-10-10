"use client";

import axios, { isAxiosError } from "axios";
import { useRef, useState } from "react";
import { type PutBlobResult } from "@vercel/blob";
import { upload } from "@vercel/blob/client";
import { useRouter } from "next/navigation";
import { FaPaperclip, FaTrash } from "react-icons/fa";
import { Lock, Phone, ShieldCheck } from "lucide-react";
import { clientData } from "@/../config";
import { formatPhoneDisplay, phoneTelHref } from "@/lib/phone";

export const CABINET_SERVICES = [
  {
    value: "Kitchen Cabinet Painting & Refinishing",
    title: "Cabinet painting & refinishing",
    detail: "Doors, drawers, and frames",
  },
  {
    value: "Cabinet Painting + Tile Backsplash Package",
    title: "Cabinet + backsplash package",
    detail: "Refinished cabinets and new tile",
  },
  {
    value: "Interior Painting",
    title: "Interior painting",
    detail: "Walls, ceilings, trim, and doors",
  },
] as const;

export type CabinetServiceValue = (typeof CABINET_SERVICES)[number]["value"];

function cabinetLeadSource(search: string): string {
  const params = new URLSearchParams(search);
  const utm = `${params.get("utm_source") || ""} ${params.get("utm_medium") || ""} ${params.get("utm_campaign") || ""}`.toLowerCase();

  if (utm.includes("instagram") || /\big\b/.test(utm)) {
    return "Meta Ad · Instagram · Cabinet";
  }
  if (utm.includes("facebook") || /\bfb\b/.test(utm)) {
    return "Meta Ad · Facebook · Cabinet";
  }
  return "Meta Ad · Cabinet Quote";
}

type CabinetQuoteFormProps = {
  selectedService?: CabinetServiceValue | "";
  onServiceChange?: (service: CabinetServiceValue) => void;
};

export default function CabinetQuoteForm({
  selectedService = "",
  onServiceChange,
}: CabinetQuoteFormProps) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [town, setTown] = useState("");
  const [service, setService] = useState<CabinetServiceValue | "">(
    selectedService,
  );
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const activeService = onServiceChange ? selectedService : service;

  const chooseService = (value: CabinetServiceValue) => {
    setService(value);
    onServiceChange?.(value);
    setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!activeService) {
      setErrorMessage("Choose the estimate you want and we’ll take it from there.");
      return;
    }

    setIsSubmitting(true);

    const howYouFoundUs =
      typeof window === "undefined"
        ? "Meta Ad · Cabinet Quote"
        : cabinetLeadSource(window.location.search);

    try {
      const uploadedBlobUrls = await Promise.all(
        images.map(async (file) => {
          const newBlob: PutBlobResult = await upload(file.name, file, {
            access: "public",
            handleUploadUrl: "/api/avatar/upload",
          });
          return newBlob.url;
        }),
      );

      const leadPayload = {
        name: name.trim(),
        town: town.trim(),
        phone: phone.trim(),
        howYouFoundUs,
        ...(email.trim() ? { email: email.trim() } : {}),
        message: message.trim(),
        services: [activeService],
        options: [activeService],
        imageUrls: uploadedBlobUrls,
      };

      await axios.post("/api/admin/quote", leadPayload);
      await axios.post("/api/quote/wash", leadPayload);
      router.push("/thank-you");
    } catch (error) {
      if (isAxiosError(error)) {
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

  const inputClasses =
    "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-base text-slate-900 shadow-sm placeholder:text-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20";
  const labelClasses = "mb-1.5 block text-sm font-semibold tracking-tight text-slate-700";

  return (
    <div id="quote-form" className="scroll-mt-20">
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-medium">
            <Lock className="h-3.5 w-3.5 text-slate-500" aria-hidden />
            Secure form
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-medium">
            <ShieldCheck className="h-3.5 w-3.5 text-slate-500" aria-hidden />
            Licensed & insured
          </span>
        </div>
        <div className="mb-4 rounded-lg border border-blue-100 bg-blue-50/70 p-3">
          <p className="text-sm font-medium leading-relaxed text-slate-700">
            About 60 seconds. A photo helps, but it’s optional.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="cabinet-name" className={labelClasses}>
              Name
            </label>
            <input
              type="text"
              id="cabinet-name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClasses}
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="cabinet-phone" className={labelClasses}>
              Phone
            </label>
            <input
              type="tel"
              id="cabinet-phone"
              name="phone"
              inputMode="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputClasses}
              placeholder="Best phone number"
              required
            />
          </div>
          <div>
            <label htmlFor="cabinet-town" className={labelClasses}>
              Town
            </label>
            <input
              type="text"
              id="cabinet-town"
              name="town"
              autoComplete="address-level2"
              value={town}
              onChange={(e) => setTown(e.target.value)}
              className={inputClasses}
              placeholder="Plymouth, Sandwich, Bourne…"
              required
            />
          </div>
          <div>
            <span id="cabinet-services-label" className={labelClasses}>
              Which free estimate do you want?
            </span>
            <div
              className="space-y-2"
              role="group"
              aria-labelledby="cabinet-services-label"
            >
              {CABINET_SERVICES.map((option) => {
                const selected = activeService === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => chooseService(option.value)}
                    className={`flex min-h-12 w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left shadow-sm transition-colors ${
                      selected
                        ? "border-blue-500 bg-blue-50 ring-1 ring-blue-500/30"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/80"
                    }`}
                  >
                    <span
                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                        selected
                          ? "border-blue-600 bg-blue-600"
                          : "border-slate-300 bg-white"
                      }`}
                      aria-hidden
                    >
                      {selected && (
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      )}
                    </span>
                    <span className="min-w-0">
                      <span
                        className={`block text-sm font-semibold leading-tight ${
                          selected ? "text-blue-950" : "text-slate-900"
                        }`}
                      >
                        {option.title}
                      </span>
                      <span className="mt-0.5 block text-xs leading-snug text-slate-500">
                        {option.detail}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <details className="rounded-lg border border-slate-200 bg-slate-50/60">
            <summary className="cursor-pointer px-3 py-2.5 text-sm font-semibold text-slate-700">
              Add a photo or note (optional)
            </summary>
            <div className="space-y-3 border-t border-slate-200 p-3">
              <div>
                <label htmlFor="cabinet-email" className={labelClasses}>
                  Email{" "}
                  <span className="font-normal text-slate-500">(optional)</span>
                </label>
                <input
                  type="email"
                  id="cabinet-email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClasses}
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="cabinet-message" className={labelClasses}>
                  Message{" "}
                  <span className="font-normal text-slate-500">(optional)</span>
                </label>
                <textarea
                  id="cabinet-message"
                  name="message"
                  value={message}
                  className={`${inputClasses} min-h-[80px] resize-y`}
                  placeholder="Color you’re considering, or anything we should know"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="border-t border-slate-200 pt-3">
                <label htmlFor="cabinet-images" className={labelClasses}>
                  Current cabinets{" "}
                  <span className="font-normal text-slate-500">(optional)</span>
                </label>
                <div
                  role="button"
                  tabIndex={0}
                  aria-label="Optional: upload photos of your cabinets"
                  className="mt-2 flex cursor-pointer justify-center rounded-lg border-2 border-dashed border-slate-200 bg-white px-4 py-5 transition hover:border-slate-300 hover:bg-slate-50"
                  onClick={() => inputFileRef.current?.click()}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      inputFileRef.current?.click();
                    }
                  }}
                >
                  <div className="space-y-1 text-center">
                    <FaPaperclip className="mx-auto h-7 w-7 text-slate-400" />
                    <p className="text-sm text-slate-600">
                      Tap to add a photo of your cabinets
                    </p>
                    <p className="text-xs text-slate-500">
                      Helps us estimate. PNG or JPG up to 10MB.
                    </p>
                  </div>
                </div>
                <input
                  ref={inputFileRef}
                  type="file"
                  id="cabinet-images"
                  multiple
                  onChange={(e) => {
                    if (!e.target.files) return;
                    const filesArray = Array.from(e.target.files);
                    setImages((prev) => [...prev, ...filesArray]);
                  }}
                  className="sr-only"
                  accept="image/*"
                />
                {images.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {images.map((file, index) => (
                      <div key={`${file.name}-${index}`} className="relative">
                        <img
                          src={URL.createObjectURL(file)}
                          alt=""
                          className="h-24 w-full rounded-lg object-cover"
                        />
                        <button
                          type="button"
                          className="absolute right-1 top-1 rounded-full bg-slate-700 p-1.5 text-white shadow transition hover:bg-slate-800"
                          onClick={() =>
                            setImages((prev) =>
                              prev.filter((_, i) => i !== index),
                            )
                          }
                          aria-label={`Remove ${file.name}`}
                        >
                          <FaTrash size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </details>
          <div className="pt-1">
            {errorMessage && (
              <div
                role="alert"
                className="mb-3 rounded-lg border border-slate-200 bg-slate-100 p-4 text-sm text-slate-800"
              >
                {errorMessage}
              </div>
            )}
            <button
              type="submit"
              className="w-full rounded-lg bg-red-600 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending…" : "Get a Free Estimate"}
            </button>
            <p className="mt-3 text-center text-xs leading-relaxed text-slate-500">
              No obligation. We’ll only use your info to follow up about your
              cabinet estimate.
            </p>
            <a
              href={phoneTelHref}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 text-sm font-semibold text-blue-700 underline decoration-slate-300 underline-offset-2 transition hover:text-blue-800"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              Prefer to call? {formatPhoneDisplay(clientData.phone)}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
