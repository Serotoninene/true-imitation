import React, { useState, useRef, Suspense, useEffect } from "react";
// Component
import Loader from "../../Components/Loader";
import Intro from "./Intro";
import Herobanner from "./Herobanner";
import Article1 from "./Article1";
import Article2 from "./Article2";
import Article3 from "./Article3";
import Article4 from "./Article4";
import Contact from "./Contact";
import BackgroundScene from "../../Three/ThreeScenes/BackgroundScene";
import CanvasContainer from "../../Three/ThreeElements/CanvasContainer";
// Custom Hooks
import useWindowSize from "../../Utilitaries/Hooks/useWindowSize";
import useScrollBlock from "../../Utilitaries/Hooks/useScrollBlock";
import useLocoScroll from "../../Utilitaries/Hooks/useLocoScroll";
// Assets
import introImg from "../../Assets/Images/pottery_desktop.png";
import heroImg from "../../Assets/Images/plant_desktop.png";

export default function Homepage(props) {
  const { imageClicked, setImageClicked } = props;
  const mainContainerRef = useRef();
  const [imageHovered, setImageHovered] = useState(false);
  const { width } = useWindowSize();
  const [allowScroll, blockScroll] = useScrollBlock();

  // Blocking the scroll for the intro section
  useEffect(() => {
    // !imageClicked ? allowScroll() : blockScroll();
  }, [imageClicked]);

  return (
    <Suspense fallback={<Loader />}>
      <div id="Homepage" data-scroll-container>
        <div className="html" ref={mainContainerRef}>
          <div className={imageClicked ? "none" : ""}>
            <Intro
              imageClicked={imageClicked}
              setImageHovered={setImageHovered}
              setImageClicked={setImageClicked}
            />
          </div>
          <div>
            <Herobanner imageClicked={imageClicked} />
            {/* <Test /> */}
            <Article1 />
            <Article2 />
            <Article3 />
            <Article4 />
            <Contact />
          </div>
        </div>
        {width > 772 ? (
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
    </Suspense>
  );
}
