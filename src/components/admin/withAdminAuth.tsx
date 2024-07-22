// components/withAdminAuth.tsx
"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { auth } from "@/lib/firebase";

const withAdminAuth = (WrappedComponent: React.ComponentType) => {
  const Wrapper: React.FC = (props) => {
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const checkAdmin = async () => {
        const user = auth.currentUser;
        if (user) {
          const adminEmail = "admin@example.com"; // Replace with your admin email
          if (user.email === adminEmail) {
            setIsAdmin(true);
          } else {
            router.push("/"); // Redirect non-admin users to the home page
          }
        } else {
          router.push("/signin"); // Redirect unauthenticated users to the sign-in page
        }
        setLoading(false);
      };

      checkAdmin();
    }, [router]);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!isAdmin) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAdminAuth;
