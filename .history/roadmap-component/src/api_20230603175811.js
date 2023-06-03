// src/api.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

window.createRoadmap = function (options) {
  ReactDOM.render(
    <App data={options.data} style={options.style} />,
    document.getElementById(options.containerId)
  );
};
