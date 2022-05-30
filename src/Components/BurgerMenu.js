import React from "react";

export default function BurgerMenu(props) {
  const { burgerMenuRef } = props;
  return (
    <div ref={burgerMenuRef} className="BurgerMenu">
      <div className="hrLine"></div>
      <div className="hrLine"></div>
      <div className="hrLine"></div>
      <div className="hrLine"></div>
    </div>
  );
}
