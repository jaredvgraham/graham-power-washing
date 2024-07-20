import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl font-light text-gray-800">About Us</h1>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto p-2">
          Welcome to Graham Power-Washing! We are a family-owned business run by
          two brothers, Justin and Jared, who have been providing top-quality
          power washing services for over a decade. Specializing in all aspects
          of power washing, we take pride in handling jobs of any size with the
          utmost professionalism and care.
        </p>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-6">
        <div className="max-w-sm">
          <Image src="/justin2.jpg" alt="Justin" width={310} height={310} />
          <h2 className="text-xl font-semibold mt-4">Justin</h2>
          <p className="text-gray-600 mt-2 w-80">
            Justin brings his extensive experience and keen eye for detail to
            every project, ensuring each job is completed to the highest
            standard.
          </p>
        </div>
        <div className="max-w-sm">
          <Image src="/me.jpg" alt="Jared" width={300} height={300} />
          <h2 className="text-xl font-semibold mt-4">Jared</h2>
          <p className="text-gray-600 mt-2 w-80">
            Jared&apos;s dedication and commitment to customer satisfaction
            shine through in his work, making sure every client is happy with
            the results.
          </p>
        </div>
      </div>
      <div className="container mx-auto text-center mt-12">
        <p className="text-gray-600 max-w-3xl mx-auto p-2  ">
          At Graham Power-Washing, we believe in delivering exceptional results
          and building long-lasting relationships with our clients. Whether
          it&apos;s a small residential house or a large commercial building, we
          have the expertise and equipment to get the job done right.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
