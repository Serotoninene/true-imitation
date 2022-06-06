import React, { useEffect, useRef, useState } from "react";
// Gsap
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
// Custom Hooks
import useScrollDirection from "../Utilitaries/Hooks/useScrollDirection";
import useWindowSize from "../Utilitaries/Hooks/useWindowSize";
// Context
import { useGlobalStateContext } from "../Utilitaries/Contexts/GlobalContext";
// React router
import { useLocation, Link } from "react-router-dom";
// Components
import Button from "./Button";
import BurgerMenu from "./BurgerMenu";

export default function Navbar({ onCursor }) {
  const { width } = useWindowSize();
  const [darkMode, setDarkMode] = useState(false);
  const navbarRef = useRef();
  const buttonRef = useRef();
  const burgerMenuRef = useRef();
  const { isDown } = useScrollDirection();
  let location = useLocation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    // omg so : I had to set up a timeline for the homepage only
    // cause it screwed the darkmode when i switched page
    const hpTl = gsap.timeline({ paused: true });

    // Doing so allow us to avoid playing the timeline when not on the homepage
    location.pathname === "/" ? hpTl.play() : hpTl.kill();
    hpTl.to([navbarRef.current, buttonRef.current], {
      color: "#111111",
      borderColor: "#111111",
      scrollTrigger: {
        trigger: "#Herobanner",
        start: "bottom top+=98px",
        toggleActions: "play none none reverse",
        id: "Navbar",
      },
    });

    // The thing is I kill it every time I change page, not sure if that's the best...
    return () => {
      hpTl.kill();
    };
  }, [location.pathname]);

  useEffect(() => {
    // Here i switch between light and darkmode in function of the page
    // There is only two pages so it helps ... I suck
    if (location.pathname !== "/") {
      gsap.to([navbarRef.current, buttonRef.current], {
        color: "#111111",
        borderColor: "#111111",
      });
    } else {
      gsap.to([navbarRef.current, buttonRef.current], {
        color: "#FFFFFF",
        borderColor: "#FFFFFF",
      });
    }
  }, [location.pathname]);

  useEffect(() => {
    // and here again I'm gonna have to do sthg, I must only trigger on the hp
    // I'll see when there will be room to scroll on the about page
    // future me, try gathering everyting inside the same useEffect :)
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
      className={`flex justify-between align-center ${
        darkMode ? "darkMode" : ""
      }`}
      ref={navbarRef}
    >
      <h3
        onMouseEnter={() => {
          // onCursor("hovered");
        }}
      >
        <Link to="/">TRUE</Link>
      </h3>
      {width < 772 ? (
        <BurgerMenu burgerMenuRef={burgerMenuRef} />
      ) : (
        <ul className="flex align-center">
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>Contact</li>
          <li>
            <Button buttonRef={buttonRef}>See work</Button>
          </li>
        </ul>
      )}
    </div>
  );
}
