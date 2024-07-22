"use client";
import PhoneCalls from "@/components/admin/phoneCalls";
import React from "react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

const AdminPage = () => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const adminEmail = "grahamwebadmin@email.com"; // Replace with your admin email
        console.log("this is user.email from admin", user.email);

        if (user.email === adminEmail) {
          setIsAdmin(true);
        } else {
          router.push("/"); // Redirect non-admin users to the home page
        }
      } else {
        router.push("/signin"); // Redirect unauthenticated users to the sign-in page
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <>
      <PhoneCalls />
    </>
  );
};

export default AdminPage;
