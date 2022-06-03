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
  play,
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
          // if you want to trigger the animation in a callback, you can use the prop "play"
          // but it works in a weird way : if play is true, it PAUSES the anim,
          // and when it is false, it triggers the anim (see below)
          paused: play ? true : false,
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
      : gsap.timeline({ paused: play ? play : false });

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
    // There, when play is false, the anim is triggered
    play === false && tl.play();
  }, [end, play]);

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
