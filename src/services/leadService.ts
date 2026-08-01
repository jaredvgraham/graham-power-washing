import { connectDB } from "@/lib/mongodb";
import Lead, {
  type ILead,
  type LeadSource,
  type LeadStatus,
} from "@/models/Lead";

export function isMetaAdSource(howYouFoundUs: string): boolean {
  const source = howYouFoundUs.trim().toLowerCase();
  return (
    source === "facebook ad" ||
    source === "meta ad" ||
    source.includes("facebook ad") ||
    source.includes("meta ad") ||
    source === "meta" ||
    source === "facebook ads"
  );
}

export function deriveLeadSource(howYouFoundUs?: string): LeadSource {
  if (!howYouFoundUs?.trim()) return "website";
  return isMetaAdSource(howYouFoundUs) ? "meta_ad" : "website";
}

export type CreateLeadInput = {
  name: string;
  phone: string;
  town: string;
  email?: string;
  howYouFoundUs?: string;
  services?: string[];
  message?: string;
  photoUrls?: string[];
  squareFootage?: string;
  source?: LeadSource;
  status?: LeadStatus;
  firestoreId?: string;
  createdAt?: Date;
};

export async function createLead(data: CreateLeadInput) {
  await connectDB();

  const howYouFoundUs = data.howYouFoundUs?.trim();
  const payload: Partial<ILead> = {
    name: data.name.trim(),
    phone: data.phone.trim(),
    town: data.town.trim(),
    services: (data.services ?? []).map((s) => s.trim()).filter(Boolean),
    photoUrls: (data.photoUrls ?? []).filter(Boolean),
    status: data.status ?? "new",
    source: data.source ?? deriveLeadSource(howYouFoundUs),
  };

  if (data.email?.trim()) payload.email = data.email.trim();
  if (howYouFoundUs) payload.howYouFoundUs = howYouFoundUs;
  if (data.message?.trim()) payload.message = data.message.trim();
  if (data.squareFootage?.trim()) {
    payload.squareFootage = data.squareFootage.trim();
  }
  if (data.firestoreId?.trim()) payload.firestoreId = data.firestoreId.trim();

  if (data.createdAt) {
    const lead = await Lead.create({
      ...payload,
      createdAt: data.createdAt,
      updatedAt: data.createdAt,
    });
    return lead;
  }

  return Lead.create(payload);
}

/** Website quote/ad leads only — exclude legacy phone-call records. */
const QUOTE_LEAD_FILTER = { source: { $ne: "phone" as const } };

export async function getLeads() {
  await connectDB();
  const leads = await Lead.find(QUOTE_LEAD_FILTER)
    .sort({ createdAt: -1 })
    .lean();
  return leads.map((lead) => ({
    id: String(lead._id),
    name: lead.name,
    town: lead.town,
    phone: lead.phone,
    email: lead.email ?? null,
    howYouFoundUs: lead.howYouFoundUs ?? null,
    services: lead.services ?? [],
    message: lead.message ?? null,
    photoUrls: lead.photoUrls ?? [],
    status: lead.status,
    source: lead.source,
    createdAt: lead.createdAt
      ? new Date(lead.createdAt).toISOString()
      : null,
  }));
}

export async function getLeadCount() {
  await connectDB();
  return Lead.countDocuments(QUOTE_LEAD_FILTER);
}
