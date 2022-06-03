import React, { useLayoutEffect, useRef, useState } from "react";
// Gsap
import gsap, { Power3 } from "gsap";
// Utilities
import AnimatedLetters from "../../Utilitaries/Tools/AnimatedLetters";
// Assets
import icon from "../../Assets/Icons/mainIcon_orange.svg";

export default function Contact() {
  const linesRef = useRef([]);
  const [playLetterAnim, setPlayLetterAnim] = useState(false);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#Contact",
        start: "top 75%",
        id: "contact",
        markers: true,
      },
    });
    tl.to(linesRef.current, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: Power3.easeIn,
      onComplete: () => {
        setPlayLetterAnim(true);
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      data-scroll-section
      id="Contact"
      className="flex-column justify-between"
    >
      <h1 className="text-center">
        <span className="transform" ref={(e) => (linesRef.current[0] = e)}>
          stay in
        </span>
        <br />
        <span className="transform" ref={(e) => (linesRef.current[1] = e)}>
          the loop
        </span>
        <br />
        <span className="orange">
          <AnimatedLetters
            title="Contact us"
            spacing="2rem"
            play={!playLetterAnim}
          />
        </span>
      </h1>
      <div className="footerContainer ">
        <div className="hrLine"></div>
        <div className="footer grid">
          <div className="socials footerSection flex ">
            <div className="vrtLine"></div>
            <div className="flex-column">
              <h4> Our Socials</h4>
              <a>Instagram</a>
              <a>Twitter</a>
              <a>Facebook</a>
            </div>
          </div>
          <div className="iconContainer flex justify-center align-center relative">
            <div className="icon">
              <img src={icon} alt="true icon" className="img-fluid" />
            </div>
            <div className="vrtLine absolute" style={{ left: 0 }}></div>
            <div className="vrtLine absolute" style={{ right: 0 }}></div>
          </div>
          <div className="newsletter footerSection relative">
            <h5>
              Be the first to know of private launches, special promotions, and
              insider access by joining our inner circle.
            </h5>
            <form>
              <input type={"text"} placeholder="Enter your mail"></input>
            </form>
            <div
              className="vrtLine absolute"
              style={{ right: 0, top: 0 }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
