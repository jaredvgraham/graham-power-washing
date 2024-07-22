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
}) {
  const quote = await db.collection("quotes").add({
    ...data,
    createdAt: FieldValue.serverTimestamp(),
  });
  return quote.id;
}

export async function getQuoteCount() {
  const quotes = await db.collection("quotes").get();
  return quotes.size;
}
