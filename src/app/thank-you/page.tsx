import React from "react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-green-600">Thank You!</h1>
        <p className="text-lg mb-6 text-gray-700">
          Your quote request has been submitted successfully.
          <br />
          We appreciate your interest and will get back to you soon.
        </p>
        <Link href="/" className="text-blue-500 hover:underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
