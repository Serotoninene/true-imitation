import React, { useEffect } from "react";
// Assets
import icon from "../../Assets/Icons/mainIcon_orange.svg";

export default function Contact() {
  return (
    <div
      data-scroll-section
      id="Contact"
      className="flex-column justify-between"
    >
      <h1 className="text-center">
        stay in <br /> the loop <br /> <span>Contact us</span>
      </h1>
      <div className="footerContainer ">
        <div className="hrLine"></div>
        <div className="footer grid">
          <div className="socials footerSection flex ">
            <div className="vrtLine"></div>
            <div className="flex-column">
              <h4> Our Socials</h4>
              <a>Instagram</a>
              <a>Twitter</a>
              <a>Facebook</a>
            </div>
          </div>
          <div className="iconContainer flex justify-center align-center relative">
            <div className="icon">
              <img src={icon} alt="true icon" className="img-fluid" />
            </div>
            <div className="vrtLine absolute" style={{ left: 0 }}></div>
            <div className="vrtLine absolute" style={{ right: 0 }}></div>
          </div>
          <div className="newsletter footerSection relative">
            <h5>
              Be the first to know of private launches, special promotions, and
              insider access by joining our inner circle.
            </h5>
            <form>
              <input type={"text"} placeholder="Enter your mail"></input>
            </form>
            <div
              className="vrtLine absolute"
              style={{ right: 0, top: 0 }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
