import React from "react";

// import Robots from "../data/data";

function RobotAddress({ droid }) {
  return (
    <div>
      <div style={{ backgroundColor: "salmon", borderRadius: "20px" }}>
        <h3>Contact Address:</h3>
        <p>{droid.address.street}</p>
        <p>{droid.address.suite}</p>
        <p>
          {droid.address.zipcode} {droid.address.city}
        </p>
      </div>
    </div>
  );
}

export default RobotAddress;
