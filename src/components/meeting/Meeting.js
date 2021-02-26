import React from "react";
import calander from "../../static/calander.png";
import "./Meeting.css";
function Meeting() {
  return (
    <div className="surgery__main">
      <div className="surgery__heading">
        <h3>Upcoming Meetings</h3>
      </div>
      <div className="surgery__details">
        <div className="left__section">
          <div className="img__section">
            <img src={calander} alt="" className="calander" />
          </div>
          <div className="data__section">
            <h2>No Appointment Schedule</h2>
            <p>Complete your Patient Survey</p>
            <p>to schedule a virtual meeting</p>
          </div>
        </div>
        <div className="right__section">
          <button>Set Availabilty</button>
        </div>
      </div>
    </div>
  );
}

export default Meeting;
