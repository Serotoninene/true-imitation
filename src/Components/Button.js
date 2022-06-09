import React from "react";
export default function Button(props) {
  const { buttonRef, darkMode } = props;

  return (
    <div
      ref={buttonRef}
      className={`Button relative ${darkMode ? "darkMode" : ""}`}
    >
      {props.children}
    </div>
  );
}
