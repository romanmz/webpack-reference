(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/export.js":
/*!***********************!*\
  !*** ./src/export.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var myValue = 10;
exports.default = myValue;

/***/ }),

/***/ "./src/files/data.csv":
/*!****************************!*\
  !*** ./src/files/data.csv ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [["id","title","excerpt"],["1","lorem ipsum","default post"],["2","about","some info about us"],["3","contact","give us a buzz"],[""]]

/***/ }),

/***/ "./src/files/data.json":
/*!*****************************!*\
  !*** ./src/files/data.json ***!
  \*****************************/
/*! exports provided: package, desc, version, default */
/***/ (function(module) {

module.exports = {"package":"testing","desc":"lorem ipsum","version":"1.0.2"};

/***/ }),

/***/ "./src/files/data.xml":
/*!****************************!*\
  !*** ./src/files/data.xml ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"notes":{"note":[{"$":{"id":"1"},"to":["Mary"],"from":["John"],"heading":["Reminder"],"body":["Call Cindy on Tuesday"]},{"$":{"id":"2"},"to":["Alex"],"from":["Maria"],"heading":["Invitation"],"body":["Birthday party on Friday"]}]}}

/***/ }),

/***/ "./src/files/image.png":
/*!*****************************!*\
  !*** ./src/files/image.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/image.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _export = __webpack_require__(/*! ./export.js */ "./src/export.js");

var _export2 = _interopRequireDefault(_export);

var _data = __webpack_require__(/*! ./files/data.csv */ "./src/files/data.csv");

var _data2 = _interopRequireDefault(_data);

var _data3 = __webpack_require__(/*! ./files/data.xml */ "./src/files/data.xml");

var _data4 = _interopRequireDefault(_data3);

var _data5 = __webpack_require__(/*! ./files/data.json */ "./src/files/data.json");

var _data6 = _interopRequireDefault(_data5);

var _image = __webpack_require__(/*! ./files/image.png */ "./src/files/image.png");

var _image2 = _interopRequireDefault(_image);

var _styles = __webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copying files
document.addEventListener('DOMContentLoaded', function () {
	__webpack_require__.e(/*! import() | lodash */ "vendors~lodash").then(function() { var module = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }).then(function (lodash) {
		console.log('Document ready: index.js');
		console.log('Imported data: ' + _export2.default);
		console.log(_data2.default);
		console.log(_data4.default);
		console.log(_data6.default);
		console.log(_image2.default);
		console.log(_styles2.default);
		console.log(lodash.default.zip([1, 2], ['one', 'two'], ['uno', 'dos']));
	});
});

// Hot Module Replacement
// ------------------------------


// Importing other file types
if (true) {

	// To detect when this same file is replaced:
	// 1. run the 'accept' method with an empty function
	module.hot.accept(function () {});
	// 2. run the 'dispose' method, which runs right before the module is reloaded, and pass on persistent data to be made available on the next run (the object is reset every time)
	module.hot.dispose(function (data) {
		data.fileUpdated = 1;
	});
	// 3. check for the data set on the previous set, if it exists it means the module has just been reloaded
	if (module.hot.data && module.hot.data.fileUpdated) {
		console.log('File updated: index.js');
	}

	// To detect when other files have been replaced, simply call the 'accept' method passing the path to the file as the first argument (only works for modules loaded by the current file):
	module.hot.accept(/*! ./export.js */ "./src/export.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function () {
		console.log('File updated: export.js');
	})(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/index.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZXhwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9maWxlcy9kYXRhLmNzdiIsIndlYnBhY2s6Ly8vLi9zcmMvZmlsZXMvZGF0YS54bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbGVzL2ltYWdlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3M/YTBiYyJdLCJuYW1lcyI6WyJteVZhbHVlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJpbXBvcnRlZERhdGEiLCJjc3ZEYXRhIiwieG1sRGF0YSIsImpzb25EYXRhIiwiaW1hZ2VVUkwiLCJjc3NTdHlsZXMiLCJsb2Rhc2giLCJkZWZhdWx0IiwiemlwIiwibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwiZGlzcG9zZSIsImRhdGEiLCJmaWxlVXBkYXRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxFQUFkO2tCQUNlQSxPOzs7Ozs7Ozs7OztBQ0RmLHVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsa0JBQWtCLFNBQVMsU0FBUyxLQUFLLFNBQVMsdUZBQXVGLEVBQUUsS0FBSyxTQUFTLDZGQUE2RixHOzs7Ozs7Ozs7OztBQ0F0UCw0RDs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7OztBQUZBO0FBSUFDLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFVO0FBQ3ZELGlXQUFrREMsSUFBbEQsQ0FBd0Qsa0JBQVE7QUFDL0RDLFVBQVFDLEdBQVIsQ0FBYSwwQkFBYjtBQUNBRCxVQUFRQyxHQUFSLENBQWEsb0JBQWtCQyxnQkFBL0I7QUFDQUYsVUFBUUMsR0FBUixDQUFhRSxjQUFiO0FBQ0FILFVBQVFDLEdBQVIsQ0FBYUcsY0FBYjtBQUNBSixVQUFRQyxHQUFSLENBQWFJLGNBQWI7QUFDQUwsVUFBUUMsR0FBUixDQUFhSyxlQUFiO0FBQ0FOLFVBQVFDLEdBQVIsQ0FBYU0sZ0JBQWI7QUFDQVAsVUFBUUMsR0FBUixDQUFhTyxPQUFPQyxPQUFQLENBQWVDLEdBQWYsQ0FBb0IsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFwQixFQUE0QixDQUFDLEtBQUQsRUFBUSxLQUFSLENBQTVCLEVBQTRDLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FBNUMsQ0FBYjtBQUNBLEVBVEQ7QUFVQSxDQVhEOztBQWNBO0FBQ0E7OztBQXhCQTtBQXlCQSxJQUFJLElBQUosRUFBaUI7O0FBR2hCO0FBQ0E7QUFDQUMsUUFBT0MsR0FBUCxDQUFXQyxNQUFYLENBQW1CLFlBQUksQ0FBRSxDQUF6QjtBQUNBO0FBQ0FGLFFBQU9DLEdBQVAsQ0FBV0UsT0FBWCxDQUFvQixnQkFBTTtBQUFFQyxPQUFLQyxXQUFMLEdBQW1CLENBQW5CO0FBQXNCLEVBQWxEO0FBQ0E7QUFDQSxLQUFJTCxPQUFPQyxHQUFQLENBQVdHLElBQVgsSUFBbUJKLE9BQU9DLEdBQVAsQ0FBV0csSUFBWCxDQUFnQkMsV0FBdkMsRUFBcUQ7QUFDcERoQixVQUFRQyxHQUFSLENBQWEsd0JBQWI7QUFDQTs7QUFHRDtBQUNBVSxRQUFPQyxHQUFQLENBQVdDLE1BQVgsQ0FBbUIsb0NBQW5CLEVBQWtDLDJEQUFJO0FBQ3JDYixVQUFRQyxHQUFSLENBQWEseUJBQWI7QUFDQSxFQUZEO0FBS0EsQzs7Ozs7Ozs7Ozs7QUMvQ0QsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBteVZhbHVlID0gMTA7XG5leHBvcnQgZGVmYXVsdCBteVZhbHVlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBbW1wiaWRcIixcInRpdGxlXCIsXCJleGNlcnB0XCJdLFtcIjFcIixcImxvcmVtIGlwc3VtXCIsXCJkZWZhdWx0IHBvc3RcIl0sW1wiMlwiLFwiYWJvdXRcIixcInNvbWUgaW5mbyBhYm91dCB1c1wiXSxbXCIzXCIsXCJjb250YWN0XCIsXCJnaXZlIHVzIGEgYnV6elwiXSxbXCJcIl1dIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJub3Rlc1wiOntcIm5vdGVcIjpbe1wiJFwiOntcImlkXCI6XCIxXCJ9LFwidG9cIjpbXCJNYXJ5XCJdLFwiZnJvbVwiOltcIkpvaG5cIl0sXCJoZWFkaW5nXCI6W1wiUmVtaW5kZXJcIl0sXCJib2R5XCI6W1wiQ2FsbCBDaW5keSBvbiBUdWVzZGF5XCJdfSx7XCIkXCI6e1wiaWRcIjpcIjJcIn0sXCJ0b1wiOltcIkFsZXhcIl0sXCJmcm9tXCI6W1wiTWFyaWFcIl0sXCJoZWFkaW5nXCI6W1wiSW52aXRhdGlvblwiXSxcImJvZHlcIjpbXCJCaXJ0aGRheSBwYXJ0eSBvbiBGcmlkYXlcIl19XX19IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2ltYWdlLnBuZ1wiOyIsImltcG9ydCBpbXBvcnRlZERhdGEgZnJvbSAnLi9leHBvcnQuanMnO1xuXG4vLyBJbXBvcnRpbmcgb3RoZXIgZmlsZSB0eXBlc1xuaW1wb3J0IGNzdkRhdGEgZnJvbSAnLi9maWxlcy9kYXRhLmNzdic7XG5pbXBvcnQgeG1sRGF0YSBmcm9tICcuL2ZpbGVzL2RhdGEueG1sJztcbmltcG9ydCBqc29uRGF0YSBmcm9tICcuL2ZpbGVzL2RhdGEuanNvbic7XG5cbi8vIENvcHlpbmcgZmlsZXNcbmltcG9ydCBpbWFnZVVSTCBmcm9tICcuL2ZpbGVzL2ltYWdlLnBuZyc7XG5pbXBvcnQgY3NzU3R5bGVzIGZyb20gJy4vc2Nzcy9zdHlsZXMuc2Nzcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xuXHRpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ2xvZGFzaCcgKi8gJ2xvZGFzaCcpLnRoZW4oIGxvZGFzaD0+e1xuXHRcdGNvbnNvbGUubG9nKCAnRG9jdW1lbnQgcmVhZHk6IGluZGV4LmpzJyApO1xuXHRcdGNvbnNvbGUubG9nKCAnSW1wb3J0ZWQgZGF0YTogJytpbXBvcnRlZERhdGEgKTtcblx0XHRjb25zb2xlLmxvZyggY3N2RGF0YSApO1xuXHRcdGNvbnNvbGUubG9nKCB4bWxEYXRhICk7XG5cdFx0Y29uc29sZS5sb2coIGpzb25EYXRhICk7XG5cdFx0Y29uc29sZS5sb2coIGltYWdlVVJMICk7XG5cdFx0Y29uc29sZS5sb2coIGNzc1N0eWxlcyApO1xuXHRcdGNvbnNvbGUubG9nKCBsb2Rhc2guZGVmYXVsdC56aXAoIFsxLCAyXSwgWydvbmUnLCAndHdvJ10sIFsndW5vJywgJ2RvcyddICkgKTtcblx0fSk7XG59KTtcblxuXG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmlmKCBtb2R1bGUuaG90ICkge1xuXHRcblx0XG5cdC8vIFRvIGRldGVjdCB3aGVuIHRoaXMgc2FtZSBmaWxlIGlzIHJlcGxhY2VkOlxuXHQvLyAxLiBydW4gdGhlICdhY2NlcHQnIG1ldGhvZCB3aXRoIGFuIGVtcHR5IGZ1bmN0aW9uXG5cdG1vZHVsZS5ob3QuYWNjZXB0KCAoKT0+e30gKTtcblx0Ly8gMi4gcnVuIHRoZSAnZGlzcG9zZScgbWV0aG9kLCB3aGljaCBydW5zIHJpZ2h0IGJlZm9yZSB0aGUgbW9kdWxlIGlzIHJlbG9hZGVkLCBhbmQgcGFzcyBvbiBwZXJzaXN0ZW50IGRhdGEgdG8gYmUgbWFkZSBhdmFpbGFibGUgb24gdGhlIG5leHQgcnVuICh0aGUgb2JqZWN0IGlzIHJlc2V0IGV2ZXJ5IHRpbWUpXG5cdG1vZHVsZS5ob3QuZGlzcG9zZSggZGF0YT0+eyBkYXRhLmZpbGVVcGRhdGVkID0gMSB9ICk7XG5cdC8vIDMuIGNoZWNrIGZvciB0aGUgZGF0YSBzZXQgb24gdGhlIHByZXZpb3VzIHNldCwgaWYgaXQgZXhpc3RzIGl0IG1lYW5zIHRoZSBtb2R1bGUgaGFzIGp1c3QgYmVlbiByZWxvYWRlZFxuXHRpZiggbW9kdWxlLmhvdC5kYXRhICYmIG1vZHVsZS5ob3QuZGF0YS5maWxlVXBkYXRlZCApIHtcblx0XHRjb25zb2xlLmxvZyggJ0ZpbGUgdXBkYXRlZDogaW5kZXguanMnIClcblx0fVxuXHRcblx0XG5cdC8vIFRvIGRldGVjdCB3aGVuIG90aGVyIGZpbGVzIGhhdmUgYmVlbiByZXBsYWNlZCwgc2ltcGx5IGNhbGwgdGhlICdhY2NlcHQnIG1ldGhvZCBwYXNzaW5nIHRoZSBwYXRoIHRvIHRoZSBmaWxlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCAob25seSB3b3JrcyBmb3IgbW9kdWxlcyBsb2FkZWQgYnkgdGhlIGN1cnJlbnQgZmlsZSk6XG5cdG1vZHVsZS5ob3QuYWNjZXB0KCAnLi9leHBvcnQuanMnLCAoKT0+e1xuXHRcdGNvbnNvbGUubG9nKCAnRmlsZSB1cGRhdGVkOiBleHBvcnQuanMnICk7XG5cdH0pXG5cdFxuXHRcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=