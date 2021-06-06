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

/***/ "./node_modules/calculate-levenshtein-distance/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/calculate-levenshtein-distance/index.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("function sortDataByLevenshteinDistance(data) {\r\n    var sortedData = data.slice(0);\r\n    sortedData.sort(function(a,b) {\r\n        return a.distance - b.distance;\r\n    });\r\n    return sortedData;\r\n}\r\n\r\nfunction createMatrix(m, n) {\r\n    var mtx = [];\r\n\r\n    for (let i = 0; i < m + 1; i++) {\r\n        mtx[i] = new Array(n);\r\n        mtx[i][0] = i;\r\n    }\r\n\r\n    for (let i = 0; i < n + 1; i++) {\r\n        mtx[0][i] = i;        \r\n    }\r\n\r\n    return mtx;\r\n}\r\n\r\nfunction calculateLevenshteinDistance(firstString, secondString) {\r\n    var D = createMatrix(firstString.length, secondString.length);\r\n\r\n    for (let i = 1; i < firstString.length + 1; i++) {\r\n        for (let j = 1; j < secondString.length + 1; j++) {\r\n            if (firstString[i - 1] == secondString[j - 1]) {\r\n                D[i][j] = D[i - 1][j - 1];\r\n            } else {\r\n                D[i][j] = Math.min(\r\n                    D[i - 1][j] + 1,\r\n                    D[i][j - 1] + 1,\r\n                    D[i - 1][j - 1] + 1\r\n                );\r\n            }\r\n        }\r\n    }        \r\n\r\n    return D[firstString.length][secondString.length];\r\n}\r\n\r\nfunction selectRelevantItems(data, selectedField, searchQuery) {\r\n    let selectedData = [];\r\n    const selectionCriteria = 4;\r\n    for (let i = 0; i < data.length; i++) {\r\n        const levenshteinDistance = calculateLevenshteinDistance(searchQuery, data[i][selectedField]);\r\n        if(levenshteinDistance < selectionCriteria) {\r\n            selectedData.push({\r\n                [selectedField]: data[i][selectedField],\r\n                'distance': levenshteinDistance\r\n            });\r\n        }\r\n    }\r\n    return sortDataByLevenshteinDistance(selectedData);\r\n}\r\n\r\nmodule.exports = { selectRelevantItems, calculateLevenshteinDistance };\n\n//# sourceURL=webpack://fuzzy-search/./node_modules/calculate-levenshtein-distance/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { selectRelevantItems, calculateLevenshteinDistance } = __webpack_require__(/*! calculate-levenshtein-distance */ \"./node_modules/calculate-levenshtein-distance/index.js\");\r\n\r\nasync function getCities() {\r\n    const response = await fetch('russia.json');\r\n    const cities = await response.json();\r\n    return cities;\r\n}\r\n\r\nfunction showCities(cities, citiesList) {\r\n    cities.forEach(city => {\r\n        let relevantCity = document.createElement('li');\r\n        relevantCity.innerText = city.city;\r\n        console.log(city);\r\n        citiesList.appendChild(relevantCity);\r\n    });    \r\n}  \r\n\r\nasync function findRelevantCities() {\r\n    const cities = await getCities();      \r\n    const citiesList = document.getElementById('searched-cities');\r\n    citiesList.innerHTML = '';    \r\n    if(this.value != '') {                        \r\n        const searchedCities = selectRelevantItems(cities, 'city', this.value);\r\n        showCities(searchedCities, citiesList);\r\n    }\r\n}\r\n\r\nasync function main() {    \r\n    const searchingInput = document.getElementById('search-input');\r\n    searchingInput.addEventListener('input', findRelevantCities);   \r\n}\r\n\r\nmain();\n\n//# sourceURL=webpack://fuzzy-search/./src/main.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;