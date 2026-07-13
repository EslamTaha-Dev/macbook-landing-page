import { PresentationControls } from "@react-three/drei";
import * as THREE from "three";
import MacbookModel16 from "../models/Macbook-16";
import MacBookModel14 from "../models/Macbook-14";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const Animation: number = 1;
const Offset: number = 5;

const fadeMeshes = (group: THREE.Group | null, opacity: number) => {
  if (!group) return;
  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      const material = child.material as THREE.Material & {
        transparent: boolean;
        opacity: number;
      };
      child.material.transparent = true;
      gsap.to(material, {
        opacity,
        duration: Animation,
      });
    }
  });
};

const moveGroup = (group: THREE.Group | null, x: number) => {
  if (!group) return;
  gsap.to(group.position, {
    x,
    duration: Animation,
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
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={smallMacRef}>
          <MacBookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitch;
