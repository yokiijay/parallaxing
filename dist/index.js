(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["parallaxing"] = factory();
	else
		root["parallaxing"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parallaxing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parallaxing.js */ "./src/parallaxing.js");

Object(_parallaxing_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./src/parallaxing.js":
/*!****************************!*\
  !*** ./src/parallaxing.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parallaxing; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function parallaxing() {
  var allParallaxParents = document.querySelectorAll('*[parallax]');
  var allParallax = [];
  /*------------------ Initial ------------------*/

  allParallaxParents.forEach(function (el) {
    var rect = el.getBoundingClientRect(); // 获取parent的边界

    var top = rect.top,
        height = rect.height; // 只需要拿到parent距离屏幕顶部距离 和 自身高度

    var MidY = top + height / 2; // parent的中线距离屏幕顶部距离

    var children = el.querySelectorAll('*[parallax-offset]');
    allParallax.push({
      parent: el,
      children: children
    });
    children.forEach(function (child) {
      var OFFSET = -Number(child.getAttribute('parallax-offset')); // 视差值

      var OUT = (Number(child.getAttribute('parallax-out')) || 0) / 100 * window.innerHeight; // 出点

      var IN = (Number(child.getAttribute('parallax-in')) || 100) / 100 * window.innerHeight; // 入点

      var Y = getTransform(child, 'translateY'),
          X = getTransform(child, 'translateX'),
          Rotation = getTransform(child, 'rotate'),
          Scale = getTransform(child, 'scale');
      child.Y = Y;
      child.X = X;
      child.Rotation = Rotation;
      child.Scale = Scale; // 改变child的transform

      child.style.transform = "translate(".concat(X, "px,").concat(Y + modulate(MidY, [OUT, IN], [-OFFSET / 2, OFFSET / 2]), "px) rotate(").concat(Rotation, "deg) scale(").concat(Scale || 1, ")");
    });
  });
  /*------------------ Listen ------------------*/

  window.addEventListener('scroll', childrenParallaxing);
  /*------------------ Functions ------------------*/

  function childrenParallaxing() {
    allParallax.forEach(function (object) {
      var parent = object.parent,
          children = object.children;
      var rect = parent.getBoundingClientRect(); // 获取parent的边界

      var top = rect.top,
          height = rect.height; // 只需要拿到parent距离屏幕顶部距离 和 自身高度

      var MidY = top + height / 2; // parent的中线距离屏幕顶部距离

      children.forEach(function (child) {
        var Y = child.Y,
            X = child.X,
            Rotation = child.Rotation,
            Scale = child.Scale;
        var OFFSET = -Number(child.getAttribute('parallax-offset')); // 视差值

        var OUT = (Number(child.getAttribute('parallax-out')) || 0) / 100 * window.innerHeight; // 出点

        var IN = (Number(child.getAttribute('parallax-in')) || 100) / 100 * window.innerHeight; // 入点
        // 改变child的transform

        child.style.transform = "translate(".concat(X, "px,").concat(Y + modulate(MidY, [OUT, IN], [-OFFSET / 2, OFFSET / 2]), "px) rotate(").concat(Rotation, "deg) scale(").concat(Scale || 1, ")");
      });
    });
  }
  /*------------------ Utils ------------------*/
  // 联动函数 例如modulate(50,[0,100],[500,1000]) => 750


  function modulate(i, _ref, _ref2) {
    var _ref3 = _slicedToArray(_ref, 2),
        a = _ref3[0],
        b = _ref3[1];

    var _ref4 = _slicedToArray(_ref2, 2),
        c = _ref4[0],
        d = _ref4[1];

    return (i - a) / (b - a) * (d - c) + c;
  } // 获取transform函数


  function getTransform(target, property) {
    var style = window.getComputedStyle(target, null);
    var str = style.getPropertyValue("-webkit-transform") || style.getPropertyValue("-moz-transform") || style.getPropertyValue("-ms-transform") || style.getPropertyValue("-o-transform") || style.getPropertyValue("transform") || "fail...";
    if (str === 'none') return 0;
    var values = str.split('(')[1];
    values = values.split('(')[0];
    values = values.split(',');

    var _ref5 = _toConsumableArray(values),
        a = _ref5[0],
        b = _ref5[1],
        c = _ref5[2],
        d = _ref5[3],
        e = _ref5[4],
        f = _ref5[5]; // scale


    var scale = Math.sqrt(a * a + b * b); // rotate

    var sin = b / scale;
    var rotate = Math.round(Math.asin(sin) * (180 / Math.PI)); // translateX

    var translateX = parseFloat(e); // translateY

    var translateY = parseFloat(f);
    var object = {
      scale: scale,
      rotate: rotate,
      translateX: translateX,
      translateY: translateY // if (!object[property]) return console.error('没有找到:' + property)

    };
    return {
      scale: scale,
      rotate: rotate,
      translateX: translateX,
      translateY: translateY
    }[property];
  }
}

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXJhbGxheGluZy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcGFyYWxsYXhpbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFyYWxsYXhpbmcvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGFyYWxsYXhpbmcvLi9zcmMvcGFyYWxsYXhpbmcuanMiXSwibmFtZXMiOlsiUGFyYWxsYXhpbmciLCJwYXJhbGxheGluZyIsImFsbFBhcmFsbGF4UGFyZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImFsbFBhcmFsbGF4IiwiZm9yRWFjaCIsImVsIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImhlaWdodCIsIk1pZFkiLCJjaGlsZHJlbiIsInB1c2giLCJwYXJlbnQiLCJjaGlsZCIsIk9GRlNFVCIsIk51bWJlciIsImdldEF0dHJpYnV0ZSIsIk9VVCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiSU4iLCJZIiwiZ2V0VHJhbnNmb3JtIiwiWCIsIlJvdGF0aW9uIiwiU2NhbGUiLCJzdHlsZSIsInRyYW5zZm9ybSIsIm1vZHVsYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoaWxkcmVuUGFyYWxsYXhpbmciLCJvYmplY3QiLCJpIiwiYSIsImIiLCJjIiwiZCIsInRhcmdldCIsInByb3BlcnR5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInN0ciIsImdldFByb3BlcnR5VmFsdWUiLCJ2YWx1ZXMiLCJzcGxpdCIsImUiLCJmIiwic2NhbGUiLCJNYXRoIiwic3FydCIsInNpbiIsInJvdGF0ZSIsInJvdW5kIiwiYXNpbiIsIlBJIiwidHJhbnNsYXRlWCIsInBhcnNlRmxvYXQiLCJ0cmFuc2xhdGVZIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7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LENBeUJ0Qzs7QUFDQSxRQUFNQyxVQUFVLEdBQUdDLFVBQVUsQ0FBQ1gsQ0FBRCxDQUE3QixDQTFCc0MsQ0E0QnRDOztBQUNBLFFBQU1ZLFVBQVUsR0FBR0QsVUFBVSxDQUFDVixDQUFELENBQTdCO0FBRUEsUUFBTWQsTUFBTSxHQUFHO0FBQ2JlLFdBQUssRUFBTEEsS0FEYTtBQUViSSxZQUFNLEVBQU5BLE1BRmE7QUFHYkksZ0JBQVUsRUFBVkEsVUFIYTtBQUliRSxnQkFBVSxFQUFWQSxVQUphLENBT2Y7O0FBUGUsS0FBZjtBQVFBLFdBQU87QUFDTFYsV0FBSyxFQUFMQSxLQURLO0FBRUxJLFlBQU0sRUFBTkEsTUFGSztBQUdMSSxnQkFBVSxFQUFWQSxVQUhLO0FBSUxFLGdCQUFVLEVBQVZBO0FBSkssTUFLTGxCLFFBTEssQ0FBUDtBQU1EO0FBQ0YsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInBhcmFsbGF4aW5nXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInBhcmFsbGF4aW5nXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBQYXJhbGxheGluZyBmcm9tICcuL3BhcmFsbGF4aW5nLmpzJ1xuXG5QYXJhbGxheGluZygpIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyYWxsYXhpbmcoKSB7XG4gIGNvbnN0IGFsbFBhcmFsbGF4UGFyZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJypbcGFyYWxsYXhdJylcbiAgbGV0IGFsbFBhcmFsbGF4ID0gW11cblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLSBJbml0aWFsIC0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIGFsbFBhcmFsbGF4UGFyZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgLy8g6I635Y+WcGFyZW5055qE6L6555WMXG4gICAgY29uc3QgeyB0b3AsIGhlaWdodCB9ID0gcmVjdCAvLyDlj6rpnIDopoHmi7/liLBwYXJlbnTot53nprvlsY/luZXpobbpg6jot53nprsg5ZKMIOiHqui6q+mrmOW6plxuICAgIGNvbnN0IE1pZFkgPSB0b3AgKyBoZWlnaHQgLyAyIC8vIHBhcmVudOeahOS4ree6v+i3neemu+Wxj+W5lemhtumDqOi3neemu1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZWwucXVlcnlTZWxlY3RvckFsbCgnKltwYXJhbGxheC1vZmZzZXRdJylcbiAgICBhbGxQYXJhbGxheC5wdXNoKHtcbiAgICAgIHBhcmVudDogZWwsXG4gICAgICBjaGlsZHJlblxuICAgIH0pXG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgIGNvbnN0IE9GRlNFVCA9IC1OdW1iZXIoY2hpbGQuZ2V0QXR0cmlidXRlKCdwYXJhbGxheC1vZmZzZXQnKSkgLy8g6KeG5beu5YC8XG4gICAgICBjb25zdCBPVVQgPSAoTnVtYmVyKGNoaWxkLmdldEF0dHJpYnV0ZSgncGFyYWxsYXgtb3V0JykpfHwwKSAvIDEwMCAqIHdpbmRvdy5pbm5lckhlaWdodCAvLyDlh7rngrlcbiAgICAgIGNvbnN0IElOID0gKE51bWJlcihjaGlsZC5nZXRBdHRyaWJ1dGUoJ3BhcmFsbGF4LWluJykpfHwxMDApIC8gMTAwICogd2luZG93LmlubmVySGVpZ2h0IC8vIOWFpeeCuVxuICAgICAgbGV0IFkgPSBnZXRUcmFuc2Zvcm0oY2hpbGQsICd0cmFuc2xhdGVZJyksXG4gICAgICAgICAgWCA9IGdldFRyYW5zZm9ybShjaGlsZCwgJ3RyYW5zbGF0ZVgnKSxcbiAgICAgICAgICBSb3RhdGlvbiA9IGdldFRyYW5zZm9ybShjaGlsZCwgJ3JvdGF0ZScpLFxuICAgICAgICAgIFNjYWxlID0gZ2V0VHJhbnNmb3JtKGNoaWxkLCAnc2NhbGUnKVxuICAgICAgXG4gICAgICBjaGlsZC5ZID0gWVxuICAgICAgY2hpbGQuWCA9IFhcbiAgICAgIGNoaWxkLlJvdGF0aW9uID0gUm90YXRpb25cbiAgICAgIGNoaWxkLlNjYWxlID0gU2NhbGVcbiAgICAgIC8vIOaUueWPmGNoaWxk55qEdHJhbnNmb3JtXG4gICAgICBjaGlsZC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7WH1weCwke1kgKyBtb2R1bGF0ZShNaWRZLCBbT1VULCBJTl0sIFstT0ZGU0VUIC8gMiwgT0ZGU0VUIC8gMl0pfXB4KSByb3RhdGUoJHtSb3RhdGlvbn1kZWcpIHNjYWxlKCR7U2NhbGV8fDF9KWBcbiAgICB9KVxuICB9KVxuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tIExpc3RlbiAtLS0tLS0tLS0tLS0tLS0tLS0qL1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hpbGRyZW5QYXJhbGxheGluZylcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLSBGdW5jdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgZnVuY3Rpb24gY2hpbGRyZW5QYXJhbGxheGluZygpIHtcbiAgICBhbGxQYXJhbGxheC5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICBjb25zdCB7IHBhcmVudCwgY2hpbGRyZW4gfSA9IG9iamVjdFxuICAgICAgY29uc3QgcmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSAvLyDojrflj5ZwYXJlbnTnmoTovrnnlYxcbiAgICAgIGNvbnN0IHsgdG9wLCBoZWlnaHQgfSA9IHJlY3QgLy8g5Y+q6ZyA6KaB5ou/5YiwcGFyZW506Led56a75bGP5bmV6aG26YOo6Led56a7IOWSjCDoh6rouqvpq5jluqZcbiAgICAgIGNvbnN0IE1pZFkgPSB0b3AgKyBoZWlnaHQgLyAyIC8vIHBhcmVudOeahOS4ree6v+i3neemu+Wxj+W5lemhtumDqOi3neemu1xuXG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgY29uc3QgeyBZLCBYLCBSb3RhdGlvbiwgU2NhbGUgfSA9IGNoaWxkXG4gICAgICAgIGNvbnN0IE9GRlNFVCA9IC1OdW1iZXIoY2hpbGQuZ2V0QXR0cmlidXRlKCdwYXJhbGxheC1vZmZzZXQnKSkgLy8g6KeG5beu5YC8XG4gICAgICAgIGNvbnN0IE9VVCA9IChOdW1iZXIoY2hpbGQuZ2V0QXR0cmlidXRlKCdwYXJhbGxheC1vdXQnKSl8fDApIC8gMTAwICogd2luZG93LmlubmVySGVpZ2h0IC8vIOWHuueCuVxuICAgICAgICBjb25zdCBJTiA9IChOdW1iZXIoY2hpbGQuZ2V0QXR0cmlidXRlKCdwYXJhbGxheC1pbicpKXx8MTAwKSAvIDEwMCAqIHdpbmRvdy5pbm5lckhlaWdodCAvLyDlhaXngrlcbiAgICAgICAgLy8g5pS55Y+YY2hpbGTnmoR0cmFuc2Zvcm1cbiAgICAgICAgY2hpbGQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke1h9cHgsJHtZICsgbW9kdWxhdGUoTWlkWSwgW09VVCwgSU5dLCBbLU9GRlNFVCAvIDIsIE9GRlNFVCAvIDJdKX1weCkgcm90YXRlKCR7Um90YXRpb259ZGVnKSBzY2FsZSgke1NjYWxlIHx8IDF9KWBcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tIFV0aWxzIC0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLy8g6IGU5Yqo5Ye95pWwIOS+i+Wmgm1vZHVsYXRlKDUwLFswLDEwMF0sWzUwMCwxMDAwXSkgPT4gNzUwXG4gIGZ1bmN0aW9uIG1vZHVsYXRlKGksIFthLCBiXSwgW2MsIGRdKSB7XG4gICAgcmV0dXJuIChpIC0gYSkgLyAoYiAtIGEpICogKGQgLSBjKSArIGNcbiAgfVxuXG4gIC8vIOiOt+WPlnRyYW5zZm9ybeWHveaVsFxuICBmdW5jdGlvbiBnZXRUcmFuc2Zvcm0odGFyZ2V0LCBwcm9wZXJ0eSkge1xuICAgIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0LCBudWxsKVxuICAgIGNvbnN0IHN0ciA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCItd2Via2l0LXRyYW5zZm9ybVwiKSB8fFxuICAgICAgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi1tb3otdHJhbnNmb3JtXCIpIHx8XG4gICAgICBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLW1zLXRyYW5zZm9ybVwiKSB8fFxuICAgICAgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi1vLXRyYW5zZm9ybVwiKSB8fFxuICAgICAgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcInRyYW5zZm9ybVwiKSB8fFxuICAgICAgXCJmYWlsLi4uXCI7XG5cbiAgICBpZiAoc3RyID09PSAnbm9uZScpIHJldHVybiAwXG5cblxuICAgIGxldCB2YWx1ZXMgPSBzdHIuc3BsaXQoJygnKVsxXVxuICAgIHZhbHVlcyA9IHZhbHVlcy5zcGxpdCgnKCcpWzBdXG4gICAgdmFsdWVzID0gdmFsdWVzLnNwbGl0KCcsJylcblxuICAgIGxldCBbYSwgYiwgYywgZCwgZSwgZl0gPSBbLi4udmFsdWVzXVxuXG4gICAgLy8gc2NhbGVcbiAgICBjb25zdCBzY2FsZSA9IE1hdGguc3FydChhICogYSArIGIgKiBiKVxuXG4gICAgLy8gcm90YXRlXG4gICAgY29uc3Qgc2luID0gYiAvIHNjYWxlXG4gICAgY29uc3Qgcm90YXRlID0gTWF0aC5yb3VuZChNYXRoLmFzaW4oc2luKSAqICgxODAgLyBNYXRoLlBJKSlcblxuICAgIC8vIHRyYW5zbGF0ZVhcbiAgICBjb25zdCB0cmFuc2xhdGVYID0gcGFyc2VGbG9hdChlKVxuXG4gICAgLy8gdHJhbnNsYXRlWVxuICAgIGNvbnN0IHRyYW5zbGF0ZVkgPSBwYXJzZUZsb2F0KGYpXG5cbiAgICBjb25zdCBvYmplY3QgPSB7XG4gICAgICBzY2FsZSxcbiAgICAgIHJvdGF0ZSxcbiAgICAgIHRyYW5zbGF0ZVgsXG4gICAgICB0cmFuc2xhdGVZXG4gICAgfVxuXG4gICAgLy8gaWYgKCFvYmplY3RbcHJvcGVydHldKSByZXR1cm4gY29uc29sZS5lcnJvcign5rKh5pyJ5om+5YiwOicgKyBwcm9wZXJ0eSlcbiAgICByZXR1cm4ge1xuICAgICAgc2NhbGUsXG4gICAgICByb3RhdGUsXG4gICAgICB0cmFuc2xhdGVYLFxuICAgICAgdHJhbnNsYXRlWVxuICAgIH1bcHJvcGVydHldXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9