"use client";
import { useRef, useState } from "react";
import VideoLightbox from "./VideoLightbox";

export default function VideoCard({ src, poster, caption }) {
  const vidRef = useRef(null);
  const [showOverlay, setShowOverlay] = useState(true);
  const [openLightbox, setOpenLightbox] = useState(false);

  const handlePlay = () => {
    const v = vidRef.current;
    if (!v) return;
    v.play().catch(() => {});
  };

  const handleOpenLightbox = () => {
    vidRef.current?.pause();
    setOpenLightbox(true);
  };

  const handleCloseLightbox = ({ time = 0, wasPlaying = false } = {}) => {
    setOpenLightbox(false);
    const v = vidRef.current;
    if (!v) return;
    try {
      v.currentTime = time || 0;
    } catch {}
    if (wasPlaying) {
      v.play().catch(() => {});
      setShowOverlay(false);
    } else {
      setShowOverlay(true);
    }
  };

  return (
    <>
      <div className="rounded-2xl overflow-hidden bg-[#faf8f5] border border-[#e3d9cd] shadow-md">
        <div className="relative">
          <video
            ref={vidRef}
            src={src}
            poster={poster}
            controls
            playsInline
            preload="metadata"
            className="w-full h-auto"
            onPlay={() => setShowOverlay(false)}
            onPause={() => setShowOverlay(true)}
            onEnded={() => setShowOverlay(true)}
          />

          {/* Gold play overlay with fade */}
          <button
            type="button"
            aria-label="Play video"
            onClick={handlePlay}
            className={`
              absolute inset-0 grid place-items-center transition-opacity duration-300
              ${showOverlay ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            <span
              className="
                inline-flex items-center justify-center
                w-20 h-20 rounded-full
                bg-gradient-to-br from-[#d4af37] to-[#b88900]
                shadow-[0_6px_20px_rgba(212,175,55,0.45)]
                ring-1 ring-white/30
                transition transform active:scale-95
              "
            >
              <svg viewBox="0 0 64 64" width="36" height="36" aria-hidden="true">
                <polygon points="24,18 24,46 46,32" fill="white" />
              </svg>
            </span>
          </button>

          {/* Lightbox button */}
          <button
            type="button"
            onClick={handleOpenLightbox}
            className="
              absolute top-3 right-3 rounded-full
              bg-black/60 hover:bg-black/70 text-white
              px-3 py-1.5 text-xs font-semibold tracking-wide
              backdrop-blur border border-white/15
            "
            aria-label="Open video in lightbox"
            title="Open in lightbox"
          >
            Expand
          </button>
        </div>

        {/* Caption */}
        {caption && (
          <div className="px-4 py-3 text-sm italic text-[#5a4636] bg-[#f7f3ef] border-t border-[#e3d9cd]">
            {caption}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <VideoLightbox
        open={openLightbox}
        onClose={handleCloseLightbox}
        src={src}
        poster={poster}
      />
    </>
  );
}
