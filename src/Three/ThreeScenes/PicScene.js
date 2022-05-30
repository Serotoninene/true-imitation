import React, { useRef } from "react";
// R3F + react drei
import { useTexture } from "@react-three/drei";

export default function PicScene(props) {
  const { img } = props;
  const { imgT } = useTexture(img);
  return (
    <mesh>
      <planeBufferGeometry />
      <meshBasicMaterial map={imgT} />
    </mesh>
  );
}
