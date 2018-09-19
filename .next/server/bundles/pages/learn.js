module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./comps/CardData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DataRow__ = __webpack_require__("./comps/DataRow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
var _jsxFileName = "C:\\Users\\stell\\Desktop\\code\\flash-lang\\comps\\CardData.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





function NoData() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Sorry, We didn't find any results for that word :("));
}

function CardsInDeck(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    style: {
      display: 'inline'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Number of cards added to deck: ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, props.deck)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
    href: "/study",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    style: {
      display: 'inline',
      margin: '5px'
    },
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Save Cards"))));
}

var CardData =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CardData, _React$Component);

  function CardData(props) {
    var _this;

    _classCallCheck(this, CardData);

    _this = _possibleConstructorReturn(this, (CardData.__proto__ || Object.getPrototypeOf(CardData)).call(this, props));
    _this.state = {
      deck: [],
      saved: false
    };
    _this.addCardToDeck = _this.addCardToDeck.bind(_assertThisInitialized(_this));
    _this.saveDeck = _this.saveDeck.bind(_assertThisInitialized(_this));
    return _this;
  } //Sends the whole client side deck to MongoDB


  _createClass(CardData, [{
    key: "saveDeck",
    value: function saveDeck() {
      var dev = '//localhost:8080';
      var prod = "https://flashlang-japanese.herokuapp.com";
      var that = this;
      __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()("".concat(prod, "/decks"), {
        method: "POST",
        body: JSON.stringify(this.state.deck),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        if (response.ok) {
          that.setState({
            saved: true
          });
          console.log("We're A-Okay!");
        }
      });
    } //Updates the state of this component to store flashcard objects client side

  }, {
    key: "addCardToDeck",
    value: function addCardToDeck(eng, reb, keb) {
      var deck = this.state.deck;
      deck.push({
        english: eng,
        reading: reb,
        kanji: keb,
        lastStudied: new Date(),
        SRSLevel: 1
      });
      this.setState({
        deck: deck
      });
    } //Returns a collection of DataRows if results were found, else returns a not found message
    //Displays a loading spinner while searching for data

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var rawData = this.props.data;
      var dataRows;

      if (!this.props.empty) {
        dataRows = rawData.map(function (e) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__DataRow__["a" /* default */], {
            onClick: _this2.addCardToDeck,
            defid: e.def_id,
            keb: e.keb,
            reb: e.reb,
            gloss: e.gloss,
            repri: e.re_pri,
            transition: _this2.props.transition,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          });
        });
      } else {
        dataRows = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NoData, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        });
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CardsInDeck, {
        onClick: this.saveDeck,
        deck: this.state.deck.length,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), this.props.loading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/assets/Blocks-1s-80px.gif",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }) : dataRows);
    }
  }]);

  return CardData;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./comps/DataRow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataRow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_transition_group__ = __webpack_require__("react-transition-group");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ExpandedData__ = __webpack_require__("./comps/ExpandedData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);
var _jsxFileName = "C:\\Users\\stell\\Desktop\\code\\flash-lang\\comps\\DataRow.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





function InfoButton(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
    className: "btn",
    style: {
      border: '1px solid #4C4C4C'
    },
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.value);
}

function AddCardButton(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
    className: "btn",
    style: {
      border: '1px solid green'
    },
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, props.value);
}

var DataRow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DataRow, _React$Component);

  function DataRow(props) {
    var _this;

    _classCallCheck(this, DataRow);

    _this = _possibleConstructorReturn(this, (DataRow.__proto__ || Object.getPrototypeOf(DataRow)).call(this, props));
    _this.state = {
      expanded: false,
      data: [],
      transition: false,
      cardAdded: false
    };
    _this.expand = _this.expand.bind(_assertThisInitialized(_this));
    _this.collapse = _this.collapse.bind(_assertThisInitialized(_this));
    _this.addCard = _this.addCard.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DataRow, [{
    key: "addCard",
    value: function addCard() {
      this.setState({
        cardAdded: true
      });
      this.props.onClick(this.props.gloss, this.props.reb, this.props.keb);
    }
  }, {
    key: "collapse",
    value: function collapse() {
      this.setState({
        expanded: false
      });
    } //Retrieves all possible definitions for the entry that matches this definition ID

  }, {
    key: "expand",
    value: function expand() {
      this.setState({
        expanded: true
      });
      var that = this;
      var dev = '//localhost:8080';
      var prod = "https://flashlang-japanese.herokuapp.com";
      __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default()("".concat(dev, "/api/entry/").concat(this.props.defid)).then(function (res) {
        if (res.status >= 400) {
          throw new Error("Something went wrong, that's all I know :(");
        }

        console.log("Expansion Retrieved!");
        res.json().then(function (data) {
          console.log(data);
          that.setState({
            data: data
          });
          that.setState({
            transition: true
          });
        });
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_transition_group__["CSSTransition"], {
        timeout: 300,
        classNames: "data-row",
        "in": this.props.transition,
        unmountOnExit: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-1290566568"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        className: "jsx-1290566568" + " " + "data-row row"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        className: "jsx-1290566568" + " " + "col-2"
      }, this.state.cardAdded ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(AddCardButton, {
        value: "Card Added!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(AddCardButton, {
        value: "Add Card",
        onClick: this.addCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        className: "jsx-1290566568" + " " + "col-sm-2"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        className: "jsx-1290566568"
      }, this.props.gloss)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        className: "jsx-1290566568" + " " + "col-sm-2"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        className: "jsx-1290566568"
      }, this.props.reb)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        className: "jsx-1290566568" + " " + "col-sm-2"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: "jsx-1290566568"
      }, this.props.keb)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        className: "jsx-1290566568" + " " + "col-sm-2"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        className: "jsx-1290566568"
      }, this.props.repri ? "common" : "")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        className: "jsx-1290566568" + " " + "col-sm-2"
      }, this.state.expanded ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(InfoButton, {
        value: "Collapse",
        onClick: this.collapse,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(InfoButton, {
        value: "Expand",
        onClick: this.expand,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }))), this.state.expanded ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ExpandedData__["a" /* default */], {
        transition: this.state.transition,
        data: this.state.data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }) : null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1290566568",
        css: ".data-row.jsx-1290566568{margin:5px 0px 5px 0px;background-color:#eee;border:1px solid black;text-align:center;font-size:14pt;padding:3px;}.data-row-enter.jsx-1290566568{opacity:0.01;}.data-row-enter-active.jsx-1290566568{opacity:1;-webkit-transition:all 300ms ease-out;transition:all 300ms ease-out;}.data-row-exit.jsx-1290566568{opacity:1;}.data-row-exit-active.jsx-1290566568{opacity:0.01;-webkit-transition:all 300ms ease-out;transition:all 300ms ease-out;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzXFxEYXRhUm93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStGZ0MsQUFHb0QsQUFRVixBQUdILEFBSUEsQUFHRyxVQU5pQixBQUlsQyxHQVBBLEFBVWtDLFVBbEJSLHNCQUNDLHVCQUNMLFVBVXRCLEdBT0EsS0FoQm1CLGVBQ0gsWUFDaEIiLCJmaWxlIjoiY29tcHNcXERhdGFSb3cuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxzdGVsbFxcRGVza3RvcFxcY29kZVxcZmxhc2gtbGFuZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcclxuaW1wb3J0IEV4cGFuZGVkRGF0YSBmcm9tICcuL0V4cGFuZGVkRGF0YSc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5cclxuZnVuY3Rpb24gSW5mb0J1dHRvbihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIHN0eWxlPXt7Ym9yZGVyOiAnMXB4IHNvbGlkICM0QzRDNEMnfX0gb25DbGljaz17cHJvcHMub25DbGlja30+e3Byb3BzLnZhbHVlfTwvYnV0dG9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBBZGRDYXJkQnV0dG9uKHByb3BzKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBzdHlsZT17e2JvcmRlcjogJzFweCBzb2xpZCBncmVlbid9fW9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9Pntwcm9wcy52YWx1ZX08L2J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBleHBhbmRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgY2FyZEFkZGVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmV4cGFuZCA9IHRoaXMuZXhwYW5kLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZSA9IHRoaXMuY29sbGFwc2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFkZENhcmQgPSB0aGlzLmFkZENhcmQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDYXJkKCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2FyZEFkZGVkOiB0cnVlfSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMucHJvcHMuZ2xvc3MsIHRoaXMucHJvcHMucmViLCB0aGlzLnByb3BzLmtlYik7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGFwc2UoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV4cGFuZGVkOiBmYWxzZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL1JldHJpZXZlcyBhbGwgcG9zc2libGUgZGVmaW5pdGlvbnMgZm9yIHRoZSBlbnRyeSB0aGF0IG1hdGNoZXMgdGhpcyBkZWZpbml0aW9uIElEXHJcbiAgICBleHBhbmQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV4cGFuZGVkOiB0cnVlIH0pO1xyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IGRldiA9ICcvL2xvY2FsaG9zdDo4MDgwJ1xyXG4gICAgICAgIGNvbnN0IHByb2QgPSBgaHR0cHM6Ly9mbGFzaGxhbmctamFwYW5lc2UuaGVyb2t1YXBwLmNvbWBcclxuICAgICAgICBmZXRjaChgJHtkZXZ9L2FwaS9lbnRyeS8ke3RoaXMucHJvcHMuZGVmaWR9YCkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID49IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU29tZXRoaW5nIHdlbnQgd3JvbmcsIHRoYXQncyBhbGwgSSBrbm93IDooXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXhwYW5zaW9uIFJldHJpZXZlZCFcIik7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIHRoYXQuc2V0U3RhdGUoeyB0cmFuc2l0aW9uOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dD17MzAwfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXM9XCJkYXRhLXJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaW49e3RoaXMucHJvcHMudHJhbnNpdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1yb3cgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY2FyZEFkZGVkID8gKDxBZGRDYXJkQnV0dG9uIHZhbHVlPVwiQ2FyZCBBZGRlZCFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoPEFkZENhcmRCdXR0b24gdmFsdWU9XCJBZGQgQ2FyZFwiIG9uQ2xpY2s9e3RoaXMuYWRkQ2FyZH0gLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMuZ2xvc3N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMucmVifTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLmtlYn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5yZXByaSA/IFwiY29tbW9uXCIgOiBcIlwifTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5leHBhbmRlZCA/ICg8SW5mb0J1dHRvbiB2YWx1ZT1cIkNvbGxhcHNlXCIgb25DbGljaz17dGhpcy5jb2xsYXBzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICg8SW5mb0J1dHRvbiB2YWx1ZT1cIkV4cGFuZFwiIG9uQ2xpY2s9e3RoaXMuZXhwYW5kfSAvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgeyh0aGlzLnN0YXRlLmV4cGFuZGVkKSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEV4cGFuZGVkRGF0YSB0cmFuc2l0aW9uPXt0aGlzLnN0YXRlLnRyYW5zaXRpb259IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEtcm93e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMHB4IDVweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEtcm93LWVudGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEtcm93LWVudGVyLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhLXJvdy1leGl0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEtcm93LWV4aXQtYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=comps\\DataRow.js */"
      })));
    }
  }]);

  return DataRow;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./comps/DeckCreator.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeckCreator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CardData__ = __webpack_require__("./comps/CardData.js");
var _jsxFileName = "C:\\Users\\stell\\Desktop\\code\\flash-lang\\comps\\DeckCreator.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




function CardDataContainer(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "card-data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-524583357" + " " + "container-fluid"
  }, props.children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "524583357",
    css: "#card-data.jsx-524583357{width:100%;padding:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzXFxEZWNrQ3JlYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPd0IsQUFHZ0MsV0FDQyxZQUNoQiIsImZpbGUiOiJjb21wc1xcRGVja0NyZWF0b3IuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxzdGVsbFxcRGVza3RvcFxcY29kZVxcZmxhc2gtbGFuZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgQ2FyZERhdGEgZnJvbSAnLi9DYXJkRGF0YSc7XHJcblxyXG5mdW5jdGlvbiBDYXJkRGF0YUNvbnRhaW5lcihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwiY2FyZC1kYXRhXCIgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgI2NhcmQtZGF0YXtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVja0NyZWF0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBlbXB0eTogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vU2VhcmNoZXMgREIgYW5kIHBhc3NlcyBkYXRhIHRvIENhcmREYXRhIENvbXBvbmVudCBhcyB0aGlzLnByb3BzLmRhdGFcclxuICAgIGhhbmRsZVN1Ym1pdChldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtlbXB0eTogZmFsc2V9KTtcclxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgICAgICBjb25zdCBkZXYgPSAnLy9sb2NhbGhvc3Q6ODA4MCdcclxuICAgICAgICBjb25zdCBwcm9kID0gYGh0dHBzOi8vZmxhc2hsYW5nLWphcGFuZXNlLmhlcm9rdWFwcC5jb21gXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBmZXRjaChgJHtkZXZ9L2FwaS9FdG9KLyR7dGhpcy5zdGF0ZS52YWx1ZX1gKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPj0gNDAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGhpbmcgd2VudCB3cm9uZywgdGhhdCdzIGFsbCBJIGtub3cgOihcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXRhIHJldHJpZXZlZCFcIik7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc2V0U3RhdGUoe2VtcHR5OiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIHRoYXQuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgIHRoYXQuc2V0U3RhdGUoeyB0cmFuc2l0aW9uOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUeXBlIGluIGFuIEVuZ2xpc2ggd29yZCB5b3UnZCBsaWtlIHRvIGxlYXJuOiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkVudGVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxDYXJkRGF0YUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZERhdGEgZW1wdHk9e3RoaXMuc3RhdGUuZW1wdHl9IGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSB0cmFuc2l0aW9uPXt0aGlzLnN0YXRlLnRyYW5zaXRpb259IC8+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmREYXRhQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMTBweCA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=comps\\DeckCreator.js */"
  }));
}

var DeckCreator =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DeckCreator, _React$Component);

  function DeckCreator(props) {
    var _this;

    _classCallCheck(this, DeckCreator);

    _this = _possibleConstructorReturn(this, (DeckCreator.__proto__ || Object.getPrototypeOf(DeckCreator)).call(this, props));
    _this.state = {
      value: '',
      data: [],
      transition: false,
      loading: false,
      empty: false
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DeckCreator, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: e.target.value,
        transition: false
      });
    } //Searches DB and passes data to CardData Component as this.props.data

  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      this.setState({
        loading: true
      });
      this.setState({
        empty: false
      });
      var that = this;
      var dev = '//localhost:8080';
      var prod = "https://flashlang-japanese.herokuapp.com";
      event.preventDefault();
      __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()("".concat(dev, "/api/EtoJ/").concat(this.state.value)).then(function (res) {
        if (res.status >= 400) {
          throw new Error("Something went wrong, that's all I know :(");
        }

        console.log("Data retrieved!");
        res.json().then(function (data) {
          if (data == false) {
            that.setState({
              empty: true
            });
          }

          that.setState({
            data: data
          });
          that.setState({
            loading: false
          });
          that.setState({
            transition: true
          });
        });
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        className: "jsx-228681636"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-228681636"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        className: "jsx-228681636"
      }, "Type in an English word you'd like to learn: ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        className: "jsx-228681636"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        value: this.state.value,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        className: "jsx-228681636"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "submit",
        value: "Enter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        className: "jsx-228681636"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CardDataContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__CardData__["a" /* default */], {
        empty: this.state.empty,
        loading: this.state.loading,
        data: this.state.data,
        transition: this.state.transition,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "228681636",
        css: "input.jsx-228681636{margin:5px 10px 5px 10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzXFxEZWNrQ3JlYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRTRCLEFBR2tELHlCQUM3QiIsImZpbGUiOiJjb21wc1xcRGVja0NyZWF0b3IuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxzdGVsbFxcRGVza3RvcFxcY29kZVxcZmxhc2gtbGFuZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgQ2FyZERhdGEgZnJvbSAnLi9DYXJkRGF0YSc7XHJcblxyXG5mdW5jdGlvbiBDYXJkRGF0YUNvbnRhaW5lcihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwiY2FyZC1kYXRhXCIgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgI2NhcmQtZGF0YXtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVja0NyZWF0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBlbXB0eTogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vU2VhcmNoZXMgREIgYW5kIHBhc3NlcyBkYXRhIHRvIENhcmREYXRhIENvbXBvbmVudCBhcyB0aGlzLnByb3BzLmRhdGFcclxuICAgIGhhbmRsZVN1Ym1pdChldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtlbXB0eTogZmFsc2V9KTtcclxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgICAgICBjb25zdCBkZXYgPSAnLy9sb2NhbGhvc3Q6ODA4MCdcclxuICAgICAgICBjb25zdCBwcm9kID0gYGh0dHBzOi8vZmxhc2hsYW5nLWphcGFuZXNlLmhlcm9rdWFwcC5jb21gXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBmZXRjaChgJHtkZXZ9L2FwaS9FdG9KLyR7dGhpcy5zdGF0ZS52YWx1ZX1gKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPj0gNDAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGhpbmcgd2VudCB3cm9uZywgdGhhdCdzIGFsbCBJIGtub3cgOihcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXRhIHJldHJpZXZlZCFcIik7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc2V0U3RhdGUoe2VtcHR5OiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNldFN0YXRlKHsgZGF0YTogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIHRoYXQuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgIHRoYXQuc2V0U3RhdGUoeyB0cmFuc2l0aW9uOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUeXBlIGluIGFuIEVuZ2xpc2ggd29yZCB5b3UnZCBsaWtlIHRvIGxlYXJuOiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkVudGVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxDYXJkRGF0YUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZERhdGEgZW1wdHk9e3RoaXMuc3RhdGUuZW1wdHl9IGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSB0cmFuc2l0aW9uPXt0aGlzLnN0YXRlLnRyYW5zaXRpb259IC8+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmREYXRhQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMTBweCA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=comps\\DeckCreator.js */"
      }));
    }
  }]);

  return DeckCreator;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./comps/ExpandedData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandedData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\stell\\Desktop\\code\\flash-lang\\comps\\ExpandedData.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExpandedData =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ExpandedData, _React$Component);

  function ExpandedData(props) {
    _classCallCheck(this, ExpandedData);

    return _possibleConstructorReturn(this, (ExpandedData.__proto__ || Object.getPrototypeOf(ExpandedData)).call(this, props));
  }

  _createClass(ExpandedData, [{
    key: "render",
    value: function render() {
      var readings = this.props.data.map(function (e) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
          style: {
            float: 'left',
            padding: '10px',
            margin: "none"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        }, e.gloss);
      });
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        className: "jsx-1997000064" + " " + "expanded-data row"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-1997000064" + " " + "col-sm-6"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        style: {
          padding: '10px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-1997000064"
      }, "All Definitions for this Reading:")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-1997000064" + " " + "expanded-view col-sm-6"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-1997000064"
      }, readings)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1997000064",
        css: "p.jsx-1997000064{font-weight:bold;margin-top:0px;}.expanded-data.jsx-1997000064{margin:0;background-color:#eee;text-align:start;}.expanded-view.jsx-1997000064 ul.jsx-1997000064{margin-top:0px;list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzXFxFeHBhbmRlZERhdGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUI0QixBQUcwQyxBQUtSLEFBTU0sU0FMTyxNQU1OLEVBWEQsY0FNRSxBQU1yQixDQVhBLGdCQU1BIiwiZmlsZSI6ImNvbXBzXFxFeHBhbmRlZERhdGEuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxzdGVsbFxcRGVza3RvcFxcY29kZVxcZmxhc2gtbGFuZyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGFuZGVkRGF0YSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgcmVhZGluZ3MgPSB0aGlzLnByb3BzLmRhdGEubWFwKGUgPT5cclxuICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcsIHBhZGRpbmc6ICcxMHB4JywgbWFyZ2luOiBcIm5vbmVcIiB9fT57ZS5nbG9zc308L2xpPlxyXG4gICAgICAgIClcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGFuZGVkLWRhdGEgcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3twYWRkaW5nOiAnMTBweCd9fT5BbGwgRGVmaW5pdGlvbnMgZm9yIHRoaXMgUmVhZGluZzo8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwYW5kZWQtdmlldyBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD57cmVhZGluZ3N9PC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmV4cGFuZGVkLWRhdGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmV4cGFuZGVkLXZpZXcgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=comps\\ExpandedData.js */"
      }));
    }
  }]);

  return ExpandedData;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./comps/HtmlHead.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "C:\\Users\\stell\\Desktop\\code\\flash-lang\\comps\\HtmlHead.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "FlashLang Japanese"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
    integrity: "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Fugaz+One|Merriweather+Sans",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    href: "../assets/flashFav.ico",
    type: "image/x-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "../assets/styles/style.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }));
});

/***/ }),

/***/ "./comps/LearnToggler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearnToggler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DeckCreator__ = __webpack_require__("./comps/DeckCreator.js");
var _jsxFileName = "C:\\Users\\stell\\Desktop\\code\\flash-lang\\comps\\LearnToggler.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




function LearnIndex(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-1758312523" + " " + "col-sm-12 info-box"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-1758312523"
  }, "Select the Study Tab to review your cards, or add new ones here!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-1758312523"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-1758312523"
  }, "Add More Cards")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1758312523",
    css: ".info-box.jsx-1758312523{padding:30px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzXFxMZWFyblRvZ2dsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUXdCLEFBR2tDLGFBQ0ssa0JBQ3BCIiwiZmlsZSI6ImNvbXBzXFxMZWFyblRvZ2dsZXIuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxzdGVsbFxcRGVza3RvcFxcY29kZVxcZmxhc2gtbGFuZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBEZWNrQ3JlYXRvciBmcm9tICcuL0RlY2tDcmVhdG9yJ1xyXG5cclxuZnVuY3Rpb24gTGVhcm5JbmRleChwcm9wcyl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgaW5mby1ib3hcIj5cclxuICAgICAgICAgICAgPGgxPlNlbGVjdCB0aGUgU3R1ZHkgVGFiIHRvIHJldmlldyB5b3VyIGNhcmRzLCBvciBhZGQgbmV3IG9uZXMgaGVyZSE8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGE+PGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5BZGQgTW9yZSBDYXJkczwvYnV0dG9uPjwvYT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmluZm8tYm94IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlY2tXaXphcmQocHJvcHMpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGRlY2std2l6YXJkXCI+XHJcbiAgICAgICAgICAgIDxoMT5HcmVhdCEgTGV0J3MgYWRkIG1vcmUgd29yZHMgdG8gb3VyIGNvbGxlY3Rpb24uPC9oMT5cclxuICAgICAgICAgICAgPERlY2tDcmVhdG9yIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjYW5jZWxcIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiPlJldHVybiB0byBEYXNoYm9hcmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmRlY2std2l6YXJkIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjY2FuY2Vse1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhcm5Ub2dnbGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge2NyZWF0ZURlY2s6IGZhbHNlfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZU5ld0RlY2sgPSB0aGlzLmNyZWF0ZU5ld0RlY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJldHVyblRvSW5kZXggPSB0aGlzLnJldHVyblRvSW5kZXguYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVOZXdEZWNrKCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3JlYXRlRGVjazogdHJ1ZX0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuVG9JbmRleCgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NyZWF0ZURlY2s6IGZhbHNlfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCBuZXdEZWNrID0gdGhpcy5zdGF0ZS5jcmVhdGVEZWNrO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBpZD1cImxlYXJuLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7bmV3RGVjayA/IChcclxuICAgICAgICAgICAgICAgICAgICA8RGVja1dpemFyZCBvbkNsaWNrPXt0aGlzLnJldHVyblRvSW5kZXh9Lz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExlYXJuSW5kZXggb25DbGljaz17dGhpcy5jcmVhdGVOZXdEZWNrfS8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICNsZWFybi1jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=comps\\LearnToggler.js */"
  }));
}

function DeckWizard(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-4146561568" + " " + "col-sm-12 deck-wizard"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-4146561568"
  }, "Great! Let's add more words to our collection."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__DeckCreator__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
    id: "cancel",
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    className: "jsx-4146561568" + " " + "btn btn-danger"
  }, "Return to Dashboard"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4146561568",
    css: ".deck-wizard.jsx-4146561568{text-align:center;}#cancel.jsx-4146561568{margin:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzXFxMZWFyblRvZ2dsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0J3QixBQUd1QyxBQUdOLFlBQ2hCLE1BSEEiLCJmaWxlIjoiY29tcHNcXExlYXJuVG9nZ2xlci5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXHN0ZWxsXFxEZXNrdG9wXFxjb2RlXFxmbGFzaC1sYW5nIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IERlY2tDcmVhdG9yIGZyb20gJy4vRGVja0NyZWF0b3InXHJcblxyXG5mdW5jdGlvbiBMZWFybkluZGV4KHByb3BzKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBpbmZvLWJveFwiPlxyXG4gICAgICAgICAgICA8aDE+U2VsZWN0IHRoZSBTdHVkeSBUYWIgdG8gcmV2aWV3IHlvdXIgY2FyZHMsIG9yIGFkZCBuZXcgb25lcyBoZXJlITwvaDE+XHJcbiAgICAgICAgICAgICAgICA8YT48YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PkFkZCBNb3JlIENhcmRzPC9idXR0b24+PC9hPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuaW5mby1ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICkgICBcclxufVxyXG5cclxuZnVuY3Rpb24gRGVja1dpemFyZChwcm9wcyl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgZGVjay13aXphcmRcIj5cclxuICAgICAgICAgICAgPGgxPkdyZWF0ISBMZXQncyBhZGQgbW9yZSB3b3JkcyB0byBvdXIgY29sbGVjdGlvbi48L2gxPlxyXG4gICAgICAgICAgICA8RGVja0NyZWF0b3IgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbFwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9IGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCI+UmV0dXJuIHRvIERhc2hib2FyZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuZGVjay13aXphcmQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNjYW5jZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWFyblRvZ2dsZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7Y3JlYXRlRGVjazogZmFsc2V9O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTmV3RGVjayA9IHRoaXMuY3JlYXRlTmV3RGVjay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmV0dXJuVG9JbmRleCA9IHRoaXMucmV0dXJuVG9JbmRleC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU5ld0RlY2soKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjcmVhdGVEZWNrOiB0cnVlfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm5Ub0luZGV4KCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3JlYXRlRGVjazogZmFsc2V9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IG5ld0RlY2sgPSB0aGlzLnN0YXRlLmNyZWF0ZURlY2s7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibGVhcm4tY29udGFpbmVyXCIgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHtuZXdEZWNrID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxEZWNrV2l6YXJkIG9uQ2xpY2s9e3RoaXMucmV0dXJuVG9JbmRleH0vPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8TGVhcm5JbmRleCBvbkNsaWNrPXt0aGlzLmNyZWF0ZU5ld0RlY2t9Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgI2xlYXJuLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXIgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=comps\\LearnToggler.js */"
  }));
}

var LearnToggler =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LearnToggler, _React$Component);

  function LearnToggler(props) {
    var _this;

    _classCallCheck(this, LearnToggler);

    _this = _possibleConstructorReturn(this, (LearnToggler.__proto__ || Object.getPrototypeOf(LearnToggler)).call(this, props));
    _this.state = {
      createDeck: false
    };
    _this.createNewDeck = _this.createNewDeck.bind(_assertThisInitialized(_this));
    _this.returnToIndex = _this.returnToIndex.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LearnToggler, [{
    key: "createNewDeck",
    value: function createNewDeck() {
      this.setState({
        createDeck: true
      });
    }
  }, {
    key: "returnToIndex",
    value: function returnToIndex() {
      this.setState({
        createDeck: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var newDeck = this.state.createDeck;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "learn-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-3222659047" + " " + "row justify-content-center"
      }, newDeck ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(DeckWizard, {
        onClick: this.returnToIndex,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(LearnIndex, {
        onClick: this.createNewDeck,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3222659047",
        css: "#learn-container.jsx-3222659047{margin-top:10vh;font-family:'Merriweather Sans',sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzXFxMZWFyblRvZ2dsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkQ0QixBQUd5QyxnQkFDNEIsMkNBQ2hEIiwiZmlsZSI6ImNvbXBzXFxMZWFyblRvZ2dsZXIuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxzdGVsbFxcRGVza3RvcFxcY29kZVxcZmxhc2gtbGFuZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBEZWNrQ3JlYXRvciBmcm9tICcuL0RlY2tDcmVhdG9yJ1xyXG5cclxuZnVuY3Rpb24gTGVhcm5JbmRleChwcm9wcyl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgaW5mby1ib3hcIj5cclxuICAgICAgICAgICAgPGgxPlNlbGVjdCB0aGUgU3R1ZHkgVGFiIHRvIHJldmlldyB5b3VyIGNhcmRzLCBvciBhZGQgbmV3IG9uZXMgaGVyZSE8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGE+PGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5BZGQgTW9yZSBDYXJkczwvYnV0dG9uPjwvYT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmluZm8tYm94IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIERlY2tXaXphcmQocHJvcHMpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGRlY2std2l6YXJkXCI+XHJcbiAgICAgICAgICAgIDxoMT5HcmVhdCEgTGV0J3MgYWRkIG1vcmUgd29yZHMgdG8gb3VyIGNvbGxlY3Rpb24uPC9oMT5cclxuICAgICAgICAgICAgPERlY2tDcmVhdG9yIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjYW5jZWxcIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiPlJldHVybiB0byBEYXNoYm9hcmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmRlY2std2l6YXJkIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAjY2FuY2Vse1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhcm5Ub2dnbGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge2NyZWF0ZURlY2s6IGZhbHNlfTtcclxuICAgICAgICB0aGlzLmNyZWF0ZU5ld0RlY2sgPSB0aGlzLmNyZWF0ZU5ld0RlY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJldHVyblRvSW5kZXggPSB0aGlzLnJldHVyblRvSW5kZXguYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVOZXdEZWNrKCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3JlYXRlRGVjazogdHJ1ZX0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuVG9JbmRleCgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NyZWF0ZURlY2s6IGZhbHNlfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCBuZXdEZWNrID0gdGhpcy5zdGF0ZS5jcmVhdGVEZWNrO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBpZD1cImxlYXJuLWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7bmV3RGVjayA/IChcclxuICAgICAgICAgICAgICAgICAgICA8RGVja1dpemFyZCBvbkNsaWNrPXt0aGlzLnJldHVyblRvSW5kZXh9Lz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExlYXJuSW5kZXggb25DbGljaz17dGhpcy5jcmVhdGVOZXdEZWNrfS8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICNsZWFybi1jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=comps\\LearnToggler.js */"
      }));
    }
  }]);

  return LearnToggler;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./page-layouts/LearnLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comps_HtmlHead__ = __webpack_require__("./comps/HtmlHead.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
var _jsxFileName = "C:\\Users\\stell\\Desktop\\code\\flash-lang\\page-layouts\\LearnLayout.js";





var LearnLayout = function LearnLayout(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__comps_HtmlHead__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-2775268103" + " " + "container-fluid"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-2775268103" + " " + "row"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "sideNav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-2775268103" + " " + "col-sm-2"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-2775268103"
  }, "Welcome, ", props.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-2775268103" + " " + "links"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-2775268103"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-2775268103"
  }, "Home"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-2775268103"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-2775268103"
  }, "Dashboard"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-2775268103"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
    href: "/study",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-2775268103"
  }, "Review"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: "jsx-2775268103" + " " + "col-md-10"
  }, props.children)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2775268103",
    css: "#sideNav.jsx-2775268103{padding:20px;background-color:#FF5F5F;border-right:2px solid #eee;text-align:center;font-family:'Merriweather Sans',sans-serif;}.links.jsx-2775268103 li.jsx-2775268103{font-size:16pt;list-style:none;padding-top:10px;}@media only screen and (min-width:640px){#sideNav.jsx-2775268103{min-height:100vh;}.links.jsx-2775268103 li.jsx-2775268103{padding-top:10vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtbGF5b3V0c1xcTGVhcm5MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0J3QixBQUdrQyxBQVFFLEFBT00sQUFJQSxhQWxCSSxFQVFULEVBT2hCLEFBSUEsY0FWaUIsT0FSVyxVQVNoQyxrQkFSc0Isa0JBQzBCLDJDQUNoRCIsImZpbGUiOiJwYWdlLWxheW91dHNcXExlYXJuTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcc3RlbGxcXERlc2t0b3BcXGNvZGVcXGZsYXNoLWxhbmciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwiLi4vY29tcHMvSHRtbEhlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgTGVhcm5MYXlvdXQgPSAocHJvcHMpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInNpZGVOYXZcIiBjbGFzc05hbWU9XCJjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5XZWxjb21lLCB7cHJvcHMubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9cIj48YT5Ib21lPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIiNcIj48YT5EYXNoYm9hcmQ8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL3N0dWR5XCI+PGE+UmV2aWV3PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAjc2lkZU5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY1RjVGO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5saW5rcyBsaXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAjc2lkZU5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmxpbmtzIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTB2aDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVhcm5MYXlvdXQiXX0= */\n/*@ sourceURL=page-layouts\\LearnLayout.js */"
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (LearnLayout);

/***/ }),

/***/ "./pages/learn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_layouts_LearnLayout_js__ = __webpack_require__("./page-layouts/LearnLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comps_LearnToggler__ = __webpack_require__("./comps/LearnToggler.js");
var _jsxFileName = "C:\\Users\\stell\\Desktop\\code\\flash-lang\\pages\\learn.js";




var Learn = function Learn(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__page_layouts_LearnLayout_js__["a" /* default */], {
    name: "Stella",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__comps_LearnToggler__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Learn);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/learn.js");


/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-transition-group":
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=learn.js.map