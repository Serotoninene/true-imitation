import React from "react";
// Components
import Button from "./Button";

export default function Navbar() {
  return (
    <div id="Navbar" className="flex justify-between align-center">
      <h2> TRUE </h2>
      <ul className="flex align-center">
        <li>About us</li>
        <li>Contact</li>
        <li>
          <Button>See work</Button>
        </li>
      </ul>
    </div>
  );
}
