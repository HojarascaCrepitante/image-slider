/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const element = document.querySelector('.slider');\nlet rightPosition = \"0px\";\n\nconst moveRight = function () { \n   if (rightPosition !== \"2100px\"){\n      rightPosition = (parseInt(rightPosition == null ? 0 : rightPosition) + 700 )+\"px\"\n      element.style.right = rightPosition\n   }\n}\nconst moveLeft = function () {\n   if(rightPosition !== \"0px\"){\n      rightPosition = (parseInt(rightPosition == null ? 0 : rightPosition) - 700 )+\"px\"\n      console.log(rightPosition)\n      element.style.right = rightPosition\n   }\n}\n\nconst nextButton = document.querySelector('.next')\nnextButton.addEventListener('click', moveRight)\n\nconst previousButton = document.querySelector('.previous')\npreviousButton.addEventListener('click', moveLeft)\n\n//# sourceURL=webpack://image-slider/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;