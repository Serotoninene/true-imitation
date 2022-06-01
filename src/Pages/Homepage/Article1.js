import React, { useLayoutEffect, useRef } from "react";
// Gsap
import gsap, { Power1, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
// Utils
import AnimatedWords from "../../Utilitaries/Tools/AnimatedWords";
// Assets
import pic1 from "../../Assets/Images/spacejoy_dark.jpg";
import pic2 from "../../Assets/Images/avery-klein.jpg";
// Three
import PicScene from "../../Three/ThreeScenes/PicScene";
import { Canvas } from "@react-three/fiber";

export default function Article1() {
  const imagesRef = useRef([]);
  const textRef = useRef([]);

  useLayoutEffect(() => {
    gsap.to(textRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.75,
      stagger: 0.1,
      ease: Power1.easeOut,
      scrollTrigger: {
        trigger: ".paragraph1",
        id: "article1",
        start: "25% bottom",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to(imagesRef.current, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: "#Article1",
        id: "article1Img",
        start: "25% 25%",
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
          <Canvas linear>
            <PicScene pic={pic1} trigger=".pic1" startTrigger="center top" />
          </Canvas>
        </div>
        <div
          className="pic2"
          ref={(e) => {
            imagesRef.current[1] = e;
          }}
        >
          <Canvas linear>
            <PicScene pic={pic2} trigger=".pic2" />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
