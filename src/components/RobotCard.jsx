import React from "react";
import RobotAddress from "./RobotAddress";
// import Robots from "../data/data";

function RobotCard({ droid }) {
  return (
    <div>
      <div
        style={{
          width: "60%",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
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
          <p>email: {droid.email}</p>
          <p>website: {droid.website}</p>
        </div>
        <RobotAddress key={droid.id} droid={droid} />
      </div>
    </div>
  );
}

export default RobotCard;
