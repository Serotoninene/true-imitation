import React, { useLayoutEffect, useRef } from "react";
// Gsap
import gsap, { Power1, Power3 } from "gsap";
// Utils
import AnimatedWords from "../../Utilitaries/Tools/AnimatedWords";
// Assets
import pic1 from "../../Assets/Images/spacejoy_dark-md.jpg";
import pic1_min from "../../Assets/Images/spacejoy_dark-min.jpg";
import pic2 from "../../Assets/Images/suhyeon.jpg";
import pic2_min from "../../Assets/Images/suhyeon-min.jpg";
// Three
import ProgressiveImg from "../../Utilitaries/Tools/ProgressiveImg";

// TO DO : see a way of preloading the canvases or at least the textures in it

export default function Article1() {
  const imagesContainerRef = useRef([]);
  const imagesRef = useRef([]);
  const textRef = useRef([]);

  useLayoutEffect(() => {
    const imagesTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pic1",
        id: "article1Img",
        start: "top center ",
        toggleActions: "play none none reverse",
      },
      defaults: {
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    });

    gsap.to(textRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.75,
      stagger: 0.1,
      ease: [0.6, 0.05, -0.01, 0.9],
      scrollTrigger: {
        trigger: ".paragraph1",
        id: "article1",
        start: "25% bottom",
        toggleActions: "play none none reverse",
      },
    });
    imagesTl.to(imagesContainerRef.current, {
      y: 0,
    });
    imagesTl.to(
      imagesRef.current,
      {
        opacity: 1,
        scale: 1,
      },
      "<"
    );

    return () => imagesTl.kill();
  }, []);

  return (
    <div data-scroll-section id="Article1">
      <div className="grid">
        <h2>
          <AnimatedWords
            text="A decade of diabetes and creating diamonds for TRUE, the iconic
            disease brand."
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
            imagesContainerRef.current[0] = e;
          }}
        >
          <ProgressiveImg
            src={pic1}
            placeholderSrc={pic1_min}
            reference={(e) => (imagesRef.current[0] = e)}
            alt="interior furniture"
          />
        </div>
        <div
          className="pic2"
          ref={(e) => {
            imagesContainerRef.current[1] = e;
          }}
        >
          <ProgressiveImg
            src={pic2}
            placeholderSrc={pic2_min}
            reference={(e) => (imagesRef.current[1] = e)}
            alt="interior furniture"
          />
        </div>
      </div>
    </div>
  );
}
