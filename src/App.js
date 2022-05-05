import React from "react";
/** Import de la donnée */
import "./App.css";

import Robots from "./data/data";

function App() {
  console.log(Robots);
  return (
    <div className="App">
      <h1 style={{ color: "red", display: "flex" }}>Robot Finder</h1>
      {Robots.map((droid) => (
        <div
          style={{
            width: "60%",
            justifyContent: "center",
            backgroundColor: "cadetblue",
            borderRadius: "20px",
          }}
        >
          <h2 style={{ color: "whitesmoke" }}>
            {droid.name} (aka {droid.username})
          </h2>
          <div style={{ backgroundColor: "lightcoral", borderRadius: "20px" }}>
            <h3>Contact info:</h3>
            <p>phone: {droid.phone}</p>
            <p>eamil: {droid.email}</p>
            <p>website: {droid.website}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
