"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PhoneCallQuoteChart from "./PhoneCallQuoteChart";

interface Quote {
  id: number;
  name: string;
  town: string;
  phone: string;
}

const PhoneCalls = () => {
  const [phoneCalls, setPhoneCalls] = useState(0);
  const [quoteCount, setQuoteCount] = useState(0);
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    const getPhoneCalls = async () => {
      const response = await axios.get("/api/admin/phoneCalls");
      setPhoneCalls(response.data);
      console.log(response.data);
    };
    getPhoneCalls();

    const getQuotes = async () => {
      try {
        const response = await axios.get("/api/admin/quote");
        setQuotes(response.data);
        setQuoteCount(response.data.length);
      } catch (error) {
        console.log("Error getting quotes:", error);
      }
    };
    getQuotes();
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-4">Admin Page</h1>
      <div className="w-full max-w-4xl mb-8">
        <PhoneCallQuoteChart phoneCalls={phoneCalls} quoteCount={quoteCount} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {quotes?.map((quote: Quote) => (
          <div key={quote.id} className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-semibold">
              <strong>Name:</strong> {quote.name}
            </p>
            <p>
              <strong>Town:</strong> {quote.town}
            </p>
            <p>
              <strong>Phone:</strong> {quote.phone}
            </p>
          </div>
        ))}
        {quotes.length === 0 && (
          <p className="text-center col-span-full">No quotes available</p>
        )}
      </div>
    </div>
  );
};

export default PhoneCalls;
