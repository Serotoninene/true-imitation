import React from "react";
// Utils
import ProgressiveImg from "../../Utilitaries/Tools/ProgressiveImg";
// Assets
import couch from "../../Assets/Images/Article3/couch.png";
import furniture from "../../Assets/Images/Article3/furniture.png";
import interiorjoy from "../../Assets/Images/Article3/interiorjoy.png";
import table from "../../Assets/Images/Article3/table.png";
import couch_min from "../../Assets/Images/Article3/couch-min.png";
import furniture_min from "../../Assets/Images/Article3/furniture-min.png";
import interiorjoy_min from "../../Assets/Images/Article3/interiorjoy-min.png";
import table_min from "../../Assets/Images/Article3/table-min.png";

const content = [
  {
    title: "Love & luxury",
    img: couch,
    placeholder: couch_min,
    alt: "couch",
  },
  {
    title: "Improvement",
    img: table,
    placeholder: table_min,
    alt: "table",
  },
  {
    title: "Honesty",
    img: interiorjoy,
    placeholder: interiorjoy_min,
    alt: "interior design",
  },
  {
    title: "Truth",
    img: furniture,
    placeholder: furniture_min,
    alt: "furniture",
  },
];

export default function Article3() {
  return (
    <div data-scroll-section id="Article3" className="grid">
      {content.map((c, i) => (
        <div key={i} className="article flex-column">
          <h4>{c.title}</h4>
          <div className="image">
            <ProgressiveImg
              placeholderSrc={c.placeholder}
              src={c.img}
              alt={c.alt}
              className="img-fluid"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
