import React from "react";
import Navbar from "./components/navbar/Navbar.js";
import Surgery from "./components/surgery/Surgery";
import Meeting from "./components/meeting/Meeting";
import Card from "./components/card/Card";
import "./App.css";

function App() {
  const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <>
      <Navbar />
      <div className="main__container">
        <div className="meetings__container">
          <Surgery />
          <Meeting />
        </div>
        <div className="survey__container">
          <div className="survey__heading">
            <h3>Patient Survey</h3>
            <hr />
          </div>
          <div className="survay__details">
            {arr.map((item, pos) => {
              return <Card key={pos} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
