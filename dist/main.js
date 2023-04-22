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

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("const contactBtn = document.querySelector('.contactBtn')\r\nconst startTime = new Date().getTime();\r\n\r\ncontactBtn.addEventListener('click',function() {\r\n    alert('coming soon');\r\n});\r\n\r\n\r\nfunction showVisitsNumber(){\r\n    \r\n    if (localStorage.getItem('visits_number') == null){\r\n        localStorage.setItem('visits_number', 1);\r\n        localStorage.setItem('total session duration', 0);\r\n        console.log(`This is Your first visit of this web-site`);\r\n        \r\n    }else{\r\n        let visits_number = localStorage.getItem('visits_number');\r\n        visits_number++;\r\n        localStorage.setItem('visits_number', visits_number);\r\n        console.log(`You visited this web-site ${visits_number} time(s)`);\r\n    }\r\n\r\n}\r\n\r\nfunction showAvgTimeOnPage(){\r\n    let currentTimeOnPage = +(localStorage.getItem('total session duration'));\r\n    let LastSessionDuration = +(localStorage.getItem('last session duration'));\r\n    let newTimeOnPage = currentTimeOnPage + LastSessionDuration;\r\n    let AvgSession =  newTimeOnPage/+(localStorage.getItem('visits_number'));\r\n    localStorage.setItem('total session duration', newTimeOnPage);\r\n    console.log(`Your Average session length is ${AvgSession.toFixed(2)} seconds`);\r\n}\r\n\r\nwindow.addEventListener('beforeunload',function(){\r\n    let closeTime = new Date().getTime();\r\n    let sessionDuration = (closeTime-startTime)/1000;\r\n    this.localStorage.setItem('last session duration',sessionDuration);\r\n})\r\n\r\nshowVisitsNumber();\r\nshowAvgTimeOnPage();\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://my_portfolio/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;