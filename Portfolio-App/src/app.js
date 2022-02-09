// import validator from "validator";
import AppRouterFun from "./routers/AppRouter";
import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
const appRoot = document.getElementById("app");
ReactDOM.render(<AppRouterFun/>, appRoot);
