import React, { useRef, useLayoutEffect, useEffect } from "react";
// Gsap
import gsap, { Power1 } from "gsap";
// Utils
import ProgressiveImage from "react-progressive-graceful-image";
import AnimatedWords from "../../Utilitaries/Tools/AnimatedWords";
// assets
import pic1 from "../../Assets/Images/jean-philippe.jpg";
import pic2 from "../../Assets/Images/suhyeon.jpg";
import pic3 from "../../Assets/Images/black_chair.png";
import pic4 from "../../Assets/Images/mirror.png";
import pic1_min from "../../Assets/Images/jean-philippe-min.jpg";
import pic2_min from "../../Assets/Images/suhyeon-min.jpg";
import pic3_min from "../../Assets/Images/black_chair-min.png";
import pic4_min from "../../Assets/Images/mirror-min.png";

const pics = [
  { mainPic: pic1, placeholder: pic1_min, alt: "interior view", id: 1 },
  { mainPic: pic2, placeholder: pic2_min, alt: "interior view", id: 2 },
  { mainPic: pic3, placeholder: pic3_min, alt: "interior view", id: 3 },
  { mainPic: pic4, placeholder: pic4_min, alt: "interior view", id: 4 },
];

export default function Article2() {
  const textRef = useRef([]);
  const imageRef = useRef([]);
  const hoverTl = useRef();

  const handleHover = () => {
    hoverTl.current.play();
  };
  const handleHoverOut = () => {
    hoverTl.current.reverse();
  };

  useEffect(() => {
    hoverTl.current = gsap.to(imageRef.current, {
      xPercent: -50,
      stagger: 0.1,
      paused: true,
    });
  }, []);

  useLayoutEffect(() => {
    gsap.to(textRef.current, {
      y: 0,
      opacity: 1,
      stagger: 0.25,
      duration: 0.7,
      ease: Power1.easeOut,
      scrollTrigger: {
        trigger: "#Article2",
        id: "article2",
        start: "top 40%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div data-scroll-section id="Article2" className="grid">
      <div className="left">
        <h3>
          <AnimatedWords
            text="By changing, we grow, and by growing we learn"
            trigger="#Article2"
            startTrigger="center"
          />
        </h3>
        <p
          className="paragraph"
          ref={(e) => {
            textRef.current[1] = e;
          }}
        >
          Framer lets you apply code to a layer that will override the layer’s
          props when it is displayed in the preview window. An override is
          simply a function that returns new values for any properties you want
          to override. For example, to move a layer 100px down along the y-axis
          we need to set its y prop to 100.All my examples use overrides. If you
          are new to Framer you can read more about code overrides in the
          article covering Overrides.
        </p>
      </div>
      <div className="right flex-column justify-between">
        <div className="flex justify-center text">
          <p
            className="paragraph"
            ref={(e) => {
              textRef.current[0] = e;
            }}
          >
            Framer lets you apply code to a layer that will override the layer’s
            props when it is displayed in the preview window. An override is
            simply a function that returns new values for any properties you
            want to override.
          </p>
        </div>
        <div
          className="flex pics align-end"
          onMouseEnter={() => handleHover()}
          onMouseLeave={() => handleHoverOut()}
        >
          {pics.map((pic, idx) => (
            <div
              className="pic"
              ref={(e) => (imageRef.current[idx] = e)}
              key={pic.id}
            >
              <ProgressiveImage src={pic.mainPic} placeholder={pic.placeholder}>
                {(src, loading) => (
                  <img
                    className="img-fluid"
                    style={{ opacity: loading ? 0.5 : 1 }}
                    src={src}
                    alt={pic.alt}
                  />
                )}
              </ProgressiveImage>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
