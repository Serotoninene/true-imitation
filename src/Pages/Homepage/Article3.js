import React, { useLayoutEffect, useRef } from "react";
// Utils
import useWindowSize from "../../Utilitaries/Hooks/useWindowSize";
import ProgressiveImg from "../../Utilitaries/Tools/ProgressiveImg";
// Gsap
import gsap, { Power3 } from "gsap";
// Assets
import couch from "../../Assets/Images/Article3/couch.png";
import furniture from "../../Assets/Images/Article3/furniture.png";
import interiorjoy from "../../Assets/Images/Article3/interiorjoy.png";
import table from "../../Assets/Images/Article3/table.png";
import couch_min from "../../Assets/Images/Article3/couch-min.png";
import furniture_min from "../../Assets/Images/Article3/furniture-min.png";
import interiorjoy_min from "../../Assets/Images/Article3/interiorjoy-min.png";
import table_min from "../../Assets/Images/Article3/table-min.png";
import AnimatedLetters from "../../Utilitaries/Tools/AnimatedLetters";

const content = [
  {
    title: "Love & luxury",
    img: couch,
    placeholder: couch_min,
    alt: "couch",
  },
  {
    title: "Improvement",
    img: table,
    placeholder: table_min,
    alt: "table",
  },
  {
    title: "Honesty",
    img: interiorjoy,
    placeholder: interiorjoy_min,
    alt: "interior design",
  },
  {
    title: "Truth",
    img: furniture,
    placeholder: furniture_min,
    alt: "furniture",
  },
];

export default function Article3() {
  const imagesContainerRef = useRef([]);
  const imagesRef = useRef([]);
  const { width } = useWindowSize();

  useLayoutEffect(() => {
    imagesContainerRef.current.forEach((el, idx) => {
      imagesRef.current.push(el.children[0]);
    });
    const tl = gsap.timeline({
      defaults: { duration: 0.75, ease: Power3.easeIn },
      scrollTrigger: {
        trigger: "#Article3",
        start: "top center",
        toggleActions: "play none none reverse",
        id: "Article3Imgs",
      },
    });

    tl.to(imagesRef.current, {
      scale: 1,
    });
    tl.to(
      imagesContainerRef.current,
      {
        // scale: 1,
        // height: width < 992 ? "25vh" : "50%",
      },
      "<"
    );
  }, [width]);

  return (
    <div data-scroll-section id="Article3" className="grid">
      {content.map((c, i) => (
        <div key={i} className="article flex-column">
          <h4>
            <AnimatedLetters
              title={c.title}
              trigger="#Article3"
              startTrigger="center"
            />
          </h4>
          <div
            className="image"
            ref={(e) => {
              imagesContainerRef.current[i] = e;
            }}
          >
            <ProgressiveImg
              placeholderSrc={c.placeholder}
              src={c.img}
              alt={c.alt}
              className="img-fluid"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
