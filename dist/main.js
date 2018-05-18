(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
	__webpack_require__.e(/*! import() | lodash */ "modules/vendor").then(function() { var module = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }).then(function (lodash) {
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

},[["./src/index.js","runtime","modules/common"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmlsZXMvZGF0YS5jc3YiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpbGVzL2RhdGEueG1sIiwid2VicGFjazovLy8uL3NyYy9maWxlcy9pbWFnZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiaW1wb3J0ZWREYXRhIiwiY3N2RGF0YSIsInhtbERhdGEiLCJqc29uRGF0YSIsImltYWdlVVJMIiwiY3NzU3R5bGVzIiwibG9kYXNoIiwiZGVmYXVsdCIsInppcCIsIm1vZHVsZSIsImhvdCIsImFjY2VwdCIsImRpc3Bvc2UiLCJkYXRhIiwiZmlsZVVwZGF0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsa0JBQWtCLFNBQVMsU0FBUyxLQUFLLFNBQVMsdUZBQXVGLEVBQUUsS0FBSyxTQUFTLDZGQUE2RixHOzs7Ozs7Ozs7OztBQ0F0UCw0RDs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7OztBQUZBO0FBSUFBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFVO0FBQ3ZELGlXQUFrREMsSUFBbEQsQ0FBd0Qsa0JBQVE7QUFDL0RDLFVBQVFDLEdBQVIsQ0FBYSwwQkFBYjtBQUNBRCxVQUFRQyxHQUFSLENBQWEsb0JBQWtCQyxnQkFBL0I7QUFDQUYsVUFBUUMsR0FBUixDQUFhRSxjQUFiO0FBQ0FILFVBQVFDLEdBQVIsQ0FBYUcsY0FBYjtBQUNBSixVQUFRQyxHQUFSLENBQWFJLGNBQWI7QUFDQUwsVUFBUUMsR0FBUixDQUFhSyxlQUFiO0FBQ0FOLFVBQVFDLEdBQVIsQ0FBYU0sZ0JBQWI7QUFDQVAsVUFBUUMsR0FBUixDQUFhTyxPQUFPQyxPQUFQLENBQWVDLEdBQWYsQ0FBb0IsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFwQixFQUE0QixDQUFDLEtBQUQsRUFBUSxLQUFSLENBQTVCLEVBQTRDLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FBNUMsQ0FBYjtBQUNBLEVBVEQ7QUFVQSxDQVhEOztBQWNBO0FBQ0E7OztBQXhCQTtBQXlCQSxJQUFJLElBQUosRUFBaUI7O0FBR2hCO0FBQ0E7QUFDQUMsUUFBT0MsR0FBUCxDQUFXQyxNQUFYLENBQW1CLFlBQUksQ0FBRSxDQUF6QjtBQUNBO0FBQ0FGLFFBQU9DLEdBQVAsQ0FBV0UsT0FBWCxDQUFvQixnQkFBTTtBQUFFQyxPQUFLQyxXQUFMLEdBQW1CLENBQW5CO0FBQXNCLEVBQWxEO0FBQ0E7QUFDQSxLQUFJTCxPQUFPQyxHQUFQLENBQVdHLElBQVgsSUFBbUJKLE9BQU9DLEdBQVAsQ0FBV0csSUFBWCxDQUFnQkMsV0FBdkMsRUFBcUQ7QUFDcERoQixVQUFRQyxHQUFSLENBQWEsd0JBQWI7QUFDQTs7QUFHRDtBQUNBVSxRQUFPQyxHQUFQLENBQVdDLE1BQVgsQ0FBbUIsb0NBQW5CLEVBQWtDLDJEQUFJO0FBQ3JDYixVQUFRQyxHQUFSLENBQWEseUJBQWI7QUFDQSxFQUZEO0FBS0EsQzs7Ozs7Ozs7Ozs7QUMvQ0QsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gW1tcImlkXCIsXCJ0aXRsZVwiLFwiZXhjZXJwdFwiXSxbXCIxXCIsXCJsb3JlbSBpcHN1bVwiLFwiZGVmYXVsdCBwb3N0XCJdLFtcIjJcIixcImFib3V0XCIsXCJzb21lIGluZm8gYWJvdXQgdXNcIl0sW1wiM1wiLFwiY29udGFjdFwiLFwiZ2l2ZSB1cyBhIGJ1enpcIl0sW1wiXCJdXSIsIm1vZHVsZS5leHBvcnRzID0ge1wibm90ZXNcIjp7XCJub3RlXCI6W3tcIiRcIjp7XCJpZFwiOlwiMVwifSxcInRvXCI6W1wiTWFyeVwiXSxcImZyb21cIjpbXCJKb2huXCJdLFwiaGVhZGluZ1wiOltcIlJlbWluZGVyXCJdLFwiYm9keVwiOltcIkNhbGwgQ2luZHkgb24gVHVlc2RheVwiXX0se1wiJFwiOntcImlkXCI6XCIyXCJ9LFwidG9cIjpbXCJBbGV4XCJdLFwiZnJvbVwiOltcIk1hcmlhXCJdLFwiaGVhZGluZ1wiOltcIkludml0YXRpb25cIl0sXCJib2R5XCI6W1wiQmlydGhkYXkgcGFydHkgb24gRnJpZGF5XCJdfV19fSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9pbWFnZS5wbmdcIjsiLCJpbXBvcnQgaW1wb3J0ZWREYXRhIGZyb20gJy4vZXhwb3J0LmpzJztcblxuLy8gSW1wb3J0aW5nIG90aGVyIGZpbGUgdHlwZXNcbmltcG9ydCBjc3ZEYXRhIGZyb20gJy4vZmlsZXMvZGF0YS5jc3YnO1xuaW1wb3J0IHhtbERhdGEgZnJvbSAnLi9maWxlcy9kYXRhLnhtbCc7XG5pbXBvcnQganNvbkRhdGEgZnJvbSAnLi9maWxlcy9kYXRhLmpzb24nO1xuXG4vLyBDb3B5aW5nIGZpbGVzXG5pbXBvcnQgaW1hZ2VVUkwgZnJvbSAnLi9maWxlcy9pbWFnZS5wbmcnO1xuaW1wb3J0IGNzc1N0eWxlcyBmcm9tICcuL3Njc3Mvc3R5bGVzLnNjc3MnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXtcblx0aW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6ICdsb2Rhc2gnICovICdsb2Rhc2gnKS50aGVuKCBsb2Rhc2g9Pntcblx0XHRjb25zb2xlLmxvZyggJ0RvY3VtZW50IHJlYWR5OiBpbmRleC5qcycgKTtcblx0XHRjb25zb2xlLmxvZyggJ0ltcG9ydGVkIGRhdGE6ICcraW1wb3J0ZWREYXRhICk7XG5cdFx0Y29uc29sZS5sb2coIGNzdkRhdGEgKTtcblx0XHRjb25zb2xlLmxvZyggeG1sRGF0YSApO1xuXHRcdGNvbnNvbGUubG9nKCBqc29uRGF0YSApO1xuXHRcdGNvbnNvbGUubG9nKCBpbWFnZVVSTCApO1xuXHRcdGNvbnNvbGUubG9nKCBjc3NTdHlsZXMgKTtcblx0XHRjb25zb2xlLmxvZyggbG9kYXNoLmRlZmF1bHQuemlwKCBbMSwgMl0sIFsnb25lJywgJ3R3byddLCBbJ3VubycsICdkb3MnXSApICk7XG5cdH0pO1xufSk7XG5cblxuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pZiggbW9kdWxlLmhvdCApIHtcblx0XG5cdFxuXHQvLyBUbyBkZXRlY3Qgd2hlbiB0aGlzIHNhbWUgZmlsZSBpcyByZXBsYWNlZDpcblx0Ly8gMS4gcnVuIHRoZSAnYWNjZXB0JyBtZXRob2Qgd2l0aCBhbiBlbXB0eSBmdW5jdGlvblxuXHRtb2R1bGUuaG90LmFjY2VwdCggKCk9Pnt9ICk7XG5cdC8vIDIuIHJ1biB0aGUgJ2Rpc3Bvc2UnIG1ldGhvZCwgd2hpY2ggcnVucyByaWdodCBiZWZvcmUgdGhlIG1vZHVsZSBpcyByZWxvYWRlZCwgYW5kIHBhc3Mgb24gcGVyc2lzdGVudCBkYXRhIHRvIGJlIG1hZGUgYXZhaWxhYmxlIG9uIHRoZSBuZXh0IHJ1biAodGhlIG9iamVjdCBpcyByZXNldCBldmVyeSB0aW1lKVxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoIGRhdGE9PnsgZGF0YS5maWxlVXBkYXRlZCA9IDEgfSApO1xuXHQvLyAzLiBjaGVjayBmb3IgdGhlIGRhdGEgc2V0IG9uIHRoZSBwcmV2aW91cyBzZXQsIGlmIGl0IGV4aXN0cyBpdCBtZWFucyB0aGUgbW9kdWxlIGhhcyBqdXN0IGJlZW4gcmVsb2FkZWRcblx0aWYoIG1vZHVsZS5ob3QuZGF0YSAmJiBtb2R1bGUuaG90LmRhdGEuZmlsZVVwZGF0ZWQgKSB7XG5cdFx0Y29uc29sZS5sb2coICdGaWxlIHVwZGF0ZWQ6IGluZGV4LmpzJyApXG5cdH1cblx0XG5cdFxuXHQvLyBUbyBkZXRlY3Qgd2hlbiBvdGhlciBmaWxlcyBoYXZlIGJlZW4gcmVwbGFjZWQsIHNpbXBseSBjYWxsIHRoZSAnYWNjZXB0JyBtZXRob2QgcGFzc2luZyB0aGUgcGF0aCB0byB0aGUgZmlsZSBhcyB0aGUgZmlyc3QgYXJndW1lbnQgKG9ubHkgd29ya3MgZm9yIG1vZHVsZXMgbG9hZGVkIGJ5IHRoZSBjdXJyZW50IGZpbGUpOlxuXHRtb2R1bGUuaG90LmFjY2VwdCggJy4vZXhwb3J0LmpzJywgKCk9Pntcblx0XHRjb25zb2xlLmxvZyggJ0ZpbGUgdXBkYXRlZDogZXhwb3J0LmpzJyApO1xuXHR9KVxuXHRcblx0XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9