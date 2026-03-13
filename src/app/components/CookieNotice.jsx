"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "vino_cookie_choice";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem(CONSENT_KEY);

    // Set a safe default on first load
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "default", {
        analytics_storage: "denied",
      });
    }

    if (!choice) {
      const timer = setTimeout(() => setVisible(true), 700);
      return () => clearTimeout(timer);
    }

    if (choice === "accepted") {
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("consent", "update", {
          analytics_storage: "granted",
        });
      }
    }

    if (choice === "rejected") {
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("consent", "update", {
          analytics_storage: "denied",
        });
      }
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }

    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, "rejected");

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-[9999] -translate-x-1/2 animate-fadeIn px-4">
      <div className="max-w-xl rounded-2xl border border-[#d8cfc4] bg-[#fdfaf3]/95 px-5 py-4 text-sm text-[#4b3f2f] shadow-xl backdrop-blur">
        <p className="leading-6">
          We use cookies for analytics to improve the experience.
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button
            onClick={accept}
            className="rounded-lg bg-[#a37c58] px-4 py-1.5 text-white transition hover:opacity-90"
          >
            Accept
          </button>

          <button
            onClick={reject}
            className="rounded-lg border border-[#d8cfc4] px-4 py-1.5 text-[#4b3f2f] transition hover:bg-[#f7f1e8]"
          >
            Reject
          </button>

          <Link
            href="/privacy"
            className="ml-1 underline underline-offset-4 hover:text-[#a37c58]"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}