import React, { useRef, useMemo, useEffect, useLayoutEffect } from "react";
// Gsap
import gsap, { Power2, Power3 } from "gsap";
import * as THREE from "three";
// R3F + react drei
import { useFrame, useThree } from "@react-three/fiber";
import { Html, useTexture } from "@react-three/drei";
// Shaders
import BackgroundMaterial from "../Shaders/BackgroundShader/BackgroundMaterial";

// import backgroundPicture from "../../Assets/Images/dynamic-wang.jpg";
import displacementMap from "../../Assets/Images/displacementMap.jpg";

export default function BackgroundScene(props) {
  const { imageHovered, imageClicked, introImg, heroImg } = props;
  const shaderRef = useRef();
  const { camera, viewport } = useThree();
  const closeZ = 0.5 / Math.tan(((camera.fov / 2.0) * Math.PI) / 180.0);

  //  picture dimensions : 5560 × 3706 pixels
  const [displacementt, introImgt, heroImgt] = useTexture([
    displacementMap,
    introImg,
    heroImg,
  ]);
  introImgt.encoding = THREE.LinearEncoding;
  heroImgt.encoding = THREE.LinearEncoding;
  let imgAspectRatio = heroImgt.image.height / heroImgt.image.width;

  if (shaderRef.current) {
    if (!imageClicked) {
      if (imageHovered) {
        gsap.to(shaderRef.current.uniforms.uProgress, {
          value: 0.5,
        });
      } else {
        gsap.to(shaderRef.current.uniforms.uProgress, {
          value: 0,
        });
      }
    } else {
      gsap.to(shaderRef.current.uniforms.uProgress, {
        value: 1,
      });
    }
  }

  return (
    <mesh position={[0.5, 0, closeZ]}>
      <planeBufferGeometry
        args={[viewport.height / imgAspectRatio, viewport.height, 1, 1]}
      />
      <backgroundMaterial
        ref={shaderRef}
        needsUpdate={true}
        toneMapped={true}
        uniforms-zMax-value={closeZ}
        //  For easy dev I'm switching the two pictures so I can work on the herobanner HTML CSS
        uniforms-uTexture1-value={introImgt}
        uniforms-uTexture2-value={heroImgt}
        uniforms-uDisplacementMap-value={displacementt}
      />
    </mesh>
  );
}
