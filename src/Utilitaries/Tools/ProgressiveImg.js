import React, { useState, useEffect } from "react";

export default function ProgressiveImg({ placeholderSrc, src, ref, ...props }) {
  const [imgSrc, setImgSrc] = useState(placeholderSrc);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);
  return (
    <img
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ""}
      className="img-fluid"
    ></img>
  );
}
