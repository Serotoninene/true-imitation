import React, { createRef, useCallback, useEffect, useRef } from "react";
// gsap
import gsap, { Power3 } from "gsap";

export default function AnimatedWords(props) {
  const {
    trigger,
    startTrigger,
    text,
    disable,
    delay,
    actionsToggled,
    endTrigger,
    markers,
    herobanner,
    stagger,
  } = props;
  const words = text.split(" ");
  const wordsRef = useRef([]);
  const enchanteRef = useRef();

  const handleRef = useCallback((el, idx) => {
    wordsRef.current[idx] = el;
  }, []);

  useEffect(() => {
    const tl = trigger
      ? gsap.timeline({
          scrollTrigger: {
            trigger: `${trigger}`,
            start: `top ${startTrigger}`,
            end: `bottom ${endTrigger}`,
            id: `${words[0]}`,
            markers: markers ? markers : false,
            toggleActions: `${
              actionsToggled ? actionsToggled : "play none none reverse"
            }`,
          },
        })
      : gsap.timeline();

    disable && tl.kill();

    tl.to(wordsRef.current, {
      y: 0,
      stagger: stagger ? stagger : 0.05,
      delay: delay ? delay : 0,
      ease: Power3.easeOut,
    });

    //  Custom little anim only for the herobanner page
    if (herobanner) {
      const herobannerTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#Herobanner",
          id: "HerobannerAnim",
          start: "top top",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: Power3.easeIn,
          duration: 0.5,
        },
      });
      herobannerTl.to([wordsRef.current[3], wordsRef.current[4]], {
        yPercent: 100,
      });
      herobannerTl.to(
        enchanteRef.current,
        {
          y: 0,
        },
        "<"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      {words.map((word, idx) => (
        <span
          key={`word${idx}`}
          style={{
            display: "inline-block",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {herobanner && idx === 3 && (
            <span
              ref={enchanteRef}
              style={{ position: "absolute", transform: "translate(0,-100%" }}
            >
              enchanté
            </span>
          )}
          <span
            ref={(e) => handleRef(e, idx)}
            className="animatedLetter"
            style={{
              display: "inline-block",
              transform: "translate(0, 100%)",
            }}
          >
            {word}&nbsp;
          </span>
        </span>
      ))}
    </>
  );
}
