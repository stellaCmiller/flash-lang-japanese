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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(4);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "react-dom"
var external__react_dom_ = __webpack_require__(8);
var external__react_dom__default = /*#__PURE__*/__webpack_require__.n(external__react_dom_);

// CONCATENATED MODULE: ./comps/authentication/LogIn.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var LogIn_LogIn =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LogIn, _React$Component);

  function LogIn(props) {
    var _this;

    _classCallCheck(this, LogIn);

    _this = _possibleConstructorReturn(this, (LogIn.__proto__ || Object.getPrototypeOf(LogIn)).call(this, props));
    _this.login = _this.login.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LogIn, [{
    key: "login",
    value: function login() {
      console.log("YEAH BRUH TIME FOR FUCKING AUTHENTICATION");
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "jsx-749420689" + " " + "modal-text"
      }, external__react__default.a.createElement("h3", {
        className: "jsx-749420689"
      }, "Welcome Back!"), external__react__default.a.createElement("form", {
        id: "login",
        onSubmit: this.login,
        action: "/login",
        method: "post",
        className: "jsx-749420689"
      }, "Please Enter your Username:", external__react__default.a.createElement("br", {
        className: "jsx-749420689"
      }), external__react__default.a.createElement("input", {
        type: "text",
        name: "username",
        className: "jsx-749420689" + " " + "form-control"
      }), external__react__default.a.createElement("br", {
        className: "jsx-749420689"
      }), external__react__default.a.createElement("br", {
        className: "jsx-749420689"
      }), "Please Enter your Password:", external__react__default.a.createElement("br", {
        className: "jsx-749420689"
      }), external__react__default.a.createElement("input", {
        type: "password",
        name: "password",
        className: "jsx-749420689" + " " + "form-control"
      }), external__react__default.a.createElement("br", {
        className: "jsx-749420689"
      }), external__react__default.a.createElement("br", {
        className: "jsx-749420689"
      }), external__react__default.a.createElement("input", {
        type: "Submit",
        value: "Log In",
        className: "jsx-749420689"
      })), external__react__default.a.createElement(style__default.a, {
        styleId: "749420689",
        css: ["#login.jsx-749420689{padding:10px;}"]
      }));
    }
  }]);

  return LogIn;
}(external__react__default.a.Component);


// CONCATENATED MODULE: ./comps/authentication/SignUp.js



function SignUp__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SignUp__typeof = function _typeof(obj) { return typeof obj; }; } else { SignUp__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SignUp__typeof(obj); }

function SignUp__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SignUp__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SignUp__createClass(Constructor, protoProps, staticProps) { if (protoProps) SignUp__defineProperties(Constructor.prototype, protoProps); if (staticProps) SignUp__defineProperties(Constructor, staticProps); return Constructor; }

function SignUp__possibleConstructorReturn(self, call) { if (call && (SignUp__typeof(call) === "object" || typeof call === "function")) { return call; } return SignUp__assertThisInitialized(self); }

function SignUp__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SignUp__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUp_SignUp =
/*#__PURE__*/
function (_React$Component) {
  SignUp__inherits(SignUp, _React$Component);

  function SignUp(props) {
    SignUp__classCallCheck(this, SignUp);

    return SignUp__possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this, props));
  }

  SignUp__createClass(SignUp, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "jsx-749420689" + " " + "modal-text"
      }, external__react__default.a.createElement("h3", {
        className: "jsx-749420689"
      }, "Get Ready to Learn!"), external__react__default.a.createElement("form", {
        id: "signup",
        action: "/Users",
        method: "post",
        className: "jsx-749420689"
      }, "Please Enter your Email:", external__react__default.a.createElement("br", {
        className: "jsx-749420689"
      }), external__react__default.a.createElement("input", {
        type: "text",
        name: "email",
        className: "jsx-749420689" + " " + "form-control"
      }), external__react__default.a.createElement("br", {
        className: "jsx-749420689"
      }), external__react__default.a.createElement("br", {
        className: "jsx-749420689"
      }), "Please Enter a Password:", external__react__default.a.createElement("br", {
        className: "jsx-749420689"
      }), external__react__default.a.createElement("input", {
        type: "password",
        name: "password",
        className: "jsx-749420689" + " " + "form-control"
      }), external__react__default.a.createElement("br", {
        className: "jsx-749420689"
      }), external__react__default.a.createElement("br", {
        className: "jsx-749420689"
      }), "Confirm Password: ", external__react__default.a.createElement("br", {
        className: "jsx-749420689"
      }), external__react__default.a.createElement("input", {
        type: "password",
        name: "password-confirm",
        className: "jsx-749420689" + " " + "form-control"
      }), external__react__default.a.createElement("br", {
        className: "jsx-749420689"
      }), external__react__default.a.createElement("br", {
        className: "jsx-749420689"
      }), external__react__default.a.createElement("input", {
        type: "Submit",
        value: "Enter",
        className: "jsx-749420689"
      })), external__react__default.a.createElement(style__default.a, {
        styleId: "749420689",
        css: ["#login.jsx-749420689{padding:10px;}"]
      }));
    }
  }]);

  return SignUp;
}(external__react__default.a.Component);


// CONCATENATED MODULE: ./comps/ModalContent.js



 //Modal box design borrowed from https://assortment.io/posts/accessible-modal-component-react-portals-part-1

function ModalContent(props) {
  return external__react_dom__default.a.createPortal(external__react__default.a.createElement("aside", {
    className: "c-modal-cover"
  }, external__react__default.a.createElement("div", {
    className: "c-modal"
  }, external__react__default.a.createElement("button", {
    className: "c-modal__close",
    "aria-label": "Close Modal",
    onClick: props.onClick
  }, external__react__default.a.createElement("span", {
    className: "u-hide-visually"
  }, "Close"), external__react__default.a.createElement("svg", {
    className: "c-modal__close-icon",
    viewBox: "0 0 40 40"
  }, external__react__default.a.createElement("path", {
    d: "M 10,10 L 30,30 M 30,10 L 10,30"
  }))), external__react__default.a.createElement("div", {
    className: "c-modal__body"
  }, props.value == "Log In" ? external__react__default.a.createElement(LogIn_LogIn, null) : external__react__default.a.createElement(SignUp_SignUp, null)))), document.body);
}
// CONCATENATED MODULE: ./comps/Modal.js


function Modal__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Modal__typeof = function _typeof(obj) { return typeof obj; }; } else { Modal__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Modal__typeof(obj); }

function Modal__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Modal__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Modal__createClass(Constructor, protoProps, staticProps) { if (protoProps) Modal__defineProperties(Constructor.prototype, protoProps); if (staticProps) Modal__defineProperties(Constructor, staticProps); return Constructor; }

function Modal__possibleConstructorReturn(self, call) { if (call && (Modal__typeof(call) === "object" || typeof call === "function")) { return call; } return Modal__assertThisInitialized(self); }

function Modal__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Modal__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



function ModalTrigger(props) {
  return external__react__default.a.createElement("a", {
    onClick: props.onClick
  }, props.TriggerValue);
} //The modal trigger text goes through this intermediate class before reach the Modal trigger
//Look into fixing this behavior, or integrating redux


var Modal_Modal =
/*#__PURE__*/
function (_React$Component) {
  Modal__inherits(Modal, _React$Component);

  function Modal(props) {
    var _this;

    Modal__classCallCheck(this, Modal);

    _this = Modal__possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));
    _this.state = {
      isOpen: false
    };
    _this.popModal = _this.popModal.bind(Modal__assertThisInitialized(_this));
    _this.closeModal = _this.closeModal.bind(Modal__assertThisInitialized(_this));
    return _this;
  }

  Modal__createClass(Modal, [{
    key: "popModal",
    value: function popModal() {
      this.setState({
        isOpen: true
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isOpen = this.state.isOpen;
      return external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement(ModalTrigger, {
        onClick: this.popModal,
        TriggerValue: this.props.TriggerValue
      }), isOpen && external__react__default.a.createElement(ModalContent, {
        value: this.props.TriggerValue,
        onClick: this.closeModal
      }));
    }
  }]);

  return Modal;
}(external__react__default.a.Component);


// CONCATENATED MODULE: ./comps/Header.js





var Header_Header = function Header() {
  return external__react__default.a.createElement("div", {
    id: "home-header",
    className: "jsx-3425156617"
  }, external__react__default.a.createElement("div", {
    id: "home-links",
    className: "jsx-3425156617"
  }, external__react__default.a.createElement(Modal_Modal, {
    TriggerValue: "Sign Up"
  }), external__react__default.a.createElement(Modal_Modal, {
    TriggerValue: "Log In"
  }), external__react__default.a.createElement(link__default.a, {
    href: "/learn"
  }, external__react__default.a.createElement("a", {
    className: "jsx-3425156617"
  }, "Learn")), external__react__default.a.createElement(link__default.a, {
    href: "/trial"
  }, external__react__default.a.createElement("a", {
    className: "jsx-3425156617"
  }, "Try it!"))), external__react__default.a.createElement(style__default.a, {
    styleId: "3425156617",
    css: ["#home-header.jsx-3425156617{background-color:#FF5F5F;}", "#home-links.jsx-3425156617{margin-left:10vw;padding:15px 0px 15px 0px;}"]
  }));
};

/* harmony default export */ var comps_Header = (Header_Header);
// EXTERNAL MODULE: ./comps/HtmlHead.js
var HtmlHead = __webpack_require__(2);

// CONCATENATED MODULE: ./comps/Footer.js




var Footer_SocialButtons = function SocialButtons() {
  return external__react__default.a.createElement("div", {
    id: "social-links",
    className: "jsx-369035459"
  }, external__react__default.a.createElement("img", {
    src: "../assets/GitHub-Mark-32px.png",
    alt: "Github",
    className: "jsx-369035459"
  }), external__react__default.a.createElement("img", {
    src: "../assets/In-2CRev-34px-R.png",
    alt: "LinkedIn",
    className: "jsx-369035459"
  }), external__react__default.a.createElement(style__default.a, {
    styleId: "369035459",
    css: ["img.jsx-369035459{padding:15px;}", "#social-links.jsx-369035459{display:inline-block;float:right;margin-right:10vw;}"]
  }));
};

var Footer_Footer = function Footer() {
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
    id: "footer",
    className: "jsx-143629053"
  }, external__react__default.a.createElement("div", {
    id: "footer-links",
    className: "jsx-143629053"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/dev"
  }, external__react__default.a.createElement("a", {
    className: "jsx-143629053"
  }, "Meet the Dev")), external__react__default.a.createElement(link__default.a, {
    href: "/bugs"
  }, external__react__default.a.createElement("a", {
    className: "jsx-143629053"
  }, "Bug Reporting"))), external__react__default.a.createElement(Footer_SocialButtons, null), external__react__default.a.createElement(style__default.a, {
    styleId: "143629053",
    css: ["#footer-links.jsx-143629053{display:inline-block;padding:15px 0px 15px 0px;margin-left:10vw;}", "a.jsx-143629053{color:white;margin-right:30px;}", "#footer.jsx-143629053{height:10vh;margin-top:20px;background-color:#FF5F5F;}"]
  })));
};

/* harmony default export */ var comps_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./page-layouts/Layout.js






var Layout_Layout = function Layout(props) {
  return external__react__default.a.createElement("div", {
    className: "jsx-3090540883"
  }, external__react__default.a.createElement(HtmlHead["a" /* default */], null), external__react__default.a.createElement(comps_Header, null), external__react__default.a.createElement("div", {
    className: "jsx-3090540883" + " " + "container1"
  }, props.children), external__react__default.a.createElement(comps_Footer, null), external__react__default.a.createElement(style__default.a, {
    styleId: "3090540883",
    css: [".container1.jsx-3090540883{width:80vw;margin:auto;margin-top:2vh;padding:10px;}"]
  }));
};

/* harmony default export */ var page_layouts_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_layouts_Layout__ = __webpack_require__(7);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__page_layouts_Layout__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-2591297414" + " " + "container jumbotron jumbotron-fluid"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    className: "jsx-2591297414" + " " + "display-4"
  }, "FlashLang \uD83D\uDDF2 Japanese"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    className: "jsx-2591297414" + " " + "lead"
  }, "Dynamic Flashcards for the Efficent Learner")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "info",
    className: "jsx-2591297414" + " " + "container"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-2591297414" + " " + "row"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-2591297414" + " " + "col-md-4"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    className: "jsx-2591297414"
  }, "Search for Translations"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    className: "jsx-2591297414"
  }, "Flashlang Japanese uses the open source dictionary database from the JMDict Project to automatically create your flashcards so you can spend more time studying and less time filling them out."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "../assets/magnifying_glass.png",
    className: "jsx-2591297414" + " " + "index-img"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-2591297414" + " " + "col-md-4"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    className: "jsx-2591297414"
  }, "Spaced Repetition Study"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    className: "jsx-2591297414"
  }, "Flashlang keeps track of when you need to study each flashcard for maximum retention. No more cramming!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "../assets/stopwatch-graphic.png",
    className: "jsx-2591297414" + " " + "index-img"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-2591297414" + " " + "col-md-4"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    className: "jsx-2591297414"
  }, "Track your Progress"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    className: "jsx-2591297414"
  }, "Watch your learning in real time as your card collection grows, and keep an eye out on the cards that consistently give you trouble."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "../assets/bar-chart.png",
    className: "jsx-2591297414" + " " + "index-img"
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2591297414",
    css: ["h1.jsx-2591297414{font-family:'Fugaz One',cursive;}", ".jumbotron.jsx-2591297414{height:50vh;background-color:#eee;}", ".jumbotron.jsx-2591297414 h1.jsx-2591297414,h2.jsx-2591297414{margin-left:20px;}", "#info.jsx-2591297414{margin-top:20px;}"]
  }));
});

/***/ })
/******/ ]);