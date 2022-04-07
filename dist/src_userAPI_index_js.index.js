"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkapp1"] = self["webpackChunkapp1"] || []).push([["src_userAPI_index_js"],{

/***/ "./src/userAPI/index.js":
/*!******************************!*\
  !*** ./src/userAPI/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUsers\": () => (/* binding */ getUsers)\n/* harmony export */ });\nconst ENDPOINT = 'https:/jsonplaceholder.typicode.com/users/';\r\n\r\nfunction getUsers(){\r\n    return fetch(ENDPOINT)\r\n    .then(res=>{\r\n        if(!res.ok) throw Error(res.statusText);\r\n        return res.json()\r\n    })\r\n    .then(json=>json);\r\n}\n\n//# sourceURL=webpack://app1/./src/userAPI/index.js?");

/***/ })

}]);