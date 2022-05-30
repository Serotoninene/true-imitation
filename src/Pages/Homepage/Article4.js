import React from "react";

const content = [
  {
    title: "Venus",
    ref: "#92973",
  },
  {
    title: "Guernica",
    ref: "#92974",
  },
  {
    title: "Assise",
    ref: "#92975",
  },
  {
    title: "Mer ombragée",
    ref: "#92976",
  },
  {
    title: "Crète",
    ref: "#92977",
  },
];

export default function Article4() {
  return (
    <div data-scroll-section id="Article4">
      <h1> Collection</h1>
      {content.map((c, i) => (
        <div className="article" key={i}>
          <div className="hrLine"></div>
          <div className="flex justify-between">
            <p>{c.ref}</p>
            <h2>{c.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
