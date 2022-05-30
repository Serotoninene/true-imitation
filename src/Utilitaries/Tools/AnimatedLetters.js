import React, { useEffect, useRef } from "react";
// gsap
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";

const AnimatedLetters = ({
  title,
  trigger,
  startTrigger,
  disable,
  toggleActions,
  spacing,
  stagger,
  markers,
  delay,
  end,
}) => {
  const lettersRef = useRef([]);
  const addToRefs = (el, idx) => {
    idx === 0 && (lettersRef.current = []);
    if (el && !lettersRef.current.includes(el)) {
      lettersRef.current[idx] = el;
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = trigger
      ? gsap.timeline({
          scrollTrigger: {
            trigger: `${trigger}`,
            start: `top ${startTrigger}`,
            toggleActions: toggleActions
              ? toggleActions
              : "play none none reverse",
            id: title,
            markers: markers ? markers : false,
          },
        })
      : gsap.timeline();

    disable && tl.kill();

    // Version only to (init position in CSS)
    tl.to(lettersRef.current, {
      y: 0,
      rotate: 0,
      stagger: stagger ? stagger : 0.02,
      ease: Power3.easeOut,
      delay: delay ? delay : 0.4,
    });

    if (end) {
      gsap.to(lettersRef.current, {
        yPercent: -100,
        stagger: stagger ? stagger : 0.02,
        ease: Power3.easeIn,
        delay: 0.4,
      });
    }
  }, [end]);

  return (
    <span
      className="hidden"
      style={{
        display: "inline-block",
      }}
    >
      {[...title].map((letter, idx) => (
        <span
          key={`letter${idx}`}
          ref={(e) => addToRefs(e, idx)}
          className="animatedLetter"
          style={{
            display: "inline-block",
            transform: "translate(0, 400%)",
            marginRight: letter === " " && spacing,
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
