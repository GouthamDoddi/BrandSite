import React from "react";
import aboutImage from "../images/about.png";

function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutImage} alt="" />
      </div>
      <div className="about-text">
        <h1>Learn More About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel id
          explicabo dolores est minus exercitationem, facilis atque aspernatur
          ducimus sint debitis, asperiores natus rerum corrupti? Aut dolore
          necessitatibus explicabo eos?
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
}

export default About;
