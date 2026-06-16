import Image from "next/image";
import React from "react";

const GReviews = () => {
  return (
    <section className="bg-slate-50 px-4 py-16 flex flex-col items-center justify-center">
      <div className="bg-white border border-red-100 rounded-3xl shadow-sm p-8 max-w-lg w-full flex flex-col items-center">
        <div className="flex items-center mb-3">
          <Image
            src="/g-logo.png"
            alt="Google"
            className="mr-2"
            width={32}
            height={32}
          />
          <span className="text-2xl font-bold text-slate-900">
            Google Reviews
          </span>
        </div>
        <h2 className="text-xl font-bold mb-2 text-center">
          <span className="text-red-600">We&apos;d Love</span>{" "}
          <span className="text-blue-600">Your Feedback!</span>
        </h2>
        <p className="mb-6 text-slate-600 text-center leading-7">
          If you enjoyed our service, please take a moment to leave us a review
          on Google. Your feedback means the world to us!
        </p>
        <a
          href="https://g.page/r/Ce-IiV_Ozzm3EAI/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-sm transition hover:bg-blue-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          Leave a Google Review
        </a>
      </div>
    </section>
  );
};

export default GReviews;
