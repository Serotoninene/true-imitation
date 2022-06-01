import React, { useLayoutEffect, useRef } from "react";
// Gsap
import gsap, { Power3 } from "gsap";
// Custom Hooks
import useWindowSize from "../../Utilitaries/Hooks/useWindowSize";
// Assets
import whiteIcon from "../../Assets/Icons/mainIcon_white.svg";
import bgMobileSm from "../../Assets/Images/Homepage-herobanner_mobile-sm.png";
import bgMobileXl from "../../Assets/Images/Homepage-herobanner_mobile-xl.png";
import bgTabletSm from "../../Assets/Images/Homepage-herobanner_tablet-sm.png";
// Utils
import AnimatedLetters from "../../Utilitaries/Tools/AnimatedLetters";

export default function Herobanner(props) {
  const { imageClicked } = props;
  const vrtLinesRefs = useRef([]);
  const hrLinesRefs = useRef([]);
  const elRefs = useRef([]);
  const { width } = useWindowSize();
  const heroTl = useRef(
    gsap.timeline({
      paused: true,
      defaults: {
        stagger: 0.1,
        ease: Power3.easeOut,
      },
    })
  );

  // I set up the background of the herobanner here, so I can switch the canvas with regular bg when downsizing the viewport
  let heroBackground = null;
  const breakpoints = {
    mobileSm: 350,
    mobileXl: 576,
    tabletSm: 772,
  };

  // For responsiveness, tweak those values instead of the css ones,
  // They have influence on the line positions
  let marginBottom = "40px";
  let marginRight = "32px";
  let rightSectionPadding = "16px"; // paddingBottom is also used for left and right in the right section part
  let titlePaddingY = "48px";

  // Here is the switching background for responsiveness part
  if (width < breakpoints.mobileSm) {
    heroBackground = bgMobileSm;
    titlePaddingY = "16px";
    marginRight = "16px";
  } else if (width < breakpoints.mobileXl) {
    heroBackground = bgMobileXl;
    marginRight = "16px";
  } else if (width < breakpoints.tabletSm) {
    heroBackground = bgTabletSm;
    rightSectionPadding = "24px";
  } else {
    heroBackground = null;
    marginBottom = "40px";
    marginRight = "32px";
    rightSectionPadding = "16px"; // paddingBottom is also used for left and right in the right section part
    titlePaddingY = "48px";
  }

  useLayoutEffect(() => {
    heroTl.current.to(elRefs.current, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: Power3.easeOut,
      delay: 0.5,
      duration: 0.75,
    });
    heroTl.current.to(
      vrtLinesRefs.current,
      {
        height: "100%",
      },
      "<"
    );
    heroTl.current.to(
      hrLinesRefs.current,
      {
        width: "100%",
      },
      "<"
    );
  }, []);

  useLayoutEffect(() => {
    imageClicked && heroTl.current.play();
  }, [imageClicked]);

  return (
    // Okay all the lines will be absolute positionned, no shits are given
    <div
      data-scroll-section
      id="Herobanner"
      className="grid"
      style={{
        padding: `96px ${marginRight} ${marginBottom} ${marginRight}`,
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      <div
        className="vrtLine absolute"
        style={{ top: 0 }}
        ref={(e) => {
          vrtLinesRefs.current[0] = e;
        }}
      ></div>
      <div
        className="vrtLine absolute"
        style={{ top: 0, right: marginRight }}
        ref={(e) => {
          vrtLinesRefs.current[1] = e;
        }}
      ></div>
      <div
        className="hrLine absolute"
        style={{ left: 0 }}
        ref={(e) => {
          hrLinesRefs.current[0] = e;
        }}
      ></div>
      <div
        className="hrLine absolute"
        style={{ left: 0, bottom: marginBottom }}
        ref={(e) => {
          hrLinesRefs.current[1] = e;
        }}
      ></div>

      <div className="leftSection flex justify-end">
        <div
          className="vrtLine"
          ref={(e) => {
            vrtLinesRefs.current[2] = e;
          }}
        ></div>
      </div>
      <div
        className="rightSection flex-column justify-between relative"
        style={{
          paddingBottom: ` ${rightSectionPadding} `,
        }}
      >
        <div
          className="title flex-column justify-between"
          ref={(e) => {
            elRefs.current[0] = e;
          }}
          style={{ padding: `${titlePaddingY} ${rightSectionPadding} ` }}
        >
          <h1>Diamonds and Plants</h1>
          <h5>
            When developing a website that requires user authentication as well
            as user authorization the easy way is to store the user data in web
            storage.
          </h5>
        </div>
        <div
          className="footer flex justify-between align-center relative"
          style={{ padding: `0 ${rightSectionPadding}` }}
        >
          {width <= breakpoints.tabletSm ? (
            <div
              className="vrtLine"
              ref={(e) => {
                vrtLinesRefs.current[3] = e;
              }}
            ></div>
          ) : (
            <></>
          )}
          <h2
            ref={(e) => {
              elRefs.current[1] = e;
            }}
          >
            Vol. 2
          </h2>
          {width <= breakpoints.tabletSm ? (
            <div
              className="vrtLine"
              ref={(e) => {
                vrtLinesRefs.current[4] = e;
              }}
            ></div>
          ) : (
            <></>
          )}
          <div
            ref={(e) => {
              elRefs.current[2] = e;
            }}
            className="trueIcon"
          >
            <img src={whiteIcon} alt="true Icon" className="img-fluid" />
          </div>
          {width <= breakpoints.tabletSm ? (
            <div
              className="vrtLine"
              ref={(e) => {
                vrtLinesRefs.current[5] = e;
              }}
            ></div>
          ) : (
            <></>
          )}
          <div
            className="hrLine absolute"
            style={{
              left: 0,
              top: 0,
            }}
            ref={(e) => {
              hrLinesRefs.current[2] = e;
            }}
          ></div>
          {width <= breakpoints.tabletSm ? (
            <div
              className="hrLine absolute"
              style={{
                left: 0,
                bottom: 0,
              }}
              ref={(e) => {
                hrLinesRefs.current[3] = e;
              }}
            ></div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
