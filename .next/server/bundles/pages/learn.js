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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", null, "FlashLang Japanese"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
    integrity: "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO",
    crossOrigin: "anonymous"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Fugaz+One|Merriweather+Sans",
    rel: "stylesheet"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    href: "../assets/flashFav.ico",
    type: "image/x-icon"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "../assets/styles/style.css"
  }));
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comps_HtmlHead__ = __webpack_require__(2);




var LearnLayout = function LearnLayout(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__comps_HtmlHead__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-2832112428" + " " + "container-fluid"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-2832112428" + " " + "row"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "sideNav",
    className: "jsx-2832112428" + " " + "col-sm-2"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    className: "jsx-2832112428"
  }, "Welcome, ", props.name)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-2832112428" + " " + "col-md-10"
  }, props.children)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2832112428",
    css: ["#sideNav.jsx-2832112428{background-color:#FF5F5F;border-right:2px solid #eee;min-height:100vh;text-align:center;font-family:'Merriweather Sans',sans-serif;}"]
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (LearnLayout);

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./page-layouts/LearnLayout.js
var LearnLayout = __webpack_require__(6);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external__isomorphic_unfetch_ = __webpack_require__(5);
var external__isomorphic_unfetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_unfetch_);

// EXTERNAL MODULE: external "react-transition-group"
var external__react_transition_group_ = __webpack_require__(17);
var external__react_transition_group__default = /*#__PURE__*/__webpack_require__.n(external__react_transition_group_);

// CONCATENATED MODULE: ./comps/ExpandedData.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExpandedData_ExpandedData =
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
        return external__react__default.a.createElement("li", {
          style: {
            float: 'left',
            padding: '10px',
            margin: "none"
          }
        }, e.gloss);
      });
      return external__react__default.a.createElement("div", {
        className: "jsx-1997000064" + " " + "expanded-data row"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1997000064" + " " + "col-6"
      }, external__react__default.a.createElement("p", {
        style: {
          padding: '10px'
        },
        className: "jsx-1997000064"
      }, "All Definitions for this Reading:")), external__react__default.a.createElement("div", {
        className: "jsx-1997000064" + " " + "expanded-view col-6"
      }, external__react__default.a.createElement("ul", {
        className: "jsx-1997000064"
      }, readings)), external__react__default.a.createElement(style__default.a, {
        styleId: "1997000064",
        css: ["p.jsx-1997000064{font-weight:bold;margin-top:0px;}", ".expanded-data.jsx-1997000064{margin:0;background-color:#eee;text-align:start;}", ".expanded-view.jsx-1997000064 ul.jsx-1997000064{margin-top:0px;list-style:none;}"]
      }));
    }
  }]);

  return ExpandedData;
}(external__react__default.a.Component);


// CONCATENATED MODULE: ./comps/DataRow.js



function DataRow__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DataRow__typeof = function _typeof(obj) { return typeof obj; }; } else { DataRow__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DataRow__typeof(obj); }

function DataRow__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DataRow__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DataRow__createClass(Constructor, protoProps, staticProps) { if (protoProps) DataRow__defineProperties(Constructor.prototype, protoProps); if (staticProps) DataRow__defineProperties(Constructor, staticProps); return Constructor; }

function DataRow__possibleConstructorReturn(self, call) { if (call && (DataRow__typeof(call) === "object" || typeof call === "function")) { return call; } return DataRow__assertThisInitialized(self); }

function DataRow__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function DataRow__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





function InfoButton(props) {
  return external__react__default.a.createElement("button", {
    onClick: props.onClick
  }, props.value);
}

function AddCardButton(props) {
  return external__react__default.a.createElement("button", {
    onClick: props.onClick
  }, props.value);
}

var DataRow_DataRow =
/*#__PURE__*/
function (_React$Component) {
  DataRow__inherits(DataRow, _React$Component);

  function DataRow(props) {
    var _this;

    DataRow__classCallCheck(this, DataRow);

    _this = DataRow__possibleConstructorReturn(this, (DataRow.__proto__ || Object.getPrototypeOf(DataRow)).call(this, props));
    _this.state = {
      expanded: false,
      data: [],
      transition: false,
      cardAdded: false
    };
    _this.expand = _this.expand.bind(DataRow__assertThisInitialized(_this));
    _this.collapse = _this.collapse.bind(DataRow__assertThisInitialized(_this));
    _this.addCard = _this.addCard.bind(DataRow__assertThisInitialized(_this));
    return _this;
  }

  DataRow__createClass(DataRow, [{
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
      external__isomorphic_unfetch__default()("//localhost:3000/api/entry/".concat(this.props.defid)).then(function (res) {
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
      return external__react__default.a.createElement(external__react_transition_group_["CSSTransition"], {
        timeout: 300,
        classNames: "data-row",
        "in": this.props.transition,
        unmountOnExit: true
      }, external__react__default.a.createElement("div", {
        className: "jsx-1290566568"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1290566568" + " " + "data-row row"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1290566568" + " " + "col-2"
      }, this.state.expanded ? external__react__default.a.createElement(InfoButton, {
        value: "Collapse",
        onClick: this.collapse
      }) : external__react__default.a.createElement(InfoButton, {
        value: "Expand",
        onClick: this.expand
      })), external__react__default.a.createElement("div", {
        className: "jsx-1290566568" + " " + "col-2"
      }, external__react__default.a.createElement("p", {
        className: "jsx-1290566568"
      }, this.props.gloss)), external__react__default.a.createElement("div", {
        className: "jsx-1290566568" + " " + "col-2"
      }, external__react__default.a.createElement("p", {
        className: "jsx-1290566568"
      }, this.props.reb)), external__react__default.a.createElement("div", {
        className: "jsx-1290566568" + " " + "col-2"
      }, external__react__default.a.createElement("p", {
        className: "jsx-1290566568"
      }, this.props.keb)), external__react__default.a.createElement("div", {
        className: "jsx-1290566568" + " " + "col-2"
      }, external__react__default.a.createElement("p", {
        className: "jsx-1290566568"
      }, this.props.repri ? "common" : "")), external__react__default.a.createElement("div", {
        className: "jsx-1290566568" + " " + "col-2"
      }, this.state.cardAdded ? external__react__default.a.createElement(AddCardButton, {
        value: "Card Added!"
      }) : external__react__default.a.createElement(AddCardButton, {
        value: "Add Card",
        onClick: this.addCard
      }))), this.state.expanded ? external__react__default.a.createElement(ExpandedData_ExpandedData, {
        transition: this.state.transition,
        data: this.state.data
      }) : null, external__react__default.a.createElement(style__default.a, {
        styleId: "1290566568",
        css: [".data-row.jsx-1290566568{margin:5px 0px 5px 0px;background-color:#eee;border:1px solid black;text-align:center;font-size:14pt;padding:3px;}", ".data-row-enter.jsx-1290566568{opacity:0.01;}", ".data-row-enter-active.jsx-1290566568{opacity:1;-webkit-transition:all 300ms ease-out;transition:all 300ms ease-out;}", ".data-row-exit.jsx-1290566568{opacity:1;}", ".data-row-exit-active.jsx-1290566568{opacity:0.01;-webkit-transition:all 300ms ease-out;transition:all 300ms ease-out;}"]
      })));
    }
  }]);

  return DataRow;
}(external__react__default.a.Component);


// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(4);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./comps/CardData.js


function CardData__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CardData__typeof = function _typeof(obj) { return typeof obj; }; } else { CardData__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CardData__typeof(obj); }

function CardData__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CardData__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CardData__createClass(Constructor, protoProps, staticProps) { if (protoProps) CardData__defineProperties(Constructor.prototype, protoProps); if (staticProps) CardData__defineProperties(Constructor, staticProps); return Constructor; }

function CardData__possibleConstructorReturn(self, call) { if (call && (CardData__typeof(call) === "object" || typeof call === "function")) { return call; } return CardData__assertThisInitialized(self); }

function CardData__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function CardData__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





function NoData() {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement("h3", null, "Sorry, We didn't find any results for that word :("));
}

function CardsInDeck(props) {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement("p", {
    style: {
      display: 'inline'
    }
  }, "Number of cards added to deck: ", external__react__default.a.createElement("span", null, props.deck)), external__react__default.a.createElement(link__default.a, {
    href: "/study"
  }, external__react__default.a.createElement("a", null, external__react__default.a.createElement("button", {
    style: {
      display: 'inline',
      margin: '5px'
    },
    onClick: props.onClick
  }, "Save Deck"))));
}

var CardData_CardData =
/*#__PURE__*/
function (_React$Component) {
  CardData__inherits(CardData, _React$Component);

  function CardData(props) {
    var _this;

    CardData__classCallCheck(this, CardData);

    _this = CardData__possibleConstructorReturn(this, (CardData.__proto__ || Object.getPrototypeOf(CardData)).call(this, props));
    _this.state = {
      deck: [],
      saved: false
    };
    _this.addCardToDeck = _this.addCardToDeck.bind(CardData__assertThisInitialized(_this));
    _this.saveDeck = _this.saveDeck.bind(CardData__assertThisInitialized(_this));
    return _this;
  } //Sends the whole client side deck to MongoDB


  CardData__createClass(CardData, [{
    key: "saveDeck",
    value: function saveDeck() {
      var that = this;
      external__isomorphic_unfetch__default()("//localhost:3000/decks", {
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
          return external__react__default.a.createElement(DataRow_DataRow, {
            onClick: _this2.addCardToDeck,
            defid: e.def_id,
            keb: e.keb,
            reb: e.reb,
            gloss: e.gloss,
            repri: e.re_pri,
            transition: _this2.props.transition
          });
        });
      } else {
        dataRows = external__react__default.a.createElement(NoData, null);
      }

      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(CardsInDeck, {
        onClick: this.saveDeck,
        deck: this.state.deck.length
      }), this.props.loading ? external__react__default.a.createElement("img", {
        src: "/assets/Blocks-1s-80px.gif"
      }) : dataRows);
    }
  }]);

  return CardData;
}(external__react__default.a.Component);


// CONCATENATED MODULE: ./comps/DeckCreator.js



function DeckCreator__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DeckCreator__typeof = function _typeof(obj) { return typeof obj; }; } else { DeckCreator__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DeckCreator__typeof(obj); }

function DeckCreator__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DeckCreator__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DeckCreator__createClass(Constructor, protoProps, staticProps) { if (protoProps) DeckCreator__defineProperties(Constructor.prototype, protoProps); if (staticProps) DeckCreator__defineProperties(Constructor, staticProps); return Constructor; }

function DeckCreator__possibleConstructorReturn(self, call) { if (call && (DeckCreator__typeof(call) === "object" || typeof call === "function")) { return call; } return DeckCreator__assertThisInitialized(self); }

function DeckCreator__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function DeckCreator__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




function CardDataContainer(props) {
  return external__react__default.a.createElement("div", {
    id: "card-data",
    className: "jsx-524583357" + " " + "container-fluid"
  }, props.children, external__react__default.a.createElement(style__default.a, {
    styleId: "524583357",
    css: ["#card-data.jsx-524583357{width:100%;padding:0px;}"]
  }));
}

var DeckCreator_DeckCreator =
/*#__PURE__*/
function (_React$Component) {
  DeckCreator__inherits(DeckCreator, _React$Component);

  function DeckCreator(props) {
    var _this;

    DeckCreator__classCallCheck(this, DeckCreator);

    _this = DeckCreator__possibleConstructorReturn(this, (DeckCreator.__proto__ || Object.getPrototypeOf(DeckCreator)).call(this, props));
    _this.state = {
      value: '',
      data: [],
      transition: false,
      loading: false,
      empty: false
    };
    _this.handleChange = _this.handleChange.bind(DeckCreator__assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(DeckCreator__assertThisInitialized(_this));
    return _this;
  }

  DeckCreator__createClass(DeckCreator, [{
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
      event.preventDefault();
      external__isomorphic_unfetch__default()("//localhost:3000/api/EtoJ/".concat(this.state.value)).then(function (res) {
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
      return external__react__default.a.createElement("div", {
        className: "jsx-228681636"
      }, external__react__default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-228681636"
      }, external__react__default.a.createElement("label", {
        className: "jsx-228681636"
      }, "Type in an English word you'd like to learn: ", external__react__default.a.createElement("br", {
        className: "jsx-228681636"
      })), external__react__default.a.createElement("input", {
        type: "text",
        value: this.state.value,
        onChange: this.handleChange,
        className: "jsx-228681636"
      }), external__react__default.a.createElement("input", {
        type: "submit",
        value: "Enter",
        className: "jsx-228681636"
      })), external__react__default.a.createElement(CardDataContainer, null, external__react__default.a.createElement(CardData_CardData, {
        empty: this.state.empty,
        loading: this.state.loading,
        data: this.state.data,
        transition: this.state.transition
      })), external__react__default.a.createElement(style__default.a, {
        styleId: "228681636",
        css: ["input.jsx-228681636{margin:5px 10px 5px 10px;}"]
      }));
    }
  }]);

  return DeckCreator;
}(external__react__default.a.Component);


// CONCATENATED MODULE: ./comps/LearnToggler.js


function LearnToggler__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { LearnToggler__typeof = function _typeof(obj) { return typeof obj; }; } else { LearnToggler__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return LearnToggler__typeof(obj); }

function LearnToggler__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LearnToggler__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LearnToggler__createClass(Constructor, protoProps, staticProps) { if (protoProps) LearnToggler__defineProperties(Constructor.prototype, protoProps); if (staticProps) LearnToggler__defineProperties(Constructor, staticProps); return Constructor; }

function LearnToggler__possibleConstructorReturn(self, call) { if (call && (LearnToggler__typeof(call) === "object" || typeof call === "function")) { return call; } return LearnToggler__assertThisInitialized(self); }

function LearnToggler__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function LearnToggler__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




function LearnIndex(props) {
  return external__react__default.a.createElement("div", {
    className: "jsx-1758312523" + " " + "col-sm-12 info-box"
  }, external__react__default.a.createElement("h1", {
    className: "jsx-1758312523"
  }, "Select a deck to study or create a new one to get started!"), external__react__default.a.createElement("a", {
    className: "jsx-1758312523"
  }, external__react__default.a.createElement("button", {
    onClick: props.onClick,
    className: "jsx-1758312523"
  }, "Create New Deck")), external__react__default.a.createElement(style__default.a, {
    styleId: "1758312523",
    css: [".info-box.jsx-1758312523{padding:30px;text-align:center;}"]
  }));
}

function DeckWizard(props) {
  return external__react__default.a.createElement("div", {
    className: "jsx-4146561568" + " " + "col-sm-12 deck-wizard"
  }, external__react__default.a.createElement("h1", {
    className: "jsx-4146561568"
  }, "Great! Let's start by adding words."), external__react__default.a.createElement(DeckCreator_DeckCreator, null), external__react__default.a.createElement("button", {
    id: "cancel",
    onClick: props.onClick,
    className: "jsx-4146561568" + " " + "btn btn-danger"
  }, "Return to Dashboard"), external__react__default.a.createElement(style__default.a, {
    styleId: "4146561568",
    css: [".deck-wizard.jsx-4146561568{text-align:center;}", "#cancel.jsx-4146561568{margin:20px;}"]
  }));
}

var LearnToggler_LearnToggler =
/*#__PURE__*/
function (_React$Component) {
  LearnToggler__inherits(LearnToggler, _React$Component);

  function LearnToggler(props) {
    var _this;

    LearnToggler__classCallCheck(this, LearnToggler);

    _this = LearnToggler__possibleConstructorReturn(this, (LearnToggler.__proto__ || Object.getPrototypeOf(LearnToggler)).call(this, props));
    _this.state = {
      createDeck: false
    };
    _this.createNewDeck = _this.createNewDeck.bind(LearnToggler__assertThisInitialized(_this));
    _this.returnToIndex = _this.returnToIndex.bind(LearnToggler__assertThisInitialized(_this));
    return _this;
  }

  LearnToggler__createClass(LearnToggler, [{
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
      return external__react__default.a.createElement("div", {
        id: "learn-container",
        className: "jsx-3222659047" + " " + "row justify-content-center"
      }, newDeck ? external__react__default.a.createElement(DeckWizard, {
        onClick: this.returnToIndex
      }) : external__react__default.a.createElement(LearnIndex, {
        onClick: this.createNewDeck
      }), external__react__default.a.createElement(style__default.a, {
        styleId: "3222659047",
        css: ["#learn-container.jsx-3222659047{margin-top:10vh;font-family:'Merriweather Sans',sans-serif;}"]
      }));
    }
  }]);

  return LearnToggler;
}(external__react__default.a.Component);


// CONCATENATED MODULE: ./pages/learn.js




var learn_Learn = function Learn(props) {
  return external__react__default.a.createElement(LearnLayout["a" /* default */], {
    name: "Stella"
  }, external__react__default.a.createElement(LearnToggler_LearnToggler, null));
};

/* harmony default export */ var learn = __webpack_exports__["default"] = (learn_Learn);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ })
/******/ ]);