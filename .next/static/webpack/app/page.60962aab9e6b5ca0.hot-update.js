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

/***/ "./sections/Hero.jsx":
/*!***************************!*\
  !*** ./sections/Hero.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\n\nconst Hero = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].yPaddings, \" sm:pl-16 pl-6\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_2__.staggerContainer,\n            initial: \"hidden\",\n            whileInView: \"show\",\n            viewport: {\n                once: false,\n                amount: 0.25\n            },\n            className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].innerWidth, \" mx-auto flex flex-col\"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center flex-col relative z-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h1, {\n                        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__.textVariant)(1.1),\n                        className: _styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].heroHeading,\n                        children: \"Metaverse\"\n                    }, void 0, false, {\n                        fileName: \"/home/adityyaa-10/Desktop/NextJsXFramerMotion/sections/Hero.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__.textVariant)(1.2),\n                        className: true\n                    }, void 0, false, {\n                        fileName: \"/home/adityyaa-10/Desktop/NextJsXFramerMotion/sections/Hero.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/adityyaa-10/Desktop/NextJsXFramerMotion/sections/Hero.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/adityyaa-10/Desktop/NextJsXFramerMotion/sections/Hero.jsx\",\n            lineNumber: 8,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/adityyaa-10/Desktop/NextJsXFramerMotion/sections/Hero.jsx\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, undefined);\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9IZXJvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ3NDO0FBQ1I7QUFDMEM7QUFFeEUsTUFBTUssT0FBTyxrQkFDWCw4REFBQ0M7UUFBUUMsV0FBVyxHQUFvQixPQUFqQk4seURBQWdCLEVBQUM7a0JBQ3RDLDRFQUFDRCxxREFBVTtZQUNUVSxVQUFVUCwyREFBZ0JBO1lBQzFCUSxTQUFRO1lBQ1JDLGFBQVk7WUFDWkMsVUFBVTtnQkFBRUMsTUFBTSxLQUFLO2dCQUFFQyxRQUFRO1lBQUs7WUFDdENSLFdBQVcsR0FBcUIsT0FBbEJOLDBEQUFpQixFQUFDO3NCQUVoQyw0RUFBQ1E7Z0JBQUlGLFdBQVU7O2tDQUNiLDhEQUFDUCxvREFBUzt3QkFBQ1UsVUFBVU4sMERBQVdBLENBQUM7d0JBQU1HLFdBQVdOLDJEQUFrQjtrQ0FBRTs7Ozs7O2tDQUd0RSw4REFBQ0QscURBQVU7d0JBQUNVLFVBQVVOLDBEQUFXQSxDQUFDO3dCQUNsQ0csU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWRYRjtBQXNCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZWN0aW9ucy9IZXJvLmpzeD81OGM3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcydcbmltcG9ydCB7IHNsaWRlSW4sIHN0YWdnZXJDb250YWluZXIsIHRleHRWYXJpYW50IH0gZnJvbSAnLi4vdXRpbHMvbW90aW9uJ1xuXG5jb25zdCBIZXJvID0gKCkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy55UGFkZGluZ3N9IHNtOnBsLTE2IHBsLTZgfT5cbiAgICA8bW90aW9uLmRpdlxuICAgICAgdmFyaWFudHM9e3N0YWdnZXJDb250YWluZXJ9XG4gICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgIHdoaWxlSW5WaWV3PVwic2hvd1wiXG4gICAgICB2aWV3cG9ydD17eyBvbmNlOiBmYWxzZSwgYW1vdW50OiAwLjI1IH19XG4gICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbm5lcldpZHRofSBteC1hdXRvIGZsZXggZmxleC1jb2xgfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LWNvbCByZWxhdGl2ZSB6LTEwJz5cbiAgICAgICAgPG1vdGlvbi5oMSB2YXJpYW50cz17dGV4dFZhcmlhbnQoMS4xKX0gY2xhc3NOYW1lPXtzdHlsZXMuaGVyb0hlYWRpbmd9PlxuICAgICAgICAgIE1ldGF2ZXJzZVxuICAgICAgICA8L21vdGlvbi5oMT5cbiAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e3RleHRWYXJpYW50KDEuMil9XG4gICAgICAgIGNsYXNzTmFtZT5cblxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG4iXSwibmFtZXMiOlsibW90aW9uIiwic3R5bGVzIiwic2xpZGVJbiIsInN0YWdnZXJDb250YWluZXIiLCJ0ZXh0VmFyaWFudCIsIkhlcm8iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwieVBhZGRpbmdzIiwiZGl2IiwidmFyaWFudHMiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsIm9uY2UiLCJhbW91bnQiLCJpbm5lcldpZHRoIiwiaDEiLCJoZXJvSGVhZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sections/Hero.jsx\n"));

/***/ })

});