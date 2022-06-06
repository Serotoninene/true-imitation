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
        <div className="mainContent flex-column justify-between">
          <h1>New Furniture & Love & Care</h1>
          <div className="legende  flex justify-between align-center">
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
      <div className="grid footer">
        <div className="section">
          <ProgressiveImg placeholderSrc={blackChair_min} src={blackChair} />
        </div>
        <div className="section flex-column justify-between">
          <h1>Lorem Ipsum</h1>
          <p></p>
        </div>
        <div className="section">
          <ProgressiveImg placeholderSrc={blackChair_min} src={blackChair} />
        </div>
      </div>
    </div>
  );
}
