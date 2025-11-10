import MediaPlayer from "~/components/MediaPlayer";

function FullScreenVideo() {
  return (
    <section
      id="full-video-section"
      className="md:py-15 not-md:px-6 container mx-auto"
    >
      <MediaPlayer />
    </section>
  );
}

export default FullScreenVideo;
