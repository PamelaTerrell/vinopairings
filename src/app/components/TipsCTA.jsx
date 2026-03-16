"use client";

import Link from "next/link";

function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

export default function TipsCTA({ href, children }) {
  return (
    <Link
      href={href}
      onClick={() => {
        trackEvent("tips_cta_click", {
          page_path: "/tips",
          destination: href,
          link_text: typeof children === "string" ? children : "CTA click",
        });
      }}
      className="mt-5 inline-flex items-center rounded-lg bg-[#7a1e1e] px-5 py-3 text-white transition hover:opacity-90"
    >
      {children}
    </Link>
  );
}
