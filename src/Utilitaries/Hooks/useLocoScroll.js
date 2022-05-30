import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  useEffect
} from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";


gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start, component) {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector(".html");

    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 0.9,
      class: "is-reveal",
    });

  }, [start]);
}