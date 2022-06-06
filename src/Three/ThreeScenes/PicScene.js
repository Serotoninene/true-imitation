import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

import displacementMap from "../../Assets/Images/displacementMap.jpg";
import ImgMaterial from "../../Three/Shaders/ImgShader/ImgMaterial";
import { FramebufferTexture } from "three";

export default function TestScene(props) {
  const { trigger, pic, markers, startTrigger } = props;
  const shaderRef = useRef();
  const meshRef = useRef();

  const [texture, tDisplacement] = useTexture([pic, displacementMap]);

  // Checking out when the loading is done
  useEffect(() => {
    console.log("texture is loaded .. I think");
  }, [texture]);
  let aspectRatio = texture.image.height / texture.image.width;
  const { viewport } = useThree();

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `${trigger}`,
        start: `${startTrigger}`,
        id: "picScene",
        markers: markers ? true : false,
        toggleActions: "play none none reverse",
      },
    });
    tl.to(shaderRef.current.uniforms.uProgress, {
      value: 1,
    });
    tl.to(
      meshRef.current.position,
      {
        y: 0,
        z: 1,
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
      <mesh ref={meshRef} position={[0, -1, -5]}>
        <planeBufferGeometry
          args={[viewport.width / aspectRatio, viewport.width]}
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
