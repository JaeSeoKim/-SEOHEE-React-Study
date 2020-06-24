import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App test={["2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1"]} />
  </React.StrictMode>,
  document.getElementById("root")
);
