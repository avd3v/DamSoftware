import React from "react";
import Generator from "./Generator";

const Sensor = ({ num }) => {
  return (
    <div className="sensors--items">
      <div className="sensor--item">
        <div>ADV/MSV</div>
        <div className="block--sensor">{num}</div>
        <div>
          <Generator num={num} />
        </div>
      </div>
      <div className="sensor--item">
        <div>Stm Flow</div>
        <div className="block--sensor">{num}</div>
        <div>
          <Generator num={num} />
        </div>
      </div>
      <div className="sensor--item">
        <div>Core Flood</div>
        <div>
          <Generator />
        </div>
      </div>
      <div className="sensor--item">
        <div>LPI/RHR</div>
        <div>
          <Generator />
        </div>
      </div>
      <div className="sensor--item">
        <div>RB Fan Cooler</div>
        <div>
          <Generator />
        </div>
      </div>
      <div className="sensor--item">
        <div>RB Spray</div>
        <div>
          <Generator />
        </div>
      </div>
      <div className="sensor--item">
        <div>Power</div>
        <div>
          <Generator />
        </div>
      </div>
      <div className="sensor--item">
        <div>Voids</div>
        <div>
          <Generator />
        </div>
      </div>
    </div>
  );
};

export default Sensor;
