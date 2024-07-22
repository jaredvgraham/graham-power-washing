"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await setPersistence(auth, browserLocalPersistence); // Set session persistence

      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        const adminEmail = "grahamwebadmin@email.com"; // Replace with your admin email
        console.log("this is user.email", user.email);

        if (user.email === adminEmail) {
          router.push("/admin");
        } else {
          setError("You do not have access to the admin page.");
        }
      }
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSignIn} className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
