"use strict";

var app = {
  title: "Indecision App",
  subtitle: "Put Your life in hands of computer",
  option: []
};
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  // const interest=e.target.form.option.value;
  var interest = e.target.elements.option.value;
  //console.log(interest);

  if (interest) {
    app.option.push(interest);
    e.target.elements.option.value = '';
    render();
  }
};
var removeAllOption = function removeAllOption() {
  app.option = [];
  render();
};

var appRoot = document.getElementById("app");

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
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
      "p",
      null,
      app.option.length
    ),
    React.createElement(
      "button",
      { onClick: removeAllOption },
      " Remove All"
    ),
    React.createElement(
      "ol",
      null,
      app.option.map(function (num) {
        return React.createElement(
          "li",
          { key: num },
          " work : ",
          num,
          " "
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        " Add Option"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};
render();
