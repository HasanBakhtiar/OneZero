"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/character/[slug]",{

/***/ "./pages/character/[slug].js":
/*!***********************************!*\
  !*** ./pages/character/[slug].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _this = undefined;\nvar CharacterDetail = function(param) {\n    var character = param.character;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Charachter Details Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hasan\\\\OneDrive\\\\Desktop\\\\MatrixGroups\\\\OneZero\\\\JavaScript\\\\NextJS\\\\lesson2-fetch-api\\\\pages\\\\character\\\\[slug].js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: character.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hasan\\\\OneDrive\\\\Desktop\\\\MatrixGroups\\\\OneZero\\\\JavaScript\\\\NextJS\\\\lesson2-fetch-api\\\\pages\\\\character\\\\[slug].js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fiqure\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: character.image,\n                    alt: character.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\hasan\\\\OneDrive\\\\Desktop\\\\MatrixGroups\\\\OneZero\\\\JavaScript\\\\NextJS\\\\lesson2-fetch-api\\\\pages\\\\character\\\\[slug].js\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hasan\\\\OneDrive\\\\Desktop\\\\MatrixGroups\\\\OneZero\\\\JavaScript\\\\NextJS\\\\lesson2-fetch-api\\\\pages\\\\character\\\\[slug].js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hasan\\\\OneDrive\\\\Desktop\\\\MatrixGroups\\\\OneZero\\\\JavaScript\\\\NextJS\\\\lesson2-fetch-api\\\\pages\\\\character\\\\[slug].js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, _this));\n};\n_c = CharacterDetail;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CharacterDetail);\nvar _c;\n$RefreshReg$(_c, \"CharacterDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGFyYWN0ZXIvW3NsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS0EsR0FBSyxDQUFDQSxlQUFlLEdBQUcsUUFBUSxRQUFPLENBQUM7UUFBZEMsU0FBUyxTQUFUQSxTQUFTO0lBQy9CLE1BQU0sNkVBQ0RDLENBQUc7O3dGQUNDQyxDQUFFOzBCQUFDLENBQXVCOzs7Ozs7d0ZBQzFCRCxDQUFHOzBCQUFFRCxTQUFTLENBQUNHLElBQUk7Ozs7Ozt3RkFDbkJDLENBQU07c0dBQ0ZDLENBQUc7b0JBQUNDLEdBQUcsRUFBRU4sU0FBUyxDQUFDTyxLQUFLO29CQUFFQyxHQUFHLEVBQUVSLFNBQVMsQ0FBQ0csSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUQsQ0FBQztLQVZLSixlQUFlOztBQXNDckIsK0RBQWVBLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVyL1tzbHVnXS5qcz84ZGNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1bmZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBzbHVnIGZyb20gJ3NsdWcnO1xyXG5cclxuXHJcblxyXG5jb25zdCBDaGFyYWN0ZXJEZXRhaWwgPSAoe2NoYXJhY3Rlcn0pPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPkNoYXJhY2h0ZXIgRGV0YWlscyBQYWdlPC9oMT5cclxuICAgICAgICAgICAgPGRpdj57Y2hhcmFjdGVyLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxmaXF1cmU+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2hhcmFjdGVyLmltYWdlfSBhbHQ9e2NoYXJhY3Rlci5uYW1lfSAvPlxyXG4gICAgICAgICAgICA8L2ZpcXVyZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL1wiKTtcclxuICAgIGNvbnN0IGNoYXJhY3RlcnMgPSBhd2FpdCBkYXRhLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczpjaGFyYWN0ZXJzLnJlc3VsdHMubWFwKGNoYXJhY3RlciA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge3BhcmFtczp7c2x1ZzpgJHtzbHVnKGNoYXJhY3Rlci5uYW1lKX0tJHtjaGFyYWN0ZXIuaWR9YH19XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlIFxyXG4gIH07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pIHtcclxuICAgIC8vIGRhdGEgZmV0Y2hcclxuICAgY29uc3QgaWQgPSBwYXJhbXMuc2x1Zy5zcGxpdCgnLScpLnNsaWNlKC0xKVswXVxyXG4gICBjb25zdCBkYXRhID0gYXdhaXQgdW5mZXRjaChcImh0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyL1wiK2lkKTtcclxuICAgIGNvbnN0IGNoYXJhY3RlciA9IGF3YWl0IGRhdGEuanNvbigpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBjaGFyYWN0ZXJcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlckRldGFpbCJdLCJuYW1lcyI6WyJDaGFyYWN0ZXJEZXRhaWwiLCJjaGFyYWN0ZXIiLCJkaXYiLCJoMSIsIm5hbWUiLCJmaXF1cmUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/character/[slug].js\n");

/***/ })

});