import React, { useRef, useMemo, useEffect, useLayoutEffect } from "react";
// Gsap
import gsap, { Power3 } from "gsap";
// R3F + react drei
import { useFrame, useThree } from "@react-three/fiber";
import { Html, useTexture } from "@react-three/drei";
// Shaders
import BackgroundMaterial from "../Shaders/BackgroundShader/BackgroundMaterial";

// import backgroundPicture from "../../Assets/Images/dynamic-wang.jpg";
import backgroundPictureMin from "../../Assets/Images/dynamic-wang-min.jpg";
import displacementMap from "../../Assets/Images/displacementMap.jpg";

export default function BackgroundScene(props) {
  const { imageHovered, imageClicked } = props;
  const shaderRef = useRef();
  const { viewport } = useThree();

  //  picture dimensions : 5560 × 3706 pixels
  const [displacementt, backgroundt] = useTexture([
    displacementMap,
    backgroundPictureMin,
  ]);

  const imgAspect =
    backgroundt.source.data.width / backgroundt.source.data.height;
  let uvAspect = {};
  const winAspect = viewport.width / viewport.height;
  if (winAspect > imgAspect) {
    uvAspect = { x: 1.0, y: imgAspect / winAspect };
  } else {
    uvAspect = { x: imgAspect / winAspect, y: 1 };
  }

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
    <mesh>
      <planeBufferGeometry args={[imgAspect * 2, 2]} />
      <backgroundMaterial
        ref={shaderRef}
        needsUpdate={true}
        uniforms-uTexture-value={backgroundt}
        uniforms-uDisplacementMap-value={displacementt}
      />
    </mesh>
  );
}
