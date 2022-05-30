import { useState, useEffect, useRef } from "react";
import throttle from "lodash/throttle";

export default function useScrollDirection() {
  const scrollPos = useRef(0);
  const [direction, setDirection] = useState({
    isDown: false,
    isUp: false,
  });

  useEffect(() => {
    const handleScroll = throttle(() => {
      setDirection({
        isDown: window.scrollY > scrollPos.current,
        isUp: window.scrollY < scrollPos.current,
      });
      scrollPos.current = window.scrollY;
    }, 100);

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return direction;
}
