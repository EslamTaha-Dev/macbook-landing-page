import { PresentationControls } from "@react-three/drei";
import * as THREE from "three";
import MacbookModel16 from "../models/Macbook-16";
import MacBookModel14 from "../models/Macbook-14";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Animation: number = 1;
const Offset: number = 5;

const fadeMeshes = (
  group: THREE.Group | null,
  opacity: number,
  immediate = false,
) => {
  if (!group) return;
  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      const material = child.material as THREE.Material & {
        transparent: boolean;
        opacity: number;
      };
      child.material.transparent = true;
      const action = immediate ? gsap.set : gsap.to;
      action(material, {
        opacity,
        duration: immediate ? 0 : Animation,
      });
    }
  });
};

const moveGroup = (group: THREE.Group | null, x: number, immediate = false) => {
  if (!group) return;
  const action = immediate ? gsap.set : gsap.to;
  action(group.position, {
    x,
    duration: immediate ? 0 : Animation,
  });
};

const ModelSwitch = ({
  isMobile,
  isLargeMac,
}: {
  isMobile: boolean;
  isLargeMac: boolean;
}) => {
  // console.log("scale received:", scale);
  const smallMacRef = useRef<THREE.Group>(null);
  const largeMacRef = useRef<THREE.Group>(null);

  useLayoutEffect(() => {
    if (!smallMacRef.current || !largeMacRef.current) return;
    
    smallMacRef.current.position.x = -Offset;
    largeMacRef.current.position.x = 0;

    fadeMeshes(smallMacRef.current, 0, true);
    fadeMeshes(largeMacRef.current, 1, true);
  }, []);

  useGSAP(() => {
    if (isLargeMac) {
      moveGroup(smallMacRef.current, -Offset);
      moveGroup(largeMacRef.current, 0);

      fadeMeshes(smallMacRef.current, 0);
      fadeMeshes(largeMacRef.current, 1);
    } else {
      moveGroup(smallMacRef.current, 0);
      moveGroup(largeMacRef.current, Offset);

      fadeMeshes(smallMacRef.current, 1);
      fadeMeshes(largeMacRef.current, 0);
    }
  }, [isLargeMac]);

  const controlsConfig = {
    snap: true,
    speed: 1,
    polar: [-Math.PI / 2, Math.PI / 2] as [number, number],
    azimuth: [-Infinity, Infinity] as [number, number],
    zoom: 1,
    config: {
      mass: 1,
      tension: 0,
      friction: 26,
    },
  };

  return (
    <>
      <group ref={largeMacRef}>
        <PresentationControls {...controlsConfig}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </PresentationControls>
      </group>

      <group ref={smallMacRef}>
        <PresentationControls {...controlsConfig}>
          <MacBookModel14 scale={isMobile ? 0.03 : 0.06} />
        </PresentationControls>
      </group>
    </>
  );
};

export default ModelSwitch;
