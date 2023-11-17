import React from "react";

function Header() {
  return (
    <div id="main">
      <div className="name">
        <h2>Electrifying business around the world</h2>
        <h1>
          <span>Power</span> With us
        </h1>
        <p className="details">Build Your Grid With Us.</p>
        <div className="header-btns">
          <a to="about" href="#" className="header-btn">
            {" "}
            Join Us{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
