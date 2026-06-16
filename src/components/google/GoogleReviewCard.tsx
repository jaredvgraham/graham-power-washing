"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { GoogleG } from "./GoogleLogo";

export type GoogleReviewCardData = {
  review: string;
  author: string;
  rating: number;
  relativeTime?: string;
  profilePhotoUrl?: string;
  authorUrl?: string;
};

const AVATAR_COLORS = [
  "bg-red-600",
  "bg-red-500",
  "bg-blue-600",
  "bg-blue-500",
  "bg-slate-700",
  "bg-slate-900",
];

function colorForName(name: string) {
  let sum = 0;
  for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
  return AVATAR_COLORS[sum % AVATAR_COLORS.length];
}

const CLAMP_LENGTH = 220;

export default function GoogleReviewCard({
  review,
  author,
  rating,
  relativeTime,
  profilePhotoUrl,
  authorUrl,
}: GoogleReviewCardData) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.length > CLAMP_LENGTH;
  const text =
    expanded || !isLong
      ? review
      : `${review.slice(0, CLAMP_LENGTH).trimEnd()}…`;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="flex flex-col items-center text-center">
        <div className="relative shrink-0">
          {profilePhotoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={profilePhotoUrl}
              alt={author}
              width={44}
              height={44}
              referrerPolicy="no-referrer"
              className="h-11 w-11 rounded-full object-cover"
            />
          ) : (
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full text-lg font-semibold text-white ${colorForName(
                author,
              )}`}
            >
              {author.trim().charAt(0).toUpperCase()}
            </span>
          )}
          <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow ring-1 ring-gray-200">
            <GoogleG className="h-3 w-3" />
          </span>
        </div>
        <div className="mt-2 min-w-0">
          {authorUrl ? (
            <a
              href={authorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block truncate font-semibold text-gray-900 hover:underline"
            >
              {author}
            </a>
          ) : (
            <p className="truncate font-semibold text-gray-900">{author}</p>
          )}
          {relativeTime && (
            <p className="text-xs text-gray-500">{relativeTime}</p>
          )}
        </div>

        <div className="mt-2 flex items-center justify-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < Math.round(rating) ? "text-[#FBBC04]" : "text-gray-300"
              }
            />
          ))}
        </div>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
        {text}
        {isLong && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="ml-1 font-medium text-blue-600 hover:underline"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </p>
    </div>
  );
}
