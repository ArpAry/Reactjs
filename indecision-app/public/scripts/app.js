'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: 'getdescription',
        value: function getdescription() {
            return this.name + ' is ' + this.age + ' year old ! :';
        }
    }]);

    return Person;
}();

;

var Traveller = function (_Person) {
    _inherits(Traveller, _Person);

    function Traveller(name, age, location) {
        _classCallCheck(this, Traveller);

        var _this = _possibleConstructorReturn(this, (Traveller.__proto__ || Object.getPrototypeOf(Traveller)).call(this, name, age));

        _this.location = location;
        return _this;
    }

    _createClass(Traveller, [{
        key: 'getdescription',
        value: function getdescription() {
            var description = _get(Traveller.prototype.__proto__ || Object.getPrototypeOf(Traveller.prototype), 'getdescription', this).call(this);
            if (this.hasLocation()) {
                description += 'I am visitng from ' + this.location;
            }
            return description;
        }
    }, {
        key: 'hasLocation',
        value: function hasLocation() {
            return !!this.location;
        }
    }]);

    return Traveller;
}(Person);

var me = new Traveller('Arpit', 20, "bareilly");
console.log(me.getdescription());

var other = new Traveller();
console.log(other.getdescription());
