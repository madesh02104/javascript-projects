"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    border: none;\n    font-family: Inter, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\nmenu:not(article menu),\nol:not(article ol),\nul:not(article ul) {\n    list-style: none;\n}\n\nmenu,\nol,\nul {\n    padding-left: 0;\n}\n\narticle ol,\narticle ul {\n    list-style-position: inside;\n}\n\nhtml {\n    font-size: 62.5%;\n    /* (62.5/100) * 16px = 10px */\n}\n\nhtml {\n    -webkit-text-size-adjust: none;\n    /* for iOS Safari */\n    text-size-adjust: none;\n    /* for other mobile browsers */\n}\n\n@media (prefers-reduced-motion: no-preference) {\n    html {\n        scroll-behavior: smooth;\n    }\n}\n\nlabel,\nbutton,\nselect,\nsummary,\n[type=radio],\n[type=submit],\n[type=checkbox] {\n    cursor: pointer;\n}\n\n/*root color template */\n:root {\n    --primary-dark: rgba(19, 19, 38, 1);\n    --text-primary: rgba(255, 255, 255, 1);\n    --accent-color: rgba(48, 128, 120, 1);\n    --gray-light: rgba(128, 128, 128, 0.3);\n    --gray-dark: rgba(64, 64, 64, 1);\n    --yellow: rgba(250, 159, 2, 1);\n}\n\n/* styles */\n\nbody {\n    background-color: var(--primary-dark);\n    display: flex;\n    color: white;\n}\n\n.sidebar,\n.main-content {\n    background-color: var(--gray-light);\n    margin: 1rem;\n    padding: 2rem;\n    height: 94.5vh;\n    border-radius: 1rem;\n}\n\n.sidebar {\n    width: 20%;\n}\n\n.sidebar-title {\n    font-size: 3.2rem;\n    text-align: center;\n    margin-top: 1rem;\n    margin-bottom: 3rem;\n    color: var(--yellow);\n    font-family: \"Happy Monkey\";\n}\n\n.options-container {\n    height: 40%;\n    margin-left: 0;\n    margin-right: 0;\n}\n\n.options {\n    font-size: 2rem;\n    margin: 1.8rem 0;\n    transition: font-size 0.1s ease-in-out, color 0.1s ease-in-out;\n}\n\n.options:hover {\n    color: var(--yellow);\n    font-size: 2.4rem;\n}\n\n.add-btn {\n    background-color: var(--accent-color);\n    color: white;\n    font-size: 2rem;\n    font-weight: 600;\n    padding: 1rem 2rem;\n    border-radius: .5rem;\n    margin: 1rem 3.5rem;\n    transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;\n\n}\n\n.add-btn:hover {\n    background-color: rgba(48, 128, 120, 0.6);\n    color: white;\n}\n\n.add-btn:active {\n    transform: scale(0.95);\n}\n\n.main-content {\n    width: 80%;\n    overflow-y: auto;\n}\n\n.taskbox {\n    background-color: var(--primary-dark);\n    border-radius: .5rem;\n    padding: 0.5rem 1rem;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 1rem;\n    height: 10vh;\n}\n\n.taskbox .taskbox-left {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    width: 80%;\n}\n\n.taskbox .taskbox-title {\n    font-size: 2rem;\n    width: fit-content;\n    font-weight: 600;\n    padding: 0.4rem;\n    border-radius: 0.5rem;\n    color: var(--yellow);\n}\n\n.taskbox .taskbox-desc {\n    font-size: 1.4rem;\n}\n\n.taskbox .taskbox-right {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 20%;\n}\n\n.taskbox .taskbox-right>* {\n    height: 50%;\n}\n\n.taskbox .taskbox-right-up {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: 3rem;\n}\n\n.taskbox .taskbox-date {\n    font-size: 1.6rem;\n    font-weight: 500;\n    color: var(--yellow);\n    padding: 0.4rem;\n    border-radius: 0.5rem;\n}\n\n.fa-note-sticky:hover {\n    color: rgb(0, 204, 255);\n}\n\n.fa-trash-can:hover {\n    color: red;\n}\n\n.taskbox .taskbox-right-down {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: 1rem;\n}\n\n.taskbox .taskbox-priority-tag {\n    font-size: 1.4rem;\n}\n\n.taskbox .taskbox-priority {\n    font-size: 1.5rem;\n    padding: 0.2rem 0.4rem;\n    border-radius: 0.4rem;\n}\n\n.priority-low {\n    background-color: var(--gray-light);\n    color: rgba(250, 5, 5, 1);\n    font-weight: 700;\n    font-size: 1.6rem;\n    padding: 0.1rem 1rem;\n    border-radius: 0.4rem;\n}\n\n.priority-mid {\n    background-color: var(--gray-light);\n    color: rgb(252, 194, 3);\n    font-weight: 700;\n    font-size: 1.6rem;\n    padding: 0.1rem 1rem;\n    border-radius: 0.4rem;\n}\n\n.priority-high {\n    background-color: var(--gray-light);\n    color: rgb(19, 212, 29);\n    font-weight: 700;\n    font-size: 1.6rem;\n    padding: 0.1rem 1rem;\n    border-radius: 0.4rem;\n}\n\n.taskbox .taskbox-hover:hover {\n    color: var(--yellow);\n}\n\n.taskbox .taskbox-hover1:hover {\n    background-color: var(--gray-light);\n}\n\n.taskbox .taskbox-hover:active {\n    transform: scale(0.95);\n}\n\n.taskbox .taskbox-hover1:active {\n    transform: scale(0.95);\n}\n\n.taskbox .taskbox-priority:hover {\n    background-color: rgba(255, 255, 255, 0.5);\n}\n\n.dialog-container {\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 30%;\n    transform: translate(-50%, -50%);\n    background-color: var(--primary-dark);\n    border-radius: 1rem;\n    border: 1px solid var(--yellow);\n    padding: 0.5rem 1rem;\n    z-index: 999;\n    opacity: 0;\n    transition: step-start 0.8s ease-in-out;\n}\n\n.dialog-container.active {\n    display: block;\n    opacity: 1;\n}\n\n#task-form {\n    display: flex;\n    flex-direction: column;\n    color: white;\n    gap: 2rem;\n    font-size: 1.6rem;\n}\n\n#close-dialog {\n    background: none;\n    color: red;\n    font-weight: 900;\n    font-size: 2rem;\n    align-self: flex-end;\n}\n\n#close-dialog:hover {\n    background-color: var(--gray-light);\n}\n\ninput,\ntextarea,\nselect {\n    border-radius: 0.5rem;\n    border: 1px solid var(--yellow);\n    background-color: var(--text-primary);\n}\n\ninput {\n    height: 2.4rem;\n}\n\n.error-message {\n    color: red;\n    background-color: #fdd;\n    padding: 8px;\n    border-radius: 5px;\n    margin-top: 10px;\n    font-size: 14px;\n}\n\n.done,\n.edit {\n    background-color: var(--accent-color);\n    color: white;\n    font-size: 2rem;\n    font-weight: 600;\n    padding: 1rem 1rem;\n    border-radius: .5rem;\n    margin: 1rem 3.5rem;\n    transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;\n}\n\n.hidden {\n    display: none;\n}\n\n.done:hover,\n.edit:hover {\n    background-color: rgba(48, 128, 120, 0.6);\n    color: white;\n}\n\n.done:active,\n.edit:active {\n    transform: scale(0.95);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _taskSorter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskSorter.js */ \"./src/taskSorter.js\");\n\n\n\n\n\nconst addTaskBtn = document.querySelector('.add-btn');\nconst taskDialog = document.getElementById('task-dialog');\nconst closeDialogBtn = document.getElementById('close-dialog');\nconst taskForm = document.getElementById('task-form');\nconst doneBtn = document.querySelector('.done');\nconst mainContent = document.querySelector('.main-content');\nconst editBtn = document.querySelector('.edit');\n\nconst storedTasks = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.loadTasksFromLocalStorage)();\n\ndocument.getElementById('filter-all').addEventListener('click', () => displayTasks('all'));\ndocument.getElementById('filter-today').addEventListener('click', () => displayTasks('today'));\ndocument.getElementById('filter-week').addEventListener('click', () => displayTasks('week'));\ndocument.getElementById('filter-important').addEventListener('click', () => displayTasks('important'));\ndocument.getElementById('filter-expired').addEventListener('click', () => displayTasks('expired'));\n\nfunction displayTasks(filter) {\n  const filteredTasks = (0,_taskSorter_js__WEBPACK_IMPORTED_MODULE_3__.filterTasks)(storedTasks, filter);\n  renderTasks(filteredTasks);\n}\n\nconst createTaskElement = (task) => {\n  const taskElement = document.createElement('div');\n  taskElement.classList.add('taskbox');\n\n  const taskLeft = document.createElement('div');\n  taskLeft.classList.add('taskbox-left');\n\n  const taskTitle = document.createElement('div');\n  taskTitle.classList.add('taskbox-title', 'taskbox-hover1');\n  taskTitle.textContent = task.title;\n\n  const taskDesc = document.createElement('div');\n  taskDesc.classList.add('taskbox-desc', 'taskbox-hover');\n  taskDesc.textContent = task.description;\n\n  taskLeft.appendChild(taskTitle);\n  taskLeft.appendChild(taskDesc);\n\n  const taskRight = document.createElement('div');\n  taskRight.classList.add('taskbox-right');\n\n  const taskRightUp = document.createElement('div');\n  taskRightUp.classList.add('taskbox-right-up');\n  taskRight.appendChild(taskRightUp);\n\n  const taskRightDown = document.createElement('div');\n  taskRightDown.classList.add('taskbox-right-down');\n  taskRight.appendChild(taskRightDown);\n\n  const taskDate = document.createElement('div');\n  taskDate.classList.add('taskbox-date', 'taskbox-hover1');\n  taskDate.textContent = new Date(task.dueDate).toLocaleDateString();\n  taskRightUp.appendChild(taskDate);\n\n  const taskNotes = document.createElement('div');\n  taskNotes.classList.add('taskbox-notes', 'taskbox-hover');\n  const noteIcon = document.createElement('i');\n  noteIcon.classList.add('fa-regular', 'fa-note-sticky', 'fa-2x');\n  taskNotes.appendChild(noteIcon);\n  taskRightUp.appendChild(taskNotes);\n\n  const taskDelete = document.createElement('div');\n  taskDelete.classList.add('taskbox-delete', 'taskbox-hover');\n  const deleteIcon = document.createElement('i');\n  deleteIcon.classList.add('fa-regular', 'fa-trash-can', 'fa-2x');\n  taskDelete.appendChild(deleteIcon);\n  taskRightUp.appendChild(taskDelete);\n\n  const priorityTag = document.createElement('div');\n  priorityTag.classList.add('taskbox-priority-tag');\n  priorityTag.textContent = 'Priority\\xa0:';\n\n  const taskPriority = document.createElement('div');\n  taskPriority.classList.add('taskbox-priority');\n  taskPriority.textContent = task.priority;\n\n  if (task.priority == 'low') {\n    taskPriority.classList.add('priority-low');\n  }\n  else if (task.priority == 'medium') {\n    taskPriority.classList.add('priority-mid');\n  }\n  else {\n    taskPriority.classList.add('priority-high');\n  }\n\n  taskRightDown.appendChild(priorityTag);\n  taskRightDown.appendChild(taskPriority);\n\n  taskElement.appendChild(taskLeft);\n  taskElement.appendChild(taskRight);\n\n  taskElement.dataset.taskId = task.id;\n  return taskElement;\n};\n\nconst renderTasks = (tasks) => {\n  mainContent.innerHTML = '';\n  tasks.forEach(task => {\n    const taskElement = createTaskElement(task);\n    addDeleteFunctionality(taskElement);\n    addTaskBoxClickFunctionality(taskElement, task);\n    mainContent.appendChild(taskElement);\n  });\n};\n\naddTaskBtn.addEventListener('click', () => {\n  taskDialog.classList.add('active');\n});\n\ncloseDialogBtn.addEventListener('click', () => {\n  taskDialog.classList.remove('active');\n  editBtn.classList.add('hidden');\n  doneBtn.classList.remove('hidden');\n  taskForm.reset();\n});\n\ndoneBtn.addEventListener('click', (event) => {\n  event.preventDefault();\n\n  if (!editBtn.classList.contains('hidden')) {\n    return;\n  }\n\n  const title = document.getElementById('task-title').value;\n  const description = document.getElementById('task-description').value;\n  const dueDate = document.getElementById('task-due-date').value;\n  const priority = document.getElementById('task-priority').value;\n\n  const errorMessage = document.getElementById('error-message');\n\n  if (!title || !description || !dueDate || !priority) {\n    errorMessage.textContent = 'Please fill out all required fields.';\n    errorMessage.classList.remove('hidden');\n\n    setTimeout(() => {\n      errorMessage.classList.add('hidden');\n    }, 5000);\n\n    return;\n  } else {\n    errorMessage.classList.add('hidden');\n  }\n\n  const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title, description, dueDate, priority);\n\n  storedTasks.push(newTask);\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveTasksToLocalStorage)(storedTasks);\n  renderTasks(storedTasks);\n  taskDialog.classList.remove('active');\n  taskForm.reset();\n});\n\nconst deleteTask = (taskId) => {\n  const taskIndex = storedTasks.findIndex(task => task.id === parseInt(taskId));\n\n  if (taskIndex !== -1) {\n    storedTasks.splice(taskIndex, 1);\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveTasksToLocalStorage)(storedTasks);\n  }\n};\n\nconst addDeleteFunctionality = (taskElement) => {\n  const deleteIcon = taskElement.querySelector('.taskbox-delete i');\n  deleteIcon.addEventListener('click', () => {\n    const taskId = taskElement.dataset.taskId;\n    deleteTask(taskId);\n    taskElement.remove();\n  });\n};\n\nconst openEditDialog = (task) => {\n  document.getElementById('task-title').value = task.title;\n  document.getElementById('task-description').value = task.description;\n  document.getElementById('task-due-date').value = task.dueDate;\n  document.getElementById('task-notes').value = task.notes;\n  document.getElementById('task-priority').value = task.priority;\n\n  taskDialog.classList.add('active');\n\n  doneBtn.classList.add('hidden');\n  editBtn.classList.remove('hidden');\n\n  editBtn.onclick = (event) => {\n    event.preventDefault();\n\n    task.title = document.getElementById('task-title').value;\n    task.description = document.getElementById('task-description').value;\n    task.dueDate = document.getElementById('task-due-date').value;\n    task.notes = document.getElementById('task-notes').value;\n    task.priority = document.getElementById('task-priority').value;\n\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveTasksToLocalStorage)(storedTasks);\n\n    renderTasks(storedTasks);\n\n    taskDialog.classList.remove('active');\n    taskForm.reset();\n\n    editBtn.classList.add('hidden');\n    doneBtn.classList.remove('hidden');\n  };\n};\n\nconst addTaskBoxClickFunctionality = (taskElement, task) => {\n  taskElement.addEventListener('click', (event) => {\n    if (!event.target.classList.contains('fa-trash-can')) {\n      openEditDialog(task);\n    }\n  });\n};\n\n\nrenderTasks(storedTasks);\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadTasksFromLocalStorage: () => (/* binding */ loadTasksFromLocalStorage),\n/* harmony export */   saveTasksToLocalStorage: () => (/* binding */ saveTasksToLocalStorage)\n/* harmony export */ });\nconst STORAGE_KEY = 'tasks';\n\nconst saveTasksToLocalStorage = (tasks) => {\n  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));\n};\n\nconst loadTasksFromLocalStorage = () => {\n  const tasksData = localStorage.getItem(STORAGE_KEY);\n  return tasksData ? JSON.parse(tasksData) : [];\n};\n\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\n    constructor(title, description, dueDate, priority, notes = '') {\n        this.id = Date.now();\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.notes = notes;\n        this.completed = false;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ }),

/***/ "./src/taskSorter.js":
/*!***************************!*\
  !*** ./src/taskSorter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   filterTasks: () => (/* binding */ filterTasks)\n/* harmony export */ });\nfunction filterTasks(tasks, filter) {\n    const currentDate = new Date();\n    const startOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));\n  \n    switch (filter) {\n      case 'all':\n        return tasks;\n      case 'today':\n        return tasks.filter(task => new Date(task.dueDate).toDateString() === new Date().toDateString());\n      case 'week':\n        return tasks.filter(task => {\n          const taskDate = new Date(task.dueDate);\n          return taskDate >= startOfWeek && taskDate <= new Date(currentDate.setDate(currentDate.getDate() + 6));\n        });\n      case 'important':\n        return tasks.filter(task => task.priority === 'high');\n      case 'expired':\n        return tasks.filter(task => new Date(task.dueDate) < new Date());\n      default:\n        return tasks;\n    }\n  }\n  \n\n//# sourceURL=webpack://todo-list/./src/taskSorter.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);