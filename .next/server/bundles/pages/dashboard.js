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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
/* 5 */,
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_layouts_LearnLayout__ = __webpack_require__(6);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__page_layouts_LearnLayout__["a" /* default */], {
    name: "Stella"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-3957969790" + " " + "container-fluid"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-3957969790" + " " + "row"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "header-box",
    className: "jsx-3957969790" + " " + "col-12 stat-box"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    className: "jsx-3957969790"
  }, "Your Study Statistics"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-3957969790" + " " + "row"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-3957969790" + " " + "col-12 stat-box"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    className: "jsx-3957969790"
  }, "Cards per Study Level"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("table", {
    className: "jsx-3957969790" + " " + "table"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("thead", {
    className: "jsx-3957969790"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("tr", {
    className: "jsx-3957969790"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("th", {
    scope: "col",
    className: "jsx-3957969790"
  }, "1"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("th", {
    scope: "col",
    className: "jsx-3957969790"
  }, "2"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("th", {
    scope: "col",
    className: "jsx-3957969790"
  }, "3"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("th", {
    scope: "col",
    className: "jsx-3957969790"
  }, "4"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("th", {
    scope: "col",
    className: "jsx-3957969790"
  }, "5"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("th", {
    scope: "col",
    className: "jsx-3957969790"
  }, "6"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("th", {
    scope: "col",
    className: "jsx-3957969790"
  }, "7"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("th", {
    scope: "col",
    className: "jsx-3957969790"
  }, "8"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("tbody", {
    className: "jsx-3957969790"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("tr", {
    className: "jsx-3957969790"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
    className: "jsx-3957969790"
  }, "23"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
    className: "jsx-3957969790"
  }, "45"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
    className: "jsx-3957969790"
  }, "12"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
    className: "jsx-3957969790"
  }, "67"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
    className: "jsx-3957969790"
  }, "10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
    className: "jsx-3957969790"
  }, "45"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
    className: "jsx-3957969790"
  }, "26"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
    className: "jsx-3957969790"
  }, "3")))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-3957969790" + " " + "row"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-3957969790" + " " + "col-6 stat-box"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    className: "jsx-3957969790"
  }, "Most Missed Cards"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    className: "jsx-3957969790"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    className: "jsx-3957969790"
  }, "Yeet"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    className: "jsx-3957969790"
  }, "Blorp"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    className: "jsx-3957969790"
  }, "Nope"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "jsx-3957969790" + " " + "col-6 stat-box"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    className: "jsx-3957969790"
  }, "Most Recent Cards"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    className: "jsx-3957969790"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    className: "jsx-3957969790"
  }, "hella"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    className: "jsx-3957969790"
  }, "litty"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    className: "jsx-3957969790"
  }, "titty")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3957969790",
    css: ["#header-box.jsx-3957969790{height:20vh;text-align:start;}", ".stat-box.jsx-3957969790{text-align:center;background-color:#eee;border:1px solid black;border-radius:10px;margin-top:20px;}"]
  })));
});

/***/ })
/******/ ]);