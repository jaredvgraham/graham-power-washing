/**
 * One-time migration: Firestore `quotes` (+ optional phoneCalls) → Mongo `leads`
 *
 * Usage (from website root):
 *   node --env-file=.env.local scripts/migrate-firestore-quotes-to-leads.mjs
 */

import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const FIREBASE_KEY = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

if (!MONGODB_URI) {
  console.error("Missing MONGODB_URI");
  process.exit(1);
}
if (!FIREBASE_KEY) {
  console.error("Missing FIREBASE_SERVICE_ACCOUNT_KEY");
  process.exit(1);
}

function isMetaAdSource(howYouFoundUs = "") {
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

const LeadSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
    town: String,
    howYouFoundUs: String,
    services: { type: [String], default: [] },
    message: String,
    photoUrls: { type: [String], default: [] },
    squareFootage: String,
    status: { type: String, default: "new" },
    source: { type: String, default: "website" },
    notes: String,
    firestoreId: { type: String, sparse: true, unique: true },
  },
  { timestamps: true },
);

const Lead = mongoose.models.Lead || mongoose.model("Lead", LeadSchema);

async function main() {
  const serviceAccount = JSON.parse(FIREBASE_KEY);
  if (!getApps().length) {
    initializeApp({ credential: cert(serviceAccount) });
  }
  const db = getFirestore();

  await mongoose.connect(MONGODB_URI, { dbName: "prod" });
  console.log("Connected to MongoDB prod");

  const quoteSnap = await db.collection("quotes").get();
  console.log(`Found ${quoteSnap.size} Firestore quotes`);

  let created = 0;
  let skipped = 0;

  for (const doc of quoteSnap.docs) {
    const data = doc.data();
    const existing = await Lead.findOne({ firestoreId: doc.id });
    if (existing) {
      skipped += 1;
      continue;
    }

    const howYouFoundUs = data.howYouFoundUs?.trim() || undefined;
    const createdAt = data.createdAt?.toDate?.() ?? new Date();

    await Lead.create({
      name: (data.name || "Unknown").trim(),
      phone: (data.phone || "").trim() || "unknown",
      town: (data.town || "Unknown").trim(),
      email: data.email?.trim() || undefined,
      howYouFoundUs,
      services: [],
      photoUrls: [],
      status: "new",
      source: howYouFoundUs && isMetaAdSource(howYouFoundUs) ? "meta_ad" : "website",
      firestoreId: doc.id,
      createdAt,
      updatedAt: createdAt,
    });
    created += 1;
  }

  const phoneSnap = await db.collection("phoneCalls").get();
  console.log(`Found ${phoneSnap.size} Firestore phoneCalls`);

  let phoneCreated = 0;
  for (const doc of phoneSnap.docs) {
    const data = doc.data();
    const firestoreId = `phone_${doc.id}`;
    const existing = await Lead.findOne({ firestoreId });
    if (existing) {
      skipped += 1;
      continue;
    }
    const phone = (data.phone || "").trim();
    if (!phone) {
      skipped += 1;
      continue;
    }
    await Lead.create({
      name: "Phone inquiry",
      phone,
      town: "Unknown",
      services: [],
      photoUrls: [],
      status: "new",
      source: "phone",
      firestoreId,
    });
    phoneCreated += 1;
  }

  console.log(
    `Done. Quotes created: ${created}, phone leads created: ${phoneCreated}, skipped: ${skipped}`,
  );
  await mongoose.disconnect();
}

main().catch(async (error) => {
  console.error(error);
  await mongoose.disconnect().catch(() => {});
  process.exit(1);
});
