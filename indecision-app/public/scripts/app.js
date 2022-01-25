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
        _this.deleteoneoption = _this.deleteoneoption.bind(_this);
        _this.state = {
            optionsbyuser: props.byuser
        };
        return _this;
    }

    _createClass(Indecisionapp, [{
        key: "deletethisoption",
        value: function deletethisoption() {
            // this.setState(() =>{
            //  return  {
            //     optionsbyuser:[]
            // }}
            // )
            this.setState(function () {
                return { optionsbyuser: [] };
            });
        }
    }, {
        key: "deleteoneoption",
        value: function deleteoneoption(removeoneoption) {
            this.setState(function (prevobj) {
                return { optionsbyuser: prevobj.optionsbyuser.filter(function (option) {
                        return removeoneoption !== option;
                    }) };
            });
            //console.log("|sadjia");
        }
    }, {
        key: "submitHandle",
        value: function submitHandle(objbyaddopt) {
            if (!objbyaddopt) return "Please Enter a Valid Option";else if (this.state.optionsbyuser.indexOf(objbyaddopt) > -1) return "This  Option Already Exists";else {
                //     this.setState((prevobj) =>{
                //         return {
                //             optionsbyuser:prevobj.optionsbyuser.concat([objbyaddopt])}
                // })}
                this.setState(function (prevobj) {
                    return { optionsbyuser: prevobj.optionsbyuser.concat([objbyaddopt]) };
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
                React.createElement(Header, { title: title }),
                React.createElement(Action, { handlepick: this.handlepick, hasOptions: this.state.optionsbyuser.length > 0 }),
                React.createElement(Options, { deletethisoption: this.deletethisoption, optionsbyuser: this.state.optionsbyuser, deleteoneoption: this.deleteoneoption }),
                React.createElement(Addoption, { submitHandle: this.submitHandle, optionbyuser: this.state.optionsbyuser })
            );
        }
    }]);

    return Indecisionapp;
}(React.Component);

;
Indecisionapp.defaultProps = {
    byuser: ['one', 'two']
};
var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        props.subtitle ? React.createElement(
            "h2",
            null,
            props.subtitle
        ) : React.createElement(
            "h2",
            null,
            "No Subtitle"
        )
    );
};
Header.defaultProps = {
    title: "DECISION APP"

    // class Header extends React.Component{
    //     render(){
    //         return (
    //             <div>
    //                 <h1>{this.props.title}</h1>
    //                 <h2>{this.props.subtitle}</h2>
    //             </div>
    //         );
    //     }
    // };

};var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handlepick,
                disabled: !props.hasOptions },
            "What should i do ?"
        )
    );
};
// class Action extends React.Component{
//     render(){
//         return (
//             <div>
//                 <button onClick={this.props.handlepick}
//                 disabled={!this.props.hasOptions} >
//                 What should i do ?</button>
//             </div>
//         );
//     }
// };
var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.deletethisoption },
            "Remove All"
        ),
        props.optionsbyuser.map(function (num) {
            return React.createElement(Option, { key: num, optionstext: num, deleteoneoption: props.deleteoneoption });
        })
    );
};
// class Options extends React.Component {
//     render()
//     {
//         return (
//             <div>
//             <button onClick={this.props.deletethisoption}>Remove All</button>
//                 {
//                     this.props.optionsbyuser.map((num) => <Option key={num} optionstext={num}  />  )  
//                 }

//             </div>
//         );
//     }
// };
var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        props.optionstext,
        React.createElement(
            "button",
            { onClick: function onClick(e) {
                    props.deleteoneoption(props.optionstext);
                }
            },
            "remove"
        )
    );
};

// class Option extends React.Component {
//     render(){
//         return(
//             <div> 
//             {this.props.optionstext}
//             </div>

//         )
//     }
// }

var Addoption = function (_React$Component2) {
    _inherits(Addoption, _React$Component2);

    function Addoption(props) {
        _classCallCheck(this, Addoption);

        var _this2 = _possibleConstructorReturn(this, (Addoption.__proto__ || Object.getPrototypeOf(Addoption)).call(this, props));

        _this2.submitHandle = _this2.submitHandle.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(Addoption, [{
        key: "submitHandle",
        value: function submitHandle(e) {
            e.preventDefault();
            var newOption = e.target.elements.option.value.trim();
            e.target.elements.option.value = "";
            var error = this.props.submitHandle(newOption);
            // this.setState(()=>{
            //     return {
            //         error
            //       //  error:error
            //     }
            // })
            this.setState(function () {
                return { error: error };
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

// const User= (props)=>
// {
//     return(
//         <div>
//         <h1>Name :{props.name}</h1>
//         <p>Age :{props.age} </p>
//         </div>

//     )

ReactDOM.render(React.createElement(Indecisionapp, { byuser: ['study', 'market'] }), document.getElementById("app"));
