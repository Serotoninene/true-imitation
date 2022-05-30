import React, { useLayoutEffect, useRef } from "react";
// Gsap
import gsap, { Power1, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
// Utils
import ProgressiveImg from "../../Utilitaries/Tools/ProgressiveImg";
// Assets
import pic1 from "../../Assets/Images/spacejoy_dark.jpg";
import pic1_min from "../../Assets/Images/spacejoy_dark-min.jpg";
import pic2 from "../../Assets/Images/avery-klein.jpg";
import pic2_min from "../../Assets/Images/avery-klein-min.jpg";
import AnimatedLetters from "../../Utilitaries/Tools/AnimatedLetters";
import AnimatedWords from "../../Utilitaries/Tools/AnimatedWords";

export default function Article1() {
  const imagesRef = useRef([]);
  const textRef = useRef([]);

  useLayoutEffect(() => {
    gsap.to(imagesRef.current, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: "#Article1",
        id: "article1",
        start: "center center",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(textRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.75,
      stagger: 0.1,
      ease: Power1.easeOut,
      scrollTrigger: {
        trigger: "#Article1",
        id: "article1 Text",
        markers: true,
        start: "10% 25%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div data-scroll-section id="Article1">
      <div className="grid">
        <h2>
          <AnimatedWords
            text="A decade of diabetes and creating diamonds for TRUE, the iconic
            disease brand."
            spacing="1rem"
            trigger="#Article1"
            startTrigger="center"
          />
        </h2>
      </div>
      <div className="grid">
        <p
          className="paragraph1"
          ref={(e) => {
            textRef.current[0] = e;
          }}
        >
          There are some advanced methods for such scenarios and I wanted to
          solve this as easily as possible. I am using JWT for user
          authentication and my idea.
        </p>
        <p
          className="paragraph2"
          ref={(e) => {
            textRef.current[1] = e;
          }}
        >
          There are some advanced methods for such scenarios and I wanted to
          solve this as easily as possible. I am using JWT for user
          authentication and my idea is simple I will store the JWT on the
          client-side and will make use of use of the context API to avoid prop
          drilling.
        </p>
      </div>
      <div className="grid">
        <div
          className="pic1"
          ref={(e) => {
            imagesRef.current[0] = e;
          }}
        >
          <ProgressiveImg
            src={pic1}
            placeholderSrc={pic1_min}
            alt="interior representation"
          />
        </div>
        <div
          className="pic2"
          ref={(e) => {
            imagesRef.current[1] = e;
          }}
        >
          <ProgressiveImg
            src={pic2}
            placeholderSrc={pic2_min}
            alt="interior representation"
          />
        </div>
      </div>
    </div>
  );
}
