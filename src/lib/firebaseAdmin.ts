import admin from "firebase-admin";

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
);

console.log("serviceAccount", serviceAccount);
console.log(
  "FIREBASE_SERVICE_ACCOUNT_KEY",
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY
);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
const auth = admin.auth();
const db = admin.firestore();

export { db, auth };
