import { Environment, Lightformer } from "@react-three/drei";
import React from "react";

const Studio = () => {
  return (
    <group name="lights">
      <Environment resolution={512}>
        <group>
          <Lightformer
            form="rect"
            intensity={7}
            position={[-10, 5, -5]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
          <Lightformer
            form="rect"
            intensity={7}
            position={[10, 0, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>
      <spotLight
        intensity={Math.PI * 0.2}
        angle={0.15}
        decay={0}
        position={[0, -25, 10]}
      />
      <spotLight
        intensity={Math.PI * 1}
        angle={0.15}
        decay={0.1}
        position={[0, 15, 5]}
      />
    </group>
  );
};

export default React.memo(Studio);