import React from "react";
export default function Button(props) {
  const { buttonRef } = props;

  return (
    <div ref={buttonRef} className="Button relative">
      {props.children}
    </div>
  );
}
