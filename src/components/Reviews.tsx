"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

type ReviewCardProps = {
  review: string;
  author: string;
  rating: number;
};

const ReviewCard = ({ review, author, rating }: ReviewCardProps) => {
  return (
    <div className="bg-gray-50 border border-gray-200/80 shadow-lg rounded-xl p-6 h-full flex flex-col transition-transform duration-300 hover:-translate-y-2">
      <FaQuoteLeft className="text-3xl text-primary/50 mb-4" />
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`mr-1 ${
              index < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-gray-600 italic mb-4 flex-grow">
        &quot;{review}&quot;
      </p>
      <p className="text-gray-800 font-semibold text-right">- {author}</p>
    </div>
  );
};

const Reviews = () => {
  const router = useRouter();

  const reviews = [
    {
      review:
        "Graham power washed our house, decks, driveway, & camper and it all came out beautifully. You don't realize how badly it needs to be done until it's all clean! Thank you Jared & Justin",
      author: "C.S",
      rating: 5,
    },
    {
      review:
        "Unbelievable job at my house!! They did my house, deck, pool deck, and pool fence today. I was like a kid on Christmas morning when I came today! Highly recommend them to anyone. Very reasonable price and more importantly EXCEPTIONAL work!",
      author: "C.J",
      rating: 5,
    },
    {
      review:
        "Justin pressure washed my house a few days ago and I saw it dry today for the first time. I'm not surprised but it looks awesome. Meticulous in every way, from the first callback within the hour, on schedule for the estimate visit, excellent price, great job and fantastic customer service. Thank you Justin. Highly recommended.",
      author: "K.G",
      rating: 5,
    },
  ];

  return (
    <div className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            What Our Customers Say
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Real stories from our happy clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="h-full"
            >
              <ReviewCard {...r} />
            </motion.div>
          ))}
        </div>
        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6">
          <button
            onClick={() => router.push("/reviews")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-semibold transition-all duration-300 shadow-lg"
          >
            See More Reviews
          </button>
          <a
            className="bg-yellow-500 text-white hover:bg-yellow-600 px-8 py-3 rounded-md font-semibold transition-all duration-300 shadow-lg"
            href="https://g.page/r/Ce-IiV_Ozzm3EAI/review"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leave a Review
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
