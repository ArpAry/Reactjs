"use strict";

console.log("hello");
///////////JSX  Java Script XML
var studentInfo = React.createElement(
      "div",
      null,
      React.createElement(
            "h1",
            null,
            "Name: Arpit"
      ),
      React.createElement(
            "p",
            null,
            " Age:20"
      ),
      React.createElement(
            "p",
            null,
            "Location:Bareilly"
      )
);
var templateTwo = document.getElementById("personal");
ReactDOM.render(studentInfo, templateTwo);

var template = React.createElement(
      "div",
      null,
      React.createElement(
            "h1",
            null,
            "INDECISION APP"
      ),
      React.createElement(
            "p",
            null,
            "this is your jsx code"
      ),
      React.createElement(
            "ol",
            null,
            React.createElement(
                  "li",
                  null,
                  "HTML"
            ),
            React.createElement(
                  "li",
                  null,
                  "CSS"
            )
      )
);
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
