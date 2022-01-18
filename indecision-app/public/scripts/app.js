"use strict";

console.log("hello");
///////////JSX  Java Script XML
var app = {
  title: "App",
  subtitle: "this app is very useful",
  options: ['one', 'two']

};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  app['options'].length > 0 ? React.createElement(
    "p",
    null,
    "Here are Your Options"
  ) : React.createElement(
    "p",
    null,
    "No Options "
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item One"
    ),
    React.createElement(
      "li",
      null,
      "Item Two"
    )
  )
);
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);

var user = {
  Name: "praveen",
  Age: 18,
  Location: "Delhi"

};
function getLoc(location) {
  if (location) return React.createElement(
    "p",
    null,
    "location: ",
    location
  );
}
var temp = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.Name ? user.Name : "NONAME"
  ),
  user.Age && user.Age >= 18 && React.createElement(
    "p",
    null,
    "Age:",
    user.Age
  ),
  getLoc(user.Location)
);

var tempTwo = document.getElementById("personal");
ReactDOM.render(temp, tempTwo);
