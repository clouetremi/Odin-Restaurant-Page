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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n// src/home.js\r\n\r\nfunction createElementWithText(tag, className, textContent) {\r\n\r\n  const element = document.createElement(tag);\r\n  if (className) element.classList.add(className);\r\n  if (textContent) element.textContent = textContent;\r\n  return element;\r\n  }\r\n  \r\n  function createGridContent(content){\r\n    const grid = document.createElement(\"div\");\r\n    grid.classList.add(\"hours-grid\");\r\n    grid.innerHTML = content;\r\n    return grid; \r\n  }\r\n  \r\n  function loadHome() {\r\n      const content = document.getElementById(\"content\");\r\n      content.innerHTML = \"\"; // Nettoyage au cas où\r\n      content.appendChild(createElementWithText(\"div\", \"content-title\", \"Formosa Bites\"));\r\n      content.appendChild(createElementWithText(\"div\", \"content-presentation\", \r\n        \"Chez Formosa Bites, nous vous proposons une expérience authentique de la street food taïwanaise. Dégustez nos gua bao moelleux, nos bentos savoureux et nos célèbres bubble teas, le tout dans une ambiance chaleureuse rappelant les rues animées de Taipei.\"));\r\n    \r\n      const contentHours = createElementWithText(\"div\", \"content-hours\");\r\n      const hoursTitle2 = createElementWithText(\"h2\", \"\", \"🕒 Horaires d'ouverture\");\r\n      const hoursGrid = createGridContent(`\r\n        <span>Dimanche :</span> <span>11h - 22h</span>\r\n        <span>Lundi :</span> <span>11h - 15h</span>\r\n        <span>Mardi :</span> <span>11h - 15h</span>\r\n        <span>Mercredi :</span> <span>11h - 22h</span>\r\n        <span>Jeudi :</span> <span>11h - 22h</span>\r\n        <span>Vendredi :</span> <span>11h - 23h</span>\r\n        <span>Samedi :</span> <span>11h - 23h</span>\r\n      `);\r\n      contentHours.appendChild(hoursTitle2);\r\n      contentHours.appendChild(hoursGrid);\r\n      content.appendChild(contentHours);\r\n    \r\n      content.appendChild(createElementWithText(\"div\", \"content-address\", \"88 Rue de Taipei, Quartier Asiatique, Paris\"));\r\n    \r\n      const contentValues = createElementWithText(\"div\", \"content-values\");\r\n      const valuesTitle2 = createElementWithText(\"h2\", \"\", \"Nos valeurs\");\r\n      const valuesPara = createElementWithText(\"p\", \"\", \"Chez <strong>Formosa Bites</strong>, nous mettons un point d’honneur à utiliser des <strong>ingrédients frais et authentiques</strong>. Nos plats sont préparés selon des recettes traditionnelles taïwanaises, pour vous offrir un goût inoubliable.\");\r\n      contentValues.appendChild(valuesTitle2);\r\n      contentValues.appendChild(valuesPara);\r\n      content.appendChild(contentValues);\r\n    \r\n      const contentTestimonials = createElementWithText(\"div\", \"content-testimonials\");\r\n      const testimonialsTitle2 = createElementWithText(\"h2\", \"\", \"Ce que disent nos clients\");\r\n      const testimonialsPara = createElementWithText(\"p\", \"\", `\r\n        <blockquote>“Le Bubble Tea est excellent et les perles ont la texture parfaite.”</blockquote><br>\r\n        <blockquote>“Les meilleurs Gua Bao que j’ai mangés en dehors de Taïwan ! Un pur délice.”</blockquote><br>\r\n        <blockquote>“Ambiance chaleureuse et plats incroyables. J’y retournerai sans hésiter !”</blockquote>\r\n      `);\r\n      contentTestimonials.appendChild(testimonialsTitle2);\r\n      contentTestimonials.appendChild(testimonialsPara);\r\n      content.appendChild(contentTestimonials);\r\n    }\r\n  \n\n//# sourceURL=webpack://webpack-practice/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Affichage de la page d'acceuil\r\n});\r\n\r\n// Cibler les boutons\r\nconst btnHome = document.getElementById(\"btnHome\");\r\nconst btnMenu = document.getElementById(\"btnMenu\");\r\nconst btnContact = document.getElementById(\"btnContact\");\r\n\r\nbtnHome.addEventListener(\"click\", _home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\nbtnMenu.addEventListener(\"click\", _menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\nbtnContact.addEventListener(\"click\", _contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack://webpack-practice/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\r\n\r\nconst content = document.getElementById(\"content\");\r\ncontent.innerHTML = \"\"; // Nettoie le contenu précédent\r\n\r\n// Titre principal du menu pour les boissons\r\nconst drinkMenu = document.createElement(\"div\");\r\ndrinkMenu.classList.add(\"drink-menu\");\r\ndrinkMenu.textContent = \"Nos boissons\";\r\ncontent.appendChild(drinkMenu);\r\n\r\n// BOISSONS\r\nfunction addDrink(container, name, description, price){\r\n    const drinkItem = document.createElement(\"div\");\r\n    drinkItem.classList.add(\"drink-item\");\r\n\r\n    const title = document.createElement(\"h3\");\r\n    title.textContent = name;\r\n    title.classList.add(\"drink-title\");\r\n\r\n    const para = document.createElement(\"p\");\r\n    para.innerHTML = `${description}<br><strong>${price}€</strong>`;\r\n    para.classList.add(\"drink-description\");\r\n\r\n    drinkItem.appendChild(title);\r\n    drinkItem.appendChild(para);\r\n    container.appendChild(drinkItem);\r\n}\r\n\r\naddDrink(content, \"Bubble Tea Classique\", \"Notre incontournable ! Thé noir ou vert au lait avec perles de tapioca, sucré juste comme il faut.\", 3);\r\naddDrink(content, \"Thé au lait Taro\", \"Crémeux, légèrement sucré, et délicieusement violet. Fait avec du vrai taro pour un goût authentique.\", 5);\r\naddDrink(content, \"Jus de prune glacé\", \"Un classique rafraîchissant à la saveur douce-acide, parfait pour les journées chaudes.\", 2.5);\r\n\r\n// Titre principal du menu pour les entrées\r\nconst starterMenu = document.createElement(\"div\");\r\nstarterMenu.classList.add(\"starter-menu\");\r\nstarterMenu.textContent = \"Nos entrées\";\r\ncontent.appendChild(starterMenu);\r\n\r\n// ENTRÉES\r\nfunction addStarters(container, name, description, price){\r\n    const starterItem = document.createElement(\"div\");\r\n    starterItem.classList.add(\"starter-item\");\r\n\r\n    const title = document.createElement(\"h3\");\r\n    title.textContent = name;\r\n    title.classList.add(\"starter-title\");\r\n\r\n    const para = document.createElement(\"p\");\r\n    para.innerHTML = `${description}<br><strong>${price}€</strong>`;\r\n    para.classList.add(\"starter-description\");\r\n\r\n    starterItem.appendChild(title);\r\n    starterItem.appendChild(para);\r\n    container.appendChild(starterItem);\r\n}\r\n\r\naddStarters(content, \"Gua Bao (1 pièce)\", \"Petit pain vapeur garni de porc fondant, cacahuètes moulues, coriandre et pickles.\", 4);\r\naddStarters(content, \"Rouleaux de printemps taïwanais\", \"Rouleaux frais garnis de légumes croquants, tofu, et herbes fraîches, servis avec une sauce à la cacahuète.\", 3.5);\r\naddStarters(content, \"Soupe miso aux algues\", \"Un bol de bouillon léger aux algues wakame, tofu et ciboulette.\", 3);\r\n\r\n// Titre principal pour les plats principaux\r\nconst mainMenu = document.createElement(\"div\");\r\nmainMenu.classList.add(\"main-menu\");\r\nmainMenu.textContent = \"Nos Plats\";\r\ncontent.appendChild(mainMenu);\r\n\r\n// PLATS PRINCIPAUX\r\nfunction addMainDish(container, name, description, price) {\r\n    const mainItem = document.createElement(\"div\");\r\n    mainItem.classList.add(\"main-item\");\r\n\r\n    const title = document.createElement(\"h3\");\r\n    title.textContent = name;\r\n    title.classList.add(\"main-title\");\r\n\r\n    const para = document.createElement(\"p\");\r\n    para.innerHTML = `${description}<br><strong>${price}€</strong>`;\r\n    para.classList.add(\"main-description\");\r\n\r\n    mainItem.appendChild(title);\r\n    mainItem.appendChild(para);\r\n    container.appendChild(mainItem);\r\n}\r\n\r\naddMainDish(content, \"Bento au poulet croustillant\", \"Poulet frit façon taïwanaise, riz parfumé, légumes sautés et œuf mariné. Le classique !\", 9);\r\naddMainDish(content, \"Nouilles au bœuf\", \"Nouilles faites maison dans un bouillon riche au bœuf mijoté, avec légumes et ciboulette.\", 10);\r\naddMainDish(content, \"Tofu braisé et légumes\", \"Option végétarienne : tofu mariné et braisé, servi avec du riz, légumes et sauce soja sucrée.\", 8);\r\n\r\n// Titre principal pour les desserts\r\nconst dessertMenu = document.createElement(\"div\");\r\ndessertMenu.classList.add(\"dessert-menu\");\r\ndessertMenu.textContent = \"Nos Desserts\";\r\ncontent.appendChild(dessertMenu);\r\n\r\n// DESSERTS\r\nfunction addDessert(container, name, description, price) {\r\n    const dessertItem = document.createElement(\"div\");\r\n    dessertItem.classList.add(\"dessert-item\");\r\n\r\n    const title = document.createElement(\"h3\");\r\n    title.textContent = name;\r\n    title.classList.add(\"dessert-title\");\r\n\r\n    const para = document.createElement(\"p\");\r\n    para.innerHTML = `${description}<br><strong>${price}€</strong>`;\r\n    para.classList.add(\"dessert-description\");\r\n\r\n    dessertItem.appendChild(title);\r\n    dessertItem.appendChild(para);\r\n    container.appendChild(dessertItem);\r\n}\r\n\r\naddDessert(content, \"Douhua (tofu soyeux sucré)\", \"Un dessert léger à base de tofu soyeux nappé de sirop de sucre brun et perles de tapioca.\", 3);\r\naddDessert(content, \"Mochis glacés\", \"Boules glacées enveloppées dans une pâte de riz douce. Parfaits pour finir sur une touche sucrée.\", 2.5);\r\n};\n\n//# sourceURL=webpack://webpack-practice/./src/menu.js?");

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