import { useEffect, useRef, useState, useContext } from "react";
// Asset
import img from "../Assets/Icons/mainIcon_orange.svg";
// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../Utilitaries/Contexts/GlobalContext";

export default function CustomCursor() {
  const { cursorType } = useGlobalStateContext();
  // changeAssets(img);
  // console.log(cursorType);
  const cursorRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (event) => {
    const { screenX: x, screenY: y } = event;
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
      ref={cursorRef}
      style={{
        top: `${mousePosition.y - 104}px`,
        left: `${mousePosition.x}px`,
      }}
    ></div>
  );
}
