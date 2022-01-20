"use strict";

var app = {
  title: "Indecision App",
  subtitle: "Put Your life in hands of computer",
  option: ['One', 'Two']
};
var onformsubmit = function onformsubmit(e) {
  e.preventDefault();
  var interest = e.target.form.option.value;

  //console.log(interest);

  if (interest) {
    console.log(interest);
  }
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    { name: "arpit" },
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle,
    " "
  ),
  React.createElement(
    "p",
    null,
    app.option.length > 0 ? 'Here are Your Options' : 'No options'
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "First Item"
    ),
    React.createElement(
      "li",
      null,
      "Second Item"
    )
  ),
  React.createElement(
    "form",
    null,
    React.createElement("input", { type: "text", name: "option" }),
    React.createElement(
      "button",
      { name: "arpit", onClick: onformsubmit },
      " Add Option"
    )
  )
);
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
