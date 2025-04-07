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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style-sheet.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style-sheet.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Reset */\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: Arial, sans-serif;\r\n}\r\n\r\n/* Mise en page globale */\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100vh;\r\n    background-color: #f8f8f8;\r\n    color: #333;\r\n}\r\n\r\n/* Navigation */\r\nheader {\r\n    background-color: #4a4a4a;\r\n    padding: 20px 0;\r\n    text-align: center;\r\n}\r\n\r\nnav button {\r\n    background: none;\r\n    border: 2px solid white;\r\n    color: white;\r\n    font-size: 18px;\r\n    padding: 12px 24px;\r\n    margin: 0 10px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n}\r\n\r\nnav button:hover {\r\n    background-color: white;\r\n    color: #4a4a4a;\r\n}\r\n\r\n/* Contenu principal */\r\n#content {\r\n    flex-grow: 1;\r\n    /* Cet élément prendra tout l'espace disponible */\r\n    max-width: 1000px;\r\n    margin: 50px auto;\r\n    padding: 30px;\r\n    background: white;\r\n    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);\r\n    border-radius: 10px;\r\n}\r\n\r\n/* Section Horaires */\r\n.content-hours {\r\n    background: #fffaef;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.content-hours h2 {\r\n    color: #cc5500;\r\n    font-size: 24px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n/* Grid pour les horaires */\r\n.hours-grid {\r\n    display: grid;\r\n    grid-template-columns: auto 1fr;\r\n    gap: 10px 20px;\r\n    font-size: 18px;\r\n    text-align: left;\r\n    justify-content: center;\r\n    max-width: 300px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.content-title {\r\n    font-size: 32px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n    color: #cc5500;\r\n}\r\n\r\n/* Sections */\r\n.content-hours,\r\n.content-address,\r\n.content-specialties,\r\n.content-values,\r\n.content-testimonials {\r\n    margin-top: 30px;\r\n    padding: 20px;\r\n    background: #fffaef;\r\n    border-radius: 10px;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n    color: #cc5500;\r\n    font-size: 24px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n/* Images */\r\n.specialty {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.specialty img {\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 10px;\r\n}\r\n\r\n/* Témoignages */\r\nblockquote {\r\n    font-style: italic;\r\n    text-align: center;\r\n    padding: 15px;\r\n    background: #f4f4f4;\r\n    border-radius: 5px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n/* Présentation */\r\n.content-presentation {\r\n    background: #fffaef;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    font-size: 18px;\r\n    line-height: 1.8;\r\n    text-align: center;\r\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\r\n    margin-bottom: 30px;\r\n}\r\n\r\n/* Localisation */\r\n.content-address {\r\n    background: #fffaef;\r\n    padding: 15px;\r\n    border-radius: 8px;\r\n    font-size: 18px;\r\n    text-align: center;\r\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.content-address::before {\r\n    content: \"📍 Localisation\";\r\n    display: block;\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n    color: #cc5500;\r\n    margin-bottom: 15px;\r\n    /* Ajouté pour uniformiser l'espacement */\r\n    text-align: center;\r\n}\r\n\r\n.content-values {\r\n    text-align: center;\r\n    font-size: 18px;\r\n\r\n}\r\n\r\n\r\n/* Pied de page */\r\nfooter {\r\n    background-color: #4a4a4a;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 20px 0;\r\n    font-size: 16px;\r\n    margin-top: 50px;\r\n}\r\n\r\nfooter a {\r\n    color: #ffcc00;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n}\r\n\r\nfooter a:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n/* CSS à partir de Menu */\r\nh3 {\r\n    color: #cc5500;\r\n    font-size: 24px;\r\n    margin-bottom: 15px;\r\n    text-align: center;\r\n}\r\n\r\n.drink-item,\r\n.starter-item,\r\n.main-item,\r\n.dessert-item {\r\n    background: #fffaef;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.drink-menu,\r\n.starter-menu,\r\n.main-menu,\r\n.dessert-menu {\r\n    font-size: 32px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n    color: #cc5500;\r\n    margin-top: 15px;\r\n}\r\n\r\n.drink-menu:hover,\r\n.starter-menu:hover,\r\n.main-menu:hover,\r\n.dessert-menu:hover {\r\n    color: #4a4a4a;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n}\r\n\r\n/* CSS pour l'onglet contact */\r\n\r\n.contact {\r\n    background: #fffaef;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\r\n    margin-bottom: 20px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-practice/./src/style-sheet.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-practice/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-practice/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-practice/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-practice/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-practice/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-practice/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-practice/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-practice/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\r\n\r\nconst content = document.getElementById(\"content\");\r\ncontent.innerHTML = \"\"; // Nettoie le contenu précédent\r\n\r\nfunction addContact(container, name, description, telephone){\r\n    const contact = document.createElement(\"div\");\r\n    contact.classList.add(\"contact\");\r\n\r\n    const title = document.createElement(\"h3\");\r\n    title.textContent = name; \r\n    title.classList.add(\"contact-title\"); \r\n\r\n    const para = document.createElement(\"p\");\r\n    para.innerHTML = `${description}`;\r\n    para.classList.add(\"contact-description\");\r\n\r\n    const phone = document.createElement(\"p\");\r\n    phone.innerHTML = `<strong>Contact : ${telephone}</strong>`;\r\n    phone.classList.add(\"telephone\");\r\n\r\n    content.appendChild(contact);\r\n    contact.appendChild(title);\r\n    contact.appendChild(para);\r\n    contact.appendChild(phone);\r\n}\r\n\r\naddContact(content, \"Jenny Chen\", \"Manager du restaurant, passionnée de cuisine taïwanaise depuis son enfance. Elle veille à la qualité du service et à l’authenticité de chaque plat servi.\", \"0654859213\")\r\naddContact(content, \"Lucas Wang\", \"Chef cuisinier formé à Taipei, Lucas revisite les classiques taïwanais avec une touche moderne. Il est à l’origine de toutes les recettes de la maison.\", \"0785421596\")\r\naddContact(content, \"Mei Lin\", \"Responsable de la communication et du design. Mei s’occupe des réseaux sociaux, des visuels du menu et adore partager les coulisses du restaurant avec la communauté.\", \"0652442987\")\r\n};\n\n//# sourceURL=webpack://webpack-practice/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n// src/home.js\r\n\r\nfunction createElementWithText(tag, className, textContent) {\r\n\r\n  const element = document.createElement(tag);\r\n  if (className) element.classList.add(className);\r\n  if (textContent) element.innerHTML = textContent;\r\n  return element;\r\n  }\r\n  \r\n  function createGridContent(content){\r\n    const grid = document.createElement(\"div\");\r\n    grid.classList.add(\"hours-grid\");\r\n    grid.innerHTML = content;\r\n    return grid; \r\n  }\r\n  \r\n  function loadHome() {\r\n      const content = document.getElementById(\"content\");\r\n      content.innerHTML = \"\"; // Nettoyage au cas où\r\n      content.appendChild(createElementWithText(\"div\", \"content-title\", \"Formosa Bites\"));\r\n      content.appendChild(createElementWithText(\"div\", \"content-presentation\", \r\n        \"Chez Formosa Bites, nous vous proposons une expérience authentique de la street food taïwanaise. Dégustez nos gua bao moelleux, nos bentos savoureux et nos célèbres bubble teas, le tout dans une ambiance chaleureuse rappelant les rues animées de Taipei.\"));\r\n    \r\n      const contentHours = createElementWithText(\"div\", \"content-hours\");\r\n      const hoursTitle2 = createElementWithText(\"h2\", \"\", \"🕒 Horaires d'ouverture\");\r\n      const hoursGrid = createGridContent(`\r\n        <span>Dimanche :</span> <span>11h - 22h</span>\r\n        <span>Lundi :</span> <span>11h - 15h</span>\r\n        <span>Mardi :</span> <span>11h - 15h</span>\r\n        <span>Mercredi :</span> <span>11h - 22h</span>\r\n        <span>Jeudi :</span> <span>11h - 22h</span>\r\n        <span>Vendredi :</span> <span>11h - 23h</span>\r\n        <span>Samedi :</span> <span>11h - 23h</span>\r\n      `);\r\n      contentHours.appendChild(hoursTitle2);\r\n      contentHours.appendChild(hoursGrid);\r\n      content.appendChild(contentHours);\r\n    \r\n      content.appendChild(createElementWithText(\"div\", \"content-address\", \"88 Rue de Taipei, Quartier Asiatique, Paris\"));\r\n    \r\n      const contentValues = createElementWithText(\"div\", \"content-values\");\r\n      const valuesTitle2 = createElementWithText(\"h2\", \"\", \"Nos valeurs\");\r\n      const valuesPara = createElementWithText(\"p\", \"\", \"Chez <strong>Formosa Bites</strong>, nous mettons un point d’honneur à utiliser des <strong>ingrédients frais et authentiques</strong>. Nos plats sont préparés selon des recettes traditionnelles taïwanaises, pour vous offrir un goût inoubliable.\");\r\n      contentValues.appendChild(valuesTitle2);\r\n      contentValues.appendChild(valuesPara);\r\n      content.appendChild(contentValues);\r\n    \r\n      const contentTestimonials = createElementWithText(\"div\", \"content-testimonials\");\r\n      const testimonialsTitle2 = createElementWithText(\"h2\", \"\", \"Ce que disent nos clients\");\r\n      const testimonialsPara = createElementWithText(\"p\", \"\", `\r\n        <blockquote>“Le Bubble Tea est excellent et les perles ont la texture parfaite.”</blockquote><br>\r\n        <blockquote>“Les meilleurs Gua Bao que j’ai mangés en dehors de Taïwan ! Un pur délice.”</blockquote><br>\r\n        <blockquote>“Ambiance chaleureuse et plats incroyables. J’y retournerai sans hésiter !”</blockquote>\r\n      `);\r\n      contentTestimonials.appendChild(testimonialsTitle2);\r\n      contentTestimonials.appendChild(testimonialsPara);\r\n      content.appendChild(contentTestimonials);\r\n    }\r\n  \n\n//# sourceURL=webpack://webpack-practice/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _style_sheet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style-sheet.css */ \"./src/style-sheet.css\");\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Affichage de la page d'acceuil\r\n});\r\n\r\n// Cibler les boutons\r\nconst btnHome = document.getElementById(\"btnHome\");\r\nconst btnMenu = document.getElementById(\"btnMenu\");\r\nconst btnContact = document.getElementById(\"btnContact\");\r\n\r\nbtnHome.addEventListener(\"click\", _home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\nbtnMenu.addEventListener(\"click\", _menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\nbtnContact.addEventListener(\"click\", _contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack://webpack-practice/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\r\n\r\nconst content = document.getElementById(\"content\");\r\ncontent.innerHTML = \"\"; // Nettoie le contenu précédent\r\n\r\n// Titre principal du menu pour les boissons\r\nconst drinkMenu = document.createElement(\"div\");\r\ndrinkMenu.classList.add(\"drink-menu\");\r\ndrinkMenu.textContent = \"Nos boissons\";\r\ncontent.appendChild(drinkMenu);\r\n\r\n// BOISSONS\r\nfunction addDrink(container, name, description, price){\r\n    const drinkItem = document.createElement(\"div\");\r\n    drinkItem.classList.add(\"drink-item\");\r\n\r\n    const title = document.createElement(\"h3\");\r\n    title.textContent = name;\r\n    title.classList.add(\"drink-title\");\r\n\r\n    const para = document.createElement(\"p\");\r\n    para.innerHTML = `${description}<br><strong>${price}€</strong>`;\r\n    para.classList.add(\"drink-description\");\r\n\r\n    drinkItem.appendChild(title);\r\n    drinkItem.appendChild(para);\r\n    container.appendChild(drinkItem);\r\n}\r\n\r\naddDrink(content, \"Bubble Tea Classique\", \"Notre incontournable ! Thé noir ou vert au lait avec perles de tapioca, sucré juste comme il faut.\", 3);\r\naddDrink(content, \"Thé au lait Taro\", \"Crémeux, légèrement sucré, et délicieusement violet. Fait avec du vrai taro pour un goût authentique.\", 5);\r\naddDrink(content, \"Jus de prune glacé\", \"Un classique rafraîchissant à la saveur douce-acide, parfait pour les journées chaudes.\", 2.5);\r\n\r\n// Titre principal du menu pour les entrées\r\nconst starterMenu = document.createElement(\"div\");\r\nstarterMenu.classList.add(\"starter-menu\");\r\nstarterMenu.textContent = \"Nos entrées\";\r\ncontent.appendChild(starterMenu);\r\n\r\n// ENTRÉES\r\nfunction addStarters(container, name, description, price){\r\n    const starterItem = document.createElement(\"div\");\r\n    starterItem.classList.add(\"starter-item\");\r\n\r\n    const title = document.createElement(\"h3\");\r\n    title.textContent = name;\r\n    title.classList.add(\"starter-title\");\r\n\r\n    const para = document.createElement(\"p\");\r\n    para.innerHTML = `${description}<br><strong>${price}€</strong>`;\r\n    para.classList.add(\"starter-description\");\r\n\r\n    starterItem.appendChild(title);\r\n    starterItem.appendChild(para);\r\n    container.appendChild(starterItem);\r\n}\r\n\r\naddStarters(content, \"Gua Bao (1 pièce)\", \"Petit pain vapeur garni de porc fondant, cacahuètes moulues, coriandre et pickles.\", 4);\r\naddStarters(content, \"Rouleaux de printemps taïwanais\", \"Rouleaux frais garnis de légumes croquants, tofu, et herbes fraîches, servis avec une sauce à la cacahuète.\", 3.5);\r\naddStarters(content, \"Soupe miso aux algues\", \"Un bol de bouillon léger aux algues wakame, tofu et ciboulette.\", 3);\r\n\r\n// Titre principal pour les plats principaux\r\nconst mainMenu = document.createElement(\"div\");\r\nmainMenu.classList.add(\"main-menu\");\r\nmainMenu.textContent = \"Nos Plats\";\r\ncontent.appendChild(mainMenu);\r\n\r\n// PLATS PRINCIPAUX\r\nfunction addMainDish(container, name, description, price) {\r\n    const mainItem = document.createElement(\"div\");\r\n    mainItem.classList.add(\"main-item\");\r\n\r\n    const title = document.createElement(\"h3\");\r\n    title.textContent = name;\r\n    title.classList.add(\"main-title\");\r\n\r\n    const para = document.createElement(\"p\");\r\n    para.innerHTML = `${description}<br><strong>${price}€</strong>`;\r\n    para.classList.add(\"main-description\");\r\n\r\n    mainItem.appendChild(title);\r\n    mainItem.appendChild(para);\r\n    container.appendChild(mainItem);\r\n}\r\n\r\naddMainDish(content, \"Bento au poulet croustillant\", \"Poulet frit façon taïwanaise, riz parfumé, légumes sautés et œuf mariné. Le classique !\", 9);\r\naddMainDish(content, \"Nouilles au bœuf\", \"Nouilles faites maison dans un bouillon riche au bœuf mijoté, avec légumes et ciboulette.\", 10);\r\naddMainDish(content, \"Tofu braisé et légumes\", \"Option végétarienne : tofu mariné et braisé, servi avec du riz, légumes et sauce soja sucrée.\", 8);\r\n\r\n// Titre principal pour les desserts\r\nconst dessertMenu = document.createElement(\"div\");\r\ndessertMenu.classList.add(\"dessert-menu\");\r\ndessertMenu.textContent = \"Nos Desserts\";\r\ncontent.appendChild(dessertMenu);\r\n\r\n// DESSERTS\r\nfunction addDessert(container, name, description, price) {\r\n    const dessertItem = document.createElement(\"div\");\r\n    dessertItem.classList.add(\"dessert-item\");\r\n\r\n    const title = document.createElement(\"h3\");\r\n    title.textContent = name;\r\n    title.classList.add(\"dessert-title\");\r\n\r\n    const para = document.createElement(\"p\");\r\n    para.innerHTML = `${description}<br><strong>${price}€</strong>`;\r\n    para.classList.add(\"dessert-description\");\r\n\r\n    dessertItem.appendChild(title);\r\n    dessertItem.appendChild(para);\r\n    container.appendChild(dessertItem);\r\n}\r\n\r\naddDessert(content, \"Douhua (tofu soyeux sucré)\", \"Un dessert léger à base de tofu soyeux nappé de sirop de sucre brun et perles de tapioca.\", 3);\r\naddDessert(content, \"Mochis glacés\", \"Boules glacées enveloppées dans une pâte de riz douce. Parfaits pour finir sur une touche sucrée.\", 2.5);\r\n};\n\n//# sourceURL=webpack://webpack-practice/./src/menu.js?");

/***/ }),

/***/ "./src/style-sheet.css":
/*!*****************************!*\
  !*** ./src/style-sheet.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_sheet_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style-sheet.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style-sheet.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_sheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_sheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_sheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_sheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-practice/./src/style-sheet.css?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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