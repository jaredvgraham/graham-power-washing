import { db } from "@/lib/firebaseAdmin";

export async function getPhoneCalls() {
  const phoneCalls = await db.collection("phoneCalls").get();
  const phoneCallsData = phoneCalls.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return phoneCallsData;
}

export async function createPhoneCall(data: { phone: string }) {
  const phoneCall = await db.collection("phoneCalls").add(data);
  return phoneCall.id;
}

export async function getPhoneCallCount() {
  const phoneCalls = await db.collection("phoneCalls").get();
  return phoneCalls.size;
}
