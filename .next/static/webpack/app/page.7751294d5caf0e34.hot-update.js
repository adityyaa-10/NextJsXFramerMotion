"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "./sections/About.jsx":
/*!****************************!*\
  !*** ./sections/About.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\n\n\nconst About = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].paddings, \" relative z-10\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gradient-02 z-0\"\n            }, void 0, false, {\n                fileName: \"/home/adityyaa-10/Desktop/NextJsXFramerMotion/sections/About.jsx\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                variants: _utils_motion__WEBPACK_IMPORTED_MODULE_3__.staggerContainer,\n                initial: \"hidden\",\n                whileInView: \"show\",\n                viewport: {\n                    once: false,\n                    amount: 0.25\n                },\n                className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].innerWidth, \" mx-auto \").concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].flexCenter, \" flex-col\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.TypingText, {\n                    title: \"| About Metaversus\",\n                    textStyles: \"\"\n                }, void 0, false, {\n                    fileName: \"/home/adityyaa-10/Desktop/NextJsXFramerMotion/sections/About.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/adityyaa-10/Desktop/NextJsXFramerMotion/sections/About.jsx\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, undefined),\n            \"About section\"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/adityyaa-10/Desktop/NextJsXFramerMotion/sections/About.jsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9BYm91dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDc0M7QUFDUjtBQUNhO0FBQ2U7QUFFMUQsTUFBTUssUUFBUSxrQkFDWiw4REFBQ0M7UUFBUUMsV0FBVyxHQUFtQixPQUFoQk4sd0RBQWUsRUFBQzs7MEJBQ3JDLDhEQUFDUTtnQkFBSUYsV0FBVTs7Ozs7OzBCQUNmLDhEQUFDUCxxREFBVTtnQkFDVFUsVUFBVU4sMkRBQWdCQTtnQkFDMUJPLFNBQVE7Z0JBQ1JDLGFBQVk7Z0JBQ1pDLFVBQVU7b0JBQUVDLE1BQU0sS0FBSztvQkFBRUMsUUFBUTtnQkFBSztnQkFDdENSLFdBQVcsR0FBZ0NOLE9BQTdCQSwwREFBaUIsRUFBQyxhQUE2QixPQUFsQkEsMERBQWlCLEVBQUM7MEJBRTdELDRFQUFDQyxtREFBVUE7b0JBQUNnQixPQUFNO29CQUNsQkMsWUFBVzs7Ozs7Ozs7Ozs7WUFDQTs7Ozs7OztLQVpYZDtBQWlCTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZWN0aW9ucy9BYm91dC5qc3g/MjZjNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMnXG5pbXBvcnQgeyBUeXBpbmdUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBmYWRlSW4sIHN0YWdnZXJDb250YWluZXIgfSBmcm9tICcuLi91dGlscy9tb3Rpb24nXG5cbmNvbnN0IEFib3V0ID0gKCkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5wYWRkaW5nc30gcmVsYXRpdmUgei0xMGB9ID5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JhZGllbnQtMDIgei0wJyAvPlxuICAgIDxtb3Rpb24uZGl2XG4gICAgICB2YXJpYW50cz17c3RhZ2dlckNvbnRhaW5lcn1cbiAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgd2hpbGVJblZpZXc9XCJzaG93XCJcbiAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IGZhbHNlLCBhbW91bnQ6IDAuMjUgfX1cbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmlubmVyV2lkdGh9IG14LWF1dG8gJHtzdHlsZXMuZmxleENlbnRlcn0gZmxleC1jb2xgfVxuICAgID5cbiAgICAgIDxUeXBpbmdUZXh0IHRpdGxlPVwifCBBYm91dCBNZXRhdmVyc3VzXCJcbiAgICAgIHRleHRTdHlsZXM9XCJcIi8+XG4gICAgPC9tb3Rpb24uZGl2PlxuICAgIEFib3V0IHNlY3Rpb25cbiAgPC9zZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iXSwibmFtZXMiOlsibW90aW9uIiwic3R5bGVzIiwiVHlwaW5nVGV4dCIsImZhZGVJbiIsInN0YWdnZXJDb250YWluZXIiLCJBYm91dCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJwYWRkaW5ncyIsImRpdiIsInZhcmlhbnRzIiwiaW5pdGlhbCIsIndoaWxlSW5WaWV3Iiwidmlld3BvcnQiLCJvbmNlIiwiYW1vdW50IiwiaW5uZXJXaWR0aCIsImZsZXhDZW50ZXIiLCJ0aXRsZSIsInRleHRTdHlsZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/About.jsx\n"));

/***/ })

});