import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
// Gsap
import gsap, { Power3 } from "gsap";
// Asset
import pic1 from "../../Assets/Images/jean-philippe.jpg";
import pic2 from "../../Assets/Images/mirror.png";
import pic3 from "../../Assets/Images/suhyeon.jpg";
import pic4 from "../../Assets/Images/spacejoy_dark.jpg";
// Hooks
import useMousePosition from "../../Utilitaries/Hooks/useMousePosition";
// Utils
import AnimatedLetters from "../../Utilitaries/Tools/AnimatedLetters";

const content = [
  { id: 0, title: "Venus", ref: "#92973", img: pic1 },
  { id: 1, title: "Guernica", ref: "#92974", img: pic2 },
  { id: 2, title: "Assise", ref: "#92975", img: pic3 },
  { id: 3, title: "Mer ombragée", ref: "#92976", img: pic4 },
  { id: 4, title: "Crète", ref: "#92977", img: pic1 },
];

export default function Article4() {
  const images = [];
  content.forEach((c, i) => images.push(c.img));
  const [mouseEnter, setMouseEnter] = useState(false);
  const [imgShowed, setImgShowed] = useState(null);
  const titlesRef = useRef([]);
  const linesRef = useRef([]);
  const refRef = useRef([]);
  const hoverImgs = useRef();
  let { x, y } = useMousePosition();

  // useLayoutEffect(() => {
  //   const hoverTl = gsap.timeline();
  //   hoverTl.to(hoverImgs.current, { x: x - 110, y: y - 160 });

  //   if (mouseEnter) {
  //     hoverTl.play();
  //   } else {
  //     hoverTl.kill();
  //   }

  //   return () => {
  //     hoverTl.kill();
  //   };
  // }, [x, y, mouseEnter]);

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
    <div
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      data-scroll-section
      id="Article4"
      className="relative"
    >
      <h1>
        <AnimatedLetters
          title="Collection"
          trigger="#Article4"
          startTrigger={"60%"}
        />
      </h1>
      {content.map((c, i) => (
        <div
          className={`article article${i}`}
          key={i}
          onMouseEnter={() => {
            setImgShowed(i);
          }}
        >
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
      {/* Image appearing on hover :) */}
      {/* <div
        className={`hover-reveal ${
          mouseEnter ? "fixed" : "absolute transparent"
        }`}
        ref={(e) => (hoverImgs.current = e)}
      >
        <div
          className="hover-reveal_inner"
          style={{ backgroundImage: `url(${images[imgShowed]})` }}
        >
          <div className="hover-reveal_img"></div>
        </div>
      </div> */}
    </div>
  );
}
