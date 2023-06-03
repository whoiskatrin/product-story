import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export function createRoadmap(containerId, data, style) {
  ReactDOM.render(
    <App data={data} style={style} />,
    document.getElementById(containerId)
  );
}
