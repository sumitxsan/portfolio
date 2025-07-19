"use client"

// EarthCanvas.tsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

// Extend the GLTFResult type for proper typing if needed
type GLTFResult = ReturnType<typeof useGLTF>;

const Earth: React.FC = () => {
  const earth: GLTFResult = useGLTF("./character/scene.gltf");

  return (
    <primitive
      object={earth.scene}
      scale={1.12}
      position-y={-1.7}
      rotation-y={0}
    />
  );
};

// Required by useGLTF for preloading in TS
useGLTF.preload("./character/scene.gltf");

const EarthCanvas: React.FC = () => {
  return (
    <Canvas
      
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.5,
        far: 200,
        position: [-4, 2, 1],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
      {/* Lighting */}
    <ambientLight intensity={0.5} />
    <directionalLight
      position={[5, 5, 5]}
      intensity={1}
      castShadow
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
    />
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
