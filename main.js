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

eval("const element = document.querySelector('.slider');\nconst imgs = document.querySelectorAll('.frame')\nconst dots = document.querySelectorAll('.dot')\nlet rightPosition = \"0px\";\nlet i = 0;\n\n\nconst moveRight = function () { \n   if(element.classList.contains('active-left')){\n      element.classList.remove('active-left')\n   }\n   element.classList.add('active-right')\n   if(imgs[i+1]){\n      rightPosition = (parseInt(rightPosition == null ? 0 : rightPosition) - 700 )+\"px\"\n      console.log(rightPosition)\n      element.style.transform = `translateX(${rightPosition})`\n      i++\n   }\n   imgs.forEach(el => el.classList.remove('on'))\n   dots.forEach(el => el.classList.remove('clicked'))\n   imgs[i].classList.add('on')\n   dots[i].classList.add('clicked')\n}\nconst moveLeft = function () {\n   if(element.classList.contains('active-right')){\n      element.classList.remove('active-right')\n   }\n   element.classList.add('active-left')\n   if(imgs[i-1]){\n      rightPosition = (parseInt(rightPosition == null ? 0 : rightPosition) + 700 )+\"px\"\n      console.log(rightPosition)\n      element.style.transform = `translateX(${rightPosition})`\n      i--\n   }\n   imgs.forEach(el => el.classList.remove('on'))\n   dots.forEach(el => el.classList.remove('clicked'))\n   imgs[i].classList.add('on')\n   dots[i].classList.add('clicked')\n}\n\nconst dotNavigation = function () {\n   if(document.querySelector('.clicked')){\n      if(document.querySelector('.clicked').id < this.id){\n         for (let b = document.querySelector('.clicked').id; b < this.id; b++) {\n           moveRight()\n           \n         }\n      }\n      if(document.querySelector('.clicked').id > this.id){\n         for (let b = document.querySelector('.clicked').id; b > this.id; b--) {\n           moveLeft()\n           \n         }\n      }\n      \n\n   }\n   if(!document.querySelector('.clicked')){\n      for (let b = 0; b < this.id; b++) {\n           moveRight()\n           \n         }\n   \n   }\n\n   dots.forEach(el => el.classList.remove('clicked'))\n   this.classList.add('clicked')\n      \n}\n\n\nconst nextButton = document.querySelector('.next')\nnextButton.addEventListener('click', moveRight)\n\nconst previousButton = document.querySelector('.previous')\npreviousButton.addEventListener('click', moveLeft)\n\ndots.forEach(el => el.addEventListener('click', dotNavigation))\n\n//# sourceURL=webpack://image-slider/./src/index.js?");

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