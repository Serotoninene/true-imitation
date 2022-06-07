import react, { useLayoutEffect, useRef } from "react";
// gsap
import gsap, { Power3 } from "gsap";
// Utils
import AnimatedWords from "../../Utilitaries/Tools/AnimatedWords";
import ProgressiveImg from "../../Utilitaries/Tools/ProgressiveImg";
import useWindowSize from "../../Utilitaries/Hooks/useWindowSize";
// Assets
import nathan_oakley_min from "../../Assets/Images/nathan-oakley-min.jpg";
import nathan_oakley from "../../Assets/Images/nathan-oakley.jpg";
import jean_philippe_min from "../../Assets/Images/jean-philippe-min.jpg";
import jean_philippe from "../../Assets/Images/jean-philippe.jpg";
import blackChair_min from "../../Assets/Images/black_chair-min.png";
import blackChair from "../../Assets/Images/black_chair.png";
import logo from "../../Assets/Icons/mainIcon_white.svg";

export default function About() {
  const vrtLines = useRef([]);
  const hrLines = useRef([]);
  const imagesRef = useRef([]);
  const imageReveals = useRef([]);
  const textRef = useRef([]);
  const { width } = useWindowSize();

  // change those values for responsiveness :) they manage the lines positions
  let margin = "32px";

  if (width < 772) {
    margin = "16px";
  }

  useLayoutEffect(() => {
    const linesTl = gsap.timeline({
      paused: true,
      defaults: { duration: 0.75, stagger: 0.1, ease: Power3.easeOut },
    });
    linesTl.to(hrLines.current, {
      delay: 1,
      width: "100%",
    });
    width > 992 &&
      linesTl.to(
        vrtLines.current,
        {
          height: "100%",
        },
        "<"
      );

    width > 576 && linesTl.play();

    const contentTl = gsap.timeline({
      delay: 1,
      defaults: {
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    });

    contentTl.to(imageReveals.current, {
      width: 0,
      duration: 0.65,
      stagger: 0.1,
    });
    contentTl.to(
      imagesRef.current,
      {
        scale: 1,
        stagger: 0.1,
      },
      "<+=0.05"
    );
    contentTl.to(
      textRef.current,
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
      },
      "<+=1"
    );

    return () => {
      contentTl.kill();
      linesTl.kill();
    };
  }, [width]);
  return (
    <div id="About">
      <div
        ref={(e) => (vrtLines.current[0] = e)}
        className="vrtLine absolute"
        style={{ left: margin, top: 0 }}
      ></div>
      <div
        ref={(e) => (vrtLines.current[1] = e)}
        className="vrtLine vrModularLine absolute"
        style={{ right: margin, top: 0 }}
      ></div>
      <div
        className="hrLine absolute"
        ref={(e) => (hrLines.current[0] = e)}
        style={{ left: 0 }}
      ></div>
      <div className="grid relative">
        <div
          ref={(e) => (hrLines.current[1] = e)}
          className="hrLine absolute"
          style={{ bottom: 0 }}
        ></div>

        <div className="mainContent section flex-column justify-between relative">
          <h1>
            <AnimatedWords text={"New Furniture & Love & Care"} delay={1} />
          </h1>
          <div className="legende flex justify-between align-center relative">
            <div
              ref={(e) => (hrLines.current[2] = e)}
              className="hrLine absolute"
              style={{ top: width < 992 ? "100%" : 0, left: 0 }}
            ></div>
            <p className="text" ref={(e) => (textRef.current[0] = e)}>
              But wait what happens when the page reloads? You guessed it all
              the data stored in the state variable is lost.
            </p>
            <div ref={(e) => (textRef.current[5] = e)} className="icon">
              <img src={logo} alt="logo" className="img-fluid"></img>
            </div>
          </div>
        </div>
        <div className="picture section flex align-center justify-center relative">
          <div
            ref={(e) => (vrtLines.current[6] = e)}
            className="vrtLine absolute"
            style={{ left: 0, top: 0 }}
          ></div>
          <div className="imgContainer">
            <ProgressiveImg
              placeholderSrc={blackChair_min}
              src={blackChair}
              reference={(e) => (imagesRef.current[0] = e)}
            />
          </div>
          <div
            ref={(e) => (imageReveals.current[0] = e)}
            className="img-reveal absolute"
            style={{ left: 0, top: 0 }}
          ></div>
        </div>
      </div>
      <div className="grid footer">
        <div className="section relative">
          <div
            ref={(e) => (vrtLines.current[2] = e)}
            className="vrtLine absolute"
            style={{ left: 0, top: 0 }}
          ></div>
          <ProgressiveImg
            placeholderSrc={jean_philippe_min}
            src={jean_philippe}
            reference={(e) => (imagesRef.current[1] = e)}
          />
          <div
            ref={(e) => (imageReveals.current[1] = e)}
            className="img-reveal"
          ></div>
        </div>
        <div className="section relative">
          <div
            ref={(e) => (vrtLines.current[3] = e)}
            className="vrtLine vrModularLine absolute"
            style={{ left: 0, top: 0 }}
          ></div>
          <div
            ref={(e) => (vrtLines.current[4] = e)}
            className="vrtLine absolute"
            style={{ right: 0, top: 0 }}
          ></div>

          <h2 className="text" ref={(e) => (textRef.current[1] = e)}>
            Lorem Ipsum
          </h2>
          <p className="text" ref={(e) => (textRef.current[2] = e)}>
            Not a problem we will send a request to the server asking for the
            data again and assign the data back to the state variable simple
            right.
          </p>
        </div>
        <div className="section relative">
          <div
            ref={(e) => (vrtLines.current[5] = e)}
            className="vrtLine absolute"
            style={{ right: 0, top: 0 }}
          ></div>
          <div
            ref={(e) => (hrLines.current[3] = e)}
            className="hrLine hrModularLine absolute "
            style={{ right: 0, top: 0 }}
          ></div>

          <ProgressiveImg
            placeholderSrc={nathan_oakley_min}
            src={nathan_oakley}
            reference={(e) => (imagesRef.current[2] = e)}
          />
          <div
            ref={(e) => (imageReveals.current[2] = e)}
            className="img-reveal"
          ></div>
        </div>
      </div>
    </div>
  );
}
