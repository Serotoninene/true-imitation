import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

export default function CanvasContainer(props) {
  return (
    <Canvas
      camera={{
        fov: 2 * (180 / Math.PI) * Math.atan(1.5002698327037236 / (2 * 5)),
        near: 0.1,
        far: 1000,
        position: [0, 0, 5],
      }}
    >
      <Suspense fallback={null}>{props.children}</Suspense>
    </Canvas>
  );
}
