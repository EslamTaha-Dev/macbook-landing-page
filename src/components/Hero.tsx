import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  });
  return (
    <section id="Hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/public/title.png" alt="" />
      </div>
      <video
        ref={videoRef}
        src="/public/videos/hero.mp4"
        autoPlay
        muted
        playsInline
      />
      <button>Buy</button>
      <p>From $1599 or $133.25/mo. for 12 mo.</p>
    </section>
  );
};

export default Hero;
