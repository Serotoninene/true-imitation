import React, { useEffect, useRef, useState } from "react";
// Gsap
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
// Custom Hooks
import useScrollDirection from "../Utilitaries/Hooks/useScrollDirection";
import useWindowSize from "../Utilitaries/Hooks/useWindowSize";
// Components
import Button from "./Button";
import BurgerMenu from "./BurgerMenu";

export default function Navbar() {
  const { width } = useWindowSize();
  const [darkMode, setDarkMode] = useState(true);
  const navbarRef = useRef();
  const buttonRef = useRef();
  const burgerMenuRef = useRef();
  const { isDown } = useScrollDirection();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to([navbarRef.current, buttonRef.current], {
      color: "#111111",
      borderColor: "#111111",
      scrollTrigger: {
        trigger: "#Herobanner",
        start: "bottom top+=98px",
        toggleActions: "play none none reverse",
        id: "Navbar",
      },
    });
  }, []);

  // Makes the navbar components white or dark in function of the position on the page
  useEffect(() => {
    !darkMode
      ? gsap.to(navbarRef.current, { color: "#111111" })
      : gsap.to(navbarRef.current, { color: "#FFFFFF" });
  }, [darkMode]);

  useEffect(() => {
    if (isDown) {
      gsap.to([navbarRef.current], {
        y: -100,
        ease: Power3.easeOut,
        duration: 0.75,
      });
    } else {
      gsap.to([navbarRef.current], {
        y: 0,
        ease: Power3.easeOut,
      });
    }
  }, [isDown]);
  return (
    <div
      id="Navbar"
      className="flex justify-between align-center"
      ref={navbarRef}
    >
      <h3> TRUE </h3>
      {width < 772 ? (
        <BurgerMenu burgerMenuRef={burgerMenuRef} />
      ) : (
        <ul className="flex align-center">
          <li>About us</li>
          <li>Contact</li>
          <li>
            <Button buttonRef={buttonRef}>See work</Button>
          </li>
        </ul>
      )}
    </div>
  );
}
