import { faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  MediaController,
  MediaControlBar,
  MediaVolumeRange,
  MediaPlayButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";
import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

function MediaPlayer() {
  const controllerRef = useRef(null);

  useEffect(() => {
    const element = controllerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          element.pause();
        }
      },
      {
        threshold: 0,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <MediaController className="md:rounded-[46px] w-full aspect-16/9 rounded-3xl overflow-hidden relative">
      <ReactPlayer
        src="assets/videos/nike.mp4#t=0.001"
        slot="media"
        controls={false}
        muted
        loop
        width="100%"
        height="100%"
        style={{
          "--controls": "none",
        }}
        ref={controllerRef}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <MediaPlayButton noTooltip className="bg-transparent">
          <div
            slot="play"
            className="z-1 bg-white not-md:scale-60 cursor-pointer  w-fit px-10 py-[10px] rounded-full text-black text-2xl font-inter font-regular hover:scale-110 transition-transform "
          >
            Play
          </div>
          <div
            slot="pause"
            className="z-1 bg-white not-md:scale-60 cursor-pointer w-fit px-3 py-[14px] flex items-center rounded-full text-black text-2xl font-inter font-regular hover:scale-110 transition-transform "
          >
            <FontAwesomeIcon icon={faPause} />
          </div>
        </MediaPlayButton>
      </div>
      <MediaControlBar className="md:px-6 p-2 pt-18 flex justify-end bg-gradient-to-t from-black/70 to-transparent">
        <div className="bg-gray-500/50 rounded-full md:p-3 p-1 flex items-center md:gap-x-2 shadow-2xl">
          <MediaMuteButton className="hover:scale-110 h-fit cursor-pointer flex transition bg-transparent not-md:scale-75" />
          <MediaVolumeRange className="hover:scale-110 h-fit cursor-pointer flex transition bg-transparent not-md:scale-75" />
          <MediaFullscreenButton className="hover:scale-110 h-fit cursor-pointer flex transition bg-transparent not-md:scale-75" />
        </div>
      </MediaControlBar>
    </MediaController>
  );
}

export default MediaPlayer;
