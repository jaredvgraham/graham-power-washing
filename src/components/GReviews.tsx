import Image from "next/image";
import React from "react";

const GReviews = () => {
  return (
    <section className="my-16 flex flex-col items-center justify-center">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 max-w-lg w-full flex flex-col items-center">
        <div className="flex items-center mb-3">
          <Image
            src="/g-logo.png"
            alt="Google"
            className="mr-2"
            width={32}
            height={32}
          />
          <span className="text-2xl font-bold text-gray-800">
            Google Reviews
          </span>
        </div>
        <h2 className="text-xl font-semibold mb-2 text-yellow-600 text-center">
          {`We'd Love Your Feedback!`}
        </h2>
        <p className="mb-6 text-gray-600 text-center">
          If you enjoyed our service, please take a moment to leave us a review
          on Google. Your feedback means the world to us!
        </p>
        <a
          href="https://g.page/r/Ce-IiV_Ozzm3EAI/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-red-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition"
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
