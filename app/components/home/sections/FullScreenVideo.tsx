import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { getWindowDimensions } from "~/utils/window-dimension";

function FullScreenVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (getWindowDimensions().width < 768) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "#full-video-section",
        { scale: 0.7 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: "#full-video-section",
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="full-video-section" className="md:py-15 not-md:p-5 container mx-auto">
      <div className="md:rounded-[46px] rounded-3xl overflow-hidden relative">
        <div
          className="z-10 absolute w-full h-full"
          onClick={() => {
            if (videoRef.current) {
              if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
              } else {
                videoRef.current.play();
                setIsPlaying(true);
              }
            }
          }}
        >
          <div
            className={`z-1 bg-white ${isPlaying ? "hidden" : "block"} not-md:scale-60 cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit px-10 py-[10px] rounded-full text-black text-2xl font-inter font-regular hover:scale-110 transition-transform `}
          >
            {isPlaying ? "Pause" : "Play"}
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              if (videoRef.current) {
                if (videoRef.current.muted) {
                  setIsMuted(false);
                  videoRef.current.muted = false;
                } else {
                  setIsMuted(true);
                  videoRef.current.muted = true;
                }
              }
            }}
            className="absolute z-10 not-md:scale-60 bg-gray-500/50 rounded-full md:bottom-6 md:right-6 bottom-0 right-0 p-2 hover:scale-110 cursor-pointer flex transition"
          >
            {isMuted ? (
              <FontAwesomeIcon icon={faVolumeMute} size="2x" />
            ) : (
              <FontAwesomeIcon icon={faVolumeHigh} size="2x" />
            )}
          </div>
        </div>
        <video
          ref={videoRef}
          className="w-full aspect-[16/9] object-cover"
          // autoPlay
          loop
          muted
        >
          <source src="assets/videos/nike.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default FullScreenVideo;
