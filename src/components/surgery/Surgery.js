import React from "react";
import "./Surgery.css";
import avatar from "../../static/avatar.jpg";
function Surgery() {
  return (
    <div className="surgery__main">
      <div className="surgery__heading">
        <h3>Upcoming Surgery</h3>
      </div>
      <div className="surgery__details">
        <div className="left__section">
          <div className="img__section">
            <img src={avatar} alt="" />
          </div>
          <div className="data__section">
            <h2>Dr. Haris Shield</h2>
            <p>ACL reconstruction surgery</p>
            <p>10 Sep 2020</p>
          </div>
        </div>
        <div className="right__section">
          <p>Surgery Clearence</p>
          <div className="no__box">
            <h3>NO</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Surgery;
