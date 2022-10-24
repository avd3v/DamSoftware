import React from "react";

import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="wrp">
      <div className="header">
        <div>Dam Software</div>
      </div>
      <ul id="mainMenu">
        <NavLink className="lii" to="/main">
          Main
        </NavLink>

        <NavLink className="lii" to="/graph">
          Graph
        </NavLink>

        <NavLink className="lii" to="/security">
          Security
        </NavLink>

        <NavLink className="lii" to="/control">
          Control
        </NavLink>

        <NavLink className="lii" to="/stat">
          Stat
        </NavLink>
        <NavLink className="lii" to="/sensor">
          Sensor
        </NavLink>

        <NavLink className="lii" to="/exmp">
          Example
        </NavLink>
        <NavLink className="lii" to="/dam">
          Dam
        </NavLink>

        {/* <Link to="">Exit</Link> */}
      </ul>
    </div>
  );
};

export default Header;
