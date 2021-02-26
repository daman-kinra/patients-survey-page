import React from "react";
import "./Card.css";
import hospital from "../../static/hospital.png";

function Card() {
  return (
    <div className="card__main">
      <div className="card__img">
        <img src={hospital} alt="" />
      </div>
      <div className="card__data">
        <h2>General and Insureance Information</h2>
      </div>
    </div>
  );
}

export default Card;
