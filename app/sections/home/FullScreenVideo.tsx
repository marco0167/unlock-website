import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import MediaPlayer from "~/components/MediaPlayer";
import { getWindowDimensions } from "~/utils/window-dimension";

function FullScreenVideo() {
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
    <section
      id="full-video-section"
      className="md:py-15 not-lg:px-6 container mx-auto"
    >
      <MediaPlayer />
    </section>
  );
}

export default FullScreenVideo;
