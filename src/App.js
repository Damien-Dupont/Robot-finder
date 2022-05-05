import React from "react";
/** Import de la donnée */
import "./App.css";
import RobotCard from "./components/RobotCard";
import Robots from "./data/data";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "red", display: "flex" }}>Robot Finder</h1>
      <div className="RobotContainer">
        {Robots.map((droid) => (
          <RobotCard key={droid.id} droid={droid} />
        ))}
      </div>
    </div>
  );
}

export default App;
