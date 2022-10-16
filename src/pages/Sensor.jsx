import React from "react";
import Generator from "./Generator";

const Sensor = ({ num }) => {
  return (
    <div className="sensors--items">
      <div className="sensor--item">
        <div>Sensor</div>
        <div className="block--sensor">{num}</div>
        <div>
          <Generator num={num} />
        </div>
      </div>
      <div className="sensor--item">
        <div>Sensor</div>
        <div className="block--sensor">{num}</div>
        <div>
          <Generator num={num} />
        </div>
      </div>
      <div className="sensor--item">
        <div>Sensor</div>
        <div>
          <Generator />
        </div>
      </div>
      <div className="sensor--item">
        <div>Sensor</div>
        <div>
          <Generator />
        </div>
      </div>
      <div className="sensor--item">
        <div>Sensor</div>
        <div>
          <Generator />
        </div>
      </div>
      <div className="sensor--item">
        <div>Sensor</div>
        <div>
          <Generator />
        </div>
      </div>
      <div className="sensor--item">
        <div>Sensor</div>
        <div>
          <Generator />
        </div>
      </div>
      <div className="sensor--item">
        <div>Sensor</div>
        <div>
          <Generator />
        </div>
      </div>
    </div>
  );
};

export default Sensor;
