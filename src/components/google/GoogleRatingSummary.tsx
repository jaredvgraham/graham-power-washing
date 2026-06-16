import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { GoogleG } from "./GoogleLogo";

type GoogleRatingSummaryProps = {
  rating?: number | null;
  total?: number | null;
  reviewUrl: string;
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 text-lg">
      {[...Array(5)].map((_, i) => {
        const position = i + 1;
        if (rating >= position) {
          return <FaStar key={i} className="text-[#FBBC04]" />;
        }
        if (rating >= position - 0.5) {
          return <FaStarHalfAlt key={i} className="text-[#FBBC04]" />;
        }
        return <FaRegStar key={i} className="text-[#FBBC04]" />;
      })}
    </div>
  );
}

export default function GoogleRatingSummary({
  rating,
  total,
  reviewUrl,
}: GoogleRatingSummaryProps) {
  const value = rating ?? 0;

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-5 rounded-2xl border border-red-100 bg-white px-8 py-6 shadow-sm sm:flex-row sm:justify-between">
      <div className="flex items-center gap-3">
        <GoogleG className="h-9 w-9" />
        <div className="text-left">
          <p className="font-semibold leading-tight text-gray-900">
            Google Rating
          </p>
          {total != null && (
            <p className="text-xs text-gray-500">Based on {total} reviews</p>
          )}
        </div>
      </div>

      <div className="hidden h-12 w-px bg-gray-200 sm:block" />

      <div className="flex items-center gap-4">
        <span className="text-4xl font-bold leading-none text-gray-900">
          {value.toFixed(1)}
        </span>
        <div className="flex flex-col gap-1">
          <Stars rating={value} />
          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-blue-600 hover:underline"
          >
            Write a review
          </a>
        </div>
      </div>
    </div>
  );
}
