import React from "react";
import Generator from "./Generator";

const Sensor = () => {
  return (
    <div className="sensors--items">
      <div className="sensor--item">
        Sensor
        <div>1232</div>
      </div>
      <div className="sensor--item">
        <div>Sensor</div>
        <div>
          <Generator />
        </div>
      </div>
      <div className="sensor--item">Sensor</div>
      <div className="sensor--item">Sensor</div>
      <div className="sensor--item">Sensor</div>
      <div className="sensor--item">Sensor</div>
      <div className="sensor--item">Sensor</div>
      <div className="sensor--item">Sensor</div>
    </div>
  );
};

export default Sensor;
