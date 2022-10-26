import React from "react";
import style from "./App.css";
import Stat from "./pages/Stat.jsx";

import Main from "./pages/Main.jsx";
import Graph from "./pages/Graph.jsx";
import Control from "./pages/Control.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Security from "./pages/Security";
import Face from "./pages/Face";
// import Example from "./pages/Example/Example.jsx";
import Sensor from "./pages/Sensor";
import Dam from "./pages/Dam/Dam";

import Graphic from "./pages/Graphic.jsx";

function App() {
  return (
    <div className="bios">
      <div className="header-wrp">
        <Header />
      </div>
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<Face />} />
          <Route path="/main" element={<Main />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="/control" element={<Control />} />
          <Route path="/security" element={<Security />} />
          <Route path="/stat" element={<Stat />} />
          {/* <Route path="/exmp" element={<Example />} /> */}
          <Route path="/sensor" element={<Sensor />} />
          <Route path="/dam" element={<Dam />} />
          <Route path="/graphic" element={<Graphic />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
