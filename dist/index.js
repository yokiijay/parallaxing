(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("parallaxing", [], factory);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* harmony default export */ __webpack_exports__["default"] = (function () {
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
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parallaxing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

Object(_parallaxing_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ })
/******/ ])["default"];
});