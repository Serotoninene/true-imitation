import React, { useLayoutEffect, useRef } from "react";
// Gsap
import gsap, { Power3 } from "gsap";
// Component
import Button from "../../Components/Button";
// Utils
import AnimatedLetters from "../../Utilitaries/Tools/AnimatedLetters";

export default function Herobanner(props) {
  const refs = useRef([]);
  const tl = useRef();
  const { imageClicked, setImageHovered, setImageClicked } = props;

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // CSS initiated so the animation would work
    tl.current.to(refs.current, {
      y: 0,
      opacity: 1,
      delay: 1.2,
      stagger: 0.05,
    });
  }, []);

  useLayoutEffect(() => {
    imageClicked &&
      tl.current.to(refs.current, {
        yPercent: 50,
        opacity: 0,
        stagger: 0.05,
        delay: 0.4,
        onComplete: () => {
          tl.current.to(refs.current, { display: "none" });
        },
      });
  }, [imageClicked]);

  return (
    <div id="Herobanner" className="flex justify-center align-center relative">
      <div className="flex-column align-center">
        <h1>
          <AnimatedLetters
            title="Lorem Ipsum"
            delay={1}
            spacing="3rem"
            end={imageClicked}
          />{" "}
        </h1>
        <div
          className="buttonContainer"
          ref={(e) => {
            refs.current[0] = e;
          }}
          onMouseEnter={() => {
            setImageHovered(true);
          }}
          onMouseLeave={() => {
            setImageHovered(false);
          }}
          onClick={() => {
            setImageClicked(true);
          }}
        >
          <div>
            <Button> View Work </Button>
          </div>
        </div>
      </div>

      {/* footer line */}
      <div className="footer grid absolute">
        <div
          className="section left flex-column justify-between"
          ref={(e) => {
            refs.current[1] = e;
          }}
        >
          <h2>Set builders for live events & luxury retail experiences.</h2>
          <p>TRUE STAGING ¢2022</p>
        </div>
        <div
          className="section right"
          ref={(e) => {
            refs.current[2] = e;
          }}
        >
          <h3>YOUR DESIGNS: MADE REALITY</h3>
          <p>
            TRUE is a specialist in technical design, set fabrication and
            construction. Your delivery partner for events ans installations
            anywhere in the world. Our commitment to excellence is what sets us
            apart.
          </p>
        </div>
      </div>
    </div>
  );
}
