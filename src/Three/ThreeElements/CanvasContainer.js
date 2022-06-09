import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

export default function CanvasContainer(props) {
  const cameraDistance = 5;

  return (
    <div className="CanvasContainer absolute" data-scroll-section>
      <Canvas
        camera={{
          near: 0.1,
          far: 1000,
          position: [0, 0, cameraDistance],
        }}
        linear
      >
        <Suspense fallback={null}>{props.children}</Suspense>
      </Canvas>
    </div>
  );
}
