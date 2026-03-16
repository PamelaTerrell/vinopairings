"use client";

import { useEffect, useRef } from "react";

function fireEvent(name, params = {}) {
  if (typeof window === "undefined") return;

  // Google Analytics via gtag
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }

  // Optional fallback for GTM/dataLayer setups
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: name,
      ...params,
    });
  }
}

export default function TrackedTipsVideo({
  src,
  poster,
  caption,
  title = "Opening a Bottle with Grace",
}) {
  const videoRef = useRef(null);
  const progressMarksSent = useRef(new Set());
  const startedRef = useRef(false);
  const completedRef = useRef(false);
  const pageEnterTime = useRef(Date.now());

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    function handlePlay() {
      if (!startedRef.current) {
        startedRef.current = true;
        fireEvent("tips_video_start", {
          video_title: title,
          video_src: src,
          page_path: "/tips",
        });
      }

      fireEvent("tips_video_play", {
        video_title: title,
        video_src: src,
        page_path: "/tips",
        current_time: Math.round(video.currentTime),
      });
    }

    function handlePause() {
      // Avoid sending pause at natural completion
      if (video.ended) return;

      fireEvent("tips_video_pause", {
        video_title: title,
        video_src: src,
        page_path: "/tips",
        current_time: Math.round(video.currentTime),
        percent_viewed: Math.round((video.currentTime / video.duration) * 100) || 0,
      });
    }

    function handleTimeUpdate() {
      if (!video.duration) return;

      const percent = (video.currentTime / video.duration) * 100;
      const checkpoints = [25, 50, 75, 90];

      checkpoints.forEach((mark) => {
        if (percent >= mark && !progressMarksSent.current.has(mark)) {
          progressMarksSent.current.add(mark);

          fireEvent("tips_video_progress", {
            video_title: title,
            video_src: src,
            page_path: "/tips",
            progress_percent: mark,
            current_time: Math.round(video.currentTime),
            duration_seconds: Math.round(video.duration),
          });
        }
      });
    }

    function handleEnded() {
      if (completedRef.current) return;
      completedRef.current = true;

      fireEvent("tips_video_complete", {
        video_title: title,
        video_src: src,
        page_path: "/tips",
        duration_seconds: Math.round(video.duration) || 0,
      });
    }

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [src, title]);

  useEffect(() => {
    function handleLeave() {
      const secondsOnPage = Math.round((Date.now() - pageEnterTime.current) / 1000);
      const video = videoRef.current;

      fireEvent("tips_page_exit", {
        page_path: "/tips",
        seconds_on_page: secondsOnPage,
        video_started: startedRef.current,
        video_completed: completedRef.current,
        video_current_time: video ? Math.round(video.currentTime) : 0,
      });
    }

    window.addEventListener("beforeunload", handleLeave);

    return () => {
      window.removeEventListener("beforeunload", handleLeave);
    };
  }, []);

  return (
    <figure className="space-y-3">
      <div className="overflow-hidden rounded-2xl border border-[#d8cfc4] bg-white shadow-sm">
        <video
          ref={videoRef}
          controls
          preload="metadata"
          poster={poster}
          className="h-auto w-full"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {caption ? (
        <figcaption className="text-sm leading-6 text-[#8a7463]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
