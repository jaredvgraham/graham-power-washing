"use client";
import { motion } from "framer-motion";
import React from "react";
import GoogleReviewCard, {
  type GoogleReviewCardData,
} from "./google/GoogleReviewCard";
import GoogleRatingSummary from "./google/GoogleRatingSummary";

export type DisplayReview = GoogleReviewCardData;

type ReviewsClientProps = {
  reviews: DisplayReview[];
  rating?: number | null;
  total?: number | null;
  reviewUrl: string;
  fromGoogle?: boolean;
};

const ReviewsClient = ({
  reviews,
  rating,
  total,
  reviewUrl,
  fromGoogle = false,
}: ReviewsClientProps) => {
  return (
    <div className="bg-slate-50 py-20 sm:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            Trusted Locally
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            What Our <span className="text-red-600">Customers</span>{" "}
            <span className="text-blue-600">Say</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Real reviews from homeowners across the South Shore &amp; Cape Cod.
          </p>
        </div>

        {fromGoogle && (
          <div className="mb-14">
            <GoogleRatingSummary
              rating={rating}
              total={total}
              reviewUrl={reviewUrl}
            />
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, index) => (
            <motion.div
              key={`${r.author}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.35, delay: (index % 2) * 0.04 }}
              className="h-full"
            >
              <GoogleReviewCard {...r} />
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-8 py-3 font-semibold text-blue-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Leave a Google Review
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReviewsClient;
