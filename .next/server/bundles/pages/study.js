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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
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
/* 4 */,
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
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),
/* 19 */
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

// CONCATENATED MODULE: ./helpers.js
//Calculates the number of hours between two date objects
function hoursBetween(date1, date2) {
  var result = (date1.getTime() - date2.getTime()) / 1000 / 60 / 60;
  return result;
} //Returns the number of hours/minutes/days until the card is due for study
//Return of 0 means the card is due for study immediately

function dueForStudy(SRS, lastStudied) {
  var now = new Date();
  var lastStudy = new Date(lastStudied);
  var hoursElapsed = hoursBetween(now, lastStudy);

  switch (SRS) {
    case 1:
      return 0;

    case 2:
      return hoursElapsed > 3 ? 0 : 3 - hoursElapsed;

    case 3:
      return hoursElapsed > 12 ? 0 : 12 - hoursElapsed;

    case 4:
      return hoursElapsed > 72 ? 0 : 72 - hoursElapsed;
    // 3 days

    case 5:
      return hoursElapsed > 168 ? 0 : 168 - hoursElapsed;
    // 1 week

    case 6:
      return hoursElapsed > 504 ? 0 : 504 - hoursElapsed;
    // 3 weeks

    case 7:
      return hoursElapsed > 1008 ? 0 : 1008 - hoursElapsed;
    // 1.5 months

    case 8:
      return hoursElapsed > 2016 ? 0 : 2016 - hoursElapsed;
    // 3 months
  }
} // Returns a random permutation of a given array in O(n) time

function fisherYatesShuffle(arr) {
  var currentIndex = arr.length,
      randIndex,
      temp;

  while (currentIndex !== 0) {
    randIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--; //must occur before shift

    temp = arr[currentIndex];
    arr[currentIndex] = arr[randIndex];
    arr[randIndex] = temp;
  }

  return arr;
}
// CONCATENATED MODULE: ./comps/FlashCard.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




function StudyAlert(props) {
  if (props.dueIn == 0) {
    return external__react__default.a.createElement("p", null, "Due for Review");
  } else {
    return external__react__default.a.createElement("p", null, "Due in ", props.dueInRounded, " ", props.units);
  }
}

var FlashCard_FlashCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FlashCard, _React$Component);

  function FlashCard(props) {
    var _this;

    _classCallCheck(this, FlashCard);

    _this = _possibleConstructorReturn(this, (FlashCard.__proto__ || Object.getPrototypeOf(FlashCard)).call(this, props));
    _this.state = {
      study: false,
      dueIn: null,
      dueInRounded: null,
      units: "hours"
    };
    return _this;
  } //logic that determines if a flashcard is due for study based and displays time until study in a reasonable format


  _createClass(FlashCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dueIn = dueForStudy(this.props.SRS, this.props.lastStudied);
      var rounded = Math.round(dueIn);

      if (dueIn > 730) {
        rounded = Math.round(rounded / 24 / 7 / 4); // change to months when over 730 hours

        this.setState({
          units: "months"
        });
      } else if (dueIn > 168) {
        rounded = Math.round(rounded / 24 / 7); //change to weeks when over 168 hours

        this.setState({
          units: "weeks"
        });
      } else if (dueIn > 48) {
        rounded = Math.round(rounded / 24); //change to days when over 24 hours

        this.setState({
          units: "days"
        });
      } else if (dueIn < 1) {
        rounded = Math.round(rounded * 60);
        this.setState({
          units: "minutes"
        }); //change to minutes when under 1 hour
      }

      if (dueIn === 0) {
        this.setState({
          study: true
        });
      } else {
        this.setState({
          dueIn: dueIn
        });
        this.setState({
          dueInRounded: rounded
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var goStudy = this.state.study ? '#ff3d4e' : '#888888';
      return external__react__default.a.createElement("div", {
        className: style__default.a.dynamic([["509436356", [goStudy]]]) + " " + "flash-card"
      }, external__react__default.a.createElement("p", {
        className: style__default.a.dynamic([["509436356", [goStudy]]])
      }, this.props.english), external__react__default.a.createElement("p", {
        className: style__default.a.dynamic([["509436356", [goStudy]]])
      }, this.props.reading), external__react__default.a.createElement("p", {
        className: style__default.a.dynamic([["509436356", [goStudy]]])
      }, this.props.kanji), this.state.study ? external__react__default.a.createElement(StudyAlert, {
        dueIn: 0
      }) : external__react__default.a.createElement(StudyAlert, {
        dueInRounded: this.state.dueInRounded,
        dueIn: this.state.dueIn,
        units: this.state.units
      }), external__react__default.a.createElement(style__default.a, {
        styleId: "509436356",
        css: [".flash-card.__jsx-style-dynamic-selector{display:inline-block;text-align:center;font-size:16pt;margin:10px 5px 10px 5px;min-width:200px;min-height:150px;padding:10px;background-color:#eee;border:1px solid black;box-shadow:5px 10px 18px ".concat(goStudy, ";}"), ".flash-card.__jsx-style-dynamic-selector:hover{margin-top:5px;}"],
        dynamic: [goStudy]
      }));
    }
  }]);

  return FlashCard;
}(external__react__default.a.Component);


// CONCATENATED MODULE: ./comps/StudyFlashCard.js



function StudyFlashCard__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { StudyFlashCard__typeof = function _typeof(obj) { return typeof obj; }; } else { StudyFlashCard__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return StudyFlashCard__typeof(obj); }

function StudyFlashCard__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StudyFlashCard__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StudyFlashCard__createClass(Constructor, protoProps, staticProps) { if (protoProps) StudyFlashCard__defineProperties(Constructor.prototype, protoProps); if (staticProps) StudyFlashCard__defineProperties(Constructor, staticProps); return Constructor; }

function StudyFlashCard__possibleConstructorReturn(self, call) { if (call && (StudyFlashCard__typeof(call) === "object" || typeof call === "function")) { return call; } return StudyFlashCard__assertThisInitialized(self); }

function StudyFlashCard__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function StudyFlashCard__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StudyFlashCard_StudyFlashCard =
/*#__PURE__*/
function (_React$Component) {
  StudyFlashCard__inherits(StudyFlashCard, _React$Component);

  function StudyFlashCard(props) {
    StudyFlashCard__classCallCheck(this, StudyFlashCard);

    return StudyFlashCard__possibleConstructorReturn(this, (StudyFlashCard.__proto__ || Object.getPrototypeOf(StudyFlashCard)).call(this, props));
  }

  StudyFlashCard__createClass(StudyFlashCard, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "jsx-1053112654" + " " + "big-card col-8"
      }, external__react__default.a.createElement("h3", {
        className: "jsx-1053112654"
      }, this.props.reading), external__react__default.a.createElement("h3", {
        className: "jsx-1053112654"
      }, this.props.kanji), external__react__default.a.createElement(style__default.a, {
        styleId: "1053112654",
        css: [".big-card.jsx-1053112654{padding:10px;text-align:center;margin-top:10vh;background-color:#eee;min-height:30vh;}", "h3.jsx-1053112654{font-size:600%;}"]
      }));
    }
  }]);

  return StudyFlashCard;
}(external__react__default.a.Component);


// CONCATENATED MODULE: ./comps/StudyUtility.js



function StudyUtility__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { StudyUtility__typeof = function _typeof(obj) { return typeof obj; }; } else { StudyUtility__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return StudyUtility__typeof(obj); }

function StudyUtility__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StudyUtility__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StudyUtility__createClass(Constructor, protoProps, staticProps) { if (protoProps) StudyUtility__defineProperties(Constructor.prototype, protoProps); if (staticProps) StudyUtility__defineProperties(Constructor, staticProps); return Constructor; }

function StudyUtility__possibleConstructorReturn(self, call) { if (call && (StudyUtility__typeof(call) === "object" || typeof call === "function")) { return call; } return StudyUtility__assertThisInitialized(self); }

function StudyUtility__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function StudyUtility__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var StudyUtility_FinishedSession = function FinishedSession(props) {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement("h3", null, "Congrats! You're finished studying this deck for now."), external__react__default.a.createElement("button", null, "Return to Dashboard"));
};

var StudyUtility_AnswerForm = function AnswerForm(props) {
  return external__react__default.a.createElement("form", {
    onSubmit: props.onSubmit,
    className: "jsx-907657668"
  }, external__react__default.a.createElement("label", {
    className: "jsx-907657668"
  }, "Enter the English word for this reading: "), external__react__default.a.createElement("input", {
    type: "text",
    onChange: props.onChange,
    className: "jsx-907657668"
  }), external__react__default.a.createElement("input", {
    type: "Submit",
    value: "Enter",
    className: "jsx-907657668"
  }), external__react__default.a.createElement(style__default.a, {
    styleId: "907657668",
    css: ["form.jsx-907657668{margin-top:20px;padding:10px;}"]
  }));
}; //Contains nearly all of the logic for studying cards and managing SRS levels


var StudyUtility_StudyUtility =
/*#__PURE__*/
function (_React$Component) {
  StudyUtility__inherits(StudyUtility, _React$Component);

  function StudyUtility(props) {
    var _this;

    StudyUtility__classCallCheck(this, StudyUtility);

    _this = StudyUtility__possibleConstructorReturn(this, (StudyUtility.__proto__ || Object.getPrototypeOf(StudyUtility)).call(this, props));
    _this.state = {
      studyArray: [],
      numCards: 0,
      currentIndex: 0,
      answer: '',
      finished: false
    };
    _this.loadStudyDeck = _this.loadStudyDeck.bind(StudyUtility__assertThisInitialized(_this));
    _this.checkAnswer = _this.checkAnswer.bind(StudyUtility__assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(StudyUtility__assertThisInitialized(_this));
    _this.updateCardStatus = _this.updateCardStatus.bind(StudyUtility__assertThisInitialized(_this));
    return _this;
  } //Stores the deck for study immediately on component load


  StudyUtility__createClass(StudyUtility, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadStudyDeck();
    } //Dynamically store the user answer as it's being typed

  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        answer: event.target.value
      });
    }
  }, {
    key: "checkAnswer",
    value: function checkAnswer(event) {
      event.preventDefault();
      event.target.reset();
      var currentCard = this.state.studyArray[this.state.currentIndex];
      var userInput = this.state.answer.toLowerCase();
      var answer = this.state.studyArray[this.state.currentIndex].english.toLowerCase();
      var SRS = currentCard.SRSLevel;

      if (userInput === answer) {
        //Increase SRS level when correct, unless it's at level 8
        SRS = SRS < 8 ? SRS + 1 : SRS;
      } else {
        //Decrease SRS level when wrong, unless it's at level 1
        SRS = SRS > 1 ? SRS - 1 : SRS;
      }

      this.updateCardStatus(currentCard, SRS);

      if (this.state.numCards - 1 > this.state.currentIndex) {
        //Continue studying with the next card
        this.setState({
          currentIndex: this.state.currentIndex + 1
        });
      } else {
        //Else display finish message and redirect to main study page
        this.setState({
          finished: true
        });
      }
    } //Sends put request to update the SRS level of the current card

  }, {
    key: "updateCardStatus",
    value: function updateCardStatus(card, newSRS) {
      external__isomorphic_unfetch__default()('//localhost:3000/decks', {
        method: 'PUT',
        body: JSON.stringify({
          'ID': card._id,
          'SRS': newSRS
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        console.log(res);
      });
    } //Out of all of the cards in the deck, only adds the ones due for study to the current study deck in random order

  }, {
    key: "loadStudyDeck",
    value: function loadStudyDeck() {
      var data = this.props.cards;
      var toStudy = data.filter(function (card) {
        var dueIn = dueForStudy(card.SRSLevel, card.lastStudied);

        if (dueIn == 0) {
          return true;
        }
      });
      console.log(toStudy);
      this.setState({
        studyArray: fisherYatesShuffle(toStudy)
      });
      this.setState({
        numCards: toStudy.length
      });
    }
  }, {
    key: "render",
    value: function render() {
      var currentCard = this.state.studyArray[this.state.currentIndex];
      return external__react__default.a.createElement("div", {
        className: "container-fluid"
      }, external__react__default.a.createElement("div", {
        className: "row justify-content-center align-items-center"
      }, // Necessary because componentDidMount renders twice; setting props to undefined breaks things
      currentCard ? external__react__default.a.createElement(StudyFlashCard_StudyFlashCard, {
        kanji: currentCard.kanji,
        reading: currentCard.reading,
        english: currentCard.english
      }) : null), external__react__default.a.createElement("div", {
        className: "row justify-content-center"
      }, this.state.finished ? external__react__default.a.createElement(StudyUtility_FinishedSession, null) : external__react__default.a.createElement(StudyUtility_AnswerForm, {
        onChange: this.handleChange,
        onSubmit: this.checkAnswer
      })));
    }
  }]);

  return StudyUtility;
}(external__react__default.a.Component);


// CONCATENATED MODULE: ./comps/DeckViewer.js



function DeckViewer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DeckViewer__typeof = function _typeof(obj) { return typeof obj; }; } else { DeckViewer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DeckViewer__typeof(obj); }

function DeckViewer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DeckViewer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DeckViewer__createClass(Constructor, protoProps, staticProps) { if (protoProps) DeckViewer__defineProperties(Constructor.prototype, protoProps); if (staticProps) DeckViewer__defineProperties(Constructor, staticProps); return Constructor; }

function DeckViewer__possibleConstructorReturn(self, call) { if (call && (DeckViewer__typeof(call) === "object" || typeof call === "function")) { return call; } return DeckViewer__assertThisInitialized(self); }

function DeckViewer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function DeckViewer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





function DeckInfo(props) {
  return external__react__default.a.createElement("div", {
    className: "jsx-1624224183" + " " + "deck-info"
  }, external__react__default.a.createElement("h3", {
    className: "jsx-1624224183"
  }, "Viewing \"Deck\" with ", props.length, " Cards"), external__react__default.a.createElement("button", {
    onClick: props.onClick,
    className: "jsx-1624224183"
  }, "Study Cards Due"), external__react__default.a.createElement(style__default.a, {
    styleId: "1624224183",
    css: [".deck-info.jsx-1624224183{margin:10px;padding:10px;}"]
  }));
}

var DeckViewer_DeckViewer =
/*#__PURE__*/
function (_React$Component) {
  DeckViewer__inherits(DeckViewer, _React$Component);

  function DeckViewer(props) {
    var _this;

    DeckViewer__classCallCheck(this, DeckViewer);

    _this = DeckViewer__possibleConstructorReturn(this, (DeckViewer.__proto__ || Object.getPrototypeOf(DeckViewer)).call(this, props));
    _this.state = {
      cards: [],
      studyMode: false
    };
    _this.loadCards = _this.loadCards.bind(DeckViewer__assertThisInitialized(_this));
    _this.studyAll = _this.studyAll.bind(DeckViewer__assertThisInitialized(_this));
    return _this;
  }

  DeckViewer__createClass(DeckViewer, [{
    key: "studyAll",
    value: function studyAll() {
      this.setState({
        studyMode: true
      });
    } //load all cards upon entry to the deck page

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadCards();
    } //Route to be changed to /users/{userid}/decks/:deckid

  }, {
    key: "loadCards",
    value: function loadCards() {
      var that = this;
      external__isomorphic_unfetch__default()('//localhost:3000/decks').then(function (response) {
        if (response.status >= 400) {
          throw new Error("Something went wrong, that's all I know :(");
        }

        console.log("Cards Found!");
        response.json().then(function (data) {
          that.setState({
            cards: data,
            test: false
          });
        });
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var rawData = this.state.cards;
      var cardCollection;
      cardCollection = rawData.map(function (card) {
        return external__react__default.a.createElement(FlashCard_FlashCard, {
          reading: card.reading,
          english: card.english,
          kanji: card.kanji,
          lastStudied: card.lastStudied,
          SRS: card.SRSLevel
        });
      });
      return external__react__default.a.createElement("div", {
        className: "container-fluid"
      }, this.state.studyMode ? null : external__react__default.a.createElement(DeckInfo, {
        onClick: this.studyAll,
        length: this.state.cards.length
      }), this.state.studyMode ? external__react__default.a.createElement(StudyUtility_StudyUtility, {
        cards: rawData
      }) : cardCollection);
    }
  }]);

  return DeckViewer;
}(external__react__default.a.Component);


// CONCATENATED MODULE: ./pages/study.js




var study_study = function study() {
  return external__react__default.a.createElement(LearnLayout["a" /* default */], {
    name: "Stella"
  }, external__react__default.a.createElement(DeckViewer_DeckViewer, null));
};

/* harmony default export */ var pages_study = __webpack_exports__["default"] = (study_study);

/***/ })
/******/ ]);