import { Canvas } from "@react-three/fiber";
import Studio from "./three/Studio";
import { features, featureSequence } from "../constants";
import clsx from "clsx";
import { Suspense, useEffect, useRef } from "react";
import MacbookModel from "./models/Macbook";
import { useMediaQuery } from "react-responsive";
import { Html } from "@react-three/drei";
import useMacbook from "../store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { Group } from "three";

const Scroll = () => {
  const groupRef = useRef<Group | null>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const { setTexture } = useMacbook();

  useEffect(() => {
    featureSequence.forEach((feature) => {
      const vid = document.createElement("video");
      Object.assign(vid, {
        src: feature.videoPath,
        muted: true,
        playsInline: true,
        preload: "auto",
        crossOrigin: "anonymous",
      });
      vid.load();
    });
  }, []);

  useGSAP(() => {
    const modtimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#fCanv",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#fCanv",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });

    if (groupRef.current) {
      modtimeline.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: "power1.inOut",
      });
    }

    timeline
      .call(() => setTexture("/videos/feature-1.mp4"))
      .to(".box1", {
        opacity: 1,
        y: 0,
      })
      .call(() => setTexture("/videos/feature-2.mp4"))
      .to(".box2", {
        opacity: 1,
        y: 0,
      })
      .call(() => setTexture("/videos/feature-3.mp4"))
      .to(".box3", {
        opacity: 1,
        y: 0,
      })
      .call(() => setTexture("/videos/feature-4.mp4"))
      .to(".box4", {
        opacity: 1,
        y: 0,
      })
      .call(() => setTexture("/videos/feature-5.mp4"))
      .to(".box5", {
        opacity: 1,
        y: 0,
      });
  }, []);

  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html>
            <h1 className="text-white text-3xl uppercase">Loading ...</h1>
          </Html>
        }
      >
        <MacbookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
      </Suspense>
    </group>
  );
};

const Feature = () => {
  return (
    <section id="feature">
      <h2>See it all in a new light.</h2>
      <Canvas id="fCanv">
        <Studio />
        <ambientLight intensity={0.5} />
        <Scroll />
      </Canvas>
      <div className="absolute inset-0">
        {features.map((fea) => (
          <div key={fea.id} className={clsx("box", `box${fea.id}`, fea.styles)}>
            <img src={fea.icon} alt={fea.highlight} />
            <p>
              <span className="text-white">{fea.highlight}</span> {fea.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
