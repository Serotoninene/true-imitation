import React, { useState } from "react";
// Component
import Herobanner from "./Herobanner";
import BackgroundScene from "../../Three/ThreeScenes/BackgroundScene";
import CanvasContainer from "../../Three/ThreeElements/CanvasContainer";

export default function Homepage() {
  const [imageHovered, setImageHovered] = useState(false);
  const [imageClicked, setImageClicked] = useState(false);

  return (
    <div id="Homepage">
      <div className="html">
        <Herobanner
          imageClicked={imageClicked}
          setImageHovered={setImageHovered}
          setImageClicked={setImageClicked}
        />
      </div>
      <CanvasContainer>
        <BackgroundScene
          imageHovered={imageHovered}
          imageClicked={imageClicked}
        />
      </CanvasContainer>
    </div>
  );
}
