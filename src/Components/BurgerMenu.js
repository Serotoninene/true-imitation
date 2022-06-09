import React from "react";

export default function BurgerMenu(props) {
  const { burgerMenuRef, changeCursorType, darkMode } = props;
  return (
    <div
      ref={burgerMenuRef}
      className={`BurgerMenu  ${darkMode ? "darkMode" : ""}`}
      onMouseEnter={() => changeCursorType("hovered")}
      onMouseLeave={() => changeCursorType("")}
    >
      <div className="hrLine"></div>
      <div className="hrLine"></div>
      <div className="hrLine"></div>
      <div className="hrLine"></div>
    </div>
  );
}
