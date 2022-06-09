import React, { useEffect, useRef, useState, useContext } from "react";
// Gsap
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/all";
// Custom Hooks
import useScrollDirection from "../Utilitaries/Hooks/useScrollDirection";
import useWindowSize from "../Utilitaries/Hooks/useWindowSize";
// Context
import { CursorContext } from "../Utilitaries/Contexts/CursorContext";
// React router
import { useLocation, Link } from "react-router-dom";
// Components
import Button from "./Button";
import BurgerMenu from "./BurgerMenu";

export default function Navbar() {
  const { changeCursorType } = useContext(CursorContext);
  const { width } = useWindowSize();
  const [darkMode, setDarkMode] = useState(false);
  const navbarRef = useRef();
  const buttonRef = useRef();
  const burgerMenuRef = useRef();
  const { isDown } = useScrollDirection();
  let location = useLocation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    location.pathname === "/" &&
      ScrollTrigger.create({
        trigger: "#Herobanner",
        start: "bottom top+=98px",
        end: "bottom top",
        toggleActions: "play none none reverse",
        id: "Navbar",
        onEnter: () => {
          setDarkMode(true);
        },
        onEnterBack: () => {
          setDarkMode(false);
        },
      });

    // Here i switch between light and darkmode in function of the page
    // There is only two pages so it helps ... I suck
    if (location.pathname === "/about") {
      darkMode === false && setDarkMode(true);
    } else {
      darkMode === true && setDarkMode(false);
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
      className={`${
        darkMode ? "darkMode" : ""
      } flex justify-between align-center`}
      ref={navbarRef}
    >
      <h3
        onMouseEnter={() => {
          changeCursorType("hovered");
        }}
        onMouseLeave={() => {
          changeCursorType("");
        }}
      >
        <Link to="/"> TRUE </Link>
      </h3>
      {width < 772 ? (
        <BurgerMenu
          darkMode={darkMode}
          burgerMenuRef={burgerMenuRef}
          changeCursorType={changeCursorType}
        />
      ) : (
        <ul className="flex align-center">
          <li
            onMouseEnter={() => {
              changeCursorType("hovered");
            }}
            onMouseLeave={() => {
              changeCursorType("");
            }}
          >
            <Link to="/about"> About us </Link>
          </li>
          <li
            onMouseEnter={() => {
              changeCursorType("hovered");
            }}
            onMouseLeave={() => {
              changeCursorType("");
            }}
          >
            Contact
          </li>
          <li
            onMouseEnter={() => {
              changeCursorType("hovered");
            }}
            onMouseLeave={() => {
              changeCursorType("");
            }}
          >
            <Button buttonRef={buttonRef} darkMode={darkMode}>
              {" "}
              See work{" "}
            </Button>
          </li>
        </ul>
      )}
    </div>
  );
}
