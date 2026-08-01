"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PhoneCallQuoteChart from "./PhoneCallQuoteChart";

interface Lead {
  id: string;
  name: string;
  town: string;
  phone: string;
  email?: string | null;
  howYouFoundUs?: string | null;
  services?: string[];
  source?: string;
  status?: string;
  createdAt?: string | null;
}

const PhoneCalls = () => {
  const [phoneCalls, setPhoneCalls] = useState(0);
  const [quoteCount, setQuoteCount] = useState(0);
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const getPhoneCalls = async () => {
      try {
        const response = await axios.get("/api/admin/phoneCalls");
        setPhoneCalls(response.data);
      } catch (error) {
        console.log("Error getting phone calls:", error);
      }
    };
    getPhoneCalls();

    const getLeads = async () => {
      try {
        const response = await axios.get("/api/admin/quote");
        setLeads(response.data);
        setQuoteCount(response.data.length);
      } catch (error) {
        console.log("Error getting leads:", error);
      }
    };
    getLeads();
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-4">Admin Page</h1>
      <div className="w-full max-w-4xl mb-8">
        <PhoneCallQuoteChart phoneCalls={phoneCalls} quoteCount={quoteCount} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {leads?.map((lead) => (
          <div key={lead.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="mb-2 flex flex-wrap gap-2">
              {lead.source === "meta_ad" && (
                <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-700">
                  Meta ad
                </span>
              )}
              {lead.status && (
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold capitalize text-slate-600">
                  {lead.status}
                </span>
              )}
            </div>
            <p className="font-semibold">
              <strong>Name:</strong> {lead.name}
            </p>
            <p>
              <strong>Town:</strong> {lead.town}
            </p>
            <p>
              <strong>Phone:</strong> {lead.phone}
            </p>
            {lead.howYouFoundUs && (
              <p>
                <strong>How they found us:</strong> {lead.howYouFoundUs}
              </p>
            )}
            {lead.services && lead.services.length > 0 && (
              <p className="mt-1 text-sm text-slate-600">
                {lead.services.join(", ")}
              </p>
            )}
          </div>
        ))}
        {leads.length === 0 && (
          <p className="text-center col-span-full">No leads available</p>
        )}
      </div>
    </div>
  );
};

export default PhoneCalls;
