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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/home.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --main-bg: #010101;\\n    --lime: #BAFF00;\\n}\\n\\n* {\\n    margin: 0;\\n    padding: 0;\\n    font-family: 'Poppins', sans-serif;\\n}\\n\\n.container {\\n    width: 80%;\\n    margin: auto;\\n}\\n\\n\\nbody {\\n    background-color: var(--main-bg);\\n}\\n\\nmain {\\n    /* border: 1px solid red; */\\n}\\n\\nheader {\\n    padding: 40px 0;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n}\\n\\nheader a {\\n    text-decoration: none;\\n    color: white;\\n    font-size: 14px;\\n    font-weight: 300;\\n}\\n\\nheader img {\\n    cursor: pointer;\\n}\\n\\nheader nav a {\\n    margin: 0 10px;\\n    padding: 10px 20px;\\n}\\n\\nheader nav a:hover {\\n    border-radius: 50px;\\n    background-color: white;\\n    color: var(--main-bg);\\n}\\n\\nheader .hamburger {\\n    cursor: pointer;\\n    width: 40px;\\n    height: 40px;\\n\\n    border: 2px solid rgb(122, 122, 122);\\n    border-radius: 6px;\\n\\n    padding: 6px;\\n    box-sizing: border-box;\\n\\n    display: none;\\n    flex-direction: column;\\n    justify-content: space-around;\\n\\n    position: relative;\\n}\\n\\nheader .hamburger .line {\\n    width: 100%;\\n    height: 2px;\\n\\n    background-color: rgb(122, 122, 122);\\n}\\n\\nheader .hamburger .menu-overlay.show {\\n    display: flex;\\n}\\n\\nheader .hamburger .menu-overlay {\\n    position: absolute;\\n    top: 38px;\\n    right: 0px;\\n    padding: 20px;\\n    \\n    width: 150px;\\n    z-index: 1;\\n\\n    display: none;\\n    flex-direction: column;\\n    border-radius: 10px;\\n    background-color: white;\\n}\\n\\nheader .hamburger .menu-overlay a {\\n    color: #111;\\n    font-weight: 400;\\n    font-size: 14px;\\n    margin: 15px 0;\\n}\\n\\nheader .hamburger .menu-overlay a:hover {\\n    color: red;\\n}\\n\\nheader a.about-me {\\n    padding: 10px 15px;\\n}\\n\\nheader a.about-me.active {\\n    color: #111;\\n    border-radius: 50px;\\n    background-color: var(--lime);\\n}\\n\\nheader a.about-me:hover {\\n    border-radius: 50px;\\n    color: #111;\\n    background-color: var(--lime);\\n}\\n\\nsection.home {\\n    margin-top: 90px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n}\\n\\nsection.home .typography {\\n    position: relative;\\n    /* border: 1px solid red; */\\n}\\n\\nsection.home .typography .round {\\n    position: absolute;\\n    top: 0px;\\n    left: -15px;\\n    z-index: -1;\\n\\n    width: 100px;\\n    height: 100px;\\n    border-radius: 50px;\\n    background-color: var(--lime);\\n}\\n\\nsection.home .typography h1 {\\n    color: white;\\n    font-size: 75px;\\n    font-weight: 400;\\n}\\n\\nsection.home .typography h1 span.w {\\n    color: #111;\\n}\\n\\nsection.home .typography h1 span.ter {\\n    font-family: 'Terminal Grotesque';\\n}\\n\\nsection.home .typography p {\\n    margin-top: 30px;\\n    color: white;\\n    font-size: 18px;\\n    font-weight: 300;\\n}\\n\\nsection.home .buttons {\\n    margin-top: 30px;\\n}\\n\\nsection.home .buttons button {\\n    cursor: pointer;\\n    padding: 8px 50px;\\n    border-radius: 50px;\\n    font-size: 16px;\\n    border: none;\\n    font-weight: 500;\\n    background-color: white;\\n}\\n\\nsection.home .buttons button:last-child {\\n    margin-left: 40px;\\n    color: white;\\n    font-weight: 300;\\n    background-color: transparent;\\n    border: 1px solid transparent;\\n}\\n\\nsection.home .buttons button:last-child:hover {\\n    border: 1px solid white;\\n}\\n\\nsection.home img {\\n    margin-right: 30px;\\n    width: 654px;\\n    height: 578px;\\n}\\n\\n@media (min-width: 1025px) and (max-width: 1440px) {\\n  \\n    body {\\n        background-color: var(--main-bg);\\n    }\\n    \\n    main {\\n        /* border: 1px solid red; */\\n    }\\n    \\n    header {\\n        padding: 40px 0;\\n        display: flex;\\n        align-items: center;\\n        justify-content: space-between;\\n    }\\n    \\n    header a {\\n        font-size: 14px;\\n    }\\n    \\n    header img {\\n        width: 40px;\\n        height: 27px;\\n    }\\n    \\n    header nav a {\\n        padding: 8px 15px;\\n    }\\n    \\n    header nav a:hover {\\n        border-radius: 50px;\\n        background-color: white;\\n        color: var(--main-bg);\\n    }\\n    \\n    header nav a.about-me {\\n        padding: 8px 15px;\\n    }\\n    \\n    header a.about-me.active {\\n        padding: 8px 15px;\\n    }\\n    \\n    header a.about-me:hover {\\n        border-radius: 50px;\\n        color: #111;\\n        background-color: var(--lime);\\n    }\\n    \\n    section.home {\\n        margin-top: 90px;\\n        display: flex;\\n        align-items: center;\\n        justify-content: space-between;\\n    }\\n    \\n    section.home .typography {\\n        position: relative;\\n        /* border: 1px solid red; */\\n    }\\n    \\n    section.home .typography .round {\\n        position: absolute;\\n        top: 0px;\\n        left: -15px;\\n        z-index: -1;\\n    \\n        width: 100px;\\n        height: 100px;\\n        border-radius: 50px;\\n        background-color: var(--lime);\\n    }\\n    \\n    section.home .typography h1 {\\n        color: white;\\n        font-size: 3.8em;\\n        font-weight: 400;\\n    }\\n    \\n    section.home .typography h1 span.w {\\n        color: #111;\\n    }\\n    \\n    section.home .typography h1 span.ter {\\n        font-family: 'Terminal Grotesque';\\n    }\\n    \\n    section.home .typography p {\\n        margin-top: 30px;\\n        color: white;\\n        font-size: 16px;\\n        font-weight: 300;\\n    }\\n    \\n    section.home .buttons {\\n        width: 100%;\\n        margin-top: 30px;\\n    }\\n    \\n    section.home .buttons button {\\n        cursor: pointer;\\n        padding: 8px 40px;\\n        border-radius: 50px;\\n        font-size: 16px;\\n        border: none;\\n        font-weight: 500;\\n        background-color: white;\\n    }\\n    \\n    section.home .buttons button:last-child {\\n        margin-left: 40px;\\n        color: white;\\n        font-weight: 300;\\n        background-color: transparent;\\n        border: 1px solid transparent;\\n    }\\n    \\n    section.home .buttons button:last-child:hover {\\n        border: 1px solid white;\\n    }\\n    \\n    section.home img {\\n        margin-right: 0px;\\n        width: 50%;\\n        height: 50%;\\n    }   \\n    \\n}\\n\\n@media (min-width: 769px) and (max-width: 1024px) {\\n    \\n    section.home .typography .round {\\n        position: absolute;\\n        top: 0px;\\n        left: -15px;\\n        z-index: -1;\\n    \\n        width: 80px;\\n        height: 80px;\\n        border-radius: 50px;\\n        background-color: var(--lime);\\n    }\\n    \\n    section.home .typography h1 {\\n        color: white;\\n        font-size: 3.4em;\\n        font-weight: 400;\\n    }\\n    \\n    section.home .typography h1 span.w {\\n        color: #111;\\n    }\\n    \\n    section.home .typography p {\\n        margin-top: 30px;\\n        color: white;\\n        font-size: 14px;\\n        font-weight: 300;\\n    }\\n    \\n    section.home .buttons {\\n        width: 100%;\\n        margin-top: 30px;\\n    }\\n    \\n    section.home .buttons button {\\n        cursor: pointer;\\n        padding: 8px 30px;\\n        border-radius: 50px;\\n        font-size: 14px;\\n        border: none;\\n        font-weight: 500;\\n        background-color: white;\\n    }\\n    \\n    section.home .buttons button:last-child {\\n        margin-left: 40px;\\n        color: white;\\n        font-weight: 300;\\n        background-color: transparent;\\n        border: 1px solid transparent;\\n    }\\n    \\n    \\n    section.home img {\\n        margin-right: 0px;\\n        width: 45%;\\n        height: 45%;\\n    }   \\n\\n}\\n\\n\\n/* \\n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\\n  ##Screen = B/w 481px to 767px\\n*/\\n\\n@media (min-width: 481px) and (max-width: 768px) {\\n\\n    header img {\\n        width: 40px;\\n        height: 27px;\\n    }\\n\\n    header nav {\\n        display: none;\\n    }\\n\\n    header nav a {\\n        margin: 0 5px;\\n        padding: 7px 15px;\\n    }\\n\\n    header a {\\n        font-size: 12px;\\n    }\\n\\n    header a.about-me {\\n        display: none;\\n        padding: 7px 15px;\\n    }\\n\\n    header .hamburger {\\n        display: flex;\\n    }\\n\\n    section.home {\\n        display: flex;\\n        align-items: flex-start;\\n        flex-direction: column;\\n    }\\n\\n    section.home .typography .round {\\n        position: absolute;\\n        top: 0px;\\n        left: -15px;\\n        z-index: -1;\\n    \\n        width: 80px;\\n        height: 80px;\\n        border-radius: 50px;\\n    }\\n\\n    section.home .typography p {\\n        margin-top: 30px;\\n        color: white;\\n        font-size: 16px;\\n        font-weight: 300;\\n    }\\n\\n    section.home .buttons button {\\n        cursor: pointer;\\n        padding: 8px 30px;\\n        border-radius: 50px;\\n        font-size: 14px;\\n        border: none;\\n        font-weight: 500;\\n        background-color: white;\\n    }\\n  \\n    section.home .typography h1 {\\n        color: white;\\n        font-size: 3.8em;\\n        font-weight: 400;\\n    }\\n\\n    section.home img {\\n        margin-top: 150px;\\n        margin-right: 0px;\\n        margin-left: 50px;\\n        margin-bottom: 100px;\\n        width: 80%;\\n        height: 80%;\\n    } \\n    \\n}\\n\\n@media (min-width: 320px) and (max-width: 480px) {\\n  \\n    header img {\\n        width: 40px;\\n        height: 27px;\\n    }\\n\\n    header nav {\\n        display: none;\\n    }\\n\\n    header nav a {\\n        margin: 0 5px;\\n        padding: 7px 15px;\\n    }\\n\\n    header a {\\n        font-size: 12px;\\n    }\\n\\n    header a.about-me {\\n        display: none;\\n        padding: 7px 15px;\\n    }\\n\\n    header .hamburger {\\n        display: flex;\\n    }\\n\\n    section.home {\\n        display: flex;\\n        align-items: flex-start;\\n        flex-direction: column;\\n    }\\n\\n    section.home .typography .round {\\n        position: absolute;\\n        top: 0px;\\n        left: -15px;\\n        z-index: -1;\\n    \\n        width: 70px;\\n        height: 70px;\\n        border-radius: 50px;\\n    }\\n\\n    section.home .typography p {\\n        margin-top: 30px;\\n        color: white;\\n        font-size: 16px;\\n        font-weight: 300;\\n    }\\n\\n    section.home .buttons button {\\n        cursor: pointer;\\n        padding: 8px 20px;\\n        border-radius: 50px;\\n        font-size: 12px;\\n        border: none;\\n        font-weight: 500;\\n        background-color: white;\\n    }\\n  \\n    section.home .typography h1 {\\n        color: white;\\n        font-size: 3em;\\n        font-weight: 400;\\n    }\\n\\n    section.home img {\\n        margin-top: 150px;\\n        margin-right: 0px;\\n        margin-left: 30px;\\n        margin-bottom: 100px;\\n        width: 80%;\\n        height: 80%;\\n    } \\n    \\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://coocaainne/./src/home.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://coocaainne/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/home.css":
/*!**********************!*\
  !*** ./src/home.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./home.css */ \"./node_modules/css-loader/dist/cjs.js!./src/home.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://coocaainne/./src/home.css?");

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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.css */ \"./src/home.css\");\n\n\nconst logo = document.querySelector('header img');\nconst hamburger = document.querySelector('header .hamburger');\nconst menuOverlay = document.querySelector('header .hamburger .menu-overlay');\n\nhamburger.addEventListener('click', () => {\n    menuOverlay.classList.toggle('show');\n});\n\nlogo.addEventListener('click', () => {\n    window.location.href = 'index.html';\n});\n\nfunction home(){\n    console.log('Home');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://coocaainne/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://coocaainne/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;