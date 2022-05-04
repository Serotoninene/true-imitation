import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

export default function CanvasContainer(props) {
  const imgAspectRatio = 1.5002698327037236;
  const cameraDistance = 5;
  return (
    <div className="CanvasContainer absolute">
      <Canvas
        camera={{
          fov:
            2 *
            (180 / Math.PI) *
            Math.atan(imgAspectRatio / (2 * cameraDistance)),
          near: 0.1,
          far: 1000,
          position: [0, 0, cameraDistance],
        }}
      >
        <Suspense fallback={null}>{props.children}</Suspense>
      </Canvas>
    </div>
  );
}
