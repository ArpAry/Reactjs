"use strict";

var count = 0;
var addOne = function addOne() {
  count++;
  console.log("Add One ", count);
  renderCountApp();
};
var minusOne = function minusOne() {
  count--;
  console.log("Minus One ", count);
  renderCountApp();
};
var resetFun = function resetFun() {
  count = 0;
  console.log("Reset Function ", count);
  renderCountApp();
};

var appRoot = document.getElementById("app");

var renderCountApp = function renderCountApp() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count : ",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: resetFun },
      "reset"
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCountApp();
