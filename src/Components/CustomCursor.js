import { useEffect, useRef, useState, useContext } from "react";
// Asset
import img from "../Assets/Icons/mainIcon_orange.svg";
// Context
import { CursorContext } from "../Utilitaries/Contexts/CursorContext";

export default function CustomCursor() {
  const { cursorType } = useContext(CursorContext);
  const cursorRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 200, y: 200 });
  const onMouseMove = (event) => {
    const { clientX: x, clientY: y } = event;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      id="CustomCursor"
      className={cursorType}
      ref={cursorRef}
      style={{
        top: `${mousePosition.y}px`,
        left: `${mousePosition.x}px`,
      }}
    ></div>
  );
}
