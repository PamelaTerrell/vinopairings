"use client";
import { useEffect, useRef } from "react";

export default function VideoLightbox({ open, src, poster, onClose }) {
  const backdropRef = useRef(null);
  const videoRef = useRef(null);

  // ESC closes and returns playback state
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeWithState();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;

  const closeWithState = () => {
    const v = videoRef.current;
    const payload = v
      ? { time: v.currentTime || 0, wasPlaying: !!(!v.paused && !v.ended) }
      : { time: 0, wasPlaying: false };
    onClose?.(payload);
  };

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === backdropRef.current) closeWithState();
      }}
      aria-modal="true"
      role="dialog"
    >
      {/* Viewport-fixed controls so they never hide behind native controls */}
      <div className="fixed top-3 right-3 z-[1000] flex gap-2 pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)]">
        <button
          onClick={closeWithState}
          className="rounded-full bg-white/15 hover:bg-white/25 text-white px-3 py-1.5 text-xs font-semibold border border-white/20 shadow"
          aria-label="Return video to page"
          title="Return to page"
        >
          Return
        </button>
        <button
          onClick={closeWithState}
          className="rounded-full bg-white/15 hover:bg-white/25 text-white w-8 h-8 leading-none text-base border border-white/20 shadow"
          aria-label="Close video"
          title="Close"
        >
          ✕
        </button>
      </div>

      <div className="relative w-full max-w-3xl">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black">
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            controls
            autoPlay
            playsInline
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
