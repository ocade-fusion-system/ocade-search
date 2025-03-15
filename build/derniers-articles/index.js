/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/derniers-articles/block.json":
/*!******************************************!*\
  !*** ./src/derniers-articles/block.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ocade-blocks/derniers-articles","version":"1.0.0","category":"widgets","keywords":["ocade","derniers","articles","latest","posts"],"textdomain":"ocade-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","supports":{"anchor":true},"attributes":{"preview":{"type":"boolean","default":false}},"example":{"attributes":{"preview":true}}}');

/***/ }),

/***/ "./src/derniers-articles/edit-block.js":
/*!*********************************************!*\
  !*** ./src/derniers-articles/edit-block.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Block)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Block(props) {
  const {
    blockProps
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Emplacement r\xE9serv\xE9 au derniers articles."));
}

/***/ }),

/***/ "./src/derniers-articles/edit-inspecteur.js":
/*!**************************************************!*\
  !*** ./src/derniers-articles/edit-inspecteur.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Inspecteur)
/* harmony export */ });
function Inspecteur() {
  return null;
}

/***/ }),

/***/ "./src/derniers-articles/edit-toolbar.js":
/*!***********************************************!*\
  !*** ./src/derniers-articles/edit-toolbar.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Toolbar)
/* harmony export */ });
function Toolbar() {
  return null;
}

/***/ }),

/***/ "./src/derniers-articles/edit.js":
/*!***************************************!*\
  !*** ./src/derniers-articles/edit.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-toolbar */ "./src/derniers-articles/edit-toolbar.js");
/* harmony import */ var _edit_inspecteur__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-inspecteur */ "./src/derniers-articles/edit-inspecteur.js");
/* harmony import */ var _edit_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-block */ "./src/derniers-articles/edit-block.js");
/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon.svg */ "./src/derniers-articles/icon.svg");






function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    preview
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  if (preview) return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _icon_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    alt: "Preview",
    width: "360",
    height: "360"
  }));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_edit_toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    blockProps,
    attributes,
    setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_edit_inspecteur__WEBPACK_IMPORTED_MODULE_3__["default"], {
    blockProps,
    attributes,
    setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_edit_block__WEBPACK_IMPORTED_MODULE_4__["default"], {
    blockProps,
    attributes,
    setAttributes
  }));
}

/***/ }),

/***/ "./src/derniers-articles/icon.svg":
/*!****************************************!*\
  !*** ./src/derniers-articles/icon.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgIcon),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _defs, _g, _g2;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgIcon = function SvgIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 500,
    height: 500,
    viewBox: "0 0 375 375"
  }, props), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath", {
    id: "icon_svg__a"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9.582 0H368.73v371.773H9.582Zm0 0"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath", {
    id: "icon_svg__b"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M26.832 0H351.48c4.575 0 8.961 1.816 12.2 5.05a17.26 17.26 0 0 1 5.05 12.2v337.07a17.25 17.25 0 0 1-17.25 17.25H26.832a17.25 17.25 0 0 1-17.25-17.25V17.25c0-4.574 1.816-8.96 5.05-12.2A17.26 17.26 0 0 1 26.833 0Zm0 0"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath", {
    id: "icon_svg__c"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M72 74.078h231v223.5H72Zm0 0"
  })))), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    clipPath: "url(#icon_svg__a)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    clipPath: "url(#icon_svg__b)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#5373fc",
    d: "M9.582 0H368.73v371.773H9.582Zm0 0"
  })))), _g2 || (_g2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    clipPath: "url(#icon_svg__c)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    d: "M299.762 205.758c-2.192-3.664-11.2-14.54-34.977-.692l-41.941 24.43c-2.117 1.23-4.27 2.102-6.516 2.613.84-1.328 1.496-2.836 1.945-4.507 2.141-7.997-2.613-16.344-10.82-19.008a4 4 0 0 0-.488-.121c-12.055-2.176-23.953-6.477-33.512-9.934-3.324-1.2-6.46-2.332-9.125-3.2-10.742-3.484-20.445.829-28.52 5.509l-31.206 18.082-2.262-3.996a9.81 9.81 0 0 0-5.965-4.653 9.84 9.84 0 0 0-7.508.918l-11.765 6.66c-4.747 2.684-6.422 8.727-3.735 13.473l34.598 61.133a9.82 9.82 0 0 0 5.965 4.648 10 10 0 0 0 2.664.364c1.683 0 3.344-.43 4.844-1.282l11.765-6.66c4.746-2.683 6.422-8.726 3.734-13.473l-4.261-7.53 7.125-4.118 53.726 14.395c3.032.816 6.008 1.218 8.922 1.218 5.809 0 11.36-1.613 16.586-4.828l76.113-46.867c6.934-4.27 9.133-15.027 4.614-22.574m-170.211 77.32-11.77 6.66c-.566.32-1.23.403-1.87.223a2.44 2.44 0 0 1-1.49-1.152l-34.597-61.133c-.656-1.164-.23-2.703.93-3.36l11.77-6.66a2.42 2.42 0 0 1 1.871-.222c.64.175 1.168.586 1.488 1.152l34.597 61.133c.66 1.164.23 2.703-.93 3.36Zm161.707-61.066-76.113 46.867c-6.04 3.719-12.668 4.648-19.7 2.766l-55.207-14.793a3.71 3.71 0 0 0-2.816.37l-8.402 4.848-20.762-36.683 31.273-18.117c6.992-4.055 14.559-7.45 22.508-4.872 2.547.829 5.488 1.891 8.89 3.122 9.755 3.527 21.876 7.91 34.45 10.207 4.39 1.535 6.844 5.773 5.726 9.953-1.457 5.433-6.03 6.101-9.664 5.683-6.554-1.316-12.504-3.004-18.726-4.77a642 642 0 0 0-8.695-2.417 3.715 3.715 0 0 0-4.547 2.625 3.71 3.71 0 0 0 2.625 4.543c2.976.797 5.832 1.61 8.593 2.39 6.414 1.82 12.543 3.559 19.403 4.93a147 147 0 0 0 5.332.96c7.797 1.247 14.715.032 21.152-3.714l41.942-24.43c12.078-7.035 21.378-7.75 24.878-1.91 2.41 4.028 1.332 10.305-2.14 12.442M95.25 228.25a4.202 4.202 0 0 1-8.312 1.219 4.202 4.202 0 0 1 8.312-1.219m75.047-61.496 49.426 28.535a3.7 3.7 0 0 0 1.855.496c.64 0 1.281-.164 1.856-.496l49.425-28.535a3.71 3.71 0 0 0 1.856-3.215v-57.074c0-1.324-.707-2.55-1.856-3.211l-49.425-28.54a3.72 3.72 0 0 0-3.711 0l-49.426 28.54a3.7 3.7 0 0 0-1.856 3.21v57.075c0 1.324.707 2.55 1.856 3.215m5.562-53.863 10.13 5.847v20.332a3.71 3.71 0 0 0 1.855 3.215l14.332 8.274c.574.332 1.215.5 1.855.5s1.281-.168 1.856-.5a3.7 3.7 0 0 0 1.855-3.211v-16.051l10.125 5.848v48.503l-42.008-24.25Zm45.72 17.828-10.126-5.848 42.004-24.25 10.125 5.844Zm-28.173-7.696 6.914 3.993v13.906l-6.914-3.992Zm10.625-2.433-6.914-3.992 42.008-24.254 6.914 3.992Zm21.258 65.058v-48.503l42.004-24.254v48.507Zm-3.71-103.433 10.124 5.844-42.004 24.254-10.129-5.848Zm0 0"
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiB2ZXJzaW9uPSIxLjAiIHZpZXdCb3g9IjAgMCAzNzUgMzc1Ij48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGQ9Ik05LjU4MiAwSDM2OC43M3YzNzEuNzczSDkuNTgyWm0wIDAiLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iYiI+PHBhdGggZD0iTTI2LjgzMiAwSDM1MS40OGM0LjU3NSAwIDguOTYxIDEuODE2IDEyLjIgNS4wNWExNy4yNjIgMTcuMjYyIDAgMCAxIDUuMDUgMTIuMnYzMzcuMDdhMTcuMjUgMTcuMjUgMCAwIDEtMTcuMjUgMTcuMjVIMjYuODMyYTE3LjI1IDE3LjI1IDAgMCAxLTE3LjI1LTE3LjI1VjE3LjI1YzAtNC41NzQgMS44MTYtOC45NiA1LjA1LTEyLjJBMTcuMjYyIDE3LjI2MiAwIDAgMSAyNi44MzMgMFptMCAwIi8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImMiPjxwYXRoIGQ9Ik03MiA3NC4wNzhoMjMxdjIyMy41SDcyWm0wIDAiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxnIGNsaXAtcGF0aD0idXJsKCNiKSI+PHBhdGggZmlsbD0iIzUzNzNmYyIgZD0iTTkuNTgyIDBIMzY4LjczdjM3MS43NzNIOS41ODJabTAgMCIvPjwvZz48L2c+PGcgY2xpcC1wYXRoPSJ1cmwoI2MpIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjk5Ljc2MiAyMDUuNzU4Yy0yLjE5Mi0zLjY2NC0xMS4yLTE0LjU0LTM0Ljk3Ny0uNjkybC00MS45NDEgMjQuNDNjLTIuMTE3IDEuMjMtNC4yNyAyLjEwMi02LjUxNiAyLjYxMy44NC0xLjMyOCAxLjQ5Ni0yLjgzNiAxLjk0NS00LjUwNyAyLjE0MS03Ljk5Ny0yLjYxMy0xNi4zNDQtMTAuODItMTkuMDA4LS4xNi0uMDUxLS4zMjQtLjA5LS40ODgtLjEyMS0xMi4wNTUtMi4xNzYtMjMuOTUzLTYuNDc3LTMzLjUxMi05LjkzNC0zLjMyNC0xLjItNi40Ni0yLjMzMi05LjEyNS0zLjItMTAuNzQyLTMuNDg0LTIwLjQ0NS44MjktMjguNTIgNS41MDlsLTMxLjIwNiAxOC4wODItMi4yNjItMy45OTZhOS44MTQgOS44MTQgMCAwIDAtNS45NjUtNC42NTMgOS44MzcgOS44MzcgMCAwIDAtNy41MDguOTE4bC0xMS43NjUgNi42NmMtNC43NDcgMi42ODQtNi40MjIgOC43MjctMy43MzUgMTMuNDczbDM0LjU5OCA2MS4xMzNhOS44MjIgOS44MjIgMCAwIDAgNS45NjUgNC42NDhjLjg3OS4yNDIgMS43NzcuMzY0IDIuNjY0LjM2NCAxLjY4MyAwIDMuMzQ0LS40MyA0Ljg0NC0xLjI4MmwxMS43NjUtNi42NmM0Ljc0Ni0yLjY4MyA2LjQyMi04LjcyNiAzLjczNC0xMy40NzNsLTQuMjYxLTcuNTMgNy4xMjUtNC4xMTggNTMuNzI2IDE0LjM5NWMzLjAzMi44MTYgNi4wMDggMS4yMTggOC45MjIgMS4yMTggNS44MDkgMCAxMS4zNi0xLjYxMyAxNi41ODYtNC44MjhsNzYuMTEzLTQ2Ljg2N2M2LjkzNC00LjI3IDkuMTMzLTE1LjAyNyA0LjYxNC0yMi41NzRabS0xNzAuMjExIDc3LjMyLTExLjc3IDYuNjZjLS41NjYuMzItMS4yMy40MDMtMS44Ny4yMjNhMi40NDQgMi40NDQgMCAwIDEtMS40OS0xLjE1MmwtMzQuNTk3LTYxLjEzM2MtLjY1Ni0xLjE2NC0uMjMtMi43MDMuOTMtMy4zNmwxMS43Ny02LjY2Yy4zNy0uMjEuNzgtLjMxNiAxLjE5OS0uMzE2LjIyMiAwIC40NDkuMDMxLjY3Mi4wOTQuNjQuMTc1IDEuMTY4LjU4NiAxLjQ4OCAxLjE1MmwzNC41OTcgNjEuMTMzYy42NiAxLjE2NC4yMyAyLjcwMy0uOTMgMy4zNlptMTYxLjcwNy02MS4wNjYtNzYuMTEzIDQ2Ljg2N2MtNi4wNCAzLjcxOS0xMi42NjggNC42NDgtMTkuNyAyLjc2NmwtNTUuMjA3LTE0Ljc5M2EzLjcxNCAzLjcxNCAwIDAgMC0yLjgxNi4zN2wtOC40MDIgNC44NDgtMjAuNzYyLTM2LjY4MyAzMS4yNzMtMTguMTE3YzYuOTkyLTQuMDU1IDE0LjU1OS03LjQ1IDIyLjUwOC00Ljg3MiAyLjU0Ny44MjkgNS40ODggMS44OTEgOC44OSAzLjEyMiA5Ljc1NSAzLjUyNyAyMS44NzYgNy45MSAzNC40NSAxMC4yMDcgNC4zOSAxLjUzNSA2Ljg0NCA1Ljc3MyA1LjcyNiA5Ljk1My0xLjQ1NyA1LjQzMy02LjAzIDYuMTAxLTkuNjY0IDUuNjgzLTYuNTU0LTEuMzE2LTEyLjUwNC0zLjAwNC0xOC43MjYtNC43N2E2NDEuNTggNjQxLjU4IDAgMCAwLTguNjk1LTIuNDE3IDMuNzE1IDMuNzE1IDAgMCAwLTQuNTQ3IDIuNjI1IDMuNzExIDMuNzExIDAgMCAwIDIuNjI1IDQuNTQzYzIuOTc2Ljc5NyA1LjgzMiAxLjYxIDguNTkzIDIuMzkgNi40MTQgMS44MiAxMi41NDMgMy41NTkgMTkuNDAzIDQuOTNhMTQ2LjkwMyAxNDYuOTAzIDAgMCAwIDUuMzMyLjk2YzcuNzk3IDEuMjQ3IDE0LjcxNS4wMzIgMjEuMTUyLTMuNzE0bDQxLjk0Mi0yNC40M2MxMi4wNzgtNy4wMzUgMjEuMzc4LTcuNzUgMjQuODc4LTEuOTEgMi40MSA0LjAyOCAxLjMzMiAxMC4zMDUtMi4xNCAxMi40NDJaTTk1LjI1IDIyOC4yNWE0LjIwMiA0LjIwMiAwIDAgMS04LjMxMiAxLjIxOSA0LjIwMiA0LjIwMiAwIDAgMSA4LjMxMi0xLjIxOVptNzUuMDQ3LTYxLjQ5NiA0OS40MjYgMjguNTM1YTMuNzAyIDMuNzAyIDAgMCAwIDEuODU1LjQ5NmMuNjQgMCAxLjI4MS0uMTY0IDEuODU2LS40OTZsNDkuNDI1LTI4LjUzNWEzLjcxIDMuNzEgMCAwIDAgMS44NTYtMy4yMTV2LTU3LjA3NGMwLTEuMzI0LS43MDctMi41NS0xLjg1Ni0zLjIxMWwtNDkuNDI1LTI4LjU0YTMuNzI0IDMuNzI0IDAgMCAwLTMuNzExIDBsLTQ5LjQyNiAyOC41NGEzLjcwNCAzLjcwNCAwIDAgMC0xLjg1NiAzLjIxdjU3LjA3NWMwIDEuMzI0LjcwNyAyLjU1IDEuODU2IDMuMjE1Wm01LjU2Mi01My44NjMgMTAuMTMgNS44NDd2MjAuMzMyYTMuNzEgMy43MSAwIDAgMCAxLjg1NSAzLjIxNWwxNC4zMzIgOC4yNzRjLjU3NC4zMzIgMS4yMTUuNSAxLjg1NS41LjY0IDAgMS4yODEtLjE2OCAxLjg1Ni0uNWEzLjcwNCAzLjcwNCAwIDAgMCAxLjg1NS0zLjIxMXYtMTYuMDUxbDEwLjEyNSA1Ljg0OHY0OC41MDNsLTQyLjAwOC0yNC4yNVptNDUuNzIgMTcuODI4LTEwLjEyNi01Ljg0OCA0Mi4wMDQtMjQuMjUgMTAuMTI1IDUuODQ0Wm0tMjguMTczLTcuNjk2IDYuOTE0IDMuOTkzdjEzLjkwNmwtNi45MTQtMy45OTJabTEwLjYyNS0yLjQzMy02LjkxNC0zLjk5MiA0Mi4wMDgtMjQuMjU0IDYuOTE0IDMuOTkyWm0yMS4yNTggNjUuMDU4di00OC41MDNsNDIuMDA0LTI0LjI1NHY0OC41MDdabS0zLjcxLTEwMy40MzMgMTAuMTI0IDUuODQ0LTQyLjAwNCAyNC4yNTQtMTAuMTI5LTUuODQ4Wm0wIDAiLz48L2c+PC9zdmc+");

/***/ }),

/***/ "./src/derniers-articles/save.js":
/*!***************************************!*\
  !*** ./src/derniers-articles/save.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save() {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  });
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!****************************************!*\
  !*** ./src/derniers-articles/index.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/derniers-articles/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/derniers-articles/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/derniers-articles/save.js");






// Contenu de votre fichier custom-icon.svg
const CustomIcon = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "500",
  height: "500",
  version: "1",
  viewBox: "0 0 375 375"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
  id: "a"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M9.582 0H368.73v371.773H9.582Zm0 0"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
  id: "b"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M26.832 0H351.48c4.575 0 8.961 1.816 12.2 5.05a17.26 17.26 0 0 1 5.05 12.2v337.07a17.25 17.25 0 0 1-17.25 17.25H26.832a17.25 17.25 0 0 1-17.25-17.25V17.25c0-4.574 1.816-8.96 5.05-12.2A17.26 17.26 0 0 1 26.833 0Zm0 0"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
  id: "c"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M72 74.078h231v223.5H72Zm0 0"
}))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  clipPath: "url(#a)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  clipPath: "url(#b)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#5373fc",
  d: "M9.582 0H368.73v371.773H9.582Zm0 0"
}))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  clipPath: "url(#c)"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#fff",
  d: "M299.762 205.758c-2.192-3.664-11.2-14.54-34.977-.692l-41.941 24.43c-2.117 1.23-4.27 2.102-6.516 2.613.84-1.328 1.496-2.836 1.945-4.507 2.141-7.997-2.613-16.344-10.82-19.008a4 4 0 0 0-.488-.121c-12.055-2.176-23.953-6.477-33.512-9.934-3.324-1.2-6.46-2.332-9.125-3.2-10.742-3.484-20.445.829-28.52 5.509l-31.206 18.082-2.262-3.996a9.81 9.81 0 0 0-5.965-4.653 9.84 9.84 0 0 0-7.508.918l-11.765 6.66c-4.747 2.684-6.422 8.727-3.735 13.473l34.598 61.133a9.82 9.82 0 0 0 5.965 4.648 10 10 0 0 0 2.664.364c1.683 0 3.344-.43 4.844-1.282l11.765-6.66c4.746-2.683 6.422-8.726 3.734-13.473l-4.261-7.53 7.125-4.118 53.726 14.395c3.032.816 6.008 1.218 8.922 1.218 5.809 0 11.36-1.613 16.586-4.828l76.113-46.867c6.934-4.27 9.133-15.027 4.614-22.574m-170.211 77.32-11.77 6.66c-.566.32-1.23.403-1.87.223a2.44 2.44 0 0 1-1.49-1.152l-34.597-61.133c-.656-1.164-.23-2.703.93-3.36l11.77-6.66a2.42 2.42 0 0 1 1.871-.222c.64.175 1.168.586 1.488 1.152l34.597 61.133c.66 1.164.23 2.703-.93 3.36Zm161.707-61.066-76.113 46.867c-6.04 3.719-12.668 4.648-19.7 2.766l-55.207-14.793a3.71 3.71 0 0 0-2.816.37l-8.402 4.848-20.762-36.683 31.273-18.117c6.992-4.055 14.559-7.45 22.508-4.872 2.547.829 5.488 1.891 8.89 3.122 9.755 3.527 21.876 7.91 34.45 10.207 4.39 1.535 6.844 5.773 5.726 9.953-1.457 5.433-6.03 6.101-9.664 5.683-6.554-1.316-12.504-3.004-18.726-4.77a642 642 0 0 0-8.695-2.417 3.715 3.715 0 0 0-4.547 2.625 3.71 3.71 0 0 0 2.625 4.543c2.976.797 5.832 1.61 8.593 2.39 6.414 1.82 12.543 3.559 19.403 4.93a147 147 0 0 0 5.332.96c7.797 1.247 14.715.032 21.152-3.714l41.942-24.43c12.078-7.035 21.378-7.75 24.878-1.91 2.41 4.028 1.332 10.305-2.14 12.442M95.25 228.25a4.202 4.202 0 0 1-8.312 1.219 4.202 4.202 0 0 1 8.312-1.219m75.047-61.496 49.426 28.535a3.7 3.7 0 0 0 1.855.496c.64 0 1.281-.164 1.856-.496l49.425-28.535a3.71 3.71 0 0 0 1.856-3.215v-57.074c0-1.324-.707-2.55-1.856-3.211l-49.425-28.54a3.72 3.72 0 0 0-3.711 0l-49.426 28.54a3.7 3.7 0 0 0-1.856 3.21v57.075c0 1.324.707 2.55 1.856 3.215m5.562-53.863 10.13 5.847v20.332a3.71 3.71 0 0 0 1.855 3.215l14.332 8.274c.574.332 1.215.5 1.855.5s1.281-.168 1.856-.5a3.7 3.7 0 0 0 1.855-3.211v-16.051l10.125 5.848v48.503l-42.008-24.25Zm45.72 17.828-10.126-5.848 42.004-24.25 10.125 5.844Zm-28.173-7.696 6.914 3.993v13.906l-6.914-3.992Zm10.625-2.433-6.914-3.992 42.008-24.254 6.914 3.992Zm21.258 65.058v-48.503l42.004-24.254v48.507Zm-3.71-103.433 10.124 5.844-42.004 24.254-10.129-5.848Zm0 0"
})));
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  title: "Derniers articles",
  description: "Ajouter les derniers articles",
  icon: CustomIcon,
  // Utilisez votre icône personnalisée
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map