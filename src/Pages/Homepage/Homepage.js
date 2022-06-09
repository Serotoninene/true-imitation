import React, { useState, useRef, useContext, useEffect } from "react";
// Component
import Intro from "./Intro";
import Herobanner from "./Herobanner";
import Article1 from "./Article1";
import Article2 from "./Article2";
import Article3 from "./Article3";
import Article4 from "./Article4";
import Contact from "./Contact";
import Test from "../Test/Test";
import BackgroundScene from "../../Three/ThreeScenes/BackgroundScene";
import CanvasContainer from "../../Three/ThreeElements/CanvasContainer";
// Custom Hooks
import useWindowSize from "../../Utilitaries/Hooks/useWindowSize";
// Assets
import introImg from "../../Assets/Images/pottery_desktop.png";
import heroImg from "../../Assets/Images/plant_desktop.png";

export default function Homepage(props) {
  const { imgs } = props;
  const mainContainerRef = useRef();
  const [imageHovered, setImageHovered] = useState(false);
  const [imageClicked, setImageClicked] = useState(false); // to change into false (set to true for testing purposes)
  const { width } = useWindowSize();

  // useLocoScroll(true, mainContainerRef.current);

  return (
    <div id="Homepage" data-scroll-container>
      <div className="html" ref={mainContainerRef}>
        {!imageClicked ? (
          <Intro
            imageClicked={imageClicked}
            setImageHovered={setImageHovered}
            setImageClicked={setImageClicked}
          />
        ) : (
          <>
            <Herobanner imageClicked={imageClicked} />
            {/* <Test /> */}
            <Article1 />
            <Article2 />
            <Article3 />
            <Article4 />
            <Contact />
          </>
        )}
      </div>
      {width > 772 || !imageClicked ? (
        <CanvasContainer>
          <BackgroundScene
            imageHovered={imageHovered}
            imageClicked={imageClicked}
            introImg={introImg}
            heroImg={heroImg}
          />
        </CanvasContainer>
      ) : (
        <> </>
      )}
    </div>
  );
}
