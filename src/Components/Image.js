import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Image = ({ image, reference }) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src} // use normal <img> attributes as props
      width={image.width}
      ref={reference}
    />
  </div>
);

export default Image;
