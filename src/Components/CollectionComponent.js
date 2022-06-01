import React, { useRef, useLayoutEffect } from "react";
// Gsap
import gsap from "gsap";
// Utils
import AnimatedLetters from "../Utilitaries/Tools/AnimatedLetters";

export default function CollectionComponent(props) {
  const { title, reference, i } = props;
  const linesRef = useRef([]);
  const refRef = useRef([]);

  useLayoutEffect(() => {}, []);
  return (
    <div className={`article article${i}`} key={i}>
      <div
        className="hrLine"
        ref={(e) => {
          linesRef.current[i] = e;
        }}
      ></div>
      <div className="flex justify-between">
        <p
          ref={(e) => {
            refRef.current[i] = e;
          }}
        >
          {reference}
        </p>
        <h2>
          <AnimatedLetters
            title={title}
            trigger={`.article${i}`}
            startTrigger="85%"
            markers
          />
        </h2>
      </div>
    </div>
  );
}
