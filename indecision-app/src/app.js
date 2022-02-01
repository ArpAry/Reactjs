// import validator from "validator";
import React from "react";
import ReactDOM from "react-dom";
import Indecisionapp from "./component/Indecisionapp.js";
const appRoot = document.getElementById("app");
ReactDOM.render(<Indecisionapp byuser={["study", "market"]} />, appRoot);
