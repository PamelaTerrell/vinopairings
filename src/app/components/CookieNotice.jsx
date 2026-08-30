"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "vino_cookie_choice";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const choice = localStorage.getItem(CONSENT_KEY);

      if (!choice) {
        const timer = setTimeout(() => {
          setVisible(true);
        }, 700);

        return () => clearTimeout(timer);
      }

      if (
        typeof window !== "undefined" &&
        typeof window.gtag === "function"
      ) {
        window.gtag("consent", "update", {
          analytics_storage:
            choice === "accepted" ? "granted" : "denied",
        });
      }
    } catch {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 700);

      return () => clearTimeout(timer);
    }
  }, []);

  const updateConsent = (choice) => {
    try {
      localStorage.setItem(CONSENT_KEY, choice);
    } catch {
      // Continue even if storage is unavailable.
    }

    if (
      typeof window !== "undefined" &&
      typeof window.gtag === "function"
    ) {
      window.gtag("consent", "update", {
        analytics_storage:
          choice === "accepted" ? "granted" : "denied",
      });
    }

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie preferences"
      className="fixed bottom-6 left-1/2 z-[9999] w-full max-w-xl -translate-x-1/2 animate-fadeIn px-4"
    >
      <div className="rounded-2xl border border-[#d8cfc4] bg-[#fdfaf3]/95 px-5 py-4 text-sm text-[#4b3f2f] shadow-xl backdrop-blur">
        <p className="leading-6">
          We use analytics cookies to understand how Vino Pairings is used and
          improve the experience. You can accept or decline optional analytics.
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => updateConsent("accepted")}
            className="rounded-lg bg-[#a37c58] px-4 py-1.5 text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#a37c58] focus:ring-offset-2"
          >
            Accept
          </button>

          <button
            type="button"
            onClick={() => updateConsent("rejected")}
            className="rounded-lg border border-[#d8cfc4] px-4 py-1.5 text-[#4b3f2f] transition hover:bg-[#f7f1e8] focus:outline-none focus:ring-2 focus:ring-[#a37c58] focus:ring-offset-2"
          >
            Reject
          </button>

          <Link
            href="/privacy"
            className="ml-1 underline underline-offset-4 hover:text-[#a37c58] focus:outline-none focus:ring-2 focus:ring-[#a37c58] focus:ring-offset-2"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}