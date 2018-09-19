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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./comps/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "C:\\Users\\stell\\Desktop\\code\\flash-lang\\comps\\Footer.js";




var SocialButtons = function SocialButtons() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "social-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-1215747297"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "https://github.com/stellaCmiller/flash-lang-japanese",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-1215747297"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "../assets/GitHub-Mark-32px.png",
    alt: "Github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-1215747297"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/stellacmiller512/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-1215747297"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "../assets/In-2CRev-34px-R.png",
    alt: "LinkedIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-1215747297"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1215747297",
    css: "img.jsx-1215747297{padding:15px;}#social-links.jsx-1215747297{display:inline-block;float:right;margin-right:10vw;}@media only screen and (max-width:640px){#social-links.jsx-1215747297{display:block;width:100%;text-align:center;margin:auto;background-color:#FF5F5F;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzXFxGb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVW9CLEFBRzhCLEFBR1EsQUFPSCxhQVR0QixDQVVtQixPQVBILElBUVUsUUFQSixVQVFGLFFBUHBCLElBUWlDLHlCQUM3QiIsImZpbGUiOiJjb21wc1xcRm9vdGVyLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcc3RlbGxcXERlc2t0b3BcXGNvZGVcXGZsYXNoLWxhbmciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgU29jaWFsQnV0dG9ucyA9ICgpID0+IChcclxuICAgIDxkaXYgaWQ9XCJzb2NpYWwtbGlua3NcIj5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3N0ZWxsYUNtaWxsZXIvZmxhc2gtbGFuZy1qYXBhbmVzZVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9HaXRIdWItTWFyay0zMnB4LnBuZ1wiIGFsdD1cIkdpdGh1YlwiLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zdGVsbGFjbWlsbGVyNTEyL1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9Jbi0yQ1Jldi0zNHB4LVIucG5nXCIgYWx0PVwiTGlua2VkSW5cIi8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3NvY2lhbC1saW5rc3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTB2dztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCl7XHJcbiAgICAgICAgICAgICAgICAjc29jaWFsLWxpbmtze1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNUY1RjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJmb290ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1saW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPjxhPkFib3V0IHRoaXMgUHJvamVjdDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2J1Z3NcIj48YT5CdWcgUmVwb3J0aW5nPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxTb2NpYWxCdXR0b25zIC8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICNmb290ZXItbGlua3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTB2dztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNmb290ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY1RjVGO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdfQ== */\n/*@ sourceURL=comps\\Footer.js */"
  }));
};

var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    className: "jsx-348883337"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "footer-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    className: "jsx-348883337"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    className: "jsx-348883337"
  }, "About this Project")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/bugs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    className: "jsx-348883337"
  }, "Bug Reporting"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(SocialButtons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "348883337",
    css: "#footer-links.jsx-348883337{display:inline-block;padding:15px 0px 15px 0px;margin-left:10vw;}a.jsx-348883337{color:white;margin-right:30px;}#footer.jsx-348883337{min-height:10vh;margin-top:20px;background-color:#FF5F5F;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzXFxGb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUN3QixBQUcwQyxBQU1ULEFBS0ksWUFKRSxJQUtGLEtBWFUsU0FPOUIsRUFLNkIsZUFYUixVQVlILE9BWGxCLGlEQVlBIiwiZmlsZSI6ImNvbXBzXFxGb290ZXIuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxzdGVsbFxcRGVza3RvcFxcY29kZVxcZmxhc2gtbGFuZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBTb2NpYWxCdXR0b25zID0gKCkgPT4gKFxyXG4gICAgPGRpdiBpZD1cInNvY2lhbC1saW5rc1wiPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc3RlbGxhQ21pbGxlci9mbGFzaC1sYW5nLWphcGFuZXNlXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL0dpdEh1Yi1NYXJrLTMycHgucG5nXCIgYWx0PVwiR2l0aHViXCIvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3N0ZWxsYWNtaWxsZXI1MTIvXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL0luLTJDUmV2LTM0cHgtUi5wbmdcIiBhbHQ9XCJMaW5rZWRJblwiLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjc29jaWFsLWxpbmtze1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHZ3O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KXtcclxuICAgICAgICAgICAgICAgICNzb2NpYWwtbGlua3N7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY1RjVGO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+PGE+QWJvdXQgdGhpcyBQcm9qZWN0PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYnVnc1wiPjxhPkJ1ZyBSZXBvcnRpbmc8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFNvY2lhbEJ1dHRvbnMgLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgI2Zvb3Rlci1saW5rcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMHB4IDE1cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI2Zvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTB2aDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjVGNUY7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7Il19 */\n/*@ sourceURL=comps\\Footer.js */"
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./comps/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Modal__ = __webpack_require__("./comps/Modal.js");
var _jsxFileName = "C:\\Users\\stell\\Desktop\\code\\flash-lang\\comps\\Header.js";





var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "home-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-3425156617"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "home-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-3425156617"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-3425156617"
  }, "Home")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Modal__["a" /* default */], {
    TriggerValue: "Sign Up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Modal__["a" /* default */], {
    TriggerValue: "Log In",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/learn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-3425156617"
  }, "Learn"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3425156617",
    css: "#home-header.jsx-3425156617{background-color:#FF5F5F;}#home-links.jsx-3425156617{margin-left:10vw;padding:15px 0px 15px 0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWdCLEFBR3NDLEFBSVIsaUJBQ1MsUUFKNUIsa0JBS0EiLCJmaWxlIjoiY29tcHNcXEhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXHN0ZWxsXFxEZXNrdG9wXFxjb2RlXFxmbGFzaC1sYW5nIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxyXG4gIDxkaXYgaWQ9XCJob21lLWhlYWRlclwiPlxyXG4gICAgPGRpdiBpZD1cImhvbWUtbGlua3NcIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YT5Ib21lPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxNb2RhbCBUcmlnZ2VyVmFsdWU9XCJTaWduIFVwXCIgLz5cclxuICAgICAgPE1vZGFsIFRyaWdnZXJWYWx1ZT1cIkxvZyBJblwiIC8+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvbGVhcm5cIj5cclxuICAgICAgICA8YT5MZWFybjwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAjaG9tZS1oZWFkZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY1RjVGO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICNob21lLWxpbmtzIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwdnc7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMHB4IDE1cHggMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICBcclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iXX0= */\n/*@ sourceURL=comps\\Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

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

/***/ "./comps/Modal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ModalContent__ = __webpack_require__("./comps/ModalContent.js");
var _jsxFileName = "C:\\Users\\stell\\Desktop\\code\\flash-lang\\comps\\Modal.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



function ModalTrigger(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, props.TriggerValue);
} //The modal trigger text goes through this intermediate class before reach the Modal trigger
//Look into fixing this behavior, or integrating redux


var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));
    _this.state = {
      isOpen: false
    };
    _this.popModal = _this.popModal.bind(_assertThisInitialized(_this));
    _this.closeModal = _this.closeModal.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Modal, [{
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ModalTrigger, {
        onClick: this.popModal,
        TriggerValue: this.props.TriggerValue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), isOpen && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ModalContent__["a" /* default */], {
        value: this.props.TriggerValue,
        onClick: this.closeModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }));
    }
  }]);

  return Modal;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./comps/ModalContent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ModalContent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_LogIn__ = __webpack_require__("./comps/authentication/LogIn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_SignUp__ = __webpack_require__("./comps/authentication/SignUp.js");
var _jsxFileName = "C:\\Users\\stell\\Desktop\\code\\flash-lang\\comps\\ModalContent.js";



 //Modal box design borrowed from https://assortment.io/posts/accessible-modal-component-react-portals-part-1

function ModalContent(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.createPortal(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("aside", {
    className: "c-modal-cover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "c-modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: "c-modal__close",
    "aria-label": "Close Modal",
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "u-hide-visually",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Close"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    className: "c-modal__close-icon",
    viewBox: "0 0 40 40",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M 10,10 L 30,30 M 30,10 L 10,30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "c-modal__body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, props.value == "Log In" ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__authentication_LogIn__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__authentication_SignUp__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })))), document.body);
}

/***/ }),

/***/ "./comps/authentication/LogIn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogIn; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\stell\\Desktop\\code\\flash-lang\\comps\\authentication\\LogIn.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var LogIn =
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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-749420689" + " " + "modal-text"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-749420689"
      }, "Welcome Back!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        id: "login",
        onSubmit: this.login,
        action: "/login",
        method: "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-749420689"
      }, "Please Enter your Username:", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-749420689"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        name: "username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-749420689" + " " + "form-control"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-749420689"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-749420689"
      }), "Please Enter your Password:", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-749420689"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "password",
        name: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-749420689" + " " + "form-control"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-749420689"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-749420689"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "Submit",
        value: "Log In",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-749420689"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "749420689",
        css: "#login.jsx-749420689{padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzXFxhdXRoZW50aWNhdGlvblxcTG9nSW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUI0QixBQUdzQyxhQUNqQiIsImZpbGUiOiJjb21wc1xcYXV0aGVudGljYXRpb25cXExvZ0luLmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcc3RlbGxcXERlc2t0b3BcXGNvZGVcXGZsYXNoLWxhbmciLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dJbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMubG9naW4gPSB0aGlzLmxvZ2luLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIllFQUggQlJVSCBUSU1FIEZPUiBGVUNLSU5HIEFVVEhFTlRJQ0FUSU9OXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+V2VsY29tZSBCYWNrITwvaDM+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImxvZ2luXCIgb25TdWJtaXQ9e3RoaXMubG9naW59IGFjdGlvbj1cIi9sb2dpblwiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgRW50ZXIgeW91ciBVc2VybmFtZTo8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+PGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgUGxlYXNlIEVudGVyIHlvdXIgUGFzc3dvcmQ6PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiLz48YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIlN1Ym1pdFwiIHZhbHVlPVwiTG9nIEluXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAjbG9naW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=comps\\authentication\\LogIn.js */"
      }));
    }
  }]);

  return LogIn;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./comps/authentication/SignUp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\stell\\Desktop\\code\\flash-lang\\comps\\authentication\\SignUp.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SignUp, _React$Component);

  function SignUp(props) {
    _classCallCheck(this, SignUp);

    return _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this, props));
  }

  _createClass(SignUp, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        className: "jsx-749420689" + " " + "modal-text"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        className: "jsx-749420689"
      }, "Get Ready to Learn!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        id: "signup",
        action: "/Users",
        method: "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        className: "jsx-749420689"
      }, "Please Enter your Email:", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        className: "jsx-749420689"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        name: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-749420689" + " " + "form-control"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-749420689"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-749420689"
      }), "Please Enter a Password:", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-749420689"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "password",
        name: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-749420689" + " " + "form-control"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-749420689"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-749420689"
      }), "Confirm Password: ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-749420689"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "password",
        name: "password-confirm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-749420689" + " " + "form-control"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-749420689"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-749420689"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "Submit",
        value: "Enter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-749420689"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "749420689",
        css: "#login.jsx-749420689{padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBzXFxhdXRoZW50aWNhdGlvblxcU2lnblVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCNEIsQUFHc0MsYUFDakIiLCJmaWxlIjoiY29tcHNcXGF1dGhlbnRpY2F0aW9uXFxTaWduVXAuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxzdGVsbFxcRGVza3RvcFxcY29kZVxcZmxhc2gtbGFuZyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25VcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+R2V0IFJlYWR5IHRvIExlYXJuITwvaDM+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInNpZ251cFwiIGFjdGlvbj1cIi9Vc2Vyc1wiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgRW50ZXIgeW91ciBFbWFpbDo8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+PGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgUGxlYXNlIEVudGVyIGEgUGFzc3dvcmQ6PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiLz48YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICBDb25maXJtIFBhc3N3b3JkOiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkLWNvbmZpcm1cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+PGJyIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJTdWJtaXRcIiB2YWx1ZT1cIkVudGVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAjbG9naW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=comps\\authentication\\SignUp.js */"
      }));
    }
  }]);

  return SignUp;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./page-layouts/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comps_Header__ = __webpack_require__("./comps/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comps_HtmlHead__ = __webpack_require__("./comps/HtmlHead.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comps_Footer__ = __webpack_require__("./comps/Footer.js");
var _jsxFileName = "C:\\Users\\stell\\Desktop\\code\\flash-lang\\page-layouts\\Layout.js";






var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-3090540883"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__comps_HtmlHead__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__comps_Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-3090540883" + " " + "container1"
  }, props.children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__comps_Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3090540883",
    css: ".container1.jsx-3090540883{width:80vw;margin:auto;margin-top:2vh;padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtbGF5b3V0c1xcTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlnQixBQUdvQixXQUNDLFlBQ0csZUFDRixhQUNmIiwiZmlsZSI6InBhZ2UtbGF5b3V0c1xcTGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkM6XFxVc2Vyc1xcc3RlbGxcXERlc2t0b3BcXGNvZGVcXGZsYXNoLWxhbmciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBzL0hlYWRlcidcclxuaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcHMvSHRtbEhlYWQnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcHMvRm9vdGVyJ1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxIZWFkLz5cclxuICAgIDxIZWFkZXIgLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyMVwiPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICAgIDxGb290ZXIgLz5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmNvbnRhaW5lcjEge1xyXG4gICAgICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgfVxyXG4gICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dCJdfQ== */\n/*@ sourceURL=page-layouts\\Layout.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_layouts_Layout__ = __webpack_require__("./page-layouts/Layout.js");
var _jsxFileName = "C:\\Users\\stell\\Desktop\\code\\flash-lang\\pages\\index.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__page_layouts_Layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-3559332963" + " " + "container jumbotron jumbotron-fluid"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-3559332963" + " " + "display-4"
  }, "FlashLang \uD83D\uDDF2 Japanese"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-3559332963" + " " + "lead"
  }, "Dynamic Flashcards for the Efficent Learner")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-3559332963" + " " + "container"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-3559332963" + " " + "row"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-3559332963" + " " + "col-md-4"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-3559332963"
  }, "Search for Translations"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-3559332963"
  }, "Flashlang Japanese uses the open source dictionary database from the JMDict Project to automatically create your flashcards so you can spend more time studying and less time filling them out."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "../assets/magnifying_glass.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-3559332963" + " " + "index-img"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: "jsx-3559332963" + " " + "col-md-4"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: "jsx-3559332963"
  }, "Spaced Repetition Study"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    className: "jsx-3559332963"
  }, "Flashlang keeps track of when you need to study each flashcard for maximum retention. No more cramming!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "../assets/stopwatch-graphic.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: "jsx-3559332963" + " " + "index-img"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-3559332963" + " " + "col-md-4"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-3559332963"
  }, "Track your Progress"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    className: "jsx-3559332963"
  }, "Watch your learning in real time as your card collection grows, and keep an eye out on the cards that consistently give you trouble."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "../assets/bar-chart.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    className: "jsx-3559332963" + " " + "index-img"
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3559332963",
    css: "h1.jsx-3559332963{font-family:'Fugaz One',cursive;font-size:12vmin;}.jumbotron.jsx-3559332963{height:50vh;background-color:#eee;}.jumbotron.jsx-3559332963 h1.jsx-3559332963,h2.jsx-3559332963{margin-left:20px;}#info.jsx-3559332963{margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQmdCLEFBRzBDLEFBS3JCLEFBS0ssQUFJRCxZQVJNLElBU3hCLENBSkEsZUFWbUIsRUFNbkIsZUFMQSIsImZpbGUiOiJwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxzdGVsbFxcRGVza3RvcFxcY29kZVxcZmxhc2gtbGFuZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vcGFnZS1sYXlvdXRzL0xheW91dCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICA8TGF5b3V0PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIganVtYm90cm9uIGp1bWJvdHJvbi1mbHVpZFwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00XCI+Rmxhc2hMYW5nIPCfl7IgSmFwYW5lc2U8L2gxPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwibGVhZFwiPkR5bmFtaWMgRmxhc2hjYXJkcyBmb3IgdGhlIEVmZmljZW50IExlYXJuZXI8L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGlkPVwiaW5mb1wiIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgIDxoMz5TZWFyY2ggZm9yIFRyYW5zbGF0aW9uczwvaDM+XHJcbiAgICAgICAgICA8cD5GbGFzaGxhbmcgSmFwYW5lc2UgdXNlcyB0aGUgb3BlbiBzb3VyY2UgZGljdGlvbmFyeSBkYXRhYmFzZSBmcm9tIHRoZSBKTURpY3QgUHJvamVjdCB0byBhdXRvbWF0aWNhbGx5IGNyZWF0ZSB5b3VyIGZsYXNoY2FyZHMgc28geW91IGNhbiBzcGVuZCBtb3JlIHRpbWUgc3R1ZHlpbmcgYW5kIGxlc3MgdGltZSBmaWxsaW5nIHRoZW0gb3V0LjwvcD5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW5kZXgtaW1nXCIgc3JjPVwiLi4vYXNzZXRzL21hZ25pZnlpbmdfZ2xhc3MucG5nXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICA8aDM+U3BhY2VkIFJlcGV0aXRpb24gU3R1ZHk8L2gzPlxyXG4gICAgICAgICAgPHA+Rmxhc2hsYW5nIGtlZXBzIHRyYWNrIG9mIHdoZW4geW91IG5lZWQgdG8gc3R1ZHkgZWFjaCBmbGFzaGNhcmQgZm9yIG1heGltdW0gcmV0ZW50aW9uLiBObyBtb3JlIGNyYW1taW5nITwvcD5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW5kZXgtaW1nXCIgc3JjPVwiLi4vYXNzZXRzL3N0b3B3YXRjaC1ncmFwaGljLnBuZ1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgPGgzPlRyYWNrIHlvdXIgUHJvZ3Jlc3M8L2gzPlxyXG4gICAgICAgICAgPHA+V2F0Y2ggeW91ciBsZWFybmluZyBpbiByZWFsIHRpbWUgYXMgeW91ciBjYXJkIGNvbGxlY3Rpb24gZ3Jvd3MsIGFuZCBrZWVwIGFuIGV5ZSBvdXQgb24gdGhlIGNhcmRzIHRoYXQgY29uc2lzdGVudGx5IGdpdmUgeW91IHRyb3VibGUuPC9wPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbmRleC1pbWdcIiBzcmM9XCIuLi9hc3NldHMvYmFyLWNoYXJ0LnBuZ1wiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRnVnYXogT25lJywgY3Vyc2l2ZTtcclxuICAgICAgICBmb250LXNpemU6IDEydm1pbjsgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5qdW1ib3Ryb24ge1xyXG4gICAgICAgIGhlaWdodDogNTB2aDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuanVtYm90cm9uIGgxLCBoMiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNpbmZve1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L0xheW91dD5cclxuKSJdfQ== */\n/*@ sourceURL=pages\\index.js */"
  }));
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


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

/***/ "react-dom":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map