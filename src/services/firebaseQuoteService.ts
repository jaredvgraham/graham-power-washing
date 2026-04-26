import { db } from "@/lib/firebaseAdmin";
import { FieldValue } from "firebase-admin/firestore";

export async function getQuotes() {
  const quotes = await db
    .collection("quotes")
    .orderBy("createdAt", "desc")
    .get();
  const quotesData = quotes.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt
      ? doc.data().createdAt.toDate().toISOString()
      : null,
  }));
  return quotesData;
}

export async function createQuote(data: {
  name: string;
  town: string;
  phone: string;
  email?: string;
}) {
  const payload: Record<string, unknown> = {
    name: data.name,
    town: data.town,
    phone: data.phone,
    createdAt: FieldValue.serverTimestamp(),
  };
  if (data.email?.trim()) {
    payload.email = data.email.trim();
  }
  const quote = await db.collection("quotes").add(payload);
  return quote.id;
}

export async function getQuoteCount() {
  const quotes = await db.collection("quotes").get();
  return quotes.size;
}
