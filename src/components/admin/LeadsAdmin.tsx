"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

interface Lead {
  id: string;
  name: string;
  town: string;
  phone: string;
  email?: string | null;
  howYouFoundUs?: string | null;
  services?: string[];
  message?: string | null;
  source?: string;
  status?: string;
  createdAt?: string | null;
}

export default function LeadsAdmin() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLeads = async () => {
      try {
        const response = await axios.get("/api/admin/quote");
        setLeads(response.data);
      } catch (error) {
        console.log("Error getting leads:", error);
      } finally {
        setLoading(false);
      }
    };
    getLeads();
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold text-slate-900">Leads</h1>
      <p className="mb-8 text-sm text-slate-500">
        {loading
          ? "Loading…"
          : `${leads.length} lead${leads.length !== 1 ? "s" : ""}`}
      </p>

      {loading ? (
        <p className="text-slate-500">Loading leads…</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {leads.map((lead) => (
            <div
              key={lead.id}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
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
              <p className="text-lg font-semibold text-slate-900">{lead.name}</p>
              <p className="mt-2 text-sm text-slate-700">
                <strong>Town:</strong> {lead.town}
              </p>
              <p className="text-sm text-slate-700">
                <strong>Phone:</strong>{" "}
                <a
                  href={`tel:${lead.phone}`}
                  className="font-medium text-blue-700 hover:underline"
                >
                  {lead.phone}
                </a>
              </p>
              <p className="text-sm text-slate-700">
                <strong>Services:</strong>{" "}
                {lead.services && lead.services.length > 0
                  ? lead.services.join(", ")
                  : "—"}
              </p>
              {lead.howYouFoundUs && (
                <p className="text-sm text-slate-700">
                  <strong>How they found us:</strong> {lead.howYouFoundUs}
                </p>
              )}
              {lead.message && (
                <p className="mt-2 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-600">
                  {lead.message}
                </p>
              )}
              {lead.createdAt && (
                <p className="mt-3 text-xs text-slate-400">
                  {new Date(lead.createdAt).toLocaleString()}
                </p>
              )}
            </div>
          ))}
          {leads.length === 0 && (
            <p className="col-span-full text-center text-slate-500">
              No leads available
            </p>
          )}
        </div>
      )}
    </div>
  );
}
