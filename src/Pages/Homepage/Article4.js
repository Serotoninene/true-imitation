import React, { useRef, useLayoutEffect } from "react";
// Gsap
import gsap, { Power3 } from "gsap";
// Utils
import AnimatedLetters from "../../Utilitaries/Tools/AnimatedLetters";

const content = [
  {
    title: "Venus",
    ref: "#92973",
  },
  {
    title: "Guernica",
    ref: "#92974",
  },
  {
    title: "Assise",
    ref: "#92975",
  },
  {
    title: "Mer ombragée",
    ref: "#92976",
  },
  {
    title: "Crète",
    ref: "#92977",
  },
];

export default function Article4() {
  const titlesRef = useRef([]);
  const linesRef = useRef([]);
  const refRef = useRef([]);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      defaults: { stagger: 0.25, ease: Power3.easeOut },
      scrollTrigger: {
        trigger: "#Article4",
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    tl.to([refRef.current], {
      y: 0,
      opacity: 1,
    });
    tl.to(
      [titlesRef.current],
      {
        y: 0,
        opacity: 1,
      },
      "<"
    );

    tl.to(
      linesRef.current,
      {
        width: "100%",
      },
      "<"
    );
  }, []);

  return (
    <div data-scroll-section id="Article4">
      <h1>
        <AnimatedLetters
          title="Collection"
          trigger="#Article4"
          startTrigger={"60%"}
        />
      </h1>
      {content.map((c, i) => (
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
              {c.ref}
            </p>
            <h2
              ref={(e) => {
                titlesRef.current[i] = e;
              }}
            >
              {c.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
