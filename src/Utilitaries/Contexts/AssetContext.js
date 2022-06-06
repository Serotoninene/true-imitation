import React, { createContext, useState } from "react";
// Assets
import introImg from "../../Assets/Images/pottery_desktop.png";
import heroImg from "../../Assets/Images/plant_desktop.png";
import bgMobileSm from "../../Assets/Images/Homepage-herobanner_mobile-sm.png";
import bgMobileXl from "../../Assets/Images/Homepage-herobanner_mobile-xl.png";
import bgTabletSm from "../../Assets/Images/Homepage-herobanner_tablet-sm.png";
import spacejoy_dark from "../../Assets/Images/spacejoy_dark.jpg";
import avery_klein from "../../Assets/Images/avery-klein.jpg";
import jean_philippe from "../../Assets/Images/jean-philippe.jpg";
import suhyeon from "../../Assets/Images/suhyeon.jpg";
import black_chair from "../../Assets/Images/black_chair.png";
import mirror from "../../Assets/Images/mirror.png";
import couch from "../../Assets/Images/Article3/couch.png";
import furniture from "../../Assets/Images/Article3/furniture.png";
import interiorjoy from "../../Assets/Images/Article3/interiorjoy.png";
import table from "../../Assets/Images/Article3/table.png";

export const AssetContext = createContext();

export function AssetProvider(props) {
  const [assets, setAssets] = useState([
    {
      id: 0,
      name: "introImg",
      asset: introImg,
    },
    {
      id: 1,
      name: "heroImg",
      asset: heroImg,
    },
    {
      id: 2,
      name: "bgMobileSm",
      asset: bgMobileSm,
    },
    {
      id: 3,
      name: "bgMobileXl",
      asset: bgMobileXl,
    },
    {
      id: 4,
      name: "bgTabletSm",
      asset: bgTabletSm,
    },
    {
      id: 5,
      name: "spacejoy_dark",
      asset: spacejoy_dark,
    },
    {
      id: 6,
      name: "avery_klein",
      asset: avery_klein,
    },
    {
      id: 7,
      name: "jean_philippe",
      asset: jean_philippe,
    },
    {
      id: 8,
      name: "suhyeon",
      asset: suhyeon,
    },
    {
      id: 9,
      name: "black_chair",
      asset: black_chair,
    },
    {
      id: 10,
      name: "mirror",
      asset: mirror,
    },
    {
      id: 11,
      name: "couch",
      asset: couch,
    },
    {
      id: 12,
      name: "furniture",
      asset: furniture,
    },
    {
      id: 13,
      name: "interiorjoy",
      asset: interiorjoy,
    },
    {
      id: 14,
      name: "table",
      asset: table,
    },
  ]);
  const changeAssets = (e) => setAssets(e.target.value, [...assets]);
  return (
    <AssetContext.Provider value={{ assets, changeAssets: changeAssets }}>
      {props.children}
    </AssetContext.Provider>
  );
}
