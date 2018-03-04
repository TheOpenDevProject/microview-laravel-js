/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************************************!*\
  !*** multi ./src/App.js ./src/Widget.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\microview-js\src\App.js */1);
module.exports = __webpack_require__(/*! D:\microview-js\src\Widget.js */2);


/***/ }),
/* 1 */
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar App = exports.App = function () {\n    function App() {\n        _classCallCheck(this, App);\n\n        this.widgets = [];\n    }\n\n    _createClass(App, [{\n        key: \"registerWidgets\",\n        value: function registerWidgets() {\n            var widgets = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n            this.widgets = widgets;\n            return this;\n        }\n    }, {\n        key: \"initializeApp\",\n        value: function initializeApp() {\n            var _iteratorNormalCompletion = true;\n            var _didIteratorError = false;\n            var _iteratorError = undefined;\n\n            try {\n                for (var _iterator = this.widgets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                    var widget = _step.value;\n\n                    widget.init();\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally {\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return) {\n                        _iterator.return();\n                    }\n                } finally {\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n\n            return this;\n        }\n    }]);\n\n    return App;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvQXBwLmpzPzE0YjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFwcHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMud2lkZ2V0cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmVnaXN0ZXJXaWRnZXRzKHdpZGdldHMgPSBbXSl7XHJcbiAgICAgICAgdGhpcy53aWRnZXRzID0gd2lkZ2V0cztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplQXBwKCl7XHJcbiAgICAgICAgZm9yKGxldCB3aWRnZXQgb2YgdGhpcy53aWRnZXRzKXtcclxuICAgICAgICAgICAgd2lkZ2V0LmluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL0FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***********************!*\
  !*** ./src/Widget.js ***!
  \***********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Widget = exports.Widget = function () {\n    function Widget(_ref) {\n        var _ref$globalWidget = _ref.globalWidget,\n            globalWidget = _ref$globalWidget === undefined ? false : _ref$globalWidget,\n            widgetRouteUrl = _ref.widgetRouteUrl,\n            _ref$widgetRouteUrlSt = _ref.widgetRouteUrlStipLevel,\n            widgetRouteUrlStipLevel = _ref$widgetRouteUrlSt === undefined ? 0 : _ref$widgetRouteUrlSt;\n\n        _classCallCheck(this, Widget);\n\n        this.globalWidget = globalWidget;\n        this.widgetRouteUrl = widgetRouteUrl;\n        this.widgetRouteUrlStipLevel = widgetRouteUrlStipLevel;\n    }\n\n    /** \r\n     * @description Widgets need to know if they should continue initialisation\r\n     * @private\r\n     */\n\n\n    _createClass(Widget, [{\n        key: '_getCurrentPageUrl',\n        value: function _getCurrentPageUrl() {\n            return window.location.pathname;\n        }\n\n        /**\r\n         * Very primitive URL fixer\r\n         * @param {String} url \r\n         */\n\n    }, {\n        key: '_stripUrl',\n        value: function _stripUrl(url) {\n            var _this = this;\n\n            if (this.widgetRouteUrlStipLevel !== 0) {\n                var strSplit = url.split(\"/\");\n                var ignoredSegments = strSplit.filter(function (o, i) {\n                    if (i <= _this.widgetRouteUrlStipLevel) {\n                        return o;\n                    }\n                });\n\n                //Deals with missing / on URL but we could probabably do this a lot cleaner\n                var finalUrl = '/' + ignoredSegments.join('/') + '/';\n                return finalUrl;\n            } else {\n                return url;\n            }\n        }\n        /** \r\n         * @description True|False for if we're correctly routed\r\n         * @type boolean\r\n         */\n\n    }, {\n        key: '_shouldWidgetInit',\n        value: function _shouldWidgetInit() {\n            if (this.globalWidget) {\n                return true;\n            } else if (this.widgetRouteUrl === this._stripUrl(this._getCurrentPageUrl())) {\n                return true;\n            } else {\n                return false;\n            }\n        }\n    }, {\n        key: 'bindClickEventById',\n        value: function bindClickEventById(_ref2) {\n            var elem = _ref2.elem,\n                callback = _ref2.callback;\n\n            var domElem = document.getElementById(elem);\n            if (domElem !== undefined) {\n                domElem.addEventListener('click', callback);\n            }\n        }\n    }, {\n        key: 'init',\n        value: function init() {}\n    }, {\n        key: 'initDebug',\n        value: function initDebug() {\n            console.log(this._shouldWidgetInit());\n        }\n    }]);\n\n    return Widget;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvV2lkZ2V0LmpzPzg2YjIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFdpZGdldCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgZ2xvYmFsV2lkZ2V0ID0gZmFsc2UsXHJcbiAgICAgICAgd2lkZ2V0Um91dGVVcmwsXHJcbiAgICAgICAgd2lkZ2V0Um91dGVVcmxTdGlwTGV2ZWwgPSAwXHJcbiAgICB9KSB7XHJcbiAgICAgICAgdGhpcy5nbG9iYWxXaWRnZXQgPSBnbG9iYWxXaWRnZXQ7XHJcbiAgICAgICAgdGhpcy53aWRnZXRSb3V0ZVVybCA9IHdpZGdldFJvdXRlVXJsO1xyXG4gICAgICAgIHRoaXMud2lkZ2V0Um91dGVVcmxTdGlwTGV2ZWwgPSB3aWRnZXRSb3V0ZVVybFN0aXBMZXZlbDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gV2lkZ2V0cyBuZWVkIHRvIGtub3cgaWYgdGhleSBzaG91bGQgY29udGludWUgaW5pdGlhbGlzYXRpb25cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9nZXRDdXJyZW50UGFnZVVybCgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmVyeSBwcmltaXRpdmUgVVJMIGZpeGVyXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFxyXG4gICAgICovXHJcbiAgICBfc3RyaXBVcmwodXJsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMud2lkZ2V0Um91dGVVcmxTdGlwTGV2ZWwgIT09IDApIHtcclxuICAgICAgICAgICAgbGV0IHN0clNwbGl0ID0gdXJsLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICAgICAgbGV0IGlnbm9yZWRTZWdtZW50cyA9IHN0clNwbGl0LmZpbHRlcigobywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPD0gdGhpcy53aWRnZXRSb3V0ZVVybFN0aXBMZXZlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vRGVhbHMgd2l0aCBtaXNzaW5nIC8gb24gVVJMIGJ1dCB3ZSBjb3VsZCBwcm9iYWJhYmx5IGRvIHRoaXMgYSBsb3QgY2xlYW5lclxyXG4gICAgICAgICAgICBsZXQgZmluYWxVcmwgPSAnLycgKyBpZ25vcmVkU2VnbWVudHMuam9pbignLycpICsgJy8nO1xyXG4gICAgICAgICAgICByZXR1cm4gZmluYWxVcmw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiogXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gVHJ1ZXxGYWxzZSBmb3IgaWYgd2UncmUgY29ycmVjdGx5IHJvdXRlZFxyXG4gICAgICogQHR5cGUgYm9vbGVhblxyXG4gICAgICovXHJcbiAgICBfc2hvdWxkV2lkZ2V0SW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5nbG9iYWxXaWRnZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLndpZGdldFJvdXRlVXJsID09PSB0aGlzLl9zdHJpcFVybCh0aGlzLl9nZXRDdXJyZW50UGFnZVVybCgpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBiaW5kQ2xpY2tFdmVudEJ5SWQoe2VsZW0sIGNhbGxiYWNrfSl7XHJcbiAgICAgICAgbGV0IGRvbUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtKTtcclxuICAgICAgICBpZihkb21FbGVtICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBkb21FbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGluaXREZWJ1ZygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zaG91bGRXaWRnZXRJbml0KCkpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9XaWRnZXQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7OztBQUlBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);