import react from "react";
// Utils
import ProgressiveImg from "../../Utilitaries/Tools/ProgressiveImg";
// Assets
import blackChair_min from "../../Assets/Images/black_chair-min.png";
import blackChair from "../../Assets/Images/black_chair.png";
import logo from "../../Assets/Icons/mainIcon_white.svg";

export default function About() {
  return (
    <div id="About">
      <div className="grid">
        <div className="mainContent">
          <h1>New Furniture & Love & Care</h1>
          <div className="flex justify-between align-center">
            <p>
              But wait what happens when the page reloads? You guessed it all
              the data stored in the state variable is lost.
            </p>
            <div className="icon">
              <img src={logo} alt="logo" className="img-fluid"></img>
            </div>
          </div>
        </div>
        <div className="picture">
          <ProgressiveImg placeholderSrc={blackChair_min} src={blackChair} />
        </div>
      </div>
      <div className="grid footer"></div>
    </div>
  );
}
