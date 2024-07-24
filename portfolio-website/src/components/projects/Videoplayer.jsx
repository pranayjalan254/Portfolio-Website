import { useRef, useEffect } from "react";

const VideoPlayer = ({ src, playbackRate }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  return (
    <video
      width="100%"
      controls
      className="project-video"
      autoPlay
      muted
      loop
      ref={videoRef}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
