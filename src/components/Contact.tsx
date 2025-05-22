"use client";
import axios from "axios";
import React from "react";
import { FaFacebook } from "react-icons/fa";

const phoneCall = {
  phone: "Phone Call",
};

const Contact = () => {
  const handlePhoneClick = async () => {
    const response = await axios.post("/api/phone", phoneCall);
    console.log(response);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto text-center mb-12">
        <h1 className="text-4xl font-light text-gray-800">Contact Us</h1>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto p-3">
          Have any questions or need a quote? Reach out to Justin directly!
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Owner:</strong> Justin
            <br />
            <strong>Phone:</strong>{" "}
            <a
              href="tel:7744877616"
              onClick={handlePhoneClick}
              className="text-blue-500 hover:underline"
            >
              774-487-7616
            </a>
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:grahampaintinc@gmail.com"
              className="text-blue-500 hover:underline"
            >
              grahampaintinc@gmail.com
            </a>
          </p>
          {/* facebook link */}
          <a
            href="https://www.facebook.com/p/GRAHAM-PAINTING-POWERWASHING-100063725705465/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition font-semibold"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Page for Graham Power Washing"
          >
            <FaFacebook size={20} />
            Facebook
          </a>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-4">
            Get in Touch
          </h3>
          <p className="text-gray-600 mb-4">
            Justin is available to answer your calls and provide you with the
            best powerwashing services. Feel free to call or text anytime during
            business hours!
          </p>
          <div className="text-center">
            <a
              href="tel:7744877616"
              onClick={handlePhoneClick}
              className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Call Now: 774-487-7616
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
