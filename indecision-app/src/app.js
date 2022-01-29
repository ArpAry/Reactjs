import validator from "validator";
import React from "react";
import ReactDOM from "react-dom";
import Indecisionapp from "./component/Indecisionapp.js";

ReactDOM.render(
  <Indecisionapp byuser={["study", "market"]} />,
  document.getElementById("app")
);
