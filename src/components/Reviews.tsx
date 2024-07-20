import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review, author, rating }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-105">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`mr-1 ${
              index < rating ? "text-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 italic mb-4">"{review}"</p>
      <p className="text-gray-600 font-semibold text-right">- {author}</p>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="p-7 bg-gray-200 mt-4">
      <div className="flex justify-center flex-col mb-8">
        <h1 className="text-center text-3xl font-thin">
          What our customers say
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        <ReviewCard
          review="Great service, very professional."
          author="John Doe"
          rating={5}
        />
        <ReviewCard
          review="Amazing results, highly recommend!"
          author="Jane Smith"
          rating={4}
        />
        <ReviewCard
          review="Very thorough and efficient."
          author="Mark Johnson"
          rating={5}
        />
      </div>

      <div className="flex justify-start ml-8">
        <button className="bg-stone-400 text-white py-2 px-4 rounded-lg  hover:bg-stone-500 transition duration-300">
          See More Reviews
        </button>
      </div>
    </div>
  );
};

export default Reviews;
