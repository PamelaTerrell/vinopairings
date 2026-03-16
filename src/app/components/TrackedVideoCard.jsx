"use client";

import { useEffect, useRef } from "react";

function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

export default function TrackedVideoCard({
  src,
  poster,
  caption,
  videoTitle = "Video",
  pagePath = "/tips",
}) {
  const videoRef = useRef(null);
  const startedRef = useRef(false);
  const completedRef = useRef(false);
  const progressMarksRef = useRef(new Set());
  const enterTimeRef = useRef(Date.now());

  useEffect(() => {
    trackEvent("tips_page_view", {
      page_path: pagePath,
      page_title: videoTitle,
    });
  }, [pagePath, videoTitle]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const sendProgress = () => {
      if (!video.duration || Number.isNaN(video.duration)) return;

      const percent = Math.floor((video.currentTime / video.duration) * 100);
      const marks = [10, 25, 50, 75, 90];

      for (const mark of marks) {
        if (percent >= mark && !progressMarksRef.current.has(mark)) {
          progressMarksRef.current.add(mark);

          trackEvent("tips_video_progress", {
            page_path: pagePath,
            video_title: videoTitle,
            video_percent: mark,
            video_current_time: Math.round(video.currentTime),
            video_duration: Math.round(video.duration),
          });
        }
      }
    };

    const handlePlay = () => {
      if (!startedRef.current) {
        startedRef.current = true;

        trackEvent("tips_video_start", {
          page_path: pagePath,
          video_title: videoTitle,
          video_src: src,
        });
      } else {
        trackEvent("tips_video_resume", {
          page_path: pagePath,
          video_title: videoTitle,
          video_current_time: Math.round(video.currentTime),
        });
      }
    };

    const handlePause = () => {
      if (video.ended) return;

      trackEvent("tips_video_pause", {
        page_path: pagePath,
        video_title: videoTitle,
        video_current_time: Math.round(video.currentTime),
        video_duration: Math.round(video.duration || 0),
      });
    };

    const handleEnded = () => {
      if (completedRef.current) return;
      completedRef.current = true;

      trackEvent("tips_video_complete", {
        page_path: pagePath,
        video_title: videoTitle,
        video_duration: Math.round(video.duration || 0),
      });
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("timeupdate", sendProgress);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("timeupdate", sendProgress);
      video.removeEventListener("ended", handleEnded);
    };
  }, [pagePath, src, videoTitle]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        const secondsOnPage = Math.round((Date.now() - enterTimeRef.current) / 1000);
        const video = videoRef.current;

        trackEvent("tips_page_leave", {
          page_path: pagePath,
          seconds_on_page: secondsOnPage,
          video_started: startedRef.current,
          video_completed: completedRef.current,
          video_current_time: Math.round(video?.currentTime || 0),
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [pagePath]);

  return (
    <figure className="space-y-3">
      <div className="overflow-hidden rounded-2xl border border-[#d8cfc4] bg-[#fffdf9] shadow-sm">
        <video
          ref={videoRef}
          controls
          preload="metadata"
          poster={poster}
          className="w-full h-auto"
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
