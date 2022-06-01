import React, { useEffect, useRef } from "react";
// Components
import TestScene from "./TestScene";
// Three
import { Canvas } from "@react-three/fiber";

export default function Test() {
  const ref = useRef();

  useEffect(() => {
    // const canvas = ref.current;
    // const ctx = canvas.getContext("2d");
    // ctx.canvas.width = window.innerHeight; //change here to the size of the modal, you can calculate it or get it with a reference
    // ctx.canvas.height = window.innerHeight; //change here to the size of the modal, you can calculate it or get it with a reference
  }, []);
  return (
    <div id="Test" style={{ width: "500px" }}>
      <Canvas linear ref={ref}>
        <TestScene />
      </Canvas>
    </div>
  );
}
