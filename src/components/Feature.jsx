import React from "react";
import Featuresbox from "./Featuresbox";
import fimage1 from "../images/1.svg";
import fimage2 from "../images/2.svg";
import fimage3 from "../images/3.svg";
import fimage4 from "../images/4.svg";

function Feature() {
  return (
    <div id="features">
      <h1>Features</h1>
      <div className="a-container">
        <Featuresbox image={fimage1} title="" />
        <Featuresbox image={fimage2} title="" />
        <Featuresbox image={fimage3} title="" />
        <Featuresbox image={fimage4} title="" />
      </div>
    </div>
  );
}

export default Feature;
