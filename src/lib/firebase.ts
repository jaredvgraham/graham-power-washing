// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqkJj-1Z0XDK0qzwe1maL0jY7jQNE1Cug",
  authDomain: "grahampowerwashing-9e44a.firebaseapp.com",
  projectId: "grahampowerwashing-9e44a",
  storageBucket: "grahampowerwashing-9e44a.appspot.com",
  messagingSenderId: "479870364000",
  appId: "1:479870364000:web:459dd83ed430494db2d605",
  measurementId: "G-8GPSJZSYTZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

export { app, auth };
