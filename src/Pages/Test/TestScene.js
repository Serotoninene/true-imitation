import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import pic1 from "../../Assets/Images/spacejoy_dark.jpg";
import displacementMap from "../../Assets/Images/displacementMap.jpg";
import ImgMaterial from "../../Three/Shaders/ImgShader/ImgMaterial";

export default function TestScene() {
  const shaderRef = useRef();
  const meshRef = useRef();

  const [texture, tDisplacement] = useTexture([pic1, displacementMap]);
  let aspectRatio = texture.image.height / texture.image.width;
  const { viewport } = useThree();

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.to(shaderRef.current.uniforms.uProgress, {
      value: 1,
      delay: 1,
      duration: 1,
    });

    tl.to(
      meshRef.current.position,
      {
        z: 0.5,
        duration: 1,
      },
      "<"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      {/* <OrbitControls /> */}
      <mesh ref={meshRef}>
        <planeBufferGeometry
          args={[viewport.height / aspectRatio, viewport.height]}
        />
        <imgMaterial
          ref={shaderRef}
          uniforms-uTexture-value={texture}
          uniforms-uDisplacementMap-value={tDisplacement}
        />
      </mesh>
    </>
  );
}
