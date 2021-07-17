/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/aboutMe.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/aboutMe.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --main-bg: #010101;\\n    --lime: #BAFF00;\\n}\\n\\n* {\\n    margin: 0;\\n    padding: 0;\\n    font-family: 'Poppins', sans-serif;\\n}\\n\\n.container {\\n    width: 80%;\\n    margin: auto;\\n}\\n\\n\\nbody {\\n    background-color: var(--main-bg);\\n}\\n\\nmain {\\n\\n}\\n\\nheader {\\n    padding: 40px 0;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n}\\n\\nheader img {\\n    cursor: pointer;\\n}\\n\\nheader a {\\n    text-decoration: none;\\n    color: white;\\n    font-size: 14px;\\n    font-weight: 300;\\n}\\n\\nheader nav a {\\n    margin: 0 10px;\\n    padding: 10px 20px;\\n}\\n\\nheader nav a:hover {\\n    border-radius: 50px;\\n    background-color: white;\\n    color: var(--main-bg);\\n}\\n\\nheader .hamburger {\\n    cursor: pointer;\\n    width: 40px;\\n    height: 40px;\\n\\n    border: 2px solid rgb(122, 122, 122);\\n    border-radius: 6px;\\n\\n    padding: 6px;\\n    box-sizing: border-box;\\n\\n    display: none;\\n    flex-direction: column;\\n    justify-content: space-around;\\n\\n    position: relative;\\n}\\n\\nheader .hamburger .line {\\n    width: 100%;\\n    height: 2px;\\n\\n    background-color: rgb(122, 122, 122);\\n}\\n\\nheader .hamburger .menu-overlay.show {\\n    display: flex;\\n}\\n\\nheader .hamburger .menu-overlay {\\n    position: absolute;\\n    top: 38px;\\n    right: 0px;\\n    padding: 20px;\\n    \\n    width: 150px;\\n    z-index: 1;\\n\\n    display: none;\\n    flex-direction: column;\\n    border-radius: 10px;\\n    background-color: white;\\n}\\n\\nheader .hamburger .menu-overlay a {\\n    color: #111;\\n    font-weight: 400;\\n    font-size: 14px;\\n    margin: 15px 0;\\n}\\n\\nheader .hamburger .menu-overlay a:hover {\\n    color: red;\\n}\\n\\nheader a.about-me {\\n    padding: 10px 15px;\\n}\\n\\nheader a.about-me.active {\\n    color: #111;\\n    font-weight: 400;\\n    border-radius: 50px;\\n    background-color: var(--lime);\\n}\\n\\nheader a.about-me:hover {\\n    border-radius: 50px;\\n    color: #111;\\n    background-color: var(--lime);\\n}\\n\\nsection.about {\\n    width: 50%;\\n    margin: auto;\\n    color: white;\\n}\\n\\nsection.about .profile {\\n    margin-top: 30px;\\n    display: flex;\\n    align-items: center;\\n}\\n\\nsection.about .profile .profile-cta {\\n    margin-left: 65px;\\n}\\n\\nsection.about .profile .profile-cta .hi {\\n    font-weight: 300;\\n    font-weight: 16px;\\n}\\n\\nsection.about .profile .profile-cta .username {\\n    font-size: 40px;\\n    font-weight: 600;\\n    width: fit-content;\\n}\\n\\nsection.about .profile .profile-cta .username:hover {\\n    cursor: pointer;\\n    text-decoration: underline;\\n}\\n\\nsection.about .profile .profile-cta .roles {\\n    margin-top: 5px;\\n    display: flex;\\n}\\n\\nsection.about .profile .profile-cta .roles p {\\n    font-weight: 300;\\n    color: #7B7B7B;\\n}\\n\\nsection.about .profile .profile-cta .roles p:nth-child(2){\\n    margin-left: 25px;\\n}\\n\\nsection.about .profile .profile-cta .roles p:nth-child(3){\\n    margin-left: 25px;\\n}\\n\\nsection.about .profile .profile-cta .buttons-cta {\\n    margin-top: 35px;\\n}\\n\\nsection.about .profile .profile-cta .buttons-cta button {\\n    cursor: pointer;\\n    font-size: 16px;\\n    padding: 8px 40px;\\n    border-radius: 6px;\\n    border: none;\\n}\\n\\nsection.about .profile .profile-cta .buttons-cta button:first-child {\\n    color: white;\\n    background-color: #0DB6FF;\\n}\\n\\n\\nsection.about .profile .profile-cta .buttons-cta button:last-child {\\n    margin-left: 10px;\\n    color: white;\\n    border: 1px solid white;\\n    background-color: transparent;\\n}\\n\\nsection.about .profession {\\n    /* padding: 10px 30px; */\\n    border-top: 1px solid rgb(45, 45, 45);\\n    margin-top: 90px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n}\\n\\nsection.about .profession p {\\n    cursor: pointer;\\n    padding: 10px 30px;\\n    font-weight: 300;\\n    border-radius: 0px 0px 8px 8px;\\n}\\n\\nsection.about .profession p.active {\\n    background-color: rgb(45, 45, 45);\\n}\\n\\nsection.about .profession p:hover {\\n    background-color: rgb(45, 45, 45);\\n}\\n\\nsection.about .profession-about {\\n    margin-top: 90px;\\n    margin-bottom: 200px;\\n}\\n\\nsection.about .profession-about p {\\n    font-weight: 300;\\n    padding: 0 30px;\\n}\\n\\n@media (min-width: 1025px) and (max-width: 1440px) {\\n\\n    header img {\\n        width: 40px;\\n        height: 27px;\\n    }\\n\\n    header nav a {\\n        padding: 8px 15px;\\n    }\\n\\n    header nav a.about-me {\\n        padding: 8px 15px;\\n    }\\n\\n    header a.about-me.active {\\n        padding: 8px 15px;\\n    }\\n\\n    /* END OF HEADER */\\n  \\n    section.about .profile img {\\n        width: 180px;\\n        height: 180px;\\n    }\\n\\n    section.about .profile .profile-cta {\\n        margin-left: 40px;\\n    }\\n\\n    section.about .profile .profile-cta .hi {\\n        font-weight: 300;\\n        font-weight: 14px;\\n    }\\n    \\n    section.about .profile .profile-cta .username {\\n        font-size: 35px;\\n        font-weight: 600;\\n    }\\n    \\n    section.about .profile .profile-cta .roles {\\n        margin-top: 8px;\\n        width: 400px;\\n    }\\n\\n    section.about .profile .profile-cta .roles p {\\n        font-size: 14px;\\n    }\\n\\n    section.about .profile .profile-cta .buttons-cta {\\n        margin-top: 30px;\\n    }\\n\\n    section.about .profile .profile-cta .buttons-cta button {\\n        font-size: 12px;\\n        padding: 8px 28px;\\n    }\\n\\n    section.about .profession p {\\n        font-size: 14px;\\n    }\\n    \\n}\\n\\n@media (max-width: 1159px){\\n    section.about .profession p {\\n        font-size: 12px;\\n    }\\n}\\n\\n@media (max-width: 1058px){\\n    section.about .profession p {\\n        font-size: 10px;\\n    }\\n}\\n\\n@media (min-width: 769px) and (max-width: 1024px) {\\n\\n    \\n    header img {\\n        width: 40px;\\n        height: 27px;\\n    }\\n\\n    header a {\\n        font-size: 12px;\\n    }\\n\\n    header nav a {\\n        padding: 8px 15px;\\n    }\\n\\n    header nav a.about-me {\\n        padding: 8px 15px;\\n    }\\n\\n    header a.about-me.active {\\n        padding: 8px 15px;\\n    }\\n    \\n    section.about .profile {\\n        margin-top: 50px;\\n    }\\n\\n    section.about .profile img {\\n        width: 160px;\\n        height: 160px;\\n    }\\n\\n    section.about .profile .profile-cta {\\n        margin-left: 40px;\\n    }\\n\\n    section.about .profile .profile-cta .hi {\\n        font-size: 12px;\\n    }\\n    \\n    section.about .profile .profile-cta .username {\\n        font-size: 25px;\\n        font-weight: 600;\\n    }\\n    \\n    section.about .profile .profile-cta .roles {\\n        margin-top: 8px;\\n        width: 350px;\\n    }\\n\\n    section.about .profile .profile-cta .roles p {\\n        font-size: 12px;\\n    }\\n\\n    section.about .profile .profile-cta .buttons-cta {\\n        margin-top: 30px;\\n    }\\n\\n    section.about .profile .profile-cta .buttons-cta button {\\n        font-size: 12px;\\n        padding: 5px 20px;\\n    }\\n\\n    section.about .profession {\\n        /* border: 1px solid red; */\\n    }\\n    \\n    section.about .profession p {\\n        padding: 10px 20px;\\n        font-size: 11px;\\n    }\\n\\n    section.about .profession-about p {\\n        font-size: 11px;\\n    }\\n\\n}\\n\\n@media (min-width: 481px) and (max-width: 768px) {\\n\\n    header img {\\n        width: 40px;\\n        height: 27px;\\n    }\\n\\n    header a {\\n        font-size: 12px;\\n    }\\n\\n    header nav {\\n        display: none;\\n    }\\n\\n    header nav a {\\n        padding: 8px 15px;\\n    }\\n\\n    header nav a.about-me {\\n        padding: 8px 15px;\\n        display: none;\\n    }\\n\\n    header .hamburger {\\n        display: flex;\\n    }\\n\\n    header .hamburger .menu-overlay.show {\\n        display: flex;\\n    }\\n\\n    header a.about-me.active {\\n        padding: 8px 15px;\\n        display: none;\\n    }\\n    \\n    section.about {\\n        width: 100%;\\n    }\\n\\n    section.about .profile {\\n        margin-top: 50px;\\n    }\\n\\n    section.about .profile img {\\n        width: 45%;\\n        height: 45%;\\n    }\\n\\n    section.about .profile .profile-cta {\\n        margin-left: 40px;\\n    }\\n\\n    section.about .profile .profile-cta .hi {\\n        font-size: 12px;\\n    }\\n    \\n    section.about .profile .profile-cta .username {\\n        font-size: 2rem;\\n        font-weight: 600;\\n    }\\n    \\n    section.about .profile .profile-cta .roles {\\n        margin-top: 8px;\\n        display: flex;\\n    }\\n\\n    section.about .profile .profile-cta .roles p {\\n        font-size: 12px;\\n    }\\n\\n    section.about .profile .profile-cta .buttons-cta {\\n        margin-top: 30px;\\n    }\\n\\n    section.about .profile .profile-cta .buttons-cta button {\\n        font-size: 12px;\\n        padding: 5px 20px;\\n    }\\n\\n    section.about .profession {\\n        /* border: 1px solid red; */\\n    }\\n    \\n    section.about .profession p {\\n        padding: 10px 20px;\\n        font-size: 12px;\\n    }\\n\\n    section.about .profession-about p {\\n        font-size: 12px;\\n    }\\n    \\n}\\n\\n@media (max-width: 632px){\\n\\n    section.about .profile .profile-cta .username {\\n        font-size: 25px;\\n    }\\n\\n    section.about .profile .profile-cta .roles {\\n        display: flex;\\n        width: 100%;\\n    }\\n\\n    section.about .profile .profile-cta .roles p {\\n        font-size: 12px;\\n    }\\n\\n}\\n\\n@media (max-width: 500px){\\n\\n    section.about .profile .profile-cta {\\n        margin-left: 25px;\\n    }\\n\\n    section.about .profile .profile-cta .username {\\n        font-size: 22px;\\n    }\\n\\n    section.about .profile .profile-cta .roles {\\n        width: 200px;\\n        flex-wrap: wrap;\\n    }\\n\\n    section.about .profile .profile-cta .roles p {\\n        /* border: 1px solid red; */\\n        font-size: 12px;\\n        \\n    }\\n\\n    section.about .profile .profile-cta .roles p:nth-child(2){\\n        margin-left: 10px;\\n        margin-top: 2px;\\n    }\\n\\n    section.about .profile .profile-cta .roles p:nth-child(3){\\n        margin-left: 0px;\\n        margin-top: 2px;\\n    }\\n\\n    section.about .profile .profile-cta .buttons-cta {\\n        margin-top: 20px;\\n    }\\n}\\n\\n@media (min-width: 376px) and (max-width: 480px) {\\n  \\n    header img {\\n        width: 40px;\\n        height: 27px;\\n    }\\n\\n    header a {\\n        font-size: 12px;\\n    }\\n\\n    header nav {\\n        display: none;\\n    }\\n\\n    header nav a {\\n        padding: 8px 15px;\\n    }\\n\\n    header nav a.about-me {\\n        padding: 8px 15px;\\n        display: none;\\n    }\\n\\n    header .hamburger {\\n        display: flex;\\n    }\\n\\n    header .hamburger .menu-overlay.show {\\n        display: flex;\\n    }\\n\\n    header a.about-me.active {\\n        padding: 8px 15px;\\n        display: none;\\n    }\\n    \\n    section.about {\\n        width: 100%;\\n    }\\n\\n    section.about .profile {\\n        margin-top: 20px;\\n    }\\n\\n    section.about .profile img {\\n        width: 37%;\\n        height: 37%;\\n    }\\n\\n    section.about .profile .profile-cta {\\n        margin-left: 25px;\\n    }\\n\\n    section.about .profile .profile-cta .hi {\\n        font-size: 10px;\\n    }\\n    \\n    section.about .profile .profile-cta .username {\\n        font-size: 18px;\\n    }\\n    \\n    section.about .profile .profile-cta .roles {\\n        margin-top: 8px;\\n        display: flex;\\n    }\\n\\n    section.about .profile .profile-cta .roles p {\\n        font-size: 12px;\\n    }\\n\\n    section.about .profile .profile-cta .buttons-cta {\\n        margin-top: 20px;\\n    }\\n\\n    section.about .profile .profile-cta .buttons-cta button {\\n        font-size: 12px;\\n        padding: 5px 20px;\\n        border-radius: 3px;\\n    }\\n    \\n    section.about .profession p {\\n        padding: 10px 20px;\\n        font-size: 10px;\\n    }\\n\\n    section.about .profession-about p {\\n        font-size: 12px;\\n    }\\n    \\n}\\n\\n@media (min-width: 280px) and (max-width: 375px){\\n    header img {\\n        width: 40px;\\n        height: 27px;\\n    }\\n\\n    header a {\\n        font-size: 12px;\\n    }\\n\\n    header nav {\\n        display: none;\\n    }\\n\\n    header nav a {\\n        padding: 8px 15px;\\n    }\\n\\n    header nav a.about-me {\\n        padding: 8px 15px;\\n        display: none;\\n    }\\n\\n    header .hamburger {\\n        display: flex;\\n    }\\n\\n    header .hamburger .menu-overlay.show {\\n        display: flex;\\n    }\\n\\n    header a.about-me.active {\\n        padding: 8px 15px;\\n        display: none;\\n    }\\n    \\n    section.about {\\n        width: 100%;\\n    }\\n\\n    section.about .profile {\\n        margin-top: 20px;\\n    }\\n\\n    section.about .profile img {\\n        width: 37%;\\n        height: 37%;\\n    }\\n\\n    section.about .profile .profile-cta {\\n        margin-left: 25px;\\n    }\\n\\n    section.about .profile .profile-cta .hi {\\n        font-size: 10px;\\n    }\\n    \\n    section.about .profile .profile-cta .username {\\n        font-size: 18px;\\n    }\\n    \\n    section.about .profile .profile-cta .roles {\\n        margin-top: 8px;\\n        width: 100px;\\n        display: flex;\\n    }\\n\\n    section.about .profile .profile-cta .roles p {\\n        font-size: 10px;\\n    }\\n\\n    section.about .profile .profile-cta .roles p:nth-child(2){\\n        margin-left: 0px;\\n        margin-top: 3px;\\n    }\\n\\n    section.about .profile .profile-cta .roles p:nth-child(3){\\n        margin-left: 0px;\\n        margin-top: 2px;\\n    }\\n\\n    section.about .profile .profile-cta .buttons-cta {\\n        margin-top: 15px;\\n    }\\n\\n    section.about .profile .profile-cta .buttons-cta button {\\n        font-size: 10px;\\n        border-radius: 3px;\\n        padding: 4px 15px;\\n    }\\n    \\n    section.about .profession p {\\n        padding: 10px 20px;\\n        font-size: 10px;\\n    }\\n\\n    section.about .profession-about p {\\n        font-size: 12px;\\n    }\\n\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://coocaainne/./src/aboutMe.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://coocaainne/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/aboutMe.css":
/*!*************************!*\
  !*** ./src/aboutMe.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_aboutMe_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./aboutMe.css */ \"./node_modules/css-loader/dist/cjs.js!./src/aboutMe.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_aboutMe_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_aboutMe_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_aboutMe_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_aboutMe_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://coocaainne/./src/aboutMe.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://coocaainne/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://coocaainne/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://coocaainne/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://coocaainne/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://coocaainne/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://coocaainne/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/aboutMe.js":
/*!************************!*\
  !*** ./src/aboutMe.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _aboutMe_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutMe.css */ \"./src/aboutMe.css\");\n/* harmony import */ var _words_GraphicDesign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./words/GraphicDesign */ \"./src/words/GraphicDesign.js\");\n/* harmony import */ var _words_UIUX__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./words/UIUX */ \"./src/words/UIUX.js\");\n/* harmony import */ var _words_FrontEnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./words/FrontEnd */ \"./src/words/FrontEnd.js\");\n\n\n\n\n\nconst logo = document.querySelector('header img');\nconst p = document.querySelectorAll('.profession p');\nconst prefessionDesc = document.querySelector('.profession-about');\nconst followButton = document.querySelector('button.follow');\nconst emailButton = document.querySelector('button.email');\nconst username = document.querySelector('section.about .profile .profile-cta .username');\nconst hamburger = document.querySelector('header .hamburger');\nconst menuOverlay = document.querySelector('header .hamburger .menu-overlay');\n\nhamburger.addEventListener('click', () => {\n    menuOverlay.classList.toggle('show');\n})\n\nusername.addEventListener('click', () => {\n    window.location.href = 'https://instagram.com/coocaainne/';\n})\n\nfollowButton.addEventListener('click', () => {\n    window.location.href = 'https://www.instagram.com/accounts/login/?next=%2Fcoocaainne%2F&source=follow';\n})\n\nemailButton.addEventListener('click', () => {\n    window.location.href = 'mailto:gnwncpta@gmail.com';\n})\n\np.forEach(field => {\n    field.addEventListener('click', (e) => {\n\n        // Jika ada yang active maka nonaktifkan\n        p.forEach(el => {\n            if(el.classList.contains('active')){\n                el.classList.toggle('active');\n            }\n        });\n\n        // buat aktif\n        e.target.classList.toggle('active');\n        \n        // Jika yang di klik berisi class gd, maka\n        if(e.target.classList.contains('gd')){\n            prefessionDesc.innerHTML = _words_GraphicDesign__WEBPACK_IMPORTED_MODULE_1__.default;\n        \n        // Jika yang di klik berisi class uix, maka\n        } else if(e.target.classList.contains('uix')){\n            prefessionDesc.innerHTML = _words_UIUX__WEBPACK_IMPORTED_MODULE_2__.default;\n\n        // Jika yang di klik berisi class fe, maka\n        } else if(e.target.classList.contains('fe')){\n            prefessionDesc.innerHTML = _words_FrontEnd__WEBPACK_IMPORTED_MODULE_3__.default;\n        }\n    })\n})\n\nlogo.addEventListener('click', () => {\n    window.location.href = './index.html';\n});\n\nfunction aboutMe() {\n    console.log('About Me Page');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutMe);\n\n//# sourceURL=webpack://coocaainne/./src/aboutMe.js?");

/***/ }),

/***/ "./src/words/FrontEnd.js":
/*!*******************************!*\
  !*** ./src/words/FrontEnd.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst FrontEnd = `<p>After i design the website then i slicing into Front End to realize the design into a website.\n                   <br>\n                   <br>\n                   I use HTML, CSS, JavaScript and Webpack Module Bundler to make better development.\n                   I build this site from scratch ofc, the process is fun to realize my design into a website\n                   </p>`;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FrontEnd);\n\n//# sourceURL=webpack://coocaainne/./src/words/FrontEnd.js?");

/***/ }),

/***/ "./src/words/GraphicDesign.js":
/*!************************************!*\
  !*** ./src/words/GraphicDesign.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst GraphicDesign = `<p>\n                            Hi! my name is Muhammad Gunawan Cipta Negara\n                            I’ve been doing graphic design since 2 years ago.\n                            <br>\n                            <br>\n                            if you don’t know my instagram, you can click that follow button\n                            i made cool stuff there\n                        </p>`;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GraphicDesign);\n\n//# sourceURL=webpack://coocaainne/./src/words/GraphicDesign.js?");

/***/ }),

/***/ "./src/words/UIUX.js":
/*!***************************!*\
  !*** ./src/words/UIUX.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst UIUX = `<p>Before i jump into code. First i need to design this website first to measure the size of everything.\n               <br>\n               <br>\n               So i know when the design on screen size 768px the design will look like this. And so on\n               </p>`;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIUX);\n\n//# sourceURL=webpack://coocaainne/./src/words/UIUX.js?");

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
/******/ 			id: moduleId,
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/aboutMe.js");
/******/ 	
/******/ })()
;