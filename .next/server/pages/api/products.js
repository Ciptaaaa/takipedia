"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initMongoose\": () => (/* binding */ initMongoose)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//memuat data dari .env\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config();\nasync function initMongoose() {\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    }\n    return await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URL);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFDSjtBQUU1Qix1QkFBdUI7QUFDdkJDLG9EQUFhLEVBQUUsQ0FBQztBQUVULGVBQWVFLFlBQVksR0FBRztJQUNuQyxJQUFJSCx1RUFBOEIsS0FBSyxDQUFDLEVBQUU7UUFDeEMsT0FBT0Esb0VBQTZCLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsT0FBTyxNQUFNQSx1REFBZ0IsQ0FBQ1EsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9saWIvbW9uZ29vc2UuanM/MTYzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xyXG5cclxuLy9tZW11YXQgZGF0YSBkYXJpIC5lbnZcclxuZG90ZW52LmNvbmZpZygpO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRNb25nb29zZSgpIHtcclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID09PSAxKSB7XHJcbiAgICByZXR1cm4gbW9uZ29vc2UuY29ubmVjdGlvbi5hc1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMKTtcclxufVxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJkb3RlbnYiLCJjb25maWciLCJpbml0TW9uZ29vc2UiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImFzUHJvbWlzZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: String,\n    description: String,\n    price: Number,\n    category: String,\n    picture: String,\n    isSuggested: {\n        type: Boolean,\n        default: false\n    }\n});\nconst Product = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.Product || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Product\", ProductSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUQ7QUFDakQsTUFBTUcsYUFBYSxHQUFHLElBQUlELDRDQUFNLENBQUM7SUFDL0JFLElBQUksRUFBRUMsTUFBTTtJQUNaQyxXQUFXLEVBQUVELE1BQU07SUFDbkJFLEtBQUssRUFBRUMsTUFBTTtJQUNiQyxRQUFRLEVBQUVKLE1BQU07SUFDaEJLLE9BQU8sRUFBRUwsTUFBTTtJQUNmTSxXQUFXLEVBQUU7UUFBRUMsSUFBSSxFQUFFQyxPQUFPO1FBQUVDLE9BQU8sRUFBRSxLQUFLO0tBQUU7Q0FDL0MsQ0FBQztBQUVGLE1BQU1DLE9BQU8sR0FBR2QsNENBQU0sRUFBRWMsT0FBTyxJQUFJZiwrQ0FBSyxDQUFDLFNBQVMsRUFBRUcsYUFBYSxDQUFDO0FBRWxFLGlFQUFlWSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9tb2RlbHMvUHJvZHVjdC5qcz8wOWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vZGVsLCBtb2RlbHMsIFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5jb25zdCBQcm9kdWN0U2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgbmFtZTogU3RyaW5nLFxyXG4gIGRlc2NyaXB0aW9uOiBTdHJpbmcsXHJcbiAgcHJpY2U6IE51bWJlcixcclxuICBjYXRlZ29yeTogU3RyaW5nLFxyXG4gIHBpY3R1cmU6IFN0cmluZyxcclxuICBpc1N1Z2dlc3RlZDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG59KTtcclxuXHJcbmNvbnN0IFByb2R1Y3QgPSBtb2RlbHM/LlByb2R1Y3QgfHwgbW9kZWwoXCJQcm9kdWN0XCIsIFByb2R1Y3RTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcclxuIl0sIm5hbWVzIjpbIm1vZGVsIiwibW9kZWxzIiwiU2NoZW1hIiwiUHJvZHVjdFNjaGVtYSIsIm5hbWUiLCJTdHJpbmciLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiTnVtYmVyIiwiY2F0ZWdvcnkiLCJwaWN0dXJlIiwiaXNTdWdnZXN0ZWQiLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJQcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Product.js\n");

/***/ }),

/***/ "(api)/./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle),\n/* harmony export */   \"findAllProducts\": () => (/* binding */ findAllProducts)\n/* harmony export */ });\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Product */ \"(api)/./models/Product.js\");\n\n\nasync function findAllProducts() {\n    return _models_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find().exec();\n}\nasync function handle(req, res) {\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__.initMongoose)();\n    const { ids  } = req.query;\n    if (ids) {\n        const idsArray = ids.split(\",\");\n        res.json(await _models_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n            _id: {\n                $in: idsArray\n            }\n        }).exec());\n    } else {\n        res.json(await findAllProducts());\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrRDtBQUNQO0FBQ3BDLGVBQWVFLGVBQWUsR0FBRztJQUN0QyxPQUFPRCw0REFBWSxFQUFFLENBQUNHLElBQUksRUFBRSxDQUFDO0FBQy9CLENBQUM7QUFDYyxlQUFlQyxNQUFNLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzdDLE1BQU1QLDJEQUFZLEVBQUUsQ0FBQztJQUNyQixNQUFNLEVBQUVRLEdBQUcsR0FBRSxHQUFHRixHQUFHLENBQUNHLEtBQUs7SUFDekIsSUFBSUQsR0FBRyxFQUFFO1FBQ1AsTUFBTUUsUUFBUSxHQUFHRixHQUFHLENBQUNHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFFL0JKLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDLE1BQU1YLDREQUFZLENBQUM7WUFBRVksR0FBRyxFQUFFO2dCQUFFQyxHQUFHLEVBQUVKLFFBQVE7YUFBRTtTQUFFLENBQUMsQ0FBQ04sSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNsRSxPQUFPO1FBQ0xHLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDLE1BQU1WLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9wYWdlcy9hcGkvcHJvZHVjdHMuanM/NDljYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0TW9uZ29vc2UgfSBmcm9tIFwiLi4vLi4vbGliL21vbmdvb3NlXCI7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi8uLi9tb2RlbHMvUHJvZHVjdFwiO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluZEFsbFByb2R1Y3RzKCkge1xyXG4gIHJldHVybiBQcm9kdWN0LmZpbmQoKS5leGVjKCk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlKHJlcSwgcmVzKSB7XHJcbiAgYXdhaXQgaW5pdE1vbmdvb3NlKCk7XHJcbiAgY29uc3QgeyBpZHMgfSA9IHJlcS5xdWVyeTtcclxuICBpZiAoaWRzKSB7XHJcbiAgICBjb25zdCBpZHNBcnJheSA9IGlkcy5zcGxpdChcIixcIik7XHJcblxyXG4gICAgcmVzLmpzb24oYXdhaXQgUHJvZHVjdC5maW5kKHsgX2lkOiB7ICRpbjogaWRzQXJyYXkgfSB9KS5leGVjKCkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuanNvbihhd2FpdCBmaW5kQWxsUHJvZHVjdHMoKSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJpbml0TW9uZ29vc2UiLCJQcm9kdWN0IiwiZmluZEFsbFByb2R1Y3RzIiwiZmluZCIsImV4ZWMiLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJpZHMiLCJxdWVyeSIsImlkc0FycmF5Iiwic3BsaXQiLCJqc29uIiwiX2lkIiwiJGluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/products.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products.js"));
module.exports = __webpack_exports__;

})();