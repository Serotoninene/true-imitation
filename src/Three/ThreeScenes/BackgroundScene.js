import React from "react";
// R3F + react drei
import { useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
// Shaders
import vertexShader from "../Shaders/BackgroundShader/vertex.glsl";
// Assets
import backgroundPicture from "../../Assets/Images/dynamic-wang.jpg";

export default function BackgroundScene() {
  //  picture dimensions : 5560 × 3706 pixels
  const backgroundt = useTexture(backgroundPicture);
  const imgAspect =
    backgroundt.source.data.width / backgroundt.source.data.height;
  let uvAspect = {};
  console.log(vertexShader);

  const { viewport } = useThree();
  const winAspect = viewport.width / viewport.height;

  if (winAspect > imgAspect) {
    uvAspect = { x: 1.0, y: imgAspect / winAspect };
  } else {
    uvAspect = { x: imgAspect / winAspect, y: 1 };
  }

  return (
    <mesh>
      <planeBufferGeometry args={[3 * imgAspect, 3]} />
      <meshBasicMaterial map={backgroundt} />
    </mesh>
  );
}
