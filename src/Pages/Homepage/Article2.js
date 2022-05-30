import React from "react";
// Utils
import ProgressiveImg from "../../Utilitaries/Tools/ProgressiveImg";
// assets
import pic1 from "../../Assets/Images/jean-philippe.jpg";
import pic2 from "../../Assets/Images/suhyeon.jpg";
import pic3 from "../../Assets/Images/black_chair.png";
import pic4 from "../../Assets/Images/mirror.png";
import pic1_min from "../../Assets/Images/jean-philippe-min.jpg";
import pic2_min from "../../Assets/Images/suhyeon-min.jpg";
import pic3_min from "../../Assets/Images/black_chair-min.png";
import pic4_min from "../../Assets/Images/mirror-min.png";

export default function Article2() {
  return (
    <div data-scroll-section id="Article2" className="grid">
      <div className="left">
        <h3>By changing, we grow, and by growing we learn</h3>
        <p>
          Framer lets you apply code to a layer that will override the layer’s
          props when it is displayed in the preview window. An override is
          simply a function that returns new values for any properties you want
          to override. For example, to move a layer 100px down along the y-axis
          we need to set its y prop to 100.All my examples use overrides. If you
          are new to Framer you can read more about code overrides in the
          article covering Overrides.
        </p>
      </div>
      <div className="right flex-column justify-between">
        <div className="flex justify-center text">
          <p className="">
            Framer lets you apply code to a layer that will override the layer’s
            props when it is displayed in the preview window. An override is
            simply a function that returns new values for any properties you
            want to override.
          </p>
        </div>
        <div className="flex pics align-end">
          <div className="pic1 pic">
            <ProgressiveImg
              placeholderSrc={pic1_min}
              src={pic1}
              alt="interior view"
            />
          </div>
          <div className="pic2 pic">
            <ProgressiveImg
              placeholderSrc={pic2_min}
              src={pic2}
              alt="interior view"
            />
          </div>
          <div className="pic3 pic">
            <ProgressiveImg
              placeholderSrc={pic3_min}
              src={pic3}
              alt="interior view"
            />
          </div>
          <div className="pic4 pic">
            <ProgressiveImg
              placeholderSrc={pic4_min}
              src={pic4}
              alt="interior view"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
