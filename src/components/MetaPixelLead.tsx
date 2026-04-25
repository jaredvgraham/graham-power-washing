"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Fires Meta Pixel Lead on /thank-you only in the browser after hydration.
 * fbq queues calls until fbevents.js finishes loading.
 */
export default function MetaPixelLead() {
  useEffect(() => {
    window.fbq?.("track", "Lead");
  }, []);

  return null;
}
