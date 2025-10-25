"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function InstagramEmbed({ url, caption = "" }) {
  // Re-run Instagram’s parser after the script loads and on mount
  const processEmbeds = () => {
    if (typeof window !== "undefined" && window.instgrm?.Embeds?.process) {
      window.instgrm.Embeds.process();
    }
  };

  useEffect(() => {
    processEmbeds();
  }, []);

  return (
    <>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={processEmbeds}
      />
      <div className="ig-embed-wrap">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
            margin: "0 auto",
            maxWidth: "540px",
            width: "100%",
          }}
        >
          <a href={url} target="_blank" rel="noopener noreferrer" />
          {caption ? (
            <p style={{ color: "#777", fontFamily: "Arial,sans-serif", fontSize: 14, textAlign: "center", padding: "8px 12px" }}>
              {caption}
            </p>
          ) : null}
        </blockquote>
      </div>
    </>
  );
}
