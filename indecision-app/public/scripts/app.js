"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Indecisionapp = function (_React$Component) {
    _inherits(Indecisionapp, _React$Component);

    function Indecisionapp(props) {
        _classCallCheck(this, Indecisionapp);

        var _this = _possibleConstructorReturn(this, (Indecisionapp.__proto__ || Object.getPrototypeOf(Indecisionapp)).call(this, props));

        _this.deletethisoption = _this.deletethisoption.bind(_this);
        _this.handlepick = _this.handlepick.bind(_this);
        _this.submitHandle = _this.submitHandle.bind(_this);
        _this.state = {
            optionsbyuser: []
        };
        return _this;
    }

    _createClass(Indecisionapp, [{
        key: "deletethisoption",
        value: function deletethisoption() {
            this.setState(function () {
                return {
                    optionsbyuser: []
                };
            });
        }
    }, {
        key: "submitHandle",
        value: function submitHandle(objbyaddopt) {
            if (!objbyaddopt) return "Please Enter a Valid Option";else if (this.state.optionsbyuser.indexOf(objbyaddopt) > -1) return "This  Option Already Exists";else {
                this.setState(function (prevobj) {
                    return {
                        optionsbyuser: prevobj.optionsbyuser.concat([objbyaddopt]) };
                });
            }
        }
    }, {
        key: "handlepick",
        value: function handlepick() {
            this.setState(function (preobj) {
                var num = Math.floor(Math.random() * preobj.optionsbyuser.length);
                alert(preobj.optionsbyuser[num]);
            });
        }
    }, {
        key: "render",
        value: function render() {
            var title = "Indecision App";
            var subtitle = "Put Yor lifein hands of computer";
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { handlepick: this.handlepick, hasOptions: this.state.optionsbyuser.length > 0 }),
                React.createElement(Options, { deletethisoption: this.deletethisoption, optionsbyuser: this.state.optionsbyuser }),
                React.createElement(Addoption, { submitHandle: this.submitHandle, optionbyuser: this.state.optionsbyuser })
            );
        }
    }]);

    return Indecisionapp;
}(React.Component);

;

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

;

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.props.handlepick,
                        disabled: !this.props.hasOptions },
                    "What should i do ?"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

;

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.props.deletethisoption },
                    "Remove All"
                ),
                this.props.optionsbyuser.map(function (num) {
                    return React.createElement(Option, { key: num, optionstext: num });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

;

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.props.optionstext
            );
        }
    }]);

    return Option;
}(React.Component);

var Addoption = function (_React$Component6) {
    _inherits(Addoption, _React$Component6);

    function Addoption(props) {
        _classCallCheck(this, Addoption);

        var _this6 = _possibleConstructorReturn(this, (Addoption.__proto__ || Object.getPrototypeOf(Addoption)).call(this, props));

        _this6.submitHandle = _this6.submitHandle.bind(_this6);
        _this6.state = {
            error: undefined
        };
        return _this6;
    }

    _createClass(Addoption, [{
        key: "submitHandle",
        value: function submitHandle(e) {
            e.preventDefault();
            var newOption = e.target.elements.option.value.trim();
            e.target.elements.option.value = "";
            var error = this.props.submitHandle(newOption);
            this.setState(function () {
                return {
                    error: error
                    //  error:error
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.submitHandle },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return Addoption;
}(React.Component);

;

ReactDOM.render(React.createElement(Indecisionapp, null), document.getElementById("app"));
