import React from "react";

function Featuresbox(props) {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} alt="" />
      </div>
      <div className="a-b-text">
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          impedit tempore ratione accusamus pariatur voluptatibus tenetur
          perspiciatis fugit adipisci nostrum dignissimos, explicabo veritatis
          quo, in nisi quod repudiandae iure delectus!
        </p>
      </div>
    </div>
  );
}

export default Featuresbox;
