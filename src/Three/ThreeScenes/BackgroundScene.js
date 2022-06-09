import React, { useRef, useEffect } from "react";
// Gsap
import gsap from "gsap";
// R3F + react drei
import { useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
// Shaders
import BackgroundMaterial from "../Shaders/BackgroundShader/BackgroundMaterial";

// import backgroundPicture from "../../Assets/Images/dynamic-wang.jpg";
import displacementMap from "../../Assets/Images/displacementMap.jpg";

export default function BackgroundScene(props) {
  // selecting the dom nodes
  let mesh = useRef();
  const shaderRef = useRef();
  // intercepting the page props
  const { imageHovered, imageClicked, introImg, heroImg } = props;
  const { camera, viewport } = useThree();
  // this z value allow the mesh (plane) to always be in fullscreen
  let closeZ = 0.5 / Math.tan(((camera.fov / 2.0) * Math.PI) / 2 / 180.0);

  //  picture dimensions : 5560 × 3706 pixels
  const [displacementt, introImgt, heroImgt] = useTexture([
    displacementMap,
    introImg,
    heroImg,
  ]);
  let imgAspectRatio = heroImgt.image.height / heroImgt.image.width;

  // animation on hovering and clicking the button in the intro frame
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

  useEffect(() => {
    imageClicked && (mesh.position.x = 1);
    // Making the background responsive
    // 13.7
    if (viewport.width < 10.77) {
      mesh.position.x = 1.95;
    } else if (viewport.width < 11.98) {
      mesh.position.x = 1.8;
    } else if (viewport.width < 13.7) {
      mesh.position.x = 1.5;
    }
  }, [viewport, imageClicked]);

  return (
    <mesh
      ref={(e) => (mesh = e)}
      position={[imageClicked ? 0.5 : 0, 0, closeZ]}
    >
      <planeBufferGeometry
        args={[viewport.height / imgAspectRatio, viewport.height, 1, 1]}
      />
      <backgroundMaterial
        ref={shaderRef}
        needsUpdate={true}
        toneMapped={true}
        uniforms-zMax-value={closeZ}
        uniforms-uTexture1-value={introImgt}
        uniforms-uTexture2-value={heroImgt}
        uniforms-uDisplacementMap-value={displacementt}
      />
    </mesh>
  );
}
