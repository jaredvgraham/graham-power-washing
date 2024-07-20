import { FaStar } from "react-icons/fa";

type ReviewCardProps = {
  review: string;
  author: string;
  rating: number;
};

const ReviewCard = ({ review, author, rating }: ReviewCardProps) => {
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
      <p className="text-gray-700 italic mb-4">&quot;{review}&quot;</p>
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
          review="Graham power washed our house, decks, driveway, &amp; camper and it all came out beautifully. You don't realize how badly it needs to be done until it's all clean! Thank you Jared &amp; Justin"
          author="C.S"
          rating={5}
        />
        <ReviewCard
          review="Unbelievable job at my house!! They did my house, deck, pool deck, and pool fence today. I was like a kid on Christmas morning when I came today! Highly recommend them to anyone. Very reasonable price and more importantly EXCEPTIONAL work!"
          author="C.J"
          rating={5}
        />
        <ReviewCard
          review="Justin pressure washed my house a few days ago and I saw it dry today for the first time. I'm not surprised but it looks awesome. Meticulous in every way, from the first callback within the hour, on schedule for the estimate visit, excellent price, great job and fantastic customer service. Thank you Justin. Highly recommended."
          author="K.G"
          rating={5}
        />
        <ReviewCard
          review="I recently moved to MA and needed my vinyl sided house and fence powerwashed. Justin returned my call immediately. We set up an appointment for the estimate and he was at my house on time. The price was very fair and he came out to the house within a few days, as we agreed, to do the work. He did the work himself and he did a great job. The house is clean and mildew free. The fence looks new. While onsite, he told me I could save some dollars by not doing the deck, since he believed it had been done recently and as a result didn't think his powerwashing would make much of a difference. He did not have to do that, but it was appreciated. Finally, he cleaned up and put back everything that had been moved in the process. I would recommend Justin to anyone looking for powerwashing."
          author="P.D"
          rating={5}
        />
        <ReviewCard
          review="We were very pleased with our powerwashing. Our interactions were quick and very easy to work with. They actually care that their customers are satisfied. We have and will continue to recommend them."
          author="S.L"
          rating={5}
        />
        <ReviewCard
          review="Justin was on time, perfectly professional and courteous. He wasted no time in completing a spectacular power washing of my very dirty home. I could not be happier with Justin's work, and the great price. THANK YOU! Review by John S. in South Plymouth, MA"
          author="J.S"
          rating={5}
        />
      </div>

      <div className="flex justify-start ml-8">
        <button className="bg-stone-400 text-white py-2 px-4 rounded-lg  hover:bg-stone-500 transition duration-300">
          <a href="https://www.homeadvisor.com/rated.GrahamPainting.43994090.html">
            {" "}
            Not convinced? Check out our reviews on HomeAdvisor!{" "}
          </a>
        </button>
      </div>
    </div>
  );
};

export default Reviews;
